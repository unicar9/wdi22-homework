class BreweriesController < ApplicationController

    def new
    end

    def create
        brewery = Brewery.create({
        name: params["name"],
        location: params["location"],
        image: params["image"],
        website: params["website"],
        philosophy: params["philosophy"]
        })

        redirect_to "/breweries/#{ brewery.id }"
    end

    def show
        @brewery = Brewery.find params["id"]
    end

    def index
        @breweries = Brewery.all
    end

    def edit
        @brewery = Brewery.find params["id"]
    end

    def update
        brewery = find params["id"]

        brewery.update({
        name: params["name"],
        location: params["location"],
        image: params["image"],
        website: params["website"],
        philosophy: params["philosophy"]
        })

        redirect_to "/breweries/#{ brewery.id }"
    end

    def destroy
        Brewery.find( params["id"] ).destroy
        redirect_to "/breweries"
    end
end
