Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# root 'games#welcome'

get 'games/magic/:question' => 'magic#play'

get 'games/secret/select' => 'secret#select'
get 'games/secret/:guess' => 'secret#play'

get 'games/rock_paper_scissors/select' => 'rock_paper_scissors#play'
get 'games/rock_paper_scissors/:throw' => 'rock_paper_scissors#play'

end
