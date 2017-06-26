class GamesController < ApplicationController

  def home

  end

  def eightball

    @question = params["question"]
    if @question != ""
    @answerlist = ["Yes","Of course", "Hell yes!","Try again",'Sorry no','Definitely!','Oh Fuck off','Oh yes','No way','Stupid question','I guess so','Uh huh',"Nope"]
    @answer = @answerlist.sample
    end
    


  end

end
