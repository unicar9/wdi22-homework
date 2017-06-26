# # MTA Lab
#
# ### Activity:
# - Students should create a program that models a simple subway system.
#
# - The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints:
#   + the stations the user must pass through, in order
#   + where to change lines, if necessary
#   + the total number of stops for the trip.
#
# - There are 3 subway lines:
#   - The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   - All 3 subway lines intersect at Union Square, but there are no other intersection points.
#     - For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
#
# We should be able to say:
#
# ```ruby
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# ```
#
# ### Hints:
# * Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# * Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# * A symbol can't just be a number!
# * Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# * Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# * The key to the lab is to find the __intersection__ of the lines at Union Square.
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'
$mta = {
  n: ["Times Square","34th","28th","23rd","Union Square","8th"],
  l: ["8th","6th","Union Square","3rd","1st"],
  six:["Grand Central","33rd","28th","23rd","Union Square","Astor Place"],
  intersection: "Union Square"
}

def get_stop_index (line, stop)
  $mta[line].index(stop)
end

def get_intersection()
  $mta[:intersection]
end

def single_line_trip(line, start, dest)
  start_index = get_stop_index(line,start)
  dest_index = get_stop_index(line,dest)
  if start_index < dest_index
    return $mta[line][start_index..dest_index]
  else
    return $mta[line][dest_index..start_index].reverse
  end
end

def plan_trip(start_line,start,end_line,dest)
  intersection = get_intersection
  if start_line == end_line || start == intersection || dest == intersection
    trip_leg1 = single_line_trip(start_line, start, dest)
    trip_leg2 = []
  else
    trip_leg1 = single_line_trip(start_line, start, intersection)
    trip_leg2 = single_line_trip(end_line, intersection, dest)
  end
  puts "You must travel through the following stops on the #{ start_line } line"
  puts "#{ trip_leg1.join(', ')}"
  unless trip_leg2.empty?
    puts "Change at #{get_intersection}."
    puts "Your journey continues through the following stops on the #{end_line} line"
    puts "#{trip_leg2.join(', ')}"
  end
end

plan_trip( :n, "Times Square", :six, "Grand Central" )
