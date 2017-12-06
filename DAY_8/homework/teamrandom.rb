class TeamRandom
  def initialize (name_array, teams)
    @name_array, @teams = name_array, teams
    @newteams = {}
  end

  def randomize
    @name_array.shuffle
  end

  def maketeams
    for i in 1..teams
      @newteams["team#{i}"] = []
    end

    @newteams.each do |teams|
      @newteams[@teams].push(@name_array[0])
      @name_array.shift
    end
  end
end
