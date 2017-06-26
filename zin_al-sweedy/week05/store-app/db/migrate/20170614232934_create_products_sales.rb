class CreateProductsSales < ActiveRecord::Migration[5.0]
  def change
    create_table :products_sales do |t|
      t.integer :sale_id
      t.integer :product_id
    end
  end
end
