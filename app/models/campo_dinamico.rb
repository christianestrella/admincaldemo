class CampoDinamico < ActiveRecord::Base
  belongs_to :tipo_evento
  attr_accessible :description, :input_type, :name, :value, :value_type
end
