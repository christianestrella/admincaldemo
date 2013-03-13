class TipoCampoDinamico < ActiveRecord::Base
  has_many :formulario_dinamico_evento
  attr_accessible :data_type, :description, :input_type, :name, :value
end
