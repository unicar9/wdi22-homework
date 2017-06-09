# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu



#
# if operation == "+"
#   puts numbers[0].to_i.+(numbers [1].to_i)
# elsif operation == "-"
#   puts numbers[0].to_i.-(numbers [1].to_i)
#
#
# end

# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# #
# operation = ""
# until operation == 'quit'
#
#   puts "The following operations are available: +,-, *, /. Please pick one"
#   operation = gets.chomp
#
#   puts "What two numbers do you want to perform #{ operation } on?"
#   numbers = gets.chomp.split(' ')
#
#   puts "the numbers are #{ numbers[0]} and #{numbers [1]}"
#
#   def calculator numbers, operation
#     puts "#{numbers[0]} #{operation} #{numbers[1]} equals #{  numbers[0].to_i.send(operation, numbers[1].to_i)}"
#   end
#
#   calculator numbers, operation
# end

# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
#
# operation = ""
# until operation == 'quit'
#
#   puts "The following operations are available: +,-, *, /, **. Please pick one"
#   operation = gets.chomp
#   if operation == 'quit'
#     exit
#   end
#
#   puts "What two numbers do you want to perform #{ operation } on?"
#   numbers = gets.chomp.split(' ')
#
#   puts "the numbers are #{ numbers[0]} and #{numbers [1]}"
#
#   def calculator numbers, operation
#     puts "#{numbers[0]} #{operation} #{numbers[1]} equals #{  numbers[0].to_i.send(operation, numbers[1].to_i)}"
#   end
#
#   calculator numbers, operation
# end



operation = ""
until operation == 'quit'

  puts "The following operations are available:
  +,
  -,
  *,
  /,
  **,
  square root
  Please pick one.
  To quit, please type 'quit'"
  operation = gets.chomp
  if operation == 'quit'
    exit
  end

if operation != "square root"
  puts "What two numbers do you want to perform #{ operation } on?"
  numbers = gets.chomp.split(' ')
  puts "the numbers are #{ numbers[0]} and #{numbers [1]}"

  def calculator numbers, operation
    puts "#{numbers[0]} #{operation} #{numbers[1]} equals #{  numbers[0].to_i.send(operation, numbers[1].to_i)}"
  end

  calculator numbers, operation
end

if (operation == "square root")
  puts "What number do you want to perform #{ operation } on?"
  num = gets.chomp.to_i



  def calculator num, sqrt_calc
    sqrt_calc = Math.sqrt(num)
    puts "the square root of #{num} is #{sqrt_calc}"
  end

  calculator num, operation
end
end
