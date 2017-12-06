require './labbird.rb'
require './HelperMethods.rb'


class LabCat < LabBird
  include HelperMethods
  def catch
    chance = rand(1..2)
    if chance == 1
      p "#{@name} caught the bird"
    elsif chance == 2
      p "#{@name} missed the bird"
    end
  end

  def catch1
    if random_number == 1
      p "caught"
    elsif random_number != 1
      p "missed"
    end
  end

  def sim
    100.times do
      catch
    end
  end
end
