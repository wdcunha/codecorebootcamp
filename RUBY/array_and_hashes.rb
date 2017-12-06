a = [1, 59, "Hey", "Yo", 200]
a[0]= 1
a[2]= "Hey"


b = [1,2,3,'a','b','c',false,true,nil]


# << = .push()   shovel operator

b.include?("boo")
# returns true if array b contains the string "boo"

b.length
b.count
b.size
# three different ways to get the number of elements in an array

a.flatten
a = [[1,2,3],[4,5,6],[7,8,9]]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
# collapses a multi-dimensional array

a.unshift()
a.insert(0,10)
# adds to the beginning of array

e << 10
e.push()
e.insert(-1,30)
e.concat([40])
#adds elements to the end of array

a.pop()
# removes from end

a.shift()
a.drop(n) # removes the first n elements of the array
# removes from beginning


my_array.each do |x|
  y = x*2
  puts y
end

a = [[1,2,3],[4,5,6],[7,8,9]]
a.each do |i|
  i.each do |x|
    puts x*x
  end
end


a = [[1,2,3],[4,5,6],[7,8,9]]
a.each do |i|
  i.each { |num| puts num*num }
end

names = ['james','steve','tam','john']
capitalized_names = []
names.each do |nam|
  puts name.capitalize
  capitalized_names << name.capitalize
end



print 'enter a sentence'
sent = gets.chomp
x = sent.split(" ")
y = []
x.each do |i|
  y << i.capitalize
end
z = y.join(" ")
puts z



print 'enter a sentence'
sent = gets.chomp
x = sent.split(" ")
y = []
x.each {|i| y << i.capitalize}
z = y.join(" ")
puts z


# .map allows you to iterate through an array and then create a new array
print 'enter a sentence'
sent = gets.chomp.split(" ")
puts sent.map {|i| i.capitalize}.join(" ")





# HASHES

my_hash = Hash.new
my_hash = Hash.new(0)
my_hash = {}

me = {
  "name" => "Paul",
  "school" => "CodeCore",
  "address" => "Vancouver",
  "skill" => ["javascript", "ruby"]
}

# to access values
me["name"] # returns Paul
me["name"] = "Paul Chang" # to write a value to a key
me["height"] = 5.7 # creates a new key height with value 5.7

me.keys # returns an array with the keys
me.values # returns an array with the values
me.each_key
me.each_value


# exercise
ratings = {"Vancouver"=>10, "Richmond"=>8, "Burnaby"=>7}

ratings.each_key {|i| puts i}
ratings.each_value {|i| puts i}


#exercise
my_hash = {"BC" => ['Vancouver','Richmond'], 'AB' => ['Edmonton','Calgary']}

my_hash.each do |prov,cities|
  puts "#{prov}: #{cities.join(", ")}"
end





# SYMBOLS

# colons will create a symbol
hello: # will create a symbol hello 
# symbols will retain the object ID

# access
hash[:hello]
