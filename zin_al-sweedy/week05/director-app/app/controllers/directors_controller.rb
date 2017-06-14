class DirectorsController < ApplicationController
  def new

  end

  def create
    director = Director.create({
      name: params["name"],
      age:params["age"],
      period: params["period"],
      image: params["image"]
      })

      redirect_to "directors/#{ director.id}"
  end

  def edit
    @director = Director.find params["id"]
  end

  def update
    director = Director.find params["id"]
    director.update({
      name: params["name"],
      age: params["age"],
      period: params["period"],
      image: params["image"]
      })
      # raise "hell"
      redirect_to "/directors/#{ director.id }"
  end

  def index
    @directors = Director.all
  end

  def show
    @director = Director.find params["id"]
  end

  def destroy
    Director.find (params["id"]).destroy
    redirect_to "/directors"
  end

end
