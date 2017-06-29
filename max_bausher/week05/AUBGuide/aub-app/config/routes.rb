Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

########### Brewery routes
    get '/breweries/new' => 'breweries#new'
    post '/breweries' => 'breweries#create'

    get '/breweries/:id/edit' => 'breweries#edit'
    post '/breweries/:id' => 'breweries#update'

    get '/breweries' => 'breweries#index'
    get '/breweries/:id' => 'breweries#show'

    delete '/breweries/:id' => 'breweries#destroy'


########### Beer routes

    get '/beers/new' => 'beers#new'
    post '/beers' => 'beers#create'

    get '/beers/:id/edit' => 'beers#edit'
    patch '/beers/:id' => 'beers#update', as: 'beer'

    get '/beers' => 'beers#index'
    get '/beers/:id' => 'beers#show'

    delete '/beers/:id' => 'beers#destroy'

end
