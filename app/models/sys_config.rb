class SysConfig < ActiveRecord::Base
  validates :name, :presence => true, :length => { :maximum => 50 }
  validates :value, :presence => true
  
  attr_accessible :description, :dispensable, :name, :value
end
