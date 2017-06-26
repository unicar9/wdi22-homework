class SecretController < ApplicationController
  def play
    guess = params[:guess].to_i
    secret = Random.rand(9..10)
    @is_guess_right = false
    if guess == secret
      @is_guess_right = true
    end
    if @is_guess_right
      @output = "Congratulations. You guessed right, #{guess} is the secret number."
    else
      @output = "You guessed wrong, #{guess} is not the secret number"
    end
  end
end
