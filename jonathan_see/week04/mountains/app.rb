require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

def query_db ( sql )
  # Create a connection to the database
  db = SQLite3::Database.new 'database.db'
  # Ask for the information in a nicer format
  db.results_as_hash = true
  # Show the SQL that was generated in the server output
  puts sql
  # Execute a line of SQL and store the result
  result = db.execute sql
  db.close

  result
end

get "/mountains/:id/delete" do
    query_db "DELETE FROM mountains WHERE id = #{ params["id"] };"
    redirect "/mountains"
end

#update the animal (from the form submit)
post "/mountains/:id" do

  sql = "UPDATE mountains SET
name = '#{ params["name"]}',
image = '#{ params["image"]}',
location = '#{ params["location"]}',
elevation = '#{ params["elevation"]}';"

  query_db sql
  redirect "/mountains/#{ params["id"]}"
end

get "/mountains/:id/edit" do
  id = params["id"]
  @mountain = query_db "SELECT * FROM mountains WHERE id = #{id};"
  erb :edit
end

# retrive a specific mountain (1 row) from the table by ID
get "/mountains/:id" do
  id = params["id"]
  @mountain = query_db "SELECT * FROM mountains WHERE id = #{id};"
  @mountain = @mountain.first
  erb :show
end

# get every row from the mountains table
get "/mountains" do
  @mountains = query_db "SELECT * FROM mountains;"
  erb :index
end

# show the new form for a mountain
get "/mountains/new" do
  erb :new
end

post "/mountains/new" do
  sql = "
  INSERT INTO mountains ( name, image, location, elevation ) VALUES (
  '#{ params["name"]}',
  '#{ params["image"]}',
  '#{ params["location"]}',
  #{ params["elevation"]}
  );"
   query_db( sql )

   redirect "/mountains"
end

get "/" do

  sql = "
INSERT INTO mountains ( name, image, location, elevation ) VALUES (
  'Matterhorn',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1200px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg',
  'Switzerland',
  4478
);
  "

# Create a connection to the database
  db = SQLite3::Database.new 'database.db'

  # Ask for the information in a nicer format
  db.results_as_hash = true

  # Show the SQL that was generated in the logs
  puts sql

  # Execute a line of SQL and store the result
  result = db.execute sql

  p result

  erb :home
end
