# ARRAY FROM HASH
bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }

bc_cities_popuation.each {|city,population| population/1000}


# FACTORIAL
def factorial(num)
  if num == 1
    return 1
  else num * factorial(num -1)
  end
end

factorial(5)


def factorial(num)
  result = 1
  for i in 1..num
    result = result * i
  end
  p result
end

factorial(5)

# COMBINE KEYS AND VALUES
my_hash = {:a => "123", :b => "345", :c => "678", :d => "910"}
def combine(hash)
  arr = []
  hash.each do |key,value|
    arr.push("#{key.to_s}" + "#{value}")
  end
  p arr
end

combine(my_hash)



# ASK USER FOR INFORMATION
my_hash = {}
print ('enter your first name')
my_hash[first_name] = gets.chomp
print ('enter your last name')
my_hash[last_name] = gets.chomp
print ('enter your age')
my_hash[age] = gets.to_i

loop do
  print ('what cities have you been to')
  city = gets.chomp
  if city = 'done'
    break
  else
    my_hash[cities].push(city)
  end
  p my_hash
end


# TEMPERATURE COMPARISON
average_temperature_in_c = {vancouver: 13.7, edmonton: 8.5, Calgary: 10.5}

temp_in_f = {}
average_temperature_in_c.each do |city,ctemp|
  temp_in_f[city] = (ctemp * (5/9.0) + 32.0)
end
temp_in_f  
