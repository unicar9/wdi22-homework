
require "sinatra" # gem
require "sinatra/reloader"
require "pry"
require "HTTParty"

#\ character to print
def html_header( colour )
   "<html>
  <head>
  </head>
  <body style=\"background-color: #{colour};\">
  <h1>Welcome to the general-purpose calculator</h1>"
  # $output_end = "</body></html>"
end


get "/show_form" do
  erb :show_form
end


get '/show_movie_results' do
  # binding.pry
  # @movies =['Alien','Aliens', 'Alein 3', 'Alien Resurrection','My Stepmother Is An Alien']

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query="
  url = url + params[ "movie_name" ]

  results = HTTParty.get( url )
  # binding.pry
  @movie_results = results["results"]

  erb :show_movie
end

get "/show_movie_details/:id" do
  url = "https://api.themoviedb.org/3/movie/" + params["id"] + "?api_key=24d863d54c86392e6e1df55b9a328755"
  @results = HTTParty.get (url)  #166426 only
  # binding.pry
  # @movies= results




  erb :movie_details
end

get "/hello" do
    #matches the localhost:4567/hello URL
  a = 10
  "Hello World!  a =  #{ a }"

end
# static route url is fixed just string
# url like files or folders
# not we go with static links

get "/colour/:col" do
  output = html_header params["col"]
  output += "Here is your fancy color #{ params["col"] }"
  output += $output_end
end

# get "/hello/:name" do #/hello/edgy /sth name force not only name  it diff
  # binding.pry # pry pause status waiting to look inside and show waiting
  # "Hello, #{ params["name"] }" #what in url see here
  #str
  # if params["name"] == "edgy" # set var to edgy always true
  #   str = "get lost jerk!"
  # else
  #   str = "hello, freind!"

  # # str
  # if params[ "name" ] == "edgy" # na +me
  #    "get lost jerk!"
  # else
  #    "hello, freind!"
  # end
    #return str any way no need for return
#
#   erb :hello
#
# end
# define dynamic route
# get "/hello/:first_name/:surname" do
#   "Good day to you, #{ params["first_name"] } #{ params["surname"] }" # conctination hashes
# end
# get "/hello/:first_name/:surname/:age" do # doesnt matter age not number
#   "Good day to you, #{ params["first_name"] } #{ params["surname"] } and you are #{params["age"]} years old." # conctination hashes
# end


#
# get "/add/:x/:y" do
#   result = params["x"].to_i + params["y"].to_i
#   "The sum of #{ params["x"]} and #{params["y"]} is #{ result }"
# end
# get "/add/:x/:y" do
#   result = params["x"].to_i * params["y"].to_i
#   "The product of #{ params["x"]} and #{params["y"]} is #{ result }"
# end

# get "/calc/:op/:x/:y" do
#   @x = params["x"].to_i
#   @y = params["y"].to_i
#   @op = params["op"]
#   # x + y
#   # x.+( y )
#   # x.+ ( y ) or x.* ( y ) etc
#   @result = @x.send(@op,@y)
#   # style for the page
#   # $output_start +"The result of #{x} #{op} #{y} = #{result}"
#   erb :calc #means"views/calc.erb"
# end
#.+ call methoed

# # run different code depent on line
# get "/good/bye" do
#   "<h1> Goodbye I guess </h1>"
# end
# get "/" do
#   "Hello World, but from the home page"
# end
