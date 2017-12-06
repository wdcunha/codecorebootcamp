# FIBONACCI

print 'enter a number'
num = gets.chomp.to_i

fibseq = []
  for i in 0..num
    if i == 0
      fibseq.push(0)
    elsif i == 1
      fibseq << 1
    else
      fibseq.push(fibseq[i-1] + fibseq[i-2])
     end
  end
fibseq



# REVERSE ARRAY METHOD
my_array = [1,2,3,4]

def reverseArr(array)
  revArr = []
  array.each do |i|
    revArr.unshift(i)
  end
  revArr
end
reverseArr(my_array)



# SORT array


a = (1..15).to_a.shuffle

a.size.times.each do |x|
 i=0
 a.each do |b|
   if b > a[i+1]
     a[i],a[i+1] = a[i+1],a[i]
   end
   i+=1 if i < a.size-2
 end
end
print a



# Pascal's Triangle
print ('enter a number')
rows = gets.chomp.to_i


# LONG QUESTIONS
questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]


# GREATER THAN 10
my_array = [1,4,5,23,14,"Hello there", false, nil]
new_array = []
my_array.each do |i|
  if i.class == Fixnum && i>10
    new_array.push(i)
  end
end
new_array


# WORDS FROM USER

a = []
counter = 0
loop do
  print 'enter a string: '
   string = gets.chomp
  if string == "exit"
    break
  else
    a.push(string)
    counter += 1
  end
end
a.map! {|i| i.capitalize}
print "You've entered #{counter} strings \n"
for x in 1..a.length
  print "#{x}. #{a[x-1]} \n"
end  
