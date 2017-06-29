class SecretController < ApplicationController

  def play


  end

  def playguess
    @secretnumber = rand(10)
    @guess = params["guess"]
    if @guess == @secretnumber
      @response = "Correct! You guessed right!"
    else
      @response = "Incorrect. You guessed wrong."
    end
  end

end
