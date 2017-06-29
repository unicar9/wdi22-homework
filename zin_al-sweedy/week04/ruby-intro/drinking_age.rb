###1. Drinking age?

# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
puts "Please enter your age"
age = gets.chomp.to_i


if age < 18
  puts "you cant drink"
elsif age >=18
  puts " You can drink"
end



# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."


puts "what the current temperature is"
current_temperature = gets.chomp.to_i

puts "what the wish temperature is"
wish_temperature = gets.chomp.to_i

puts "what the ac condition"
ac_functional = gets.chomp.to_i

if ac_functional == true
  if current_temperature > wish_temperature
    puts "Turn on the A/C Please"
  end
elsif ac_functional == false
  if current_temperature > wish_temperature
    puts "Fix the A/C now! It's hot!"
  elsif current_temperature < wish_temperature
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end


# ###3. Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing


puts "what suburbs yo live in"

suburb = gets.chomp

puts " you live in #{suburb}"




# techear solution
puts "What is your age?"
# age = gets.chomp
age = gets.to_i
if age < 18
  puts" cant"
else
  puts"can"
end

# air Conditioning
puts "What the current temp?"
current_temp = gets.to_f //to float



puts "Is  the A/C functioning? (y/n):"
ac_working = gets.chomp.downcase # .toLowerCase()

puts "What the desired temp?"
desired_temp = gets.to_f

if ac_working == "y"
# if ac_working =="y" and current_temp > desired_temp
# not the same logic desired not the right answer I want
  # '' in test one char always use ""
  #  or can use and
  #check desired temp
  if current_temp > desired_temp
    puts "Turn on the AC Please"
  end
else
  if current_temp <desired_temp
    puts "Fix the A/C whenever , no wusss...."
  else
    puts "Fix the A/C now man!"
  end
end


#  different suburbs
# every one in in one file
puts "Which suburb do you live in? :"
suburb = gets.chomp # dont hit new line \n in new line
if suburb == "Bondi"
  puts "Nice boat shoes."
elsif suburb =="Newport"
  puts "Oh, so you 're a white supremacist"
elsif suburb = "Manly"
  puts "Surf's up bro!"
else
  puts" It is nice "
end
# run the program many times to enter the input text
# do with when 
case suburb
when "Manly"
  puts"Nice boat shoes."
when "Newport"
  puts "Oh, No"
else
  puts " Nice"
end
# every if end if elsif and else  end also
# and with out  puts only text "jjjj"
# and puts otput if more than one  texts takex the last one "1" "hhh" last one "hhh" prints
# p input var .inspect
