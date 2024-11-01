//Replace jQuery with $
(function($) {


	// Do colorpicker function
	function do_color_picker()
	{
		var myOptions = {
		    // you can declare a default color here,
		    // or in the data-default-color attribute on the input
		    defaultColor: false,
		    // a callback to fire whenever the color changes to a valid color
		    change: function(event, ui){},
		    // a callback to fire when the input is emptied or an invalid color
		    clear: function() {},
		    // hide the color picker controls on load
		    hide: true,
		    // show a group of common colors beneath the square
		    // or, supply an array of colors to customize further
		    palettes: true
		};
		 
		$('.my-color-field').wpColorPicker(myOptions);
	}





    // Do Form AJAX
    function do_social_sharing_9_saving_ajax() {

			$('button.submit').on('click', function()	{
				// var form_data = $('.all_fields_form').serializeArray();

				var social_data = {};
				var i = 1;

				$.each( $('#sortable li'), function()
				{
					var social_name = $(this).find('[name="social_name"]').val();
					var status = Number( $(this).find('.status_checkbox').is(':checked') );
					var url = $(this).find('.url_field').val();
					var color = $(this).find('.my-color-field').val();

					social_data[social_name] = {};

					social_data[social_name].order_id = i;
					social_data[social_name].status = status;
					social_data[social_name].color = color;

					i++;
				});


		    social_data['post_types'] = $('[name="post_types[]"]').val();

		    social_data['size'] = $('[name="social_size"]:checked').val();

		    social_data['placement'] = $('[name="placement[]"]').val();

				console.log( social_data );

				var data = {
									'action': 'social_saving_ajax',
									'social_data': social_data
								};
			
			// console.log( data );
			// console.log( ajax_url );

				$.post( ajax_url , data, function(response) {
					// console.log(response);

					if(response == 'success')
					{
						$('.success_ajax').show();
						$('.success_ajax').fadeOut(3000);
					}
					else
					{
						$('.error_ajax').show();
						$('.error_ajax').fadeOut(3000);				
					}
				});
			});	    

    }
	





    // On document ready
	$(document).on('ready', function()
	{

		// Do colorpicker function
		do_color_picker();

		// Do Sortable function
	    $( "#sortable" ).sortable({ handle: '.sortable_handle' });


	    // Do Form AJAX
	    do_social_sharing_9_saving_ajax();


	});



})(jQuery);