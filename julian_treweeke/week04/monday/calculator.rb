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

# puts "Welcome to the Calculator"
# puts "Menu of operations"
# puts "+ ,- ,* , /"
# puts "First number"
# first_num = gets.to_i
# puts "operator"
# first_op = gets.chomp.to_i
# puts "Second number"
# second_num = gets.to_i
# result = (first_num+first_op+second_num)
# puts "= #{result}"

# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


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






# Mortgage Calculator unfinished!


# P = monthly payment
# L = Loan amount
# c = monthly interest rate. This is the annual interest rate divided by 12.
# n = number of months in the loan (years * 12)
#
# puts "Mortgage Calculator!"
# "What is the loan amount?"
# loan_amount = gets.to_i
# "Monthly interest rate?"
# monthly_rate = gets.to_i
# "Years left in the loan?"
# number_of_months = get.to_i*12
# monthly_payment =
#
# puts "Mortgage Calculator!"
# "What is the loan amount?"
# L = gets.to_i
# "Monthly interest rate?"
# c = gets.to_i
# "Years left in the loan?"
# n = get.to_i*12
# monthly_payment =



# BMI calculator

puts "BMI Calculator"
puts "Enter your weight in kilograms:"
weight = gets.to_i
puts "Enter your height in metres:"
height = gets.to_i
bmi = weight/(height*height)
puts "Your BMI is #{bmi}"



# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# kms per gallon
# price per gallon
# speed in miles per hour

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



























# puts "How many km's is your god damn trip buddy?"
# kms = gets.to_i
# puts "Cost of the fuel you got in price per kilometer?"
# price = gets.to_i
# puts "How good is your car man? Fuel economy - kilometers per litre"
# economy = gets.to_i
# puts "how fast were you going. Km's per hour?"
# speed = gets.to_i
#
# fuelneeded = kms/economy
# tripcost = fuelneeded*price
# puts "It will take you #{fuelneeded} litres to complete your trip."
# puts "It will cost you $#{tripcost} to do this god damn trip buddy."
#
#
#
# cost = distance / per kilmoter * price per litre
# time = distance / speed



# Divide the distance by your car's fuel economy (miles per gallon or kilometers per liter). The resulting amount is the number of gallons or liters it will take you to complete your trip. Multiply the number of gallons or liters by the average cost of fuel.
#
#
#
#
#
#
#
#
#
#
#










#
# CMath.sqrt(-1)




#
# puts "First number"
# first_num = gets.to_i
# puts "operator"
# first_op = gets.chomp.to_i
# puts "Second number"
# second_num = gets.to_i
# result = (first_num+first_op+second_num)
# puts "= #{result}"
