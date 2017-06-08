require 'pry'
# Arrays
# ----------------------------
trains = {
  "N": ["Times Square","34th","28th","23rd","Union Square","8th"],
  "L": ["8th","6th","Union Square","3rd","1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
trip = {
  trip1: [],
  trip2: []
}
# # user interaction
# # ---------------------------
# puts "Welcome to the Transit System."
# puts "There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place."
#
# puts "What line do you want to start the journey on?"
# startline = gets.chomp.upcase.to_sym
#
# puts "What station do you want to start the journey on?"
# startstation = gets.chomp
#
# puts "What line do you want to end journey on?"
# endline = gets.chomp.upcase.to_sym
#
# puts "Finally, what station is your destination?"
# endstation = gets.chomp


#find the codes for the start and end lines and union stations

# def get_indexes(line, station, num)
#
#   trains[line].each do |i|
#    if i == station
#      $begin_code + num = trains[line].index(i)
#
#    end
#    if i == "Union Square"
#      $union_code + num = trains[line].index(i)
#    end
# end
# end
#
# get_indexes(startline,startstation,1)
# get_indexes(endline,endstation,2)



startline = "N".upcase.to_sym

startstation = "Times Square"

endline = "N"

endstation = "28th"


def get_indexes(line, station, num)

  trains[line].each do |i|
     if i == station
       puts i
      #  $begin_code + num = trains[line].index(i)
     end

     if i == "Union Square"
       puts i
      #  $union_code + num = trains[line].index(i)
     end

  end

end

get_indexes(startline,startstation,1)
get_indexes(endline,endstation,2)















#
#
#
#
#
#
#
#
#
# # push train journey to array trips one and two and work out direction
# # -----------------------------------------------------------
# if $begin_code < $union_code1
#   trip[:trip1] = trains[startline][$begin_code...$union_code1]
# else
#   trip[:trip1] = trains[startline][$union_code1..$begin_code].reverse
#
# end
#
# if $end_code < $union_code2
#   trip[:trip2] = trains[endline][$end_code...$union_code2].reverse
# else
#   trip[:trip2] = trains[endline][$union_code2..$end_code]
# end
#
# # get number of stops
# # -------------------------
# number_of_stops = trip[:trip1].length + trip[:trip2].length
# # If a multi line journey add this announcement
# # -------------------------
# if startline != endline
#   trip[:trip1].push(" change at Union Square. Then on the #{endline} line, continue through")
# end
#
# # prime arrays for itinerary, remove first station and end station
# # -------------------------
# trip[:trip1].shift
# trip[:trip2].pop
#
# # print itinerary
# # -------------------------
# puts "Get on at #{startstation} on the #{startline} line. Continue through stations #{trip[:trip1].join(",")} #{trip[:trip2].join(",")} and get off at #{endstation}. Total number of stops for trip: #{number_of_stops}"
binding.pry
