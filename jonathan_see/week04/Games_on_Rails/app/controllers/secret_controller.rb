class SecretController < ApplicationController

  def play
    # get a random number from 1-10
    @secret_number = rand(1..10)

    @chosen_number = params[:guess].to_i

    if @secret_number == @chosen_number
      @result = "correct!"
    else
      @result = "wrong!"
    end
  end
end
