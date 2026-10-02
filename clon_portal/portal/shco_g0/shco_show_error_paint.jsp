<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: shco_show_error_paint.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>


<% /** defined in shco_show_error_logic.jsp variables used to paint the page
String paint_msgError = stError; //-> msg to show
String paint_titleRedirect = ""; //-> msg ob button
String paint_href = ""; //-> where redirect button	
String paint_onclick = "location.href='/'"; //-> where redirect button	
Boolean sendPostMessage_paint = false;
Integer image_paint = 0 // type of image to show;
Boolean goTologin_paint = false;*/
%>

<%
// normally, the new messages should come from the logic
String paint_msgTitle = "Oups."; 
if (Tran_error.getProperty("ErrorPage.MsgTitle") != null) {	
	paint_msgTitle = Tran_error.getProperty("ErrorPage.MsgTitle");
}

// when the error comes from a tiger do not show the button
if (extSystemDown || paint_titleRedirect.equals(Tran_error.getProperty("ErrorPage.RemoteOriginMessage")))
{
	paint_titleRedirect = "RemoteOriginMessage";
}
%>

<!DOCTYPE HTML>
<html lang="<%=zlang%>"><!-- A11y -->
<head>
	<!-- Metadata -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

	<!-- Vue and Vuetify Styles -->
	<link href="/library/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
	<link href="/library/npm/vuetify@3/dist/vuetify.min.css" rel="stylesheet">

	<!-- CDS Styles -->
	<link href="/style/cds.css" rel="stylesheet">

	<!-- Vue and Vuetify JS -->
	<script src="/library/npm/vue@3/dist/vue.global.prod.js"></script>
	<script src="/library/npm/vuetify@3/dist/vuetify.min.js"></script>
<%

if(sendPostMessage_paint == true){
%>
	<script type="text/javascript">
		function sendMessage(e) {
			// inform the parent iframe
			if (window.parent) window.parent.postMessage('<%=Tran_error.getProperty("ErrorPage.RemoteOriginMessage")%>', '<%=sOriginHost%>/')
		}
			
		if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
			// mobile not launching any event
		} else {
			sendMessage();
		}
		
	</script>
		
<%	
}
%>
<script type="text/javascript">
var appVue;
</script>

<!-- Title -->
<title><%=Tran_error.getProperty("ErrorPage.ErrorMessage")%></title>
</head>
<body id="cds" class="cds-hidden">
<div id="app" >
</div>

<!-- Vue.js errorPage (shco_show_error_paint.vue.js, no H1) -->
<script type="text/javascript" src="/library/framework/common.vue.js"></script>
<script type="text/javascript" src="/shco_g0/shco_show_error_paint.vue.js"></script>

<h1 id="main-header"><%=paint_msgTitle%></h1>
<div class="cds-hidden">
	<!-- Form -->
	<% if( paint_href != null ){ %>
	<a id="aGoToLogin" cds-ref="send-button" href="<%=paint_href%>" onclick="<%=paint_onclick%>" title="<%=paint_titleRedirect%>"><input name="button" class="button" type="button" value="OK"></a>
	<% } %>

	<!-- Literals -->
	<label id="paint_msgError"><%=paint_msgError%></label>
	<label id="paint_titleRedirect"><%=paint_titleRedirect%></label>
	<label id="paint_msgTitle"><%=paint_msgTitle%></label>
</div>

<script type="text/javascript">
	window.addEventListener("DOMContentLoaded", function (e) {
		var myDomElements = {
			sendButton: document.querySelector('[cds-ref="send-button"]')
		}

		appVue = new errorPage(myDomElements);

		// Set Labels
		appVue.paint_msgError = document.querySelector("#paint_msgError").textContent;
		appVue.paint_titleRedirect = document.querySelector("#paint_titleRedirect").textContent;
		appVue.paint_msgTitle = document.querySelector("#paint_msgTitle").textContent;
	
		// no podemos saber si se ha abierto la ventana por un popup. la unica manera es mirar el historial.
		if(window.history.length === 1 || window.history.length === 0){
			var a = document.querySelector("#aGoToLogin");
			a.href = "";
			a.title = "";
			a.onclick = function () {
				window.close();
			}
		}

		document.body.classList.remove("cds-hidden");
	});
</script>

</body>
</html>
