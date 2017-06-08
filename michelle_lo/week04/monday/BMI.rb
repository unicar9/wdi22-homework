
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight


# BMI = Weight (kg)/Height (m)2

puts "how much do you weigh in kgs?"
weight = gets.to_f

puts "how tall are you?"
height = gets.to_f

BMI = (weight/(height**2)).to_f

if BMI < 18.5
  puts "Your BMI is #{BMI}, eat a sandwich"
elsif BMI <= 24.9
  puts "Your BMI is #{BMI}, you're healthy"
elsif BMI <= 29.9
  puts "Yo fatty, your BMI is #{BMI}"
elsif BMI <= 34.9
  puts "Your BMI is #{BMI}. No comment"
elsif BMI > 34.9
  puts "Your BMI is #{BMI}... really?"
else
  puts "does not compute"
end


#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
