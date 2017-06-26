Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'games#welcome'

  # 2 pages for magic game
  get '/games/magic' => 'magic#start'
  get '/games/magic/play' => 'magic#play'

  get '/games/secret' => 'secret#start'
  get '/games/secret/play' => 'secret#play'

  get '/games/rock_paper_scissors' => 'rps#start'
  get '/games/rock_paper_scissors/:throw' => 'rps#play'

end
