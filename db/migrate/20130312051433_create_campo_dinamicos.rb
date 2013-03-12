class CreateCampoDinamicos < ActiveRecord::Migration
  def change
    create_table :campo_dinamicos do |t|
      t.string :name
      t.text :description
      t.text :value
      t.string :input_type
      t.string :value_type
      t.belongs_to :tipo_evento

      t.timestamps
    end
    add_index :campo_dinamicos, :tipo_evento_id
  end
end
