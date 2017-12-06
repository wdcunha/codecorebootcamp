require './bone.rb'
class Dog
  # attr_accessor :capacity

  def initialize
    @mybones = []
  end

  def take(bone)
    if !bone.is_a? Bone
      p 'that wasnt a bone'
    elsif @mybones.length >= 3
      p 'I cant hold any more bones'
    else
     @mybones.push(bone.bonesize)
    end
  end

  def eat
    if @mybones.length == 0
        p 'no bones left'
      else
        p "yum, i ate a #{@mybones[-1]} bone"
        @mybones.pop
    end
  end
end
