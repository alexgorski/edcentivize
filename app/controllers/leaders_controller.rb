class LeadersController < ApplicationController
  def index
    @level1 = User.where(:level=>1).all.sort_by! {|u| u[:right]}.reverse
    @level2 = User.where(:level=>2).all.sort_by! {|u| u[:right]}.reverse
    @level3 = User.where(:level=>3).all.sort_by! {|u| u[:right]}.reverse
    @level4 = User.where(:level=>4).all.sort_by! {|u| u[:right]}.reverse
    @level5 = User.where(:level=>5).all.sort_by! {|u| u[:right]}.reverse
  end
end
