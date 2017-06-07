require "sinatra"
require "sinatra/reloader"
require "pry"
require "HTTParty"

get "/" do
    erb :search
end

get "/movie_details/:id" do
    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + @results["id"]["overview"]
    erb :movie_details
end

get "/show_results" do
    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params["keyword"]
    @mdata = HTTParty.get url
    binding.pry
    @results = mdata["results"]

    # @result_count
    erb :show_results
end
