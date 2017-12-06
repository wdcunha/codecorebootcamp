# HASH OF INFORMATION
my_hash = {}
print ('enter your first name')
my_hash['First Name'] = gets.capitalize.chomp
print ('enter your last name')
my_hash['Last Name'] = gets.capitalize.chomp
print ('enter your city of birth')
my_hash['City of Birth'] = gets.capitalize.chomp
print ('enter your age')
my_hash['Age'] = gets.to_i


my_hash.each do |key,value|
  p "Your #{key} is #{value}"
end



# FREQUENCY OF numbers
arr = [1,2,3,4,4,4,2,3,3,3]

def frequency(array)
  my_hash = Hash.new(0)
  array.each{|key| my_hash[key] += 1}
  puts hash
end
frequency(arr)


# MOST RECURRING Letter
print ('enter a string')
letters = gets.chomp.downcase.gsub(/\s+/, "").split("")

hash = Hash.new(0)
letters.each{|key| hash[key] += 1}

max = hash.values.max
print "#{hash.max[0]} is the most occuring letter"



# PLUCK


def pluck(array, key_name)
  plucked = []
  array.each do |hash|
    hash.each do |key, value|
      if key == key_name
        plucked.push(value)
      elsif key != key_name && hash.keys.count == 1
        plucked.push(nil)
      end
    end
  end
  p plucked
end

pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b)

# def pluck(array,key)
#   array.map{|hash| hash[key]}
# end

pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a)


# FIND THE REPEATED NUMBER
a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,11]
b = a.uniq
sum1 = 0
sum2 = 0
a.each { |a| sum1+=a }
b.each { |a| sum2+=a }

p sum1 - sum2

a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,12]
b = a.uniq
p (a.inject(0, &:+) - b.inject(0, &:+))



a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,12]
a.each do |i|
  if a.count(i) > 1
    p i
    break
  end
end
