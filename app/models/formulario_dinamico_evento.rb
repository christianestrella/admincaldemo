class FormularioDinamicoEvento < ActiveRecord::Base
  belongs_to :tipo_evento
  belongs_to :tipo_campo_dinamico
  # attr_accessible :title, :body
end
