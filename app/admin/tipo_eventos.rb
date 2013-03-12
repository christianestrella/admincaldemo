ActiveAdmin.register TipoEvento do
  form :partial => "form"
  
  controller do
    def update_resource(object, attributes)
      object.name = params[:tipo_evento][:name]
      object.description = params[:tipo_evento][:description]
      
      object.campo_dinamicos.each do |f|
        b = params[:tipo_evento][:campo_dinamicos].select{|key, hash| key == f.name }
        
        if b
          f.default_value = b[f.name]
          f.save
        end
      end
      
      run_update_callbacks object do
        save_resource(object)
      end
    end
  end
end
