require './animals.rb'

class Dog < Animal
  def woof
    p 'woof'
  end
  def eat
    p super
    'bones are yummy '
  end
end
