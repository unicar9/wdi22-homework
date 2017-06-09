
require "pry"

$lines = {
  :N => ["Times Square", "34th Street", "28th Street", "23rd Street", "Union Square", "8th Street"],
  :L => ["8th Street", "6th Street", "Union Square", "3rd Street", "1st Street"],
  6 => ["Grand Central", "33rd Street", "28th Street", "23rd Street", "Union Square", "Astor Place"]
  }

# def basic_trip("34th Street", "23rd Street")
#
#     start_index = n.index("34th Street")
#     end_index = n.index('23rd Street')
#     names_of_stops =
#     number_of_stops = [2..4]


puts "What train are you starting from? "
$start_line = gets.chomp.to_sym
p $start_line
puts "What station are you starting from? "
$start_station = gets.chomp
p $start_station
puts "What train are you ending at? "
$end_line = gets.chomp.to_sym
p $end_line
puts "What station are you ending at? "
$end_station = gets.chomp
p $end_station



def line_trip(line, start_station, end_station)
    start_index = lines[line].index start_station
    end_index = lines[line].index end_station

    if end_index < start_index
      p lines[line][start_index..end_index].reverse

  else

      p lines[line][start_index..end_index]

  end
end

def trip_itinerary(start_line, start_station, end_line, end_station)

   if start_line == end_line && start_station == end_station
     puts "Incorrect Input, try again"
   end
   if start_line != end_line
     first_leg = line_trip start_line, start_station, "Union Square"
     second_leg = line_trip end_line, "Union Square", end_station
     puts "You must travel through the following stops  on #{ start_line }: #{ first_leg }"
     puts "Change at Union Square"
     puts "You must continue through the following stops  on #{ end_line }: #{ second_leg }"
     puts "Your total stops will be: #{ first_leg } #{ second_leg }"

   else
     first_leg = single_line_trip(start_line, start_station, end_station)
     puts "Your total stops will be #{ first_leg }"
   end
 end
