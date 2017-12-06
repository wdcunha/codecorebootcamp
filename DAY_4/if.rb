print 'give me a number between 0 and 100'
num = gets.to_i

if num > 80
  puts 'the number is large'
elsif num > 50
  puts 'the number is big'
elsif num > 30
  puts 'the number is medium'
else
  puts 'the number is small'
end


# exercise car year

print 'what is the year of your car?'
year = gets.to_i

if year > 2017
  puts 'your car is from the future'
elsif year >= 2010
  puts 'your car is new'
elsif year >= 2000
  puts 'your car is old'
else
  puts 'your car is very old'
end
