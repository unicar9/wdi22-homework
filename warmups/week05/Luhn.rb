
# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn formula.
#
# BONUS:
#
# For an invalid number, add a check digit to make the number valid.
require 'pry'

class Luhn
  def initialize(number)
    @number = number
  end

  def luhnify
    numbers = []
    # # we want to work from the right  (to double eery second digit from teh RIGHTMOST digit passed in)
    # @number = @number.to_s.reverse
    # # prob best to do in arrat so we can play with each number seperately.
    # @number = @number.chars
    # # we need to multiply every 2nd digit by 2.
    # @number = @number.map(&:to_i)
    # # We want iterate over it start from the checksum. (will be index 0) need the index while iterating
    # @number.each_with_index do | digit, index |
    # end

    #super programming l33t skillz hacking chain methods
    @number.to_s.reverse.chars.map(&:to_i).each_with_index do |digit, index|
      #we want to miltiply every 2nd digit by 2. WE can call the .even?
      # if index.odd?
      #   value= digit * 2
      # else
      #   value = digit
      # end
      # p value
      value = index.even? ? digit  : digit *2

      # if value >9
      #   value = value -9
      # end
      value -= 9 if value > 9
      numbers << value
    end
      numbers.reverse
    end

    def valid
      checksum = luhnify.inject(0, :+)

      if checksum % 10 == 0
        puts "#{@number} is a vailid luhn number"
      else
        puts "#{@number} is not valid"
      end
    end
  end

  larry = Luhn.new(8763)

  binding.pry
