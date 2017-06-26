class RockPaperScissorsController < ApplicationController

def play
  @comp_choice = ["rock", "paper", "scissors"].sample
  # define win choices
end

end
