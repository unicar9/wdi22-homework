require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"

get "/" do
  "Hello World"
end

get "/ask_name" do
  erb :ask_name
end

get "/show_name" do
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params["movie_name"]
  @mdata = HTTParty.get url

  # @title = mdata["results"][0]["title"]
  # id = mdata["results"][0]["id"]
  # @movie_url = "https://www.themoviedb.org/movie/" + id.to_s
  # poster = mdata["results"][0]["poster_path"]
  # @poster_url = "http://image.tmdb.org/t/p/w300" + poster
  # @movies = mdata["results"][0..9]
  # binding.pry

  erb :show_name
end
