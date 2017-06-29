class RemoveStringFromDirectors < ActiveRecord::Migration[5.0]
  def change
    remove_column :directors, :string 
  end
end
