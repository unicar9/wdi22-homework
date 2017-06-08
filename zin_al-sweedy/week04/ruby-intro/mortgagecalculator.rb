# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
puts " enter the loan principal: "
# loan_amount = gets.chomp.t o_i
p = gets.chomp.to_i

puts "enter the annual interest rate for your loan: "
# interest = get.chomp.to_i
r = gets.chomp.to_f / 12

puts "enter the total number of payments: "
# peroid = gets.chomp.to_i
n = gets.chomp.to_i

  # Loan Payment = Amount x (Interest Rate / 12)
# http://www.wikihow.com/Calculate-Mortgage-Payments
  #
  # Understand the equation. In order to calculate the monthly payment, we can rely on a relatively simple equation. The monthly payment equation can be represented as follows: {\displaystyle M=P{\frac {r(1+r)^{n}}{(1+r)^{n}-1}}}. These variables represent the following inputs:
  # M is your monthly payment.
  # P is your principal.
  # r is your monthly interest rate, calculated by dividing your annual interest rate by 12.
  # n is your number of payments (the number of months you will be paying the loan)[6]

# monthly  payment required
# x = r((1+n)**n)
# y = ((1+r)**n)-1
m = p * (((r*((1+r)**n)) / (((1+r)**n)-1)))
# m = p * (x/y)
puts "monthly required payment is: #{m}"

# 100000 p
#r 0.06
#n 180
