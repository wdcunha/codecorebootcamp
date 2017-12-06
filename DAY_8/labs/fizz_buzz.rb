class FizzBuzz
  def initialize(x,y)
    @x, @y = x,y
  end

  attr_accessor :x, :y

  def run
    for i in 1..100
      if i % @x == 0 && i % @y == 0
        p 'FizzBuzz'
      elsif i % @x == 0
        p 'Fizz'
      elsif i % @y == 0
        p 'Buzz'
      else
        p i
      end
    end
  end
end
