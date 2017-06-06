

# puts "Hello World!"
#
#
# '2+2 = #{2+2}'
# a =25
# "2+2 = #{a}"
# "2 + 2 = +a"

puts "What is your first name?"
# get functions to get args also can using prathesises
# first_name = gets
# or
 first_name = gets.chomp
# so no need for one of these lines

first_name = first_name.chomp
# chomp return in one line
# show input
puts "Your first name is #{ first_name } , cong!"

puts "What is your last name?"
last_name = gets.chomp
puts "Your surname #{ last_name}"

puts "your full name is #{first_name} #{last_name}"
