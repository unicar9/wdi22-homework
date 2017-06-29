# There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

require "pry"

# MTA = Hash.new(0)

MTA = {
  "N_line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L_line" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "Six_line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"]
}

# single_trip looks at the hash/arrays and returns stop listing and # of stops
def single_trip (line, start_station, end_station)
  start_index =   MTA[line].index(start_station)
  end_index =   MTA[line].index(end_station)

  direction_check = start_index <=> end_index

  if direction_check == -1
    stops =  MTA[line][start_index .. end_index]
    $num_stops =  end_index - start_index
  end

  if direction_check == 1
    stops = MTA[line][end_index .. start_index]
    stops = stops.reverse
    $num_stops = start_index - end_index
  end
  print "You must travel through the following stops on the #{line}: #{stops}"
end

# MTA method calls the trip method
def MTA_journey (start_line, start_station, end_line, end_station )
  if start_line == end_line
    p single_trip start_line, start_station, end_station
    p num_stops
  end
  if start_line != end_line
    p single_trip start_line, start_station, "Union Square"
    stops_first_leg = $num_stops
    p "You need to change trains at Union Square"
    p single_trip end_line, "Union Square", end_station
    stops_second_leg = $num_stops
    total_stops = stops_first_leg + stops_second_leg
    p "There are #{total_stops} stops in total"
  end
end

#The below obtains user input

# def check_input (stop, line)
#   if MTA[line].include?(stop) == false
#   puts "please check again"
#   end
# end
# if check_input == true
  puts "What station are you at?"
  start_station = gets.chomp
  puts "Which line is that on (N_line, L_line or Six_line)?"
  start_line = gets.chomp
  # check_input start_station, start_line
  puts "Which station do you want to go to?"
  end_station = gets.chomp
  puts "What line is that on(N_line, L_line or Six_line)?"
  end_line = gets.chomp
  # check_input end_station, end_line
# end


#this calls the MTA method, utilising the inputs from the user
MTA_journey start_line, start_station, end_line, end_station
