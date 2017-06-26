class RockController < ApplicationController

  def rockpaper

  end




  def play

  moves = ['SCISSORS','PAPER','ROCK']
  @computer = moves.sample.upcase
  @chosen = params["choice"].upcase

  @computerpic = '/assets/' + @computer + 'computer.png'
  @playpic = '/assets/' + @chosen + '.png'


  if @chosen == @computer
     @result = "Draw! Try again"
   elsif @chosen == 'PAPER' and @computer == 'SCISSORS'
     @result = "You loose!"
   elsif @chosen == 'SCISSORS' and @computer == 'PAPER'
     @result = "You win!"
   elsif @chosen == 'SCISSORS' and @computer == 'ROCK'
     @result = "You loose!"
   elsif @chosen == 'ROCK' and @computer == 'SCISSORS'
     @result = "You win!"
   elsif @chosen == 'PAPER' and @computer == 'ROCK'
     @result = "You win!"
   elsif @chosen == 'ROCK' and @computer == 'PAPER'
     @result = "You loose!"
   end

  end




end
