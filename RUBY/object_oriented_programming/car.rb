class Car
  def initialize(model,type,capacity)
    @model, @type, @capacity = model, type, capacity
  end

  def drive
    ignite_engine
    p 'car is driving'
  end

  def stop
    p 'car is stopping'
  end

  def park
    p 'car is parking'
  end

  def self.max_speed
    200
  end

  private
  def pump_gas
    p 'pumping gas'
  end

  def ignite_engine
    p 'engine ignited'
  end
end
