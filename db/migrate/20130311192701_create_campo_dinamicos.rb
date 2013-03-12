class CreateCampoDinamicos < ActiveRecord::Migration
  def change
    create_table :campo_dinamicos do |t|
      t.string :name
      t.text :description
      t.string :value_type
      t.string :input_type
      t.string :default_value
      t.belongs_to :tipo_evento

      t.timestamps
    end
    add_index :campo_dinamicos, :tipo_evento_id
  end
end
