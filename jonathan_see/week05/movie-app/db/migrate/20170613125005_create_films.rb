class CreateFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :films do |t|
      t.text :title
      t.text :country
      t.text :running_time
      t.text :release_date
      t.text :image

      t.timestamps
    end
  end
end
