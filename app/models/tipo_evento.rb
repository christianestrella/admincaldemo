class TipoEvento < ActiveRecord::Base
  validates :name, :presence => true
  
  has_many :formulario_dinamico_evento
  attr_accessible :description, :name
end
