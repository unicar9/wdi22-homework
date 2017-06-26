class RockPaperScissorsController < ApplicationController
  def play
    @throw = params["throw"]
    shapes = %w{rock paper scissors}
    @shape = shapes.sample

    throw_index = shapes.index(@throw)
    shape_index = shapes.index(@shape)

    case throw_index - shape_index
    when 1, -2
      @result = "win"
    when 0
      @result = "tie"
    when 2,-1
      @result = "lose"
    end # case
    @result
  end # action

  def select
  end

end # class
