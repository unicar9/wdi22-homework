require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'


get "/ask_movie" do
# binding.pry
  erb :ask_movie


# ie show contents of ask_name file
end

get '/show_movie' do
  binding.pry
  movie = params["movie_name"].gsub(/\s/,'+')

  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + movie

mdata = HTTParty.get url



  @poster_url = "http://image.tmdb.org/t/p/w300"+ poster_end_path

  @title = mdata["results"][0]["title"]

  #
  @synopsis = mdata["results"][0]["overview"]

  alt_img_end = mdata["results"][0]["backdrop_path"]

  @alt_img_url = "http://image.tmdb.org/t/p/w300"+ alt_img_end


    @names = ['edgey', 'olivia', 'jack']
  erb :show_movie
end

# params["movie_name"]
# => "test test"
