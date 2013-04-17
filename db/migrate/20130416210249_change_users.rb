class ChangeUsers < ActiveRecord::Migration
  def change
  rename_column :users, :email, :operator
  add_column :users, :level, :string
  end

end
