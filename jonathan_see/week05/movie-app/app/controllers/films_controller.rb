class FilmsController < ApplicationController

  def new
    @film = Film.new
    @directors = Directors.all
  end

  def create
    film = Film.create film_params
    redirect_to "/films/#{ film.id }"
  end

  def edit
    @film = Film.find params["id"]
    @directors = Director.all
  end

  def update
    Film.update film_params
    redirect_to "/films/#{ params["id"] }"
  end

  def index
    @films = Film.all
  end

  def show
    @film = Film.find params["id"]
  end

  def destroy
  end

  private
  def film_params
    params.require(:film).permit(:title, :country, :running_time, :release_date, :image, :director_id)
  end
  
end
