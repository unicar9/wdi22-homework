require "sinatra"
require "sinatra/reloader"
require "pry"

get "/" do
  erb :search_movie
end

get "/movie_details/:id" do
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=/movie/" + params[ "id" ]
  mdata = HTTParty.get url
  @movies = mdata["results"]
  erb :movie_details
end


get "/show_results" do
   url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params[ "first_name" ]
   mdata = HTTParty.get url
   result_count = mdata ["total_results"]

   erb :show_results
end
