class SecretController < ApplicationController
  
  def play   

    @user_guess = params["guess"].to_i
    @system_guess = (rand * 10).floor
    @result = "Wrong Guess..!!"
    
    if (@user_guess == @system_guess )
        @result = "You Guessed it..!!"     
    end
  end

end