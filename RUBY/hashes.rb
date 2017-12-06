user_information = Hash.new('NOT PROVIDED') # creates hash with default value 'NOT PROVIDED'

user_information['first_name'] = 'tam' # creates key 'first_name' with value 'tam'


students = [
  { 'name' => 'John', 'age' => 50, 'hobbies' => ['soccer','piano']},
  { 'name' => 'Alex', 'age' => 40, 'hobbies' => ['hockey','video games']}
]

students[0]['hobbies'][1] # will return 'piano'

# symbols are immutable. cannot change the spot in memory

a = 'hello'
b = 'hello'
a.object_id != b.object_id

c = :hello
d = :hello
c.object_id = d.object_id


personal_info = {first_name: 'Tam', last_name: 'Kbeili'}
personal_info.length = 2
personal_info[:first_name] # will return 'Tam'
personal_info['first_name'] # will return nil, symbols are not strings


# EXERCISE
bc_cities_population = {
  vancouver: 2135201,
  victoria: 316327,
  abbotsford: 149855,
  kelowna: 141767,
  nanaimo: 88799,
  white_rock: 82368,
  kamloops: 73472,
  chilliwack: 66382
}


bc_cities_population.each do |city,population|
  if population > 100000
    puts "#{city} is large"
  else
    puts "#{city} is small"
  end
end



# exercise

my_array = ['hello','greetings','hola','hi']
my_hash = {}

my_array.each do |i|
  my_hash[i.to_sym] = i.length
end
print my_hash


# exercise find frequency of word in a paragraph

a.downcase.gsub(/\W\w/,' ').split(' ')

a = "hello my name is paul i like dogs i like rabbits i dont like cats"
b = a.downcase.split(" ")
c = Hash.new(0)
b.each do |word|
  c[word] += 1
end
print c
