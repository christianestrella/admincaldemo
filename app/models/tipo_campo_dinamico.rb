class TipoCampoDinamico < ActiveRecord::Base
  validates :name, :presence => true
  validates :description, :presence => true
  validates :input_type, :presence => true
  validates :data_type, :presence => true
  
  has_many :formulario_dinamico_evento
  attr_accessible :data_type, :description, :input_type, :name, :value
end
