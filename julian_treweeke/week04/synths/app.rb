require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"
require "active_record"



# ActiveRecord::Base.establish_connection(
#   :adapter => 'sqlite3',
#   :database => 'database.db'
# )
#
# ActiveRecord::Base.logger = Logger.new( STDERR )
#
# after do
#   ActiveRecord::Base.connection.close
# end
#
# class Synth < ActiveRecord::Base
# end




# def query_db( sql )
#   db = SQLite3::Database.new 'database.db'
#
#   db.results_as_hash = true
#
#   puts sql
#
#   result = db.execute sql
#   db.close
#
#   result
# end













get '/' do
    erb :home
end


get '/synths' do
    # Create a new connection to the 'database.db' using SQLite3 as our database adaptor, and store this connection in a variable called 'db'
    db = SQLite3::Database.new("database.db")
    # We want the results to be returned as hashes, rather than as (the default) arrays.
    db.results_as_hash = true
    # Call the 'execute' method on our database connection, passing in the SQL query we want to execute (one which will return all the records in the 'animals' table), and store the response in an instance variable called '@all_animals', which will make this variable available in the view rendered by this route (the animals_index view - see below)
    @synths = db.execute "SELECT * FROM synths;"
    # Once a response has been received, close the connection to the database, since we can only have a limited number of concurrent database connections.
    db.close
    # Render the animals_index erb template (this will look for a file called animals_index.erb in our views folder)
    erb :index
end



get "/synths/new" do
   erb :new
end

get "/synths/:id" do
  id = params["id"]
  @synth = query_db "SELECT * FROM synths WHERE id == #{id};"

  @synth = @synth.first

   erb :show
end

get "/synths/:id/edit" do
  id = params["id"]
  @synth = query_db "SELECT * FROM synths WHERE id == #{id};"

  @synth = @synth.first

   erb :edit
end

get "/synths/:id/delete" do
  db = SQLite3::Database.new("database.db")

  db.results_as_hash = true

  db.execute("DELETE FROM synths WHERE id == #{params["id"]};")

  db.close

  redirect "/synths"
end
























post "/synths" do

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  sql = "
  INSERT INTO synths( name, image, brand, year) VALUES (
  '#{ params["name"]}',
  '#{ params["image"]}',
  '#{ params["brand"]}',
  #{ params["year"]}
  );"

  db.execute(sql)

  db.close

redirect "/synths"
end


# update synth
post "/synths/:id" do

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  sql =
  "UPDATE synths SET
  name = '#{params["name"]}',
  image = '#{params["image"]}',
  brand = '#{params["brand"]}',
  year = #{params["year"]}
  WHERE id = #{ params["id"]};"


  db.execute(sql)

  db.close

  redirect "/synths/#{params["id"]}"

end
