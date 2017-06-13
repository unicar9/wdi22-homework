Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'games#welcome'

  get '/games/' => 'games#welcome'

  get '/games/magic/' => 'magic#question'
  get '/games/magic/:question' => 'magic#question'

  get '/games/secret/' => 'secret#guess'
  get '/games/secret/:guess' => 'secret#guess'

  get '/games/rock_paper_scissors/' => 'rps#play'
  get '/games/rock_paper_scissors/:win' => 'rps#play'


end
