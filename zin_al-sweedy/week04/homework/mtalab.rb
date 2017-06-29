# MTA Lab
#
# ##Objectives:
#
# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity
#
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
#
# // console.log() shows output similar to this:
# // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway $lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway $lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
#
# Work out how you would do it on paper first! Then start to explain that process in Javascript.
# Get the program to work for a single line before trying to tackle multiple $lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
# Consider diagramming the $lines by sketching out the subway $lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: indexOf())
# Make sure the stops that are the same for different $lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

require "pry"

$lines = {
    # 'lineN' => [], pass variable as '' string
  # :lineN => [],
  lineN: [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  lineL: [ "8th", "6th", "Union Square", "3rd", "1st" ],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
}

$intersection_point = "Union Square"
# puts $lines[:lineN]
# puts $lines[:lineL]
# puts $lines[:line6]
# puts "enter the start line"
# start_line = gets.chomp
#
# puts "enter the start station"
# start_line = gets.chomp
#
# puts "enter the end station"
# start_line = gets.chomp
$stops_num = 0
$total_num_stops = 0
def multiple_line_trip(start_line, start_station, end_line, end_station)
  # if start_line == end_line
  #   puts "You already in  your destnation"
  # end
  # line

  if start_station == end_station
    puts "You already in  your destnation"
  else

    # puts index_intersection_point
    #  single_line_trip(:lineN,"28th", "Times Square89u")

    # single_line_trip(startline, start_station, $intersection_point)
    single_line_trip(start_line, start_station,"Union Square")
    # $total_num_stops += $stops_num.length
    line = $lines[end_line] # :line


    $intersection_point = line.index("Union Square")
    $end_index =line.index(end_station)
    if $intersection_point > $end_index
      $intersection_pointe = $intersection_point - 1
    else
      $intersection_pointe = $intersection_point + 1
    end
    $intersection_pointee = line[$intersection_pointe]

    single_line_trip(end_line,$intersection_pointee, end_station)
      # $total_num_stops += $stops_num.length
  end
  # return $total_num_stops
end

def single_line_trip (start_line, start_station, end_station)
  # stops_num = 0 # number of stops
  # know the line
  line = $lines[start_line] # :lineN
  # puts line
  # get all indexes points
#   if end_station == "Union Square"
#   startline = $lines[start_line]
#   end_station_index= startline.index("Union Square")
#
# else
  # endline = $lines[end_line]
  # index_eintersection_point= endline.index("Union Square")
  index_start_line = $lines[start_line].index(start_station)
  index_end_line = $lines[start_line].index(end_station)
  # puts index_start_line
  # puts index_end_line

# end

  # if line == $lines[:lineN]
  #   puts "you are in line N"
  #   # puts $lines[:lineN]
  # elsif line ==$lines[:lineL]
  #   puts "you are in line L"
  #   # puts $lines[:lineL]
  # elsif line == $lines[:line6]
  #   puts "you are in line 6"
  #   puts $lines[:line6]
  # end


  if start_station == end_station
    # puts "You already in  your destnation"
    $stops_num = line[index_start_line..index_end_line]

    $total_num_stops += $stops_num.length
    # $total_num_stops +=1
    puts "You must travel through: #{$stops_num},  has #{$total_num_stops} stops."
  end

  if index_start_line > index_end_line # or use reverse??
    # puts $lines[:line]
    temp = index_start_line
    index_start_line = index_end_line
    index_end_line =temp
    $stops_num = line[index_start_line..index_end_line]
    $stops_num.reverse!
    # binding.pry
    # puts "You must travel through: #{$stops_num},  has #{$stops_num.length} stops."
    $total_num_stops += $stops_num.length
    puts "You must travel through: #{$stops_num},  has #{$total_num_stops} stops."
    elsif index_start_line < index_end_line
    $stops_num = line[index_start_line..index_end_line]
    # binding.pry
    $total_num_stops += $stops_num.length
    puts "You must travel through: #{$stops_num},  has #{$total_num_stops} stops."
  end
  # binding.pry
  return $total_num_stops
end
# return stops_num
# results= single_line_trip(:lineN,"Times Square", "28th")
# results= single_line_trip(:lineN,"28th", "Times Square")
# single_line_trip(:lineN,"28th", "Times Square")




# lineN:[ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
# lineL:[ "8th", "6th", "Union Square", "3rd", "1st" ]
# line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
# multiple_line_trip(:lineL, "8th", :lineL, "1st")
# multiple_line_trip(:lineL, "8th", :line6, "Astor Place")
multiple_line_trip(:line6,"Astor Place",:lineL, "8th")
# multiple_line_trip(:lineN,"Times Square", :line6,"Astor Place"  )
# puts "reslts #{results}"


# single_line_trip (lineN,"Times Square", "28th")
# call the functions
