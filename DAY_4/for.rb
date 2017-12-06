for i in 1..100
  puts i
end


# exercise print numbers from entered number to 100

print 'enter a number'
num = gets.to_i
if num < 100
  for i in num..100
    puts i
  end
end


10.times {puts 'hello'}

1.is_a? Integer
1.is_a? String
