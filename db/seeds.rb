30.times do
  Blog.create(
    title: Faker::Movies::StarWars.vehicle,
    body: Faker::Movies::StarWars.quote,
    author: Faker::Movies::StarWars.character,
    picture: Faker::LoremPixel.image
  )
end
puts "30 blogs seeded"