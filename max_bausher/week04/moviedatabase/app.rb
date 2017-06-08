require "sinatra"
require "sinatra/reloader"
require "pry"
require "HTTParty"

get "/" do
    erb :search
end

get "/show_results" do
    if params['keyword'].nil?
        return "Please supply a search string"
    end
    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params["keyword"]
    movie_data = HTTParty.get url
    # binding.pry
    @results = movie_data["results"]

    if movie_data["results"].length == 1
        redirect "https://www.themoviedb.org/movie/" + movie_data["results"][0]["id"].to_s
    else
        erb :show_results
    end
end

get "/movie_details/:id" do

    url = "https://api.themoviedb.org/3/movie/" + params["id"] + "?api_key=24d863d54c86392e6e1df55b9a328755"
    # binding.pry
    @details = HTTParty.get url
    erb :movie_details
end
