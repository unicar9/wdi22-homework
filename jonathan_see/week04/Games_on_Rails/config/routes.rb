Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'games#home'

  get '/games/magic/:question' => 'magic#play'

  get '/games/secret/:guess' => 'secret#play'

  get '/games/rock_paper_scissors/:throw' => 'rps#play'

end
