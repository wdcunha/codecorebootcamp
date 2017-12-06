10/4  # will give you 2 (whole integers)
10.0/4  # will give you 2.5
10/4.0  # will give you 2.5

# convert string to a number
"123.9".to_i  # will give you 123
"123.9".to_f  # will give you 123.9

4.to_s    # will convert to string and give '4'

10%3  # will give 1

4.odd?  # will return 'false'

# adding an ? at the end of a method will usually return a 'true' or 'false'


# EXERCISE: ask user for two numbers then return multiplication result
print 'enter first number'
num1 = gets.to_f
print 'enter second number'
num2 = gets.to_f
puts "the product is #{num1*num2}"
