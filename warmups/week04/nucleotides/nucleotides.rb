# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program that will tell you how many times each nucleotide occurs in a string.
#
# It should also tell you if a character in the string is not a valid nucleotide.
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
require 'pry'

input_string = "AGCTFZzzzzTGACTGCAAXCGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

def count_nucleotides(input)

  bases = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0
  }

  message = []

  #iterate over each char in the string input
  input.upcase.chars.each do |letter|

    # is_nucleotide = false

    if bases.has_key? letter
      bases[letter] += 1
    else
      message.push "#{letter} is not a valid nucleotide"
    end

    # bases.each do |key, value|
    #   if letter == key
        # bases[key] += 1
        # is_nucleotide = true
    #   end #if
    # end #bases.each

    # unless is_nucleotide
    #   message.push "#{letter} is not a valid nucleotide"

    # end #unless

  end #input each chars

  bases.each do |key, value|
    message.push "#{ key }:  #{value}"
  end
  message #implicit return
end #count nucleotides


result =  count_nucleotides(input_string)
result.uniq.each { |line|puts line }
