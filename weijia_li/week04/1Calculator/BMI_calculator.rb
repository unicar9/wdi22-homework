

def bmi_calculator height, weight
  return weight / height ** 2
end

puts "Please enter your height in cm"
height = gets.to_f
puts "Please enter your weight in kg"
weight = gets.to_f

bmi = bmi_calculator height, weight

puts "Your BMI is #{bmi}."
