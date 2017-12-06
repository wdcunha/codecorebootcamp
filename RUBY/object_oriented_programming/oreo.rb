require './cookie.rb'

# - here the class 'Oreo' inherits from the Cookie class which means Orea will have access to all methods and variables: public, private, class, instance.. etc
class Oreo < Cookie
  attr_accessor :filling_type

# - by defining a method with the same name as a method in the parent class we are 'overriding' the method which means we are redefining the method just for instances of the Oreo class
  def details
# - using the 'super' keyword we're calling a method with the same name in the superclass (or parent class), in this case we are calling the 'details' method in the 'Cookie' class
    p super
    p "This is a #{filling_type} Oreo cookie"
  end
end
