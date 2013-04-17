class User < ActiveRecord::Base
  attr_accessible :name, :operator, :level, :right, :wrong, :score
end
