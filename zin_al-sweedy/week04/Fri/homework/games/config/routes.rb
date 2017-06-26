Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/games/magic/:question' => 'magic#play'
  get '/games/secret/:guess' => 'secret#play'
  # get '/games/secret/:guess' => 'game/secret'
  get '/games/rock_paper_scissors/:throw' => 'rock_paper_scissors#play'
end


# STATIC ROUTES
  # request_type route => controller#action
