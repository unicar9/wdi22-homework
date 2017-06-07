require "sinatra"
require "sinatra/reloader"
require "pry"
require "HTTParty"

get "/search" do
  erb :search
end

movieListData = []

get "/movie" do

  url ="https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params[ "movie_name"]

  mdata = HTTParty.get url

  #get total results
  totalresults= mdata[ "total_results" ]

    if totalresults == 0
      erb :sorry
      break
    end

    if totalresults == 1
      erb :one
    end




  @totalfound = mdata[ "total_results" ]

  @movietitle0 = mdata["results" ][0]["original_title"]
  @poster = mdata[ "results" ][0]["poster_path"]
  @poster0 = "http://image.tmdb.org/t/p/w300/#{@poster}"
  @id = mdata[ "results" ][0]["id"]
  @id0 ="https://www.themoviedb.org/movie/#{@id}"

  @movietitle1 = mdata["results" ][1]["original_title"]
  poster = mdata[ "results" ][1]["poster_path"]
  @poster1 = "http://image.tmdb.org/t/p/w300" + poster
  @id = mdata[ "results" ][1]["id"]
  @id1 ="https://www.themoviedb.org/movie/#{@id}"

  @movietitle2 = mdata["results" ][2]["original_title"]
  poster = mdata[ "results" ][2]["poster_path"]
  @poster2 = "http://image.tmdb.org/t/p/w300" + poster
  @id = mdata[ "results" ][2]["id"]
  @id2 ="https://www.themoviedb.org/movie/#{@id}"

  @movietitle3 = mdata["results" ][3]["original_title"]
  poster = mdata[ "results" ][3]["poster_path"]
  @poster3 = "http://image.tmdb.org/t/p/w300" + poster
  @id = mdata[ "results" ][3]["id"]
  @id3 ="https://www.themoviedb.org/movie/#{@id}"

  @movietitle4 = mdata["results" ][4]["original_title"]
  poster = mdata[ "results" ][4]["poster_path"]
  @poster4 = "http://image.tmdb.org/t/p/w300" + poster
  @id = mdata[ "results" ][4]["id"]
  @id4 ="https://www.themoviedb.org/movie/#{@id}"

  erb :movie
end
