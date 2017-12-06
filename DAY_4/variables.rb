# variables in Ruby follow the snake case convention, for instance

first_name = "Tam"

# remember that variable names can contain numbers but numbers can't be the first character in the variables

a1 = "Jon"

# this is called screaming case and it is used to define constants in your application where you don't expect the value to change
MAX_NUMBER = 10


a = 10
a.class #returns Integer
b = 'hello'
b.class #returns String
a.object_id #returns memory location of a
b.uppercase #returns b all capped

name = 'tam'
"hello #{name}" # returns hello tam, use "" for string interpolation

name = 'john'
name.capitalize # returns John, but doesn't change variables
name.capitalize! # returns John and changes variable name to John as well


# exercise: replace double characters with single 'hello' -> 'helo'
word = 'hello'
word.squeeze # returns 'helo'


#look through ruby-docs for more methods etc.
