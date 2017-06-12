require "pry"

# define data structure of train lines

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

$lines = {
  :N => ["Times Square", "34th Street", "28th Street", "23rd Street", "Union Square", "8th Street"],
  :L => ["8th Street", "6th Street", "Union Square", "3rd Street", "1st Street"],
  :Six => ["Grand Central", "33rd Street", "28th Street", "23rd Street", "Union Square", "Astor Place"]
}

# p $lines[:N].index "Times Square"
#
# p $lines[:N][1..3].reverse

#  function which takes single line and two stops and sorts out:
#  1) how many stops you need to go through
#  2) lists the stops out

def line_trip line, start, stop
    start_index = $lines[line].index start
    end_index = $lines[line].index stop
    if end_index < start_index
        stops = $lines[line][start_index..end_index].reverse
    else
        stops = $lines[line][start_index..end_index]
    end
    stops
end

#  function which takes user input and outputs appropriate response based on
#   feedback from line trip function

def trip_itinerary startline, startstation, endline, endstation

    if startline != endline
        first_leg = line_trip startline, startstation, "Union Square"
        second_leg = line_trip endline, "Union Square", endstation
        puts "You must travel through the following stops  on #{ startline }: #{ first_leg }"
        puts "Change at Union Square"
        puts "You must continue through the following stops  on #{ endline }: #{ second_leg }"
        puts "Your total stops will be: #{ first_leg } #{ second_leg }"

    else
        first_leg = line_trip startline, startstation, endstation
        puts "Your total stops will be #{ first_leg }"
    end

end


trip_itinerary $start_line, $start_station, $end_line, $end_station

 # binding.pry
