class CreateFormularioDinamicoEventos < ActiveRecord::Migration
  def change
    create_table :formulario_dinamico_eventos do |t|
      t.belongs_to :tipo_evento
      t.belongs_to :tipo_campo_dinamico

      t.timestamps
    end
    add_index :formulario_dinamico_eventos, :tipo_evento_id
    add_index :formulario_dinamico_eventos, :tipo_campo_dinamico_id
  end
end
