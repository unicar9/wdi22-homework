# There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

require "pry"

# * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


# MTA = Hash.new(0)

MTA = {
  "N_line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L_line" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "Six_line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"]
}

# #find start station
# def startStation (line, station)
#   MTA[line].index(station)
# end
#
# def endStation (line, station)
#   MTA[line].index(station)
# end

def singleTrip (start_station, end_station, line)
  start_index =   MTA[line].index(start_station)
  end_index =   MTA[line].index(end_station)

  if start_index < end_index
    stops =  MTA[line][start_index ... end_index]
    num_stops =  end_index - start_index
  end

  if end_index < start_index
    stops = MTA[line][end_index ... start_index]
    stops = stops.reverse
    num_stops = start_index - end_index

  end
  print = "You must travel through the following stops on the #{line}: #{stops}"
  # print = "#{num_stops} in total"
end

# p startStation "N_line", "34th"
# p endStation "N_line", "Union Square"
p singleTrip "8th", "34th", "N_line"

#
# a = [ "a", "b", "c", "d", "e" ]
# a[2] +  a[0] + a[1]    #=> "cab"
# a[6]                   #=> nil
# a[1, 2]                #=> [ "b", "c" ]
# a[1..3]                #=> [ "b", "c", "d" ]

# to access lines: MTA[:N_line] / MTA[:L_line] / MTA[:Six_line]
#to find index =  MTA[:N_line].index('Times Square')
#
# ```javascript
# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
#
# // console.log() shows output similar to this:
# // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
