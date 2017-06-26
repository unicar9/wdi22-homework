

class RpsController < ApplicationController

    def play
        ai_moves = ["Rock", "Paper", "Scissors"]
        @ai_move = ai_moves.sample
        #
        # if params["win"] && params["win"] == @ai_move
        #     puts You won on a <%= params["win"] %>!</p>

        @player_move = params["win"]
        #
        if @player_move
            if @player_move == @ai_move
                @result = "draw"
            elsif @player_move == "Rock" && @ai_move == "Scissors"
                @result = "Rock crushes scissors, you win!"
            elsif @player_move == "Paper" && @ai_move == "Rock"
                @result = "Paper covers rock, you win!"
            elsif @player_move == "Scissors" && @ai_move == "Paper"
                @result = "Scissors cut paper, you win!"
            else
                @result = "Computer wins on #{@ai_move}"

            end
        end
        # end
    end #rps method end

end
