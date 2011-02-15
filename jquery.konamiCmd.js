/**
 * KONAMI Command - Plugin for jQuery
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Depends:
 *   jquery.js
 * 
 * Author: hiromitz ( http://github.com/hiromitz )
 * 
 */
;(function($) {
	
	$.fn.konamiCmd = function(op) {
		
		op = $.extend({
			enter: true,
			keys : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
			callback: function(){}
		}, op);
		
		op.enter && op.keys.push(13);
		
		return this.each(function() {
			var i = 0;
			$(this).keyup(function(e) {
				i = (e.keyCode === op.keys[i]) ? i+1 : 
					(e.keyCode === op.keys[0]) ? 1 : 0;
				(i === op.keys.length) && op.callback.call(this, []);
			});
		});
	};
	
	$.konamiCmd = function(op) {
		$(document).konamiCmd(op);
	};
	
})(jQuery);
