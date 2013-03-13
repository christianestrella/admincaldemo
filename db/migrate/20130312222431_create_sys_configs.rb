class CreateSysConfigs < ActiveRecord::Migration
  def change
    create_table :sys_configs do |t|
      t.string :name
      t.text :description
      t.text :value
      t.boolean :dispensable

      t.timestamps
    end
  end
end
