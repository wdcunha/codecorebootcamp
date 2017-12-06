arr = [1,2,3]
# the code between 'do' and 'end' is a 'block' in ruby
arr.each do |num|
  puts num
end

# you can also write simple blocks (one-liners) using curly brackets as in:
arr.each {|num| puts num}


# you can write your own method that take in blocks, here are examples:
def greetings
  puts 'hello'
  puts 'goodbye'
end

greetings # prints 'hello' 'goodbye' and returns nil


def greetings
  puts 'hello'
  yield if block_given? # this executes the block you pass to the method if you pass one
  puts 'goodbye'
end

greetings do
  puts '>>>>>'
  puts 'whats up'
  puts '>>>>>'
end
