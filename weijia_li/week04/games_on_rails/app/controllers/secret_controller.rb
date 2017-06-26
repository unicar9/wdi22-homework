class SecretController < ApplicationController
  def start
  end

  def play
    # raise
    @guess = params["guess"].to_i
    @secret = rand(1..10)
    if @guess == @secret
      @message = "You guessed it!"
    else
      @message = "Wrong number, next time!"
    end

  end
end
