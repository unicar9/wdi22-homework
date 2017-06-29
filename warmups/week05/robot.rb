# The first time you boot them up, a random name is generated, such as RX837 or BC811.
require 'pry'
class Robot

  def name
    @name
  end

  def initialize
    generate_name
  end

  def generate_name
    @name = "#{generate_letters(2)}#{ generate_numbers(3)}"
    p @name
  end







  private  # anything after this can not be called byt an instance of the class

  def generate_letters( length )
    ("A".."Z").to_a.sample(length).join
  end

  def generate_numbers( length )
    (0..9).to_a.sample( length ).join
  end
end

bob = Robot.new

binding.pry

bob.generate_name
