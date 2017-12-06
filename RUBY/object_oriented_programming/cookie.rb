# - we define a class in ruby using the 'class' keyword
# - class names are constant which means the name should start with a capital letter
# - the convention is to use CamelCase for naming classes
# - the convention is to name the file with snake_case version of the class name
# - a best practice is to keep one class in one file
# - when using pry, you can load file using load './cookie.rb' or require './cookie.rb'
# - require will not load the file if it has been 'required' or loaded already. this is useful when you have a big project so if the file is loaded once no need to reload it again
# - 'load' is useful when you're developing and making lots of changes to the file since it will force load the file even if it's been previously loaded
# - to create an object (or instance) from a class we use:
# - 'c = Cookie.new' c is an object
# - Objects are instances of classes

class Cookie
  def initialize(sugar,butter)
    @sugar = sugar
    @butter = butter
    p 'creating a cookie object'
  end

  def sugar
    @sugar
  end

  # def set_sugar(new_amount)
  #   @sugar = new_amount
  # end

  # - the '=' at the end of the method changes the way the method works, we're now able to call the  method and set a new value with: c.sugar = 12
  # def sugar = (new_amount)
  #   @sugar = new_amount
  # end
  # - the method above is equivalent to this special method below

  attr_accessor :flour

  def details
    "this cookie has #{@sugar}g of sugar and #{butter}g of butter"
  end

  # - the 'eat' method below is considered a 'public instance' method, which means you can call the method from outside the class (public) and it means that you call the method on objects
  def eat
    "eating the cookie that was baked for #{@t} minutes"
  end
  def bake_and_eat(time)
    # - you define instance variables by putting an '@' sign before the variable name. you can define an instance variable anywhere. if you haven't set the variable before it will automatically be defined as 'nil' and it won't give you 'undefined variable or method' error
    @t = time
    p bake(time)
    p eat
    'baked and ate the cookie'
  end
  def self.info # - this is a 'class method', calls method class itself
    'this is the Cookie class'
  end

  # - all methods defined after the 'private' keyword are considered private
  private
  # - private methods can be called from other public or private methods defined within this class
  def bake(time)
    "baking the cookie for #{time} minutes"
  end
end
