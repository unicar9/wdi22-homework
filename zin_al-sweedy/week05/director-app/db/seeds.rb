# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running DB seeds"

Director.destroy_all
Movie.destroy_all

d1 = Director.create({
  name: "Aaa Bbb",
  age: 69,
  period: "19th Century",
  image: "https://goo.gl/images/934OFX"
  })

d2 = Director.create({
  name: "Caa Dbb",
  age: 67,
  period: "20th Century",
  image: "https://goo.gl/images/90dd46"
})

d3 = Director.create({
  name: "Crigo Bold",
  age: 67,
  period: "21th Century",
  image: "https://goo.gl/images/t6Md3E"
})

m1 = Movie.create({
  title:"Green House",
  year: "1987/06/14"
})


m2 = Movie.create({
  title:"Horrible Homes",
  year: "1966/08/17"
})
m3 = Movie.create({
  title:"Horrible1 Homes",
  year: "1962/08/07"
})
m4 = Movie.create({
  title:"Horrible2 Towns",
  year: "1965/08/19"
})

d1.movies << m1
d2.movies << m2
d3.movies << m3 << m4


puts "Done!"
