class CreateCatogeriesSales < ActiveRecord::Migration[5.0]
  def change
    create_table :catogeries_sales do |t|
      t.integer :sale_id
      t.integer :catogery_id
    end
  end
end
