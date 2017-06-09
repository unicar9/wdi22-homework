# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations.
#  Your function should allow the user to choose which operation is expected,
#  enter in the values to perform the operation on, and ultimately view the result.

puts " input the first number"

first_number = gets.chomp.to_i


puts " input the arithmetic operation"

op = gets.chomp


puts " input the second number"

second_number = gets.chomp.to_i

# result = first_number op second_number
if op == "+"
  result= first_number + second_number
  puts " the results of #{first_number} #{op} #{second_number} = #{result}"
elsif op == "-"
  result= first_number - second_number
  puts " the results of #{first_number} #{op} #{second_number} = #{result}"
elsif op== "/"
  result= first_number / second_number
  puts " the results of #{first_number} #{op} #{second_number} = #{result}"
elsif op =="*"
  result= first_number * second_number
  puts " the results of #{first_number} #{op} #{second_number} = #{result}"
else
  puts "You entered a wrong operation"
end


# puts " the results of #{first_number} #{op} #{second_number} = #{result}"
