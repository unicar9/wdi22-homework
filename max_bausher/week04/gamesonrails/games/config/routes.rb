Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#welcome'

  get 'games/magic' => 'games#magic'
  get 'games/secret' => 'games#secret'
  get 'games/rock_paper_scissors' => 'games#rps'




end
