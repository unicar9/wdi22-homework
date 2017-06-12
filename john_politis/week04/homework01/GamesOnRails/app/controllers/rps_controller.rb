class RpsController < ApplicationController

  def play

    wins = {
      "scissors"=>"paper",
      "paper"=> "rock",
      "rock"=>"scissors"
    }

    wins_arr = wins.to_a
    user_guess = params["throw"]      
    system_choice = wins_arr[rand(3)][0];

    if wins[user_guess] == system_choice

      @winner="You Win ::  #{user_guess} takes #{system_choice}"

    elsif wins[system_choice] == user_guess

      @winner="You Loose ::  #{system_choice} takes #{user_guess}"

    else
      @winner="Draw.."
    end

  end

end

