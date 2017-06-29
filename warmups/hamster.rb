require 'pry'

# This is called the 'Hamming distance'
#
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# Use a class to structure your code, if you feel confident!

# strand_one = "GAGCCTACTAACGGGAT"
# strand_two = "CATCGTAATGACGGCCT"
#
# difference = 0
#
# strand_one.chars.each_with_index do |elem, i|
#   if elem != strand_two[i]
#     difference += 1
#   end
#
# end
#
# puts "The hamster distance is #{difference}"

class DNA

  def initialize(str1,str2)
    @strand_one = str1
    @strand_two = str2
  end


  def hamming_distance
    difference = 0
    @strand_one.chars.each_with_index do |elem, i|
      if elem != @strand_two[i]
        difference += 1
      end

    end
    p "The hamming difference between #{@strand_one} and #{@strand_two} is : #{difference}"
  end
end
dean = DNA.new("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT")

binding.pry
