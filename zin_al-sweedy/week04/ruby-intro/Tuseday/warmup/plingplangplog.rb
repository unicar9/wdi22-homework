# Pling Plang Plong
#
# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'. If the number contains 5 as a factor, output 'Plang'. If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the string representation of the number itself.
#
# E.g.
#
# The number 28 is divisible by 7, so...
#
# # => "Plong"
# The number 1755 is divisible by 3 and 5, so...
#
# # => "PlingPlang"
# The number 34 is not divisible by 3,5 or 7, so...
#
# # => "34"

# puts "enter the number: "
#
# num = gets.to_i
# if num % 7 == 0
#   puts "Plong"
# elsif num % 3 == 0
#   puts "Pling"
# elsif num % 3 == 0 && num % 5 == 0
#   puts "PlingPlang"
# elsif num % 3 != 0 || num % 5 != 0 || num % 7 != 0
#   puts "# => \"#{num}\""
# end

# {} these bractes already turn the integer into number
# 0r
# puts "enter the number: "
# divisible_flag = false
# num = gets.to_i
# resluts = ""
# if num % 3 == 0
#  resluts += "Pling"
#  divisible_flag = true
# end
#  # puts results
# if num % 5 ==0
#   resluts += "Plang"
#   divisible_flag = true
# end
#   # puts results
# if num % 7 == 0
#   resluts += "Plong"
#   divisible_flag = true
#   # puts results
# end
# if divisible_flag == false
#   results = num
# end
# # elsif num % 3 != 0 || num % 5 != 0 || num % 7 != 0
# puts "# => \"#{resluts}\""
# \" check

# other solution teacher

def raindrops( number )
  str = ""
  # if the number contanis 3 as a factor add to answer Pling

  # if number % 3 == 0
  #   str += "Pling"
  # end
  # str # implicit return last thing return it and spit it out smart return the last line
  # different wrinting
  # str += "Pling" if number % 3 == 0 # could do it in one line if at the end no need to end avoid it at the
  # end if the line is long enough and we cant see it
  str += "Pling" if number % 3 == 0
  str += "Plang" if number % 5 == 0
  str += "Plong" if number % 7 == 0
  # if str == "" cool way to do it
  # p str #print p or puts
  # p number
  return str unless str.empty? # if not empty opposit if unless if ! not
  #? is a methoed return true or false always
  # return to return the method  early
  # else return the number
  number #
end

# puts raindrops 9
  # puts raindrops 10
  p raindrops 105 # implicit return
#  didnt call our function until now it is wrong in running
