class RpsController < ApplicationController
  def start
  end

  def play
    @computer = ["rock", "paper", "scissors"].sample
    @user = params["throw"]

    results = {
      "rock" => {"rock" => "draw", "paper" => "lose", "scissors" => "win"},
      "paper" => {"rock" => "win", "paper" => "draw", "scissors" => "lose"},
      "scissors" => {"rock" => "lose", "paper" => "win", "scissors" => "draw"}
    }

    result = results[@user][@computer]
    result == "draw"? @message = "It's a draw" : @message = "You #{result}"
  end
end
