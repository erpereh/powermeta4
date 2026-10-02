/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4gen_cr.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

//===================== Cash Compensation Module functions ============================

//=====================================================================================
//========================== List functions ===========================================
// Clause object

function Clause(m4field, oper, value)
{
	this.m4field = m4field;
	this.oper = oper;
	this.value = value;

	var args = Clause.arguments;
	if(args.length > 3)
		this.type = args[3];
	if(args.length > 4)
		this.size = args[4];
}

// Filter object

function Filter(clause)
{
	var args = Filter.arguments;
	if(args.length % 2 != 1) {
		alert("In Filter(): Wrong number of arguments (missing conjunction or clause?)");
		return;
	}

	this.clauses = new Array(Math.floor(args.length / 2) + 1);
	this.joins = new Array(Math.floor(args.length / 2));

	if(clause.constructor != Clause) {
		alert("In Filter(): Argument 1 must be Clause object");
		return;
	}

	this.clauses[0] = clause;

	for(var i = 1; i < args.length; i++) {
		if(args[i].toUpperCase() == "AND")
			this.joins[Math.floor(i/2)] = true;
		else if(args[i].toUpperCase() == "OR")
			this.joins[Math.floor(i/2)] = false;
		else {
			alert("In Filter(): Argument " + (i+1) + " must be \"AND\" or \"OR\"");
			return;
		}

		i += 1;

		if(args[i].constructor != Clause) {
			alert("In Filter(): Argument " + (i+1) + " must be Clause object");
			return;
		}

		this.clauses[Math.floor(i/2)] = args[i];
	}
}


// Function m4list()

function m4list(page, form_name, filter)
{
	var fullpage = "/servlet/CheckSecurity/JSP/" + page;
	var args = m4list.arguments;
	var fields = new Array();
	for(var t = 3; t < args.length; t++) {
		fields[t-3] = args[t];
	}

	if(filter && filter != "") {
		if(filter.constructor != Filter) {
			alert("In m4list(): Argument 3 must be Filter object");
			return;
		}

		var jit_filter = "";
		for(var i = 0; i < filter.clauses.length; i++) {
			jit_filter += filter.clauses[i].m4field;
			jit_filter += "/";

			jit_filter += filter.clauses[i].oper;
			jit_filter += "/";

			if(filter.clauses[i].type) {
				jit_filter += "{\\" + filter.clauses[i].type;

				if(filter.clauses[i].size)
					jit_filter += "?" + filter.clauses[i].size;

				jit_filter += "\\}";
			}

			jit_filter += String(filter.clauses[i].value).replace(/&%(.+)&/g, 
				function(str, p1) { return document.forms[form_name].elements[p1].value; }
			);

			if(i < filter.joins.length) {
				jit_filter += "~";
				jit_filter += (filter.joins[i] ? "AND" : "OR");
				jit_filter += "/";
			}
		}

		if(fullpage.indexOf("?") < 0)
			fullpage += "?";
		else
			fullpage += "&";
		fullpage += "jit_filter=" + escape(jit_filter);
	}

	m4window(page, fullpage, fields, form_name, 700, 500);
}

//=====================================================================================
//============================== Image manipulation ===================================


/** ChangingImage constructor */
function ChangingImage(img)
{
	this.img = img;
	this.normal_src = img.src;

	this.hover_img = new Image(img.width, img.height);
	this.push_img = new Image(img.width, img.height);

	var dot = this.normal_src.lastIndexOf(".");

	if(dot >= 0) {
		var base = this.normal_src.substring(0, dot);
		var ext = this.normal_src.substring(dot);

		this.hover_img.src = base + "_h" + ext;
		this.push_img.src = base + "_p" + ext;
	}
	else {
		this.hover_img.src = this.normal_src + "_h";
		this.push_img.src = this.normal_src + "_p";
	}
}

var himages = new Array();

function loadHoverImage(img)
{
	himages[img.name] = new ChangingImage(img);
}

function setHoverImage(img)
{
	img.src = himages[img.name].hover_img.src;
}

function setPushImage(img)
{
	img.src = himages[img.name].push_img.src;
}

function setNormalImage(img)
{
	img.src = himages[img.name].normal_src;
}
//=====================================================================================
//========================== Number ticker functions ==================================

function inc_num( field )
{
	var val = parseInt( field.value );
	if( !val ) { val = 0; }
	field.value = ++val;
	field.focus();
}

function dec_num( field )
{
	var val = parseInt( field.value );
	if( !val ) { val = 0; }
	field.value = --val;
	field.focus();
}

//=====================================================================================
//=====================================================================================

