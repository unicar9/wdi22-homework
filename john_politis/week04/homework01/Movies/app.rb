require "sinatra"
require "sinatra/reloader"
require "httparty"


get "/" do

  erb :search

end


post '/movie/search' do
  title = params["title"]
  @image_url = []
  @poster_url = "http://image.tmdb.org/t/p/w500"
  @api_key="24d863d54c86392e6e1df55b9a328755"
  @base_url="https://api.themoviedb.org/3"
  @qry = "#{@base_url}/search/movie?api_key=#{@api_key}&query=#{title}"

  response = HTTParty.get "#{@qry} #{title}"
  if response["results"].length > 0
    response["results"].each do |el|
      @image_url << "#{@poster_url}#{el['poster_path']}"
    end
  end

  erb :show_movies

end

