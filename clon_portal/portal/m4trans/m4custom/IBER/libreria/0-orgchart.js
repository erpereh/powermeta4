/**
 * jQuery org-chart/tree plugin.
 *
 * Author: Khisamutdinov Radik
 *
 * Based on the work of Wes Nolte
 * (without drag and drops mode)
 * https://github.com/wesnolte/jOrgChart
 *
 * and based on the work of Dmitry Sinyavsky
 * (css - rules for vertical nodes)
 * http://habrahabr.ru/post/55753/
 *
 * Licensed under the MIT and GPL licenses.
 *
 */ 
 
 var current_div = "";
 
 //Funcion que muestra el div en la posicion del mouse para los dependientes
			function showdiv(event, id)
			{
			   //m4gonzalo
				if (current_div != ""){
					document.getElementById(current_div).click();
				} 
				//determina un margen de pixels del div al raton
				margin=5;

				//La variable IE determina si estamos utilizando IE
				var IE = document.all?true:false;
				//Si no utilizamos IE capturamos el evento del mouse
				if (!IE) document.captureEvents(Event.MOUSEMOVE)

				var tempX = 0;
				var tempY = 0;

				
				if(IE)
				{ //para IE
					
					tempX = event.clientX + $(document).scrollLeft();
					tempY = event.clientY + $(document).scrollTop();
				}else{ //para netscape
					tempX = event.pageX;
					tempY = event.pageY;
				}
				if (tempX < 0){tempX = 0;}
				if (tempY < 0){tempY = 0;}

				//modificamos el valor del id posicion para indicar la posicion del mouse (pruebas)
				//document.getElementById('posicion').innerHTML="PosX = "+tempX+" | PosY = "+tempY;

				document.getElementById(id).style.top = (tempY+margin) + 'px';
				document.getElementById(id).style.left = (tempX+margin) + 'px';
				//document.getElementById(id).style.display='block';
				$("#"+id).slideDown( "slow" );
				//m4gonzalo
				current_div = id; 
			}
			
 
 function contraerExpandir(contador) {
 //m4gonzalo
	if (current_div != ""){
				document.getElementById(current_div).click();
			} 
 
 //fin m4gonzalo
 
	if(document.getElementById('nivel_1_' + contador)){
		document.getElementById('nivel_1_' + contador).click();
		contador++;
		if(contador<9){
			contraerExpandir(contador);
		}
	}
} 
 
(function ($) {
	// Extend jQuery for copy attributes
	$.fn.copyAttributes = function (elem) {
		$this = $(this);
		$.each($(elem).prop('attributes'), function () {
			// 12/09/2016 Obtenemos la version del navegador.
			var navVersion = navigator.appVersion.slice(0, 1);
			if (this.name != 'class')
				if (navVersion <= 4) {
					if(this.name == 'jOrgChart' || this.name == 'style'){
						$this.attr(this.name, this.value);
					}
				} else {
					$this.attr(this.name, this.value);
				}
		});
		return $this;
	};

	$.fn.jOrgChart = function (options) {
		var opts = $.extend({}, $.fn.jOrgChart.defaults, options);
		var $appendTo = $(opts.chartElement);

		// build the tree
		var $this = $(this);
		var $container = $("<div class='" + opts.chartClass + "'/>");
		
		if ($this.is("ul")) {
			buildNode($this.find("li:first"), $container, 0, opts);
		}
		else if ($this.is("li")) {
			buildNode($this, $container, 0, opts);
		}
		
		$appendTo.append($container);
	};

	// Option defaults
	$.fn.jOrgChart.defaults = {
		chartElement : 'body',
		depth      : -1,
		chartClass : "jOrgChart",
		nodeClicked: function ($node, type) {}
	};
	
	var nodeCount = 0;
	
	var contador = 1;
	
	// Method that recursively builds the tree (horizontal type)
	function buildNode($node, $appendTo, level, opts) {
		var $table = $("<table cellpadding='0' cellspacing='0' border='0'/>");
		var $tbody = $("<tbody/>");

		// Construct the node container(s)
		var $nodeRow = $("<tr/>").addClass("node-cells");
		var $nodeCell = $("<td/>").addClass("node-cell").attr("colspan", 2);
		
		//
		var $childContainer = $node.children("ul:first");
		var isVerticalNodes = ($childContainer.attr('type') == 'vertical');		
		
		var $childNodes = $childContainer.children("li");
		var $childNodesCount = !isVerticalNodes ? $childNodes.length : 0;
		var $nodeDiv;

		if ($childNodesCount > 1) {
			$nodeCell.attr("colspan", $childNodesCount * 2);
		}
		
		// Draw the node
		// Get the contents - any markup except li and ul allowed
		var $nodeContent = $node.clone()
								.children("ul,li")
								.remove()
								.end()
								.html();
		$nodeContent = wrapContent($nodeContent);
								
		//Increments the node count which is used to link the source list and the org chart
		nodeCount++;
		$node.data("tree-node", nodeCount);
		$nodeDiv = $("<div>").addClass("node")
							.copyAttributes($node)
							.data("tree-node", nodeCount)
							.append($nodeContent);		
		$nodeCell.append($nodeDiv);		
		
		if (isVerticalNodes && $childNodes.length > 0) {
			$nodeDiv.addClass("vertical");
			var $verticalNodeDiv = $("<div>").addClass("multi-tree");			
			buildVerticalTree($childContainer, $verticalNodeDiv, opts);			
			$nodeDiv.after($verticalNodeDiv);
		}		
		
		if ($childNodesCount > 0) {
			// if it can be expanded then change the cursor
			if(level == 1){
				$nodeCell.append('<div style="margin-top: -19px;"><img id="nivel_1_' + contador + '" class="cover" src="/images/org_up_01.gif"/></div>');
				contador++;
			} else {
				$nodeCell.append('<div style="margin-top: -19px;"><img class="cover" src="/images/org_up_01.gif"/></div>');
			}
		}
										 
		// Expand and contract nodes
		if ($childNodesCount > 0) {		
			$nodeDiv.next().children('img.cover').click(function () {
			//m4gonzalo
			if (current_div != ""){
					document.getElementById(current_div).click();
				}
				
				
			
				var $this = $nodeDiv;
				var $tr = $this.closest("tr");

				if ($tr.hasClass('contracted')) {
					$tr.removeClass('contracted').addClass('expanded');
					$tr.nextAll("tr").css('display', '');
					$(this).attr('src', '/images/org_up_01.gif');
					// Update the <li> appropriately so that if the tree redraws collapsed/non-collapsed nodes
					// maintain their appearance
					$node.removeClass('collapsed');
				} else {
					$tr.removeClass('expanded').addClass('contracted');
					$tr.nextAll("tr").css('display', 'none');
					$(this).attr('src', '/images/org_down_01.gif');
					$node.addClass('collapsed');
				}
			});	
		}

		$nodeRow.append($nodeCell);
		$tbody.append($nodeRow);

		if ($childNodesCount > 0) {
			// recurse until leaves found (-1) or to the level specified
			if (opts.depth == -1 || (level + 1 < opts.depth)) { 
				var $downLineRow = $("<tr/>");
				var $downLineCell = $("<td/>").attr("colspan", $childNodesCount * 2);
				$downLineRow.append($downLineCell);

				// draw the connecting line from the parent node to the horizontal line 
				$downLine = $("<div></div>").addClass("line down");
				$downLineCell.append($downLine);
				$tbody.append($downLineRow);

				// Draw the horizontal lines
				var $linesRow = $("<tr/>");
				$childNodes.each(function () {
					var $left = $("<td>&nbsp;</td>").addClass("line left top");
					var $right = $("<td>&nbsp;</td>").addClass("line right top");
					$linesRow.append($left).append($right);
				});

				// horizontal line shouldn't extend beyond the first and last child branches
				$linesRow.find("td:first")
						.removeClass("top")
						.end()
						.find("td:last")
						.removeClass("top");

				$tbody.append($linesRow);
				var $childNodesRow = $("<tr/>");
				$childNodes.each(function() {
				   var $td = $("<td class='node-container'/>");
				   $td.attr("colspan", 2);
				   // recurse through children lists and items
				   buildNode($(this), $td, level + 1, opts);
				   $childNodesRow.append($td);
				});
			}
			$tbody.append($childNodesRow);
		}

		// any classes on the LI element get copied to the relevant node in the tree
		// apart from the special 'collapsed' class, which collapses the sub-tree at this point
		if ($node.attr('class') != undefined) {
			var classList = $node.attr('class').split(/\s+/);
			$.each(classList, function (index, item) {
				if (item == 'collapsed') {
					$nodeRow.nextAll('tr').css('display', 'none');
					$nodeRow.removeClass('expanded');
					$nodeRow.addClass('contracted');
					$nodeRow.find('img.cover').attr('src', '/images/org_down_01.gif');
				} else {
					$nodeDiv.addClass(item);
				}
			});
		}

		$table.append($tbody);
		$appendTo.append($table);

		// node click handler
		$nodeDiv.click(function() {
			opts.nodeClicked.call(this, $(this), 'horizontal');
		});

		/* Prevent trees collapsing if a link inside a node is clicked */
		$nodeDiv.children('a').click(function (e) {
			e.stopPropagation();
		});
	}
	
	// Method that recursively builds the tree (vertical type)
	function buildVerticalTree($node, $appendTo, opts) {		
		if ($node.is("ul")) {
			var $childNodes = $node.children("li");
			var $ul = $("<ul>");
			
			if ($childNodes.length > 0) {
				$childNodes.each(function () {
					buildVerticalTree($(this), $ul, opts);
				});				
			}			
			
			$appendTo.append($ul);
		}
		else if ($node.is("li")) {
			var $ul = $node.children("ul:first");
			var $li = $node.hasClass('last') ? $("<li>").addClass('last') : $("<li>");
			var $nodeDiv;
			
			// Draw the node
			// Get the contents - any markup except li and ul allowed
			var $nodeContent = $node.clone()
									.children("ul,li")
									.remove()
									.end()
									.html();
			$nodeContent = wrapContent($nodeContent);
			
			//Increments the node count which is used to link the source list and the org chart
			nodeCount++;
			$node.data("tree-node", nodeCount);			
			$nodeDiv = $nodeContent.find('div.content:first');
			$nodeDiv.copyAttributes($node).data("tree-node", nodeCount);
			$li.append($nodeContent);
			
			if ($ul.length > 0) {
				buildVerticalTree($ul, $li, opts);				
			}
			
			$appendTo.append($li);
			
			// node click handler
			$nodeDiv.click(function() {
				opts.nodeClicked.call(this, $(this), 'vertical');
			});
		}
	}
	
	// wrap the contents in a special wrapper
	function wrapContent(content) {
		content = $.trim(content);
		var wrapper = $("<span>");
		var contentDiv = $("<div>").addClass("content").append(content);		
		wrapper.append(contentDiv);
		return wrapper;
	}
})(jQuery);
