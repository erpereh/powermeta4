/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: openwin_renhash_0b17733c340fb3b059be1cb04e998a78_l3_dl_o_v1.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */



/*
 * function: closeWindow()
 * description: Closes the current windows.
 * parameters:
 */
function m4CloseWindow()
{
	this.close();
}


/*
 * function: openWindow()
 * description: Opens a new browser window, in the input url, without any decoration.
 * parameters:
 *	ai_url
 *	ai_wndwid
 */
function m4OpenWindow(ai_url, ai_wndwid)
{
	var sDefaultWindowProps = "resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0";
	
	window.open(ai_url, ai_wndwid, sDefaultWindowProps);
}


/*
 * function: openWindow2()
 * description: Same as openWindow, but with input window size.
 * parameters:
 *	ai_url
 *	ai_wndwid
 *	ai_width
 *	ai_height
 */
function m4OpenWindow2(ai_url, ai_wndwid, ai_width, ai_height)
{
	var sDefaultWindowProps = "resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0";
	var sWindowProps = sDefaultWindowProps + ", width=" + ai_width + ", height=" + ai_height;
	
	window.open(ai_url, ai_wndwid, sWindowProps);
}
