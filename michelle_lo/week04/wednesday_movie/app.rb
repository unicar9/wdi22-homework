require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

#first page - ask for user input
get "/ask_movie" do
# binding.pry
  erb :ask_movie
# ie show contents of ask_name file
end

#with result of ask_movie_erb (i.e movie), extract the following using API
get '/show_movie' do
  # binding.pry
#get movie name and replace spaces with +
  movie = params["movie_name"].gsub(/\s/,'+')

#build URL for movie info
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + movie

@mdata = HTTParty.get url

#collection of data for display if there is only one result
# if @mdata["total_results"]>1
  # poster_end_path = @mdata["results"][0]["poster_path"]
  #
  # @poster_url = "http://image.tmdb.org/t/p/w300"+ poster_end_path
  #
  # @title = @mdata["results"][0]["title"]
  #
  # #
  # @synopsis = @mdata["results"][0]["overview"]
  #
  # alt_img_end = @mdata["results"][0]["backdrop_path"]
  #
  # @alt_img_url = "http://image.tmdb.org/t/p/w300"+ alt_img_end

  #collection of data for display if there is only one result

# else

  @multiple_results = @mdata["results"].each do |i|
    i
  end
  binding.pry
# end


erb :show_movie

end

# params["movie_name"]
# => "test test"
