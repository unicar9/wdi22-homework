
# puts 'Please enter your start line.'
# on_line = gets
# puts 'Please enter your start stop.'
# on_stop = gets
# puts 'Please enter your end line.'
# off_line = gets
# puts 'Please enter your end stop.'
# off_stop = gets

$line_stops = {
  "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def through_stops line, on_stop, off_stop
  line = $line_stops[line]

  on = line.index(on_stop)
  off = line.index(off_stop)

  on < off ? line[on+1..off] : line[off...on].reverse
end


def plan_trip on_line, on_stop, off_line, off_stop
  if on_line == off_line
    stops1 = through_stops on_line, on_stop, off_stop
    num_stops = stops1.length

    puts "You must travel through the following stops on the #{on_line} line: #{stops1.join(', ')}"
    puts "#{num_stops} stops in total."

  else
    stops1 = through_stops on_line, on_stop, "Union Square"
    stops2 = through_stops off_line, "Union Square", off_stop

    num_stops = stops1.length + stops2.length

    puts "You must travel through the following stops on the #{on_line} line: #{stops1.join(', ')}"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops on the #{off_line} line: #{stops2.join(', ')}"
    puts "#{num_stops} stops in total."
  end
end

plan_trip 'N', 'Times Square', '6', '33rd'
