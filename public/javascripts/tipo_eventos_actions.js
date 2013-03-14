var methods = {
	add_text_field : function() {
		var login = function() {
			var name = $(this).children('form').children('input[name="name"]').val();
			var description = $(this).children('form').find('textarea[name="description"]').val();
			
			if (name.length < 1 && description < 1) {
				alert(t('forms.errors.dynamic_text_field_invalid_values', 'Please provide the necesary correct values'));
			} else {
				$('#dynamic_forms_place_1').append(
					'<li id="tipo_evento_dynamic_fields_' + name + '"">' +
					'<label style="width: 300px" class="label" for="tipo_evento_dynamic_fields_' + name + '">' + description + '</label>' +
					'<input style="width: 300px" name="tipo_evento[campo_dinamicos][' + name + ']" type="text" />' +
					'</li>'
				);
				
				$("#dynamic_forms_place_1 li:last").addClass(function(index) {
  					return "string input optional stringish";
				});
				
				$.fallr('hide');
			}
		}

		$.fallr('show', {
			width : '600px',
			content : '<h4>' + t('forms.titles.add_dynamic_text_fields', 'Add dynamic text field') + '</h4>'
				+ '<form>'
				+ '<label class="label">' + t('name', 'Name') + ' * (' + t('example', 'Example') + ': "numero_de_invitados", "invitados", etc)</label>'
				+ '<input name="name" placeholder="' + t('name', 'Name') + '" type="text" />'
				+ '<label class="label">' + t('data_type', 'Data type') + ' *</label><br />'
				+ '<select style="width: 99%;" name="data_type"><option>String</option><option>Numeric</option></select><br /><div style="height:10px"></div>'
				+ '<label class="label">' + t('description', 'Description') + ' *</label>'
				+ '<textarea name="description" placeholder="' + t('description', 'Description') + '"></textarea>'
				+ '</form>',
			buttons : {
				button1 : {
					text : t('forms.submit', 'Submit'),
					onclick : login
				},
				button4 : {
					text : t('forms.cancel', 'Cancel')
				}
			}
		});
	}
}

$('#add_text_field').click(function(e) {
	e.preventDefault();
    methods['add_text_field'].apply(this, [this]);
    return false;
});