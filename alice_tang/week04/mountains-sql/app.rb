require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"
# require "active-record"

def query_db(sql)
  # Create a connection to the database
  db = SQLite3::Database.new 'database.db'
  # Ask for information in a nicer format
  db.results_as_hash = true
  # Show the SQL that was generated in the server
  puts sql
  # Execute a line of SQL and store the result
  result = db.execute sql
  db.close

  result
end

get "/mountains/new" do
  erb :new
end

post "/mountains" do
  sql = "
    INSERT INTO mountains (
    name, description, country, elevation, image) VALUES (
    '#{ params["name"] }',
    '#{ params["description"] }',
    '#{ params["country"] }',
    #{ params["elevation"] },
    '#{ params["image"] }'
    );"

  query_db sql
  redirect "/mountains"
end

get "/mountains" do
  @mountains = query_db "SELECT id, name, country FROM mountains"
  erb :index
end

get "/mountains/:id" do
  id = params["id"]
  @mountain = query_db("SELECT * FROM mountains WHERE id = #{id};").first
  erb :show
end

get "/mountains/:id/edit" do
  id = params["id"]
  @mountain = query_db("SELECT * FROM mountains WHERE id = #{id};").first
  erb :edit
end

post "/mountains/:id" do

  sql = "UPDATE mountains SET
  name = '#{ params["name"] }',
  description = '#{ params["description"] }',
  country = '#{ params["country"] }',
  elevation = #{ params["elevation"] },
  image = '#{ params["image"] }'
  WHERE id = #{ params["id"]};"

  query_db sql
  redirect "/mountains/#{params["id"]}"
end

get "/mountains/:id/delete" do
  query_db "DELETE FROM mountains WHERE id = #{ params["id"]};"
  redirect "/mountains"
end
