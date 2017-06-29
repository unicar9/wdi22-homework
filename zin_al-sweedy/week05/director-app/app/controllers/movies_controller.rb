class MoviesController < ApplicationController
  def new
    @director = Director.new
    @movie = Movie.available
  end

  def create
    movie = Movie.create movie_params
    redirect_to "/movies/#{movie.id}"
  end

  def edit
    @movie =  Movie.find params["id"]
    @directors =  Director.all
  end

  def update
    movie =  Movie.find params["id"]
    movie.update movie_params
    redirect_to "/movies/#{params["id"]}"
  end

  def show
    @movie = Movie.find params["id"]
  end

  def index
      @movies = Movie.all
  end

  def destroy
      Movie.find( params["id"] ).destroy
  end
  private
  def movie_params
    params.require(:movie).permit(:title, :year,:director_id)
  end

end
