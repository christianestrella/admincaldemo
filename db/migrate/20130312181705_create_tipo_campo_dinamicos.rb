class CreateTipoCampoDinamicos < ActiveRecord::Migration
  def change
    create_table :tipo_campo_dinamicos do |t|
      t.string :name
      t.text :description
      t.text :value
      t.string :input_type
      t.string :data_type

      t.timestamps
    end
  end
end
