

def menu
  puts "Please choose an operation first, type 7 to exit
  1. addition
  2. subtraction
  3. multiplication
  4. division
  5. exponents
  6. square foots
  7. quit"
  return gets.chomp
end


def calculation (operation, a, b)

  case operation

  when "1"
     a + b
  when "2"
     a - b
  when "3"
     a * b
  when "4"
     a / b
  when "5"
     a ** b
  when "6"
    Math.sqrt(a)
  end

end

operation = menu

while operation != "7"

  puts "Please enter a number."
  a = gets.to_i

  puts "Please enter another number."
  b = gets.to_i

  answer = calculation operation, a, b
  puts "The answer is #{answer}"

  operation = menu

end
