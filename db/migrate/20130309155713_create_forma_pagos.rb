class CreateFormaPagos < ActiveRecord::Migration
  def change
    create_table :forma_pagos do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
