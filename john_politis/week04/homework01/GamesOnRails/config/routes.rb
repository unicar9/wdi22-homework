Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
root "pages#home"

get "/games/secret/:guess"  =>  "secret#play" 
get "/games/rock_paper_scissors/:throw"   =>  "rps#play"
get "/games/magic/" => 'magic#play'

end
