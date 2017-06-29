require 'pry'

class Atbash

  def initialize(word)

    @word = word.downcase
    #alphabet . build an aphabet to match letters of word to
    @alphabet = ("a".."y").to_a
    @reverse = @alphabet.reverse

  end

  def encode

    #start off with an empty string
    message = ''
    #
    @word.each_char do |c|
        # go through every letter of word.
        i = @alphabet.index(c)
        #find index in alphabet.
        cipher_character = @reverse[i]
        #use that index to get corrosponding letter form @reverse and
        message << cipher_character
        #push to message
      end
      message

  end



end

puts "Gday mate,  what word would you like to super duper encode so no one can ever crack?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode
