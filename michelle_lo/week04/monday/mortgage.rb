

# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#

# M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
#
# Let’s break that down a little further. The variables are as follows:
#
# M = monthly mortgage payment
# P = the principal, or the initial amount you borrowed.
# i = your monthly interest rate. Your lender likely lists interest rates as an annual figure, so you’ll need to divide by 12, for each month of the year. So, if your rate is 5%, then the monthly rate will look like this: 0.05/12 = 0.004167.
# n = the number of payments over the life of the loan. If you take out a 30-year fixed rate mortgage, this means: n = 30 years x 12 months per year, or 360 payments.

puts "What was the principal?"
principal = gets.to_i

puts "What is the interest rate?"
rate = gets.to_f

puts "What is the life of the loan?"
years = gets.to_i

puts "Principal was #{principal}, rate was #{rate}, loan was for #{years} years"

numerator = rate*(1+rate)**years
denominator = (1 + rate)**(years-1)

payments = (principal * numerator)/denominator
puts "Your monthly repayments are #{payments}"

# end

# payment_calculator principal, rate, years
