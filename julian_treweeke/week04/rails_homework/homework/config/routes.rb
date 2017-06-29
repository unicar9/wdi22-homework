Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  root "games#welcome"

  get '/games' => 'games#home'
  get '/eightball' => 'games#eightball'
  get '/eightball/:question' => 'games#eightball'
  get '/secret' => 'secret#play'
  get '/secret/playguess' => 'secret#playguess'
  get '/rock' => 'rock#rockpaper'
  get '/rock/play' => 'rock#play'

  # get '/rock/:choice' => 'rock#play'
  # post '/rock/:choice' => 'rock#play'
#

  # get '/secret/:guess' => 'secret#secretplay'

end
