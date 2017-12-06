# Square of Arrays

array = [[2,3,4], [5,6,7], [6,7,8]]

array.map do |i|
  i.map {|x| x*x}
end


# Sort book names
a = []
loop do
  print 'enter a book name: '
  bookName = gets.chomp
  if bookName == "exit"
    break
  else
    a.push(bookName)
  end
end
a.map! {|i| i.capitalize}
a.sort!
puts a

# Reverse String Reverse Method

greeting = "hello"
rev = []
splitrev = greeting.split("")
splitrev.each do |i|
  rev.insert(0, i)
end
puts rev.join("")


# Letter Combos
string = "abcdef"
letters = string.split("")
array = []
for i in 0...letters.length-1
  array << letters.slice(i,2)
end
array2 = []
array.each do |i|
  array2.push(i.join(""))
end
array2
