class CookieBag
  attr_accessor :capacity

  def initialize(capacity)
    @capacity = capacity
    @cookies = []
  end

  def add(cookie)
    if @cookies.length >= @capacity
      p 'no room left'
    else
     @cookies.push(cookie)
  end

  def take
    if @cookies.length == 0
        p 'no cookies left'
      else
        @cookies.pop
    end
  end

  def details
    p "this bag has #{@cookies.length} cookies, here are their details: "
    @cookies.each do |cookie|
      p cookie.details
    end
  end
end
