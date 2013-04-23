class LeadersController < ApplicationController
  def index
    @level1 = User.make_leaders(1)
    @level2 = User.make_leaders(2)
    @level3 = User.make_leaders(3)
    @level4 = User.make_leaders(4)
    @level5 = User.make_leaders(5)
  end
end
