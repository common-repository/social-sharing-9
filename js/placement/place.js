
(function($) {

	$(window).on('load', function() {

			var ajax_url = fe_localize_params.ajax_url;
			var post_type = fe_localize_params.post_type;
			var is_not_archive = fe_localize_params.is_not_archive;
			var get_post_types = fe_localize_params.get_post_types;

			var data = {
							'action': 'social_pulling_ajax'
						};
			
			// console.log( get_post_types );
			// console.log( is_not_archive );
			// console.log( ajax_url );

			$.post( ajax_url , data, function(response) {

				// console.log(response);
				var response = JSON.parse(response);

				// console.log( $.inArray(post_type, response.post_type_values) !== -1 );

				if( response.content && $.inArray(post_type, response.post_type_values) !== -1 && is_not_archive ) {
					var correct_urls_resp = response.content.replaceAll('link_to_be_shared', document.location.href);

					// console.log( 'document.location.href: '+document.location.href );
					// console.log( 'correct_urls_resp: ' + correct_urls_resp );

					$.each(response.placement, function(key, value) {
						if(value == 'floating_left') {
							$('body').prepend('<div class="floating_socials9 floating_left_socials9">' + correct_urls_resp + '</div>');						
						}
						if(value == 'floating_right') {
							$('body').prepend('<div class="floating_socials9 floating_right_socials9">' + correct_urls_resp + '</div>');						
						}
					});

					$('.social_sharing_9_shortcode').html(correct_urls_resp);
				}

			});

	});



})(jQuery);