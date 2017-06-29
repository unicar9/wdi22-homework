class CreateBreweries < ActiveRecord::Migration[5.0]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :website
      t.string :philosophy

      t.timestamps
    end
  end
end
