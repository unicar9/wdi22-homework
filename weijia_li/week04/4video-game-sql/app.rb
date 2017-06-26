require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

require "active_record"

ActiveRecord::Base.establish_connection(

:adapter => 'sqlite3',
:database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new( STDERR )


after do
  ActiveRecord::Base.connection.close
end

class Video_game < ActiveRecord::Base
end

# binding.pry


# /animals?name=dog  =>  params["name"]  => "dog"

# /animals/25
# /animals/:id       => params["id"]  => 25

# POST to action="/animals" from a form
# /animals           => params["species"], params["legs"]


def query_db( sql )
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

get "/animals/:id/delete" do
  query_db "DELETE FROM animals WHERE id = #{params["id"]}"

  redirect "/animals"
end


# update the animal (from the form submit)
post "/animals/:id" do

  sql = "UPDATE animals SET
species = '#{ params["species"] }',
image = '#{ params["image"] }',
description = '#{ params["description"] }',
legs = #{ params["legs"] }
WHERE id = #{ params["id"] };"

  query_db sql

  redirect "/animals/#{ params["id"]}"

end

# show the edit form for an animal (UPDATE)
get "/animals/:id/edit" do

  id = params["id"]
  @animal = query_db "SELECT * FROM animals WHERE id = #{id};"
  @animal = @animal.first   # same as @animal[0], just get the first item


  erb :edit
end



# retrieve a specific animal (1 row) from the table by ID
get "/animals/:id" do
  id = params["id"]
  @animal = query_db "SELECT * FROM animals WHERE id = #{id};"

  @animal = @animal.first   # same as @animal[0], just get the first item

  erb :show
end


# get every row from the animals table
get "/animals" do
  @animals = query_db "SELECT * FROM animals;"
  erb :index
end

# show the New form for an Animal
get "/animals/new" do
  erb :new
end


post "/animals" do

  sql = "
INSERT INTO animals( species, image, description, legs ) VALUES(
  '#{ params["species"] }',
  '#{ params["image"] }',
  '#{ params["description"] }',
   #{ params["legs"] }
);"

  # # Create a connection to the database
  # db = SQLite3::Database.new 'database.db'
  # # Execute a line of SQL and store the result
  # result = db.execute sql

  query_db( sql )

  # "It worked! SQL: " + sql

  redirect "/animals"

end


get "/" do

  sql = "
INSERT INTO animals( species, image, description, legs ) VALUES(
  'Silent Hill: Shattered Memories',
  'http://s7d2.scene7.com/is/image/PetSmart/PB0101_HERO-Dog-TreatsRawhide-20160818?$sclp-banner-main_large$',
  'just a really doggy little pal',
  4
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
