class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :style
      t.string :tastingnotes
      t.string :image
      t.string :abv

      t.timestamps
    end
  end
end
