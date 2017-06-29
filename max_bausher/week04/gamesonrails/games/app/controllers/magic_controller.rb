
class MagicController < ApplicationController

    def question
        # raise
        responses = ["highly likely", "definitely not", "100% YES!", "50/50"]

        @response = responses.sample
    end










end # GamesController Class
