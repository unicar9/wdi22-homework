# Calculator

### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

#### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

#### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)


# a better way to do this is list a menu
puts "Please choose operation (+,-, *, /, e (exponents), s (square roots))"

operation = gets.chomp

puts "Enter first number: "
num1 = gets.to_i

puts "Enter second number: "
num2 = gets.to_i

if operation == "+"
  result = num1 + num2
elsif operation == "-"
  result = num1 - num2
elsif operation == "*"
  result = num1 * num2
elsif operation == "/"
  result = num1 / num2
elsif operation == "e"
  result = num1 ** num2
elsif operation == "s"
  result = Math.sqrt(num1)  # sqrt should not have a second input
end

puts " #{num1} #{operation} #{num2} = #{result}"
