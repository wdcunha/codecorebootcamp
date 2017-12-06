# PRINT LETTERS
for i in "a".."z"
  puts i
end


num = 1
for i in "a".."z"
  puts i * num
  num += 1
end


# 3 QUESTIONs
score = 0
print 'what is not a color: 1. dog, 2. blue, 3. red'
ans1 = gets.chomp.to_i
score += 1 if ans1 == 1

print 'what is a color: 1. cat, 2. hippo, 3. pink'
ans2 = gets.chomp.to_i
score += 1 if ans2 == 3

print 'what is 2+2: 1. 4, 2. 3, 3.1'
ans3 = gets.chomp.to_i
score += 1 if ans3 ==1

puts "you got #{score} out of 3 correct"


# PYRAMID

character = 'O'

puts "enter a number"
rows = gets.chomp.to_i
character_count = 1
rows.times do
	puts (character * character_count).center(100)
	character_count += 1
end

# BROOKLIN's PYRAMID

puts 'give me a number'
n = gets.to_i
for j in 1..n
  (n+1-j).times {print " "}
  j.times {print "#{0}"}
  puts
end


# Ask the user for for three inputs and then print out all the possible permutations for the user inputs. For instance if the users inputs `a`, `b` and `c` you should print out:
$count = 0
def permute(permuted_string, original_string, done_array)
    if permuted_string.length == original_string.length
        $count = $count+1
        puts "#{$count}  #{permuted_string}"
    else
        (0..original_string.length-1).each do |i|
        if !done_array[i]
                            done_array[i] = true
                            permute(permuted_string+original_string[i], original_string, done_array)
                            done_array[i] = false
          end

            end
    end
end
puts "Please enter the string for permutations"

input = gets.chomp
done_array = Array.new(input.length, false)
permute("", input, done_array)





def permute(permuted_string, original_string, done_array)
    if permuted_string.length == original_string.length
        puts "#{permuted_string}"
    else
        (0..original_string.length-1).each do |i|
        if !done_array[i]
            done_array[i] = true
            permute(permuted_string+original_string[i], original_string,done_array)
            done_array[i] = false
          end

            end
    end
end
puts "Please enter the string for permutations"

input = gets.chomp
done_array = Array.new(input.length, false)
permute("", input, done_array)


# PRIME numbers
require 'prime'
print 'enter a number'
num = gets.chomp.to_i

Prime.each(num) do |prime|
  print "#{prime} "
end
