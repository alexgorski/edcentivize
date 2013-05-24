class User < ActiveRecord::Base
  attr_accessible :name, :operator, :level, :right, :wrong, :score

  def self.make_leaders(level)
    leaders = User.where(:level=>level).all.sort_by! {|u| u[:right]}.reverse
  end
  
  def find_user_rank
    leaders = User.make_leaders(self.level)
    leaders.collect! {|l| l.right}
    leaders.uniq!
    #once i have the set of unique scores, get the size of the set and 
    #find out what index number self is in. then return score and rank
    #i.e., "your score of 22 was third best"
    i = (leaders.find_index(self.right) + 1).ordinalize
    return i

  end

end