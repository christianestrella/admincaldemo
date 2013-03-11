class CreateTipoGastos < ActiveRecord::Migration
  def change
    create_table :tipo_gastos do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
