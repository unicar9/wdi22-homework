# Title: Guess The Number
#
# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
# Sign up for free

#Activity
# puts "Gess the number: "
# num = gets.to_i
#
# random = rand(0...10)
# random = rand(0..10)
# puts random
#  if num == random
#    puts"congratulation! you gessed the number"
# else
#   puts "Gess the number again "
# end

# specification
#
# puts "Gess the number: "
# num = gets.to_i
#
# random = rand(0...10000)
# # random = rand(0..10000)
# puts random
#  if num < random
#    puts"Wrong, guess higher!"
# else
#   puts "Wrong, guess lower!"
# end

# puts "Welcome to the guessing game!"
# random_number = rand(6)
# puts "Pick any number between 0 and 5:"
# guess = gets.chomp.to_i
#
# until guess == random_number
# 	puts "You suck do it again!"
# 	guess = gets.chomp.to_i
# end
#
# puts " You Da Man Brah!"


# Activity
# puts "Gess the number: "
# num = gets.to_i
#
# random = rand(0...10)
# random = rand(0..10)
# puts random
# while num != random
#      puts "Gess the number again "
#      num = gets.to_i
# end
# puts " congratulation!"


# specification
#
puts "Gess the number: "
num = gets.chomp.to_i

random = rand(0...10000)
# random = rand(0..10000)
puts random
until  num ==random
  if num < random
   puts "Wrong, guess higher!"
  elsif
  puts "Wrong, guess lower!"
  end
  num = gets.chomp.to_i

end # until








# teachear solution

# conatanst not change during the program

MAX_VALUE = 10

secret_number = rand MAX_VALUE

puts "Guess a number between 0 and #{MAX_VALUE}: "

guess = gets.to_i

guess_count = 1
# while guess != secret_number
#begin
# this loop run at least once
    # MAX_VALUE = 10
    #
    # secret_number = rand MAX_VALUE
    #
    # puts "Guess a number between 0 and #{MAX_VALUE}: "
    #
    # guess = gets.to_i
    #
    # guess_count = 1
    # if guess > secret_number
    #   puts "Wrong! Gusse lower."
    # else
    #   puts "Wrong! Guess higher."
    # end
    # guess_count +=1
    # guess = guess.to_i
    # until guess == secret_number

#until
until guess == secret_number
  if guess > secret_number
    puts "Wrong! Gusse lower."
  else
    puts "Wrong! Guess higher."
  end
  guess_count +=1
  guess = guess.to_i

end # until

puts "congratulation! you gussed the number in #{guess_count} tries."
# count be if with count
