class TipoEvento < ActiveRecord::Base
  has_many :campo_dinamicos
  attr_accessible :campo_dinamicos, :description, :name
end
