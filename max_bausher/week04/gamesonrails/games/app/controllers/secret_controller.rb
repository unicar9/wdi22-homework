
class SecretController < ApplicationController

    def guess
        @secret_number = Random.rand(1..10)

    end #secret method end

end
