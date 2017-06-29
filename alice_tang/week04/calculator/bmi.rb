## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
puts "Your weight(kg): "
w = gets.to_f

puts "Your height(meter): "
h = gets.to_f

bmi = w /h**2

puts "your bmi is #{bmi}"

case
when bmi < 18.5
  puts "Underweight"
when bmi >= 18.5 && bmi <= 24.9
  puts "Healthy weight range"
when bmi > 24.9 && bmi <=29.9
  puts "Overweight"
else
  puts "Obese"
end
