/**
	@(#)FileVersion: 812.000.042
	@(#)FileDescription:File Javascript that lets accordion effect in tag <div>
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: accordion.js
	@(#)Date: 08/09/2012
*/

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
