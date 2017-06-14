# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running DB seeds"

Brewery.destroy_all
Beer.destroy_all

brewery1 = Brewery.create({
    name: "Balter",
    location: "14 Traders Way, Currumbin QLD 4223",
    image: "http://theraiders.com.au/wp-content/uploads/2016/09/day-drinking-Gold-Coast_1.jpg",
    website: "http://www.balter.com.au/",
    philosophy: "At Balter, we’re all about celebrating that enjoyment with you, because beer is more than just a drink: it draws tribes together and is a companion to many great moments in life.

    Our #1 philosophy is that your taste buds come first. A neat can and cool place to hang are great, but if our brews don’t tickle your tongue and put a grin on your head then we haven’t done our job."
})

brewery2 = Brewery.create({
    name: "Four Pines",
    location: "9 Unit 4G/13 Winbourne Rd, Brookvale NSW 2100",
    image: "http://images.smh.com.au/ftsmh/ffximage/2010/01/13/4pinesbrewing_wideweb__470x300,0.jpg",
    website: "http://4pinesbeer.com.au/",
    philosophy: "We make beer because we love beer. Loving beer makes it easy to show all your mates that you love them too. Then you get lucky, and the amount of mates you have grows, and now you have a diverse community to love. Then you hug a pine tree, which gives you pine-rash, which you wear with pride. It’s all about where we are, who we’re with and how much we love our world. It’s about measuring success in the smiles on our faces, the taste of our beer and how well we can treat our planet so that the fun we have today is still on offer when we’re old and grey.

    Save The Pines is our commitment to our environmental and social responsibility. Check out our report to see what we’ve been up to and stay tuned for more."
})

brewery3 = Brewery.create({
    name: "Stone & Wood",
    location: "4 Boronia Pl, Byron Bay NSW 2481",
    image: "https://smudgeeats.com.au/wp-content/uploads/2016/10/Stone-Wood_Brewery_Byron_A.Davenport-2-720x480.jpg",
    website: "https://www.stoneandwood.com.au/",
    philosophy: "When we founded Stone & Wood, we set out to create a brewery that reflects the best of what this industry is really about - to be ingrained in the local community.

    We brew beer that reflects our philosophy – something that brings to life the combination of what was great about village breweries, and what a contemporary business should be.

    Traditionally, a brewery didn’t just supply fresh beer to the locals, it could also be relied upon to help support the wider community. Inspired by this, we established in 2013 our community-focused initiative ‘Ingrained’ to keep us true to our role as the local brewer and to support the people who support us.
    "
})

beer1 = Beer.create ({
    style: "XPA",
    tastingnotes: "The XPA – a contemporary tag meaning extra pale ale that has been interpreted in different ways by different brewers – layers on the tropical, floral hops (US varieties Citra, Centennial and Amarillo) to deliver heaps of enticing fruity aromas. There's plenty of those flavours in there too yet they're delivered with such balance that the bitterness is barely perceptible, resulting in a smooth, clean refreshing drop that barely touches the sides.",
    image: "http://cdn.shopify.com/s/files/1/1021/9525/products/Balter-Brewing-Company-XPA_grande.jpg?v=1485066550",
    abv: "5.0%",
    brewery: brewery1
})

beer2 = Beer.create ({
    style: "Alt Brown Ale",
    tastingnotes: "There's nothing ostentatious about ALT. Instead, it's a well structured, medium-bodied beer that keeps its hop character in the background and instead delivers subtle layers of toasted, nutty, chocolatey goodness in a tight, sessionable fashion. Tasty.",
    image: "http://cdn.shopify.com/s/files/1/1021/9525/products/Balter-Brewing-Company-Alt-Brown_grande.jpg?v=1485066463",
    abv: "4.8%",
    brewery: brewery1
})

beer3 = Beer.create ({
    style: "Stout",
    tastingnotes: "A dry Irish style stout, presenting almost black & bearing a generous tan head. Aromas of coffee, chocolate and caramel are matched with a full bodied mouthfeel, a smooth finish and rounding bitterness. Currently being tested to become the first certified ‘space beer’ in the world!",
    image: "http://4pinesbeer.com.au/wp-content/uploads/stout-glass.png",
    abv: "5.1%",
    brewery: brewery2
})

beer4 = Beer.create ({
    style: "Kolsch",
    tastingnotes: "German style golden ale that is light straw in colour. Aromas of lemon/lime prelude a light, malty palate. Finishing crisp and clean with hints of citrus and spice.",
    image: "http://4pinesbeer.com.au/wp-content/uploads/kolsch-glass.png",
    abv: "4.6%",
    brewery: brewery2
})

beer5 = Beer.create ({
    style: "Garden Ale",
    tastingnotes: "It’s a unique beer that has a floral citrus aroma, clean malt character with an easy bitter finish.",
    image: "http://www.stoneandwood.com.au/stocms/wp-content/uploads/2016/02/Stone-Wood-330mL-3.5-Garden-Ale-Bottle-SPRITZED_-A4-CMYK.png",
    abv: "3.5%",
    brewery: brewery3
})

beer6 = Beer.create ({
    style: "Jasper Ale",
    tastingnotes: "Our Jasper Ale reflects the red volcanic soil of our hinterland and is brewed from a blend of pale and crystal malts. Jasper Ale is deep red, has a rich malt character and is well balanced with a firm spicy hop bitterness.",
    image: "http://www.stoneandwood.com.au/stocms/wp-content/uploads/2016/02/jasper-web.png",
    abv: "4.7%",
    brewery: brewery3
})
