Rails.application.routes.draw do
  #catogery
  #create
  get "/catogeries/new"  => "catogeries#new"
  post "/catogeries" => "catogeries#create"
  #read
  get "/catogeries" => "catogeries#index"
  get "/catogeries/:id"  => "catogeries#show"
  #update
  get "/catogeries/:id/edit" => "catogeries#edit"
  # , as: 'catogeries'
  #post
  patch "/catogeries/:id" => "catogeries#update"

  # get "/catogeries/update"

  #delete
  delete "/catogeries/:id" => "catogeries#destroy"
  ######################################
  #sales
  #create
  get "/sales/new" => "sales#new"
  post"/sales"  => "sales#create"
  #read
  get "/sales"  => "create#index"
  get "/sales/:id"  => "sales#show"
  #update
  get "/sales/:id/edit"  => "sales#edit"
  # as: 'sale'
  patch "/sales/id"  => "sales#update"
  #delete
  delete "/sales/:id"  => "sales#destroy"
  ################################
  #product
  #create
  get "/products/new"  => "products#new"
  get "/products"  => "products#create"
  # get "/products/edit"  =>
  #read
  get "/products"  => "products#index"
  get "/products/:id"  =>"products#show"
  # update
  get "/products/id/edit"  => "products#edit"
  # , as: 'product'
  patch "/products/id"  => "products#update"
  #delete
  delete "/products/:id"  => "products#destroy"

  # get "products/new"
  #
  # get "products/create"
  #
  # get "products/edit"
  #
  # get "products/update"
  #
  # get "products/show"
  #
  # get "products/index"
  #
  # get "products/destroy"
  resources  :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
