class CreateTipoEventos < ActiveRecord::Migration
  def change
    create_table :tipo_eventos do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
