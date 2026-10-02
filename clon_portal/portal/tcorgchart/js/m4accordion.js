/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4accordion.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


$(function() {
		(function($) {

			$.fn.accordion = function(custom) {
				var defaults = {
					keepOpen : false,
					startingOpen : false
				}
				var settings = $.extend({}, defaults, custom);
				if (settings.startingOpen) {
					$(settings.startingOpen).show();
				}

				return this.each(function() {
					var obj = $(this);
					$('li a', obj).click(
							function(event) {
								var elem = $(this).next();
								if (elem.is('ul')) {
									event.preventDefault();
									if (!settings.keepOpen) {
										obj.find('ul:visible').not(elem).not(
												elem.parents('ul:visible'))
												.slideUp();
									}
									elem.slideToggle();
								}
							});
				});
			};
		})(jQuery);

		$('#menu').accordion({
			keepOpen : false,
			startingOpen : '#open'
		});									
	});