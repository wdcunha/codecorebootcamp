require './animals.rb'

class Cat < Animal
  def eat
    p super
    'fish are yummy'
  end
end
