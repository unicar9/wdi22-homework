Rails.application.routes.draw do
  get "/movies/new" => "movies#new"

  post "/movies" => "movies#create"

  get "/movies" => "movies#index"

  get "/movies/:id" => "movies#show"

  get "/movies/:id/edit" =>"movies#edit", as: 'movie'

  patch "/movies/:id/edit" => "movies#update"

  get "/movies/:id" => "movies#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #delete
  delete "/directors/:id" => "directors#destroy"

  # cerate
  get "/directors/new" => "directors#new"

  post "/directors" => "directors#create"

  get "/directors/:id/edit" =>"directors#edit"
  post "/directors/:id" =>"directors#update"

  get "/directors" => "directors#index"

  get "/directors/:id" => "directors#show"
end
