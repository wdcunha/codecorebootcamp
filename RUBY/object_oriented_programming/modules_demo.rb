# - namespace usage of Ruby modules


module Computer
  class Apple
    def initialize(model)
    end
  end
end

module Fruit
  class Apple
    def initialize(type, color)
    end
  end
end

imac = Computer::Apple.new('iMac')
gala = Fruit::Apple.new('Gala','red')      
