class BeersController < ApplicationController

    def new
        @beer = Beer.new
        @breweries = Brewery.all
    end

    def create
        beer = Beer.create beer_params
        redirect_to "/beers"
    end

    def show
        @beer = Beer.find params["id"]
    end

    def index
        @beers = Beer.all
    end

    def edit
    end

    def update
        beer = Beer.update beer_params
        redirect_to "/beers"
    end

    def destroy
    end

    private
    def beer_params
    params.require(:beer).permit(:style, :tastingnotes, :image, :abv, :brewery_id)
    end
end
