ActiveAdmin.register TipoEvento do
  form :partial => "form" # Se establece una vista customizada
  
  controller do
    def update_resource(object, attributes)
      object.name = params[:tipo_evento][:name]
      object.description = params[:tipo_evento][:description]
      
      # Iteramos lista de campos dinámicos
      object.campo_dinamicos.each do |f|
        b = params[:tipo_evento][:campo_dinamicos].select{|key, hash| key == f.name } # Verificamos el campo dinámico actual
        
        if b # Si es el actual
          unless f.default_value == b[f.name] # Si tiene el mismo valor no se actualiza
            f.default_value = b[f.name]
            f.save
          end
        end
      end
      
      # Actualizamos el objeto
      run_update_callbacks object do
        save_resource(object)
      end
    end
  end
end
