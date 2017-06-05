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

puts "Thank you for choosing our calculator. Would you like to do: +, -, *, /, **, or sqrt?"

operation = gets.chomp

if operation == 'sqrt'
    puts"Great, #{operation} it is, what number would you like to find the square root of?"
    initial_num = gets.to_i
    answer = Math.sqrt(initial_num)

    puts "#{ answer } is the square root of #{ initial_num }"

else
    puts "Great, #{ operation } it is! Please enter the first number you would like to #{ operation } here: "

    first_num = gets.to_i

    puts "Ok, and the second number?"

    second_num = gets.to_i

    if operation == '-'
        answer =first_num - second_num

    elsif operation == '+'
        answer = first_num + second_num

    elsif operation == '*'
        answer = first_num * second_num

    elsif operation == "/"
        answer = first_num / second_num

    elsif operation == '**'
        answer = first_num**second_num
    end
    puts "#{ answer } is the result of #{ first_num } #{ operation } #{ second_num }!"
end






# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "Welcome to our Mortgage Calculator! Please give us a few necessary numbers and we'll calculate your monthly required payment! Firstly, What is your loan amount?"
loan_amount = gets.to_f

puts "Ok, and now your annual interest rate."
monthly_interest_rate = gets.to_f / 12

puts "Finally, how many years is your loan for?"
months_in_loan = gets.to_f * 12

monthly_payment = loan_amount * ((monthly_interest_rate *((1 + monthly_interest_rate)**months_in_loan))/(((1 + monthly_interest_rate)**months_in_loan) - 1))

puts "#{ monthly_payment } is your monthly payment based on a loan amount of #{ loan_amount } over #{ months_in_loan } months at a monthly interest rate of #{ monthly_interest_rate }%"



#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "Welcome to my BMI Calculator! To calculate, please input your weight in kg's: "
weight = gets.to_f

puts "Great, now your height in meters: "
height = gets.to_f

bmi = weight / height**2

puts "At #{ height }m's tall, and #{ weight }kg's, Your BMI is #{ bmi }."

#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts "Welcome to your Trip Budget Calculator!, Let's start with how far you are going in kilometers: "
distance = gets.to_f

puts "What is your vehicles average Per-Kilometer: "
per_kilometer = gets.to_f

puts "What is your estimated price per litre of petrol: "
price_per_litre = gets.to_f

puts "What speed in km/h: "
speed = gets.to_i

cost = (distance / per_kilometer) * price_per_litre

time = distance / speed

puts "Your trip will take an estimed #{ time } hours to complete and cost #{ cost }AUD"
