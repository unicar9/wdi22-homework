Rails.application.routes.draw do




  get '/directors/new' => 'directors#new'
  get '/directors' => 'directors#create'

  get '/directors/:id/edit' => 'directors#edit'
  post '/directors/:id' => 'directors#update'

  get '/directors' => 'directors#index'
  get '/directors/:id' => 'directors#show'

  get '/directors/:id' => 'directors#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
