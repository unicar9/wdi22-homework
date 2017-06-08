# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


puts "distance (miles): "
distance = gets.to_f

puts "miles per gallon: "
milles_per_gallon = gets.to_f

puts "price per gallon: "
price_per_gallon = gets.to_f

puts "speed in miles per hour: "

speed_in_miles_per_hour = gets.to_f

trip_time = distance / speed_in_miles_per_hour

cost = distance / milles_per_gallon * price_per_gallon

puts "trip time is #{trip_time} hours"
puts "trip cost is #{cost} dollars"
