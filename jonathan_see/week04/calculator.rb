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
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
#
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

def menu
  puts "Which operation would you like to do?"
  puts "a - addition"
  puts "b - subtraction"
  puts "c - multiplication"
  puts "d - division"
  puts "e - exponents"
  puts "f - square roots"
  puts "g - mortgage calculator"
  puts "h - bmi calculator"
  puts "i - trip calculator"
  puts "q - quit"

  print "Enter your choice: "
  gets.chomp
end

def addition
  puts "What is your first number?"
  first_number = gets.to_f
  puts "What is your second number?"
  second_number = gets.to_f
  result = first_number + second_number
  puts "#{first_number} plus #{second_number} equals #{ result }"
end

def subtraction
  puts "What is your first number?"
  first_number = gets.to_f
  puts "What is your second number?"
  second_number = gets.to_f
  result = first_number - second_number
  puts "#{first_number} minus #{second_number} equals #{ result }"
end

def multiplication
  puts "What is your first number?"
  first_number = gets.to_f
  puts "What is your second number?"
  second_number = gets.to_f
  result = first_number * second_number
  puts "#{first_number} multiply by #{second_number} equals #{ result }"
end

def division
  puts "What is your first number?"
  first_number = gets.to_f
  puts "What is your second number?"
  second_number = gets.to_f
  result = first_number / second_number
  puts "#{first_number} divided by #{second_number} equals #{ result }"
end

def exponents
  puts "What is your first number?"
  first_number = gets.to_f
  puts "How many times do you want to multiply this number?"
  second_number = gets.to_f
  result = first_number ** second_number
  puts "#{first_number} raised to the #{second_number} power equals #{ result }"
end

def square_root
  puts "Give me a number!"
  number = gets.to_f
  result = Math.sqrt( number )
  puts "The square root of #{number} is  #{ result }"
end

def mortgage_calculator
  puts "Enter the loan amount."
  loan = gets.to_f
  puts "Enter the annual interest rate"
  annual_interest = gets.to_f
  puts "Enter the number of years of loan."
  years_loan = gets.to_f
  monthly_interest = annual_interest / 12
  months_loan = years_loan * 12
  result = (monthly_interest(1 + monthly_interest)**months_loan)/((1 + monthly_interest)**months_loan - 1)*loan
  puts "Your monthly payment for the loan amount of #{loan} with an annual interest of #{annual_interest} and a term of #{years_loan} years will be #{result}."
end

def bmi_calculator
  puts "Enter your height in meters."
  height = gets.to_f
  puts "Enter your weight in kilograms."
  weight = gets.to_f
  result = height / (weight**2)
  puts "Your Body Mass is #{result}."
end

def trip_calculator
  puts "Enter the distance."
  distance = gets.to_f
  puts "Enter miles per gallon."
  miles_gallon = gets.to_f
  puts "Enter price per gallon."
  price_gallon = gets.to_f
  puts "Enter speed in miles per hour."
  speed = gets.to_f
  trip_time = distance / speed
  cost = distance * miles_gallon * price_gallon
  puts "It will take you #{trip_time} hours and cost you #{cost} to travel #{distance}."
end
