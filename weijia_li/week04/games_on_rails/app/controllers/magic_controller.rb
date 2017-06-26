class MagicController < ApplicationController
  def start

  end

  def play
    answers = {
      "mediumseagreen" => ["It is certain",
                  "It is decidedly so",
                  "Without a doubt",
                  "Yes definitely"],
      "sandybrown" => ["Ask again later",
                  "Better not tell you now",
                  "Cannot predict now"],
      "firebrick" => ["Don't count on it",
                 "My reply is no",
                 "My sources say no"]
    }

   @color = ["mediumseagreen", "sandybrown", "firebrick"].sample
   @answer = answers[@color].sample
   @question = params['question']
 end

end
