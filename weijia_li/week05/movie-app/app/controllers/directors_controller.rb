class DirectorsController < ApplicationController
  def new
  end

  def create
    director = Director.create({
      name: params['name'],
      dob: params['dob'],
      nationality: params['nationality'],
      image: params['image']
    })

    redirect_to "/directors/#{director.id}"
  end

  def edit
    @director = Director.find params['id']
  end

  def update
    director = Director.find params["id"]

    director.update({
      name: params["name"],
      dob: params["dob"],
      nationality: params["nationality"],
      image: params["image"]
    })

    redirect_to  "/directors/#{ director.id }"
  end

  def show
    @director = Director.all
  end

  def index
    @director = Director.find params['id']
  end

  def destroy
    Director.find(params['id']).destroy
    redirect_to '/directors'
  end
end
