require 'pry'

train_lines = {

  :line_N => ["Time Square", "34th", "28th-N", "23rd-N", "Union Square", "8th"],

  :line_L => ["8th", "6th", "Union Square", "3rd", "1st"],

  :line_6 => ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
}

common_stop = "Union Square"

def plan_trip (start_line, start_stop, end_line, end_stop)

if (start_line.to_sym == end_line.to_sym) # this will be true
  line = train_lines[start_line.to_sym] # store start_line in variable
  if (line.index(start_stop) < line.index(end_stop))
    single_line_stops = line[line.index(start_stop)+1..line.index(end_stop)] # +1 in start_stop to start in stop after
    puts "You will be passing through the following stops: #{single_line_stops.join(",")}"
  else
    single_line_stops_reverse = line[line.index(end_stop)..line.index(start_stop)-1].reverse
    puts "You will be passing through the following stops: #{single_line_stops.reverse.join(",")}"
  end
else # start_line != end_line
  line_1 = train_lines[start_line.to_sym]
  line_2 = train_lines[end_line.to_sym]
  line_1_reverse = train_lines[start_line.to_sym].reverse
  line_2_reverse = train_lines[end_line.to_sym].reverse

  if (line_1.index(start_stop) < line_1.index(common_stop)) && (line_2.index(common_stop) < line_2.index(end_stop))
    multi_line_stops_1 = line_1.index(start_stop)+1..line_1.index(common_stop) + line_2.index(common_stop)+1..line_2.index(end_stop)
    puts "You will be passing through the following stops: #{multi_line_stops_1.join(",")}"
  elsif (line_1.index(start_stop) < line_1.index(common_stop)) && (line_2.index(common_stop) > line_2.index(end_stop))
    multi_line_stops_2 = line_1.index(start_stop)+1..line_1.index(common_stop) + line_2.index(end_stop)+1..line_2_reverse.index(start_stop)
    puts "You will be passing through the following stops: #{multi_line_stops_2.join(",")}"
  elsif (line_1.index(start_stop) > line_1.index(common_stop)) && (line_2.index(common_stop) < line_2.index(end_stop))
    multi_line_stops_3 = line_1.index(common_stop)+1..line_1_reverse.index(start_stop) + line_2.index(common_stop)+1..line_2.index(end_stop)
    puts "You will be passing through the following stops: #{multi_line_stops_3.join(",")}"
  elsif (line_1.index(start_stop) > line_1.index(common_stop)) && (line_2.index(common_stop) > line_2.index(end_stop))
    multi_line_stops_4 = line_1.index.reverse(common_stop)+1..line_1.index.reverse(start_stop) + line_2_reverse.index(end_stop)+1..line_2_reverse.index(common_stop)
    puts "You will be passing through the following stops: #{multi_line_stops_4.join(",")}"
  end
end

plan_trip("line_N", "Time Square", "line_N", "23rd-N")


# if start line and end line are same
#   if start stop and end stop are same -> puts "invalid"
#   if start stop & end stop different -> access elements through index (note right to left and left to right)
# if start line and end line are different
#   access elements through index and stop at Union Square then from there continue journey (note directions)
