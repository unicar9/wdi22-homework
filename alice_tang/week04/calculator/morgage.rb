# Bonus
## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "Principal: "
p = gets.chomp.to_i

puts "annual interest rate: "
r = gets.chomp.to_f/12

puts "total number of payments: "
n = gets.chomp.to_i

m = p * r * ((1+r)**n)/((1+r)**n-1)
puts "monthly required payments is #{m}"
