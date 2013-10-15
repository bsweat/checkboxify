jQuery(function($){
	$.fn.checkboxify = function(options) {
		this.on('click', function(){	
			var $t = $(this);

			if($t.hasClass('check')){
				$t.removeClass('check').addClass('without');
				options.callback('without');
				return;
			} else if($t.hasClass('without')){
				$t.removeClass('without');
				options.callback('empty');
				return;
			} else {
				$t.addClass('check');
				options.callback('check');
				return;
			}
		});
	};
}(jQuery));

/* 
	EXAMPLE
 */
// jQuery(function($){
// 	var boxChange = function(state){
// 		alert('current state is '+ state);
// 	}

// 	$('.c-box').checkboxify({
// 		callback: boxChange
// 	});
// }(jQuery));