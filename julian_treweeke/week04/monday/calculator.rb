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
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)


# calculator

def square(num)
  Math.sqrt(num)
end

def exponent(num1, num2)
  num1**num2
end

puts "Welcome to the Calculator"
puts "Menu of operations"
puts "+ ,- ,* , /,exponent,squareroot, quit"
selection = 0
result = 0

until selection == "quit"

puts "Number or Operator"

  selection = gets.chomp

    if selection == "squareroot"

      puts "number to square root"

      squarenum = gets.to_i

      selection = square(squarenum)
    end

    if selection == "exponent"

      puts "number to exponent"

      num1 = gets.to_i

      puts "to the power of"

      num2 = gets.to_i

      selection = exponent(num1,num2)

    end

  result += selection.to_i

end

puts "result = #{result}"






# Mortgage Calculator

puts "Mortgage Calculator!"
puts "What is the loan amount?"
loan_amount = gets.to_f
puts "Monthly interest rate?"
monthly_rate = gets.to_f
monthly_rate /= 12
puts "How many years to pay off the loan?"
years = gets.to_f
years *=  12
result = loan_amount * ( ( monthly_rate * ( ( 1 + monthly_rate )**180 ) )/( ( ( 1 + monthly_rate )**180 ) -1 ) )
puts "Your monthly repayment is #{ result }"




# BMI calculator

puts "BMI Calculator"
puts "Enter your weight in kilograms:"
weight = gets.to_i
puts "Enter your height in metres:"
height = gets.to_i
bmi = weight/(height*height)
puts "Your BMI is #{bmi}"



# Trip Calculator

puts "Distance of trip in kms?"
distance = gets.to_i
puts "Whats your car? Km's per litre?"
kms_per_litre = gets.to_i
puts "How much did the fuel cost?"
price_per_litre = gets.to_i
puts "How fast are you travelling? km's per hour?"
kms_per_hour = gets.to_i

trip_time = distance/kms_per_hour
puts "Your trip will take #{trip_time} hours"

cost = (distance/kms_per_litre)*price_per_litre
puts "Your trip will cost $#{cost}"
