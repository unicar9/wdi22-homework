
def raindrops( number )

  # We need to initialise our string to be an empty string, because we're going to be appending
  # to it, and we'll get an error if we try to append to a variable that has not previously been
  # declared
  str = ""

  # If the number contains 3 as a factor, output 'Pling'.
  # if number % 3 == 0
  #   str += "Pling"
  # end
  str += "Pling" if number % 3 == 0


  # If the number contains 5 as a factor, output 'Plang'.
  # if number % 5 == 0
  #   str += "Plang"
  # end
  str += "Plang" if number % 5 == 0

  # If the number contains 7 as a factor, output 'Plong'.
  # if number % 7 == 0
  #   str += "Plong"
  # end

  # Note that you can use Ruby's array push operator '<<' to do string concatenation
  # If you were to use this operator with an array, it would work like this:
  # [1, 2, 3] << 4   result: [1, 2, 3, 4]
  str << "Plong" if number % 7 == 0

  # if str.empty?
  #   return number.to_s
  # else
  #   return str
  # end

  return str unless str.empty?
  # Because of the return statement attached to 'unless' in the line above, everything
  # from this line on in this function will only be executed if the str.empty? method returns true

  # The final line here makes use of Ruby's "implicit return", which ensures that the return value
  # of the function will be the value of its last line
  number.to_s
end

# Call the function with an argument, and display its return value
puts raindrops( 1755 )
