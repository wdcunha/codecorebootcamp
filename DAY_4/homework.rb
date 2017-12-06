# PRINT 10 TO 20 USING FOR LOOP
for i in 10..20
  puts i
end


# Use until loop to print 5 to 15 (both numbers included)
i = 5
until i == 16
  print i
  i += 1
end


# Ask user for a number then print out the number multiplied by 5 and then the same number added to itself.

print 'enter a number'
num = gets.to_i
puts num*5
puts num + num

# Each Character Swapped Case
string = 'Hello'
string2 = string.swapcase
string2.split("").each do |i|
  puts i
end


# Write the numbers from 50 to 15 using downto
# Write the letters from "B" to "O" using upto
50.downto(15) {|i| puts i }
"B".upto("O") {|i| puts i }


# Write code that takes a number and then prints the power of three of that number if it's divisible by three and it prints the power of two if it's divisible by 2 and prints the number itself otherwise.
print 'enter a number'
num = gets.to_i
if num%3 == 0 && num%2 != 0
  puts num**3
elsif num%2 == 0 && num%3 != 0
  puts num**2
else
  puts num
end


# Find a way to get a substring that contains the last 4 characters.
string = "hello world"
puts string[-4, 4]


# Find out how to get PI in Ruby and then write a formula using that to convert degrees to radian.
print 'enter an angle in degrees from 0 to 360'
degree = gets.to_f
puts "your angle is #{degree * Math::PI / 180} radians"


# Write a code that takes user's input and then prints out "Yes it has C" if entered input contains the letter "C" (upper or lower case). And it prints "There is no C" if it doesn't.
print 'enter a string'
string = gets.chomp
converted_string = string.downcase

if converted_string.include? "c"
   puts "there is a c"
else
  puts "there is no c"
end


# Write a method that checks whether a passed String is a palindrome or not. A palindrome is a string that reads that same both ways for instance: sugnangus


def test(string)
    reverse_string = string.reverse
    if string == reverse_string
      puts "#{string} is a palindrome"
    else
      puts "#{string} is not a palindrome"
    end
end
test "kayak"
