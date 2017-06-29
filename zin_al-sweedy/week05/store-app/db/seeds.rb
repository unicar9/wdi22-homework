# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Sale.destroy_all
s1 = Sale.create number: "1000"
s2 = Sale.create number: "2000"
s3 = Sale.create number: "3000"
s4 = Sale.create number: "4000"
s5 = Sale.create number: "5000"
s6 = Sale.create number: "6000"


puts "Created #{ Sale.all.length } Sale."
Product.destroy_all
p1 = Product.create name: "P1"
p2 = Product.create name: "P2"
p3 = Product.create name: "P3"
p4 = Product.create name: "P4"
p5 = Product.create name: "P5"
p6 = Product.create name: "P6"

puts "Created #{ Product.all.length } products."



p1.sales << s1
p2.sales << s3 <<  s2

s4.products << p3
s5.products << p4 << p5
s6.products << p6


puts "Created #{ Catogery.all.length } catogeries."
Product.destroy_all
c1 = Catogery.create name: "C1"
c2 = Catogery.create name: "C2"
c3 = Catogery.create name: "C3"
c4 = Catogery.create name: "C4"
c5 = Catogery.create name: "C5"
c6 = Catogery.create name: "C6"

puts "Created #{ Catogery.all.length } catogeries."


Catogery.all.each do |c|
  puts '-' * 50
  puts "Catogery #{ c.name } has products:"
  puts c.products.pluck :name
end

c1.products << p1 << p3
c2.products << p2 << p4
p2.catogeries << c2 << c4
p3.catogeries << c1 << c3

Sale.first.catogeries.uniq.pluck :name
s1.catogeries << c1 << c3 << c5 << c6
c4.sales << s2 << s3 << s5 << s6

Sale.all.each do |s|
  puts '-' * 50
  puts "Sale #{s.number} has catogeries:"
  puts s.catogeries.pluck :name
end


puts "Done!"
