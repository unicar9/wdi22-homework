# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
#
puts " enter your weight in kg"

weight = gets.to_f
# can skip chomp if we have .to_i or f
puts " enter your height in metre"

height = gets.to_f

bmi = weight / height**2
# height * height
puts "your bmi is: #{bmi}"
case
when bmi < 18.5
  puts "Underweight"
when bmi >= 18.5 && bmi <= 24.9
  puts "Healthy weight rang"
when bmi > 24.9 && bmi<=29.9
  puts "Overweight"
else
  puts "obese"
end
