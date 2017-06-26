class DirectorsController < ApplicationController

  def new
  end

  def create
    director = director.create({
      name: params["name"],
      dob: params["dob"],
      nationality: params["nationality"],
      period: params["period"],
      image: params["image"]
      })

      redirect_to "/directors/#{ director.id }" # go to show page
  end

  def edit
    @director = Director.find params["id"]
  end

  def update
    director = Director.find params["id"]

    director.update({
      name: params["name"],
      dob: params["dob"],
      nationality: params["nationality"],
      period: params["period"],
      image: params["image"]
      })

      redirect_to "/directors/#{ director.id }" # go to show page
  end

  def show
    @Director = Director.find params["id"]
  end

  def index
    @directors = Director.all
  end

  def destroy
    Director.find( params["id"]).destroy

    redirect_to "/directors"
  end

end
