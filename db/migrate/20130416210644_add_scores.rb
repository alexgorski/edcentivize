class AddScores < ActiveRecord::Migration
  def change
  add_column :users, :right, :integer
  add_column :users, :wrong, :integer
  add_column :users, :score, :integer
  end

end
