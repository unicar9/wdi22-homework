class CreateCatogeriesProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :catogeries_products do |t|
      t.integer :catogery_id
      t.integer :product_id
    end
  end
end
