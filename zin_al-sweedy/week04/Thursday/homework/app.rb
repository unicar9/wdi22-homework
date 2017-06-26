require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"
# require "active_record"

def query_db ( sql )
  # Create a connection to the database
db = SQLite3::Database.new 'database.db'

# Ask for the information in a nicer format
db.results_as_hash = true # give the values and keys

# Show the SQL that was generated in the logs
puts sql

# Execute a line of SQL and store the result
  result = db.execute sql
  db.close
  result
end

#delete the book ( from the sumbit)
get "/books/:id/delete" do
  query_db"DELETE FROM books WHERE id = #{params["id"]};"
  redirect "/books"
end


# update the book ( from the sumbit)
post "/books/:id" do

  # binding.pry

  sql = "UPDATE books SET
  name = '#{params["name"]}',
  author = '#{params["author"]}',
  title = '#{params["title"]}',
  price = #{params["price"]}
  WHERE id = #{params["id"]};"

  query_db sql
  redirect "/books/#{params["id"]}"
end
# show the edit from book (UPDATE)



get "/books/:id/edit" do
  id= params["id"]
  @book = query_db "SELECT * FROM books WHERE id =#{id};"
  @book = @book.first
  erb :edit
end



# befor get id put like this order
get "/books/new" do
  erb :new
end

# retrieve a specific book (1 row ) from the tables by ID
get "/books/:id" do
  id = params["id"]
  @book = query_db "SELECT * FROM books WHERE id = #{id};"
  @book = @book.first
  erb :show
end
# we can select from the table filed 1,filed2 from list number of fields
get "/books" do
  @books = query_db "SELECT * From books;"
  erb :index
end


post "/books" do
  sql = "INSERT INTO books (name, author, title, price) VALUES('#{params["name"]}',
  '#{params["author"]}',
  '#{params["title"]}',
  #{params["price"]}
  );"
  query_db( sql)
  redirect "/books"
end

get "/" do
  sql = "
  INSERT INTO books (name, author, title, price) VALUES (
  'Entertainment',
  'blah blah blah',
  'The Ring',
  40
  );"
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
