class MagicController < ApplicationController

  def play
    answers = ["yes", "no", "maybe", "what do you think?"]
    @answer = answers.sample
    @question = params["question"]
  end

end
