class CatogeriesController < ApplicationController
  def new
    @catogery = Catogery.new
    @porduct = Product.all
    @sale = Sale.all
  end

  def create
    catogery = Catogery.create ({
      name: params["name"],
      number: params["number"]
      })
      redirect_to "/catogeries/#{ catogery.id}"  # go to show page
  end

  def edit
    @catogery = Catogery.find params["id"]
  end

  def update
    catogery = Catogery.find params["id"]
    catogery.update({
      name: params["name"],
      number: params["number"]
      })
      redirect_to "/catogeries/#{ catogery.id}"  # go to show page
  end

  def show
    @catogery = Catogery.find params["id"]
  end

  def index
    @catogeries = Catogery.all
  end

  def destroy
    Catogery.find( params["id"]).destory
    redirect_to "/catogeries"
  end
end
