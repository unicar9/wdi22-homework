class AddDirectorIdToFilms < ActiveRecord::Migration[5.0]
  def change
    add_column :films, :director_id, :integer
  end
end
