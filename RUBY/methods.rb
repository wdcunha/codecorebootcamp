const helpFunction = { add: function(a,b) { return a + b } }

# if the function is the value for a key inside an object, we call it a METHOD

UNLESS SET OTHERWISE, RUBY METHODS RETURN THE LAST LINE
# we use the 'def' keyword to define ruby methods
# we use the same naming convention as variables (snake case)
# Ruby methods always return the last line (expression) in it
# a & b are called arguments or parameters
def add(a,b)
  a + b
end

puts add(3,4)

# in Ruby you can skip the brackets in most cases
puts add 4,5

# in Ruby, arguments (or parameters) are required unless you specify a default value
def multiply(a, b=1)
  a * b
end

puts multiply 5,6
puts multiply 5 # will you the set value of '1' for b


# EXERCISE

def greet(name)
  "Hello #{name}"
  # p "Hello #{name}" prints and returns value
  # puts "Hello #{name}" prints new line and returns nil
  # print "Hello #{name}" prints and returns nil
end

puts greet(Paul)


# EXERCISE

def expo(x,y)
  p x**y
end

expo(2,4)


# EXERCISE

def by_five?(num)
  num%5==0
end
by_five?(10)



# we use * to take variable number of arguments which will come as an array
def multiply(*numbers)
  result = 1
  numbers.each do |num|
    result *= num
  end
  result
end


#EXERCISE
def largest(*numbers)
  result = 0
  numbers.each do |num|
    if num > result
      result = num
    end
  end
  p result
end

largest 1,5,10,23,4,9

def largest(*numbers)
  numbers.max
end

largest 1,5,10,23,4,9



# HASH as last argument

def my_method(a,b ={})
  puts "a is #{a}"
  be.each do |k,v|
    puts "key is #{k} value is #{v}"
  end
end

my_method('Hello', {a:1,b:2,c:3})
# brackets are optional
my_method 'Hello', {a:1,b:2,c:3}
# if the last argument is a hash, then you can omit the curly brackets for that argument
my_method 'Hello', a:1,b:2,c:3
