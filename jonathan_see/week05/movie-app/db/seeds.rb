# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Running DB seeds..."

Director.destroy_all
Film.destroy_all

d1 = Director.create({
   name: 'Ang Lee',
   dob: '1954/10/23',
   nationality: 'Taiwanese',
   period: '1984',
   image: 'http://cdn.collider.com/wp-content/uploads/Ang-Lee1.jpg'
})

d2 = Director.create({
   name: 'Alejandro Inarritu',
   dob: '1963/08/15',
   nationality: 'Mexican',
   period: '1984',
   image: 'http://www.cheatsheet.com/wp-content/uploads/2015/02/alejandro-gonza%CC%81lez-in%CC%83a%CC%81rritu.jpg'
})

d3 = Director.create({
   name: 'Danny Boyle',
   dob: '1956/10/20',
   nationality: 'British',
   period: '1980',
   image: 'https://en.wikipedia.org/wiki/Danny_Boyle#/media/File:Danny_Boyle_Red_Carpet_T2_Trainspotting_Berlinale_2017_02.jpg'
})

f1 - Film.create({
    title: 'Slumdog Millionaire',
    country: 'United Kingdom',
    running_time: '120',
    release_date: '2009/01/09',
    image: 'https://d3ddkgxe55ca6c.cloudfront.net/assets/a/3c/cf/130765-ml-354743.jpg'
  })

f2 - Film.create({
    title: 'Life of Pi',
    country: 'United States',
    running_time: '127',
    release_date: '2012/11/21',
    image: 'http://www.impawards.com/2012/posters/life_of_pi_ver2_xlg.jpg'
  })

f3 - Film.create({
    title: 'Biutiful',
    country: 'Spain',
    running_time: '147',
    release_date: '2010/12/03',
    image: 'http://s.cdon.com/media-dynamic/images/product/movie/blu-ray/image0/biutiful_blu-ray_nordic-13662929-frntl.jpg'
  })
