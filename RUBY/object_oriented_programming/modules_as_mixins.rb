module HelperMethods
  def name_display
    name.squeeze(' ').capitalize
  end
end

class Car
  attr_accessor :name
  include HelperMethods
end

class User
  attr_accessor :name
  include HelperMethods
end   
