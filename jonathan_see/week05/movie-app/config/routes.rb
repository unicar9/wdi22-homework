Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # create
  get "/films/new" => "films/new"
  post "/films/" => "films#create"

  # read
  get "/films/" => "films#index"
  get "/films/show" => "films#show"

  # update
  get "/films/:id/edit" => "films#edit", as: "film" # need this "as" for the "form_for"
  patch "/films/:id/edit" => "films#update" # need this "patch" version for "form_for"

  # delete
  get "/films/:id" => "films#destroy"

########## directors

  # create
  get "/directors/new"  => "directors#new" # empty form for new artist
  post "/directors/" => "directors#create"  # handle submitted form and create new row in table

  # read
  get "/directors/" => "directors#index" # list of all directors in table
  get "/directors/:id" => "directors#show" # details for one artist

  # update
  get "/directors/:id/edit" => "directors#edit"
  post "/directors/:id" => "directors#update"

  # delete
  delete "/directors/:id" => "directors#destroy"
end
