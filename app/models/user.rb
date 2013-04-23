class User < ActiveRecord::Base
  attr_accessible :name, :operator, :level, :right, :wrong, :score

  def self.make_leaders(level)
    leaders = User.where(:level=>level).all.sort_by! {|u| u[:right]}.reverse
  end
end
