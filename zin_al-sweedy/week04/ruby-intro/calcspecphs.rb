# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
#
#
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

ans = "yes"
while ans== "yes"
  puts "the list of operations"
  puts "1 for addition"
  puts "2 for subtraction"
  puts "3 for dividion"
  puts "4 for multiplication"
  puts "5 for exponents"
  puts "6 for square roots"

  puts " input the first number"

  first_number = gets.chomp.to_i


  puts " input the number of the arithmetic operation"

  op = gets.chomp

  puts " input the second number"

  second_number = gets.chomp.to_i
  ans = "yes"

  case
    when op == "1"
      result= first_number + second_number
      puts " the results of #{first_number} + #{second_number} = #{result}"
    when op == "2"
      result= first_number - second_number
      puts " the results of #{first_number} - #{second_number} = #{result}"
    when op == "3"
      result= first_number / second_number
      puts " the results of #{first_number} / #{second_number} = #{result}"
    when op == "4"
      result= first_number * second_number
      puts " the results of #{first_number} * #{second_number} = #{result}"
    when op == "5"
      result= first_number ** second_number
      puts " the results of #{first_number} exponents #{second_number} = #{result}"
    when op == "6"
      result1= Math.sqrt(first_number)
      result2= Math.sqrt(second_number)
      puts " the results of #{first_number} square roots = #{result1} "
      puts " the results of #{second_number} square roots = #{result2} "
    else
      puts  " you puts a wrong operation number."
  end # case

  puts "Wolud you like to continue say yes otherwise say no"
  ans = gets.chomp
end # while
