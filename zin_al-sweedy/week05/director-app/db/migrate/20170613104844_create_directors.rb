class CreateDirectors < ActiveRecord::Migration[5.0]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :string
      t.integer :age
      t.string :period
      t.text :image

      t.timestamps
    end
  end
end
