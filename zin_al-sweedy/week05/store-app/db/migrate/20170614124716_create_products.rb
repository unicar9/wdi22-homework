class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :number
      t.string :quantity
      t.string :price

      t.timestamps
    end
  end
end
