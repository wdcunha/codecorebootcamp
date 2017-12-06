loop do
  print 'say a word: '
  word = gets.chomp
  break if word == 'exit'
  puts "you said: #{word}"
end


x = 0
loop do
  print 'enter a number'
  num = gets.chomp
  break if num == 'exit'
  num_converted = num.to_f
  x += num_converted
end
puts "the sum is #{x}"
