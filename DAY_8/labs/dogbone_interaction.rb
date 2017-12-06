require './bone.rb'
require './dogbone.rb'

b1 = Bone.new 'big'
b2 = Bone.new 'small'
b3 = Bone.new 'medium'
b4 = Bone.new 'big'

winter = Dog.new
winter.take b1
winter.take b2
winter.take b3
winter.take b4

winter.eat
winter.eat
winter.eat
winter.eat
