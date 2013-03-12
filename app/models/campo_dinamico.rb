class CampoDinamico < ActiveRecord::Base
  belongs_to :tipo_evento
  attr_accessible :default_value, :description, :input_type, :name, :value_type
end
