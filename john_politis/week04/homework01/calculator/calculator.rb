opt = 0
$num1 = 0;
$num2 = 0;

def menu

    puts "--- Calculator ---"
    puts ""
    puts "1 ... Add"
    puts "2 ... Subtract"
    puts "3 ... divide"
    puts "4 ... Multiply"
    puts "5 ... exponents"
    puts "6 ... square roots"
    puts "7 ... Morgage"
    puts "8 ... BMI"
    puts "9 ... Exit"
    puts ""
    puts "choose [1..9]".chomp

end

def MorgageCalculator
    puts "Morgage"
end

def BMICalculator
    GetUserInput("Enter height in meters" , "Enter weight in kg")
    height = $num1    
    weight = $num2
    res = height / (weight**2)
    puts "Calculated BMI for your weight is : #{res}"     
end

def chooseMenuOption
    return gets.to_i
end

def GetUserInput(p,n)    
    puts p
    $num1 = gets.to_f    
    puts n
    $num2 = gets.to_i

end

def GetSingleUserInput
  puts "Enter Num1 : "
  $num1 = gets.to_f
end

#### Calculator example #########
while opt != 9

    menu
    opt = chooseMenuOption

    case
      when opt == 1
          GetUserInput("Enter first number", "Enter second number")
          puts "= #{$num1 + $num2}"
      when opt == 2
          GetUserInput("Enter first number", "Enter second number")
          puts "= #{$num1 - $num2}"
      when opt == 3
          GetUserInput("Enter first number", "Enter second number")
          puts "= #{$num1 / $num2}"
      when opt == 4
          GetUserInput("Enter first number", "Enter second number")
         puts "= #{$num1 * $num2}"
     when opt == 5      
      GetUserInput("Enter first number", "Enter second number")
      res = $num1 ** $num2
      puts "#{$num1} raised to the #{$num2} power equals #{ res }"
     when opt == 6
      puts "sqrt..."
      GetSingleUserInput();
      p Math.sqrt($num1)
     when opt == 7
         MorgageCalculator()
     when opt == 8
         #BMI
         BMICalculator()
    end
end
