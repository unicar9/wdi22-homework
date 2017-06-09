Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#welcome'

  get '/games/magic/:question' => 'magic#question'
  get '/games/secret/:guess' => 'secret#guess'
  get '/games/rock_paper_scissors' => 'rps#play'




end
