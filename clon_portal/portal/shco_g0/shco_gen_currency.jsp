<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_currency.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html>
<head >
<title></title>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>

<!-- Recoger los datos para posicionarse -->
<%
   String zsselidcurr = request.getParameter("IDCUR");
   String zsselcant = request.getParameter("CANT");
   String zsselidextype = request.getParameter("EXTYPE");
   String zsselexdate = request.getParameter("EXDATE");
%>

<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>
<script type="text/javascript" language="Javascript1.5">

<!-- FunciÛn para establecer los valores de entrada -->
function establishinputvalues(){
	var dhoy = new Date();
	var sselexdate ='<%=zsselexdate%>' ;
	if (sselexdate == ""){ 
		m4valor('NombreFormulario','fechadecambio',m4builtdate(dhoy.getDate(),dhoy.getMonth() + 1,dhoy.getFullYear()),'set');
	}else{
		m4valor('NombreFormulario','fechadecambio',sselexdate,'set');
	}
	
	m4searchoption(m4objeto('NombreFormulario','idmoneda'),'<%=zsselidcurr%>');
	m4searchoption(m4objeto('NombreFormulario','idtipocambio'),'<%=zsselidextype%>');
	m4valor('NombreFormulario','cantidad','<%=zsselcant%>','set');
}
 
 // var sAlfanumChar = "a-zA-Z0-9.,‡ËÏÚ˘¿»Ã“Ÿ‚ÍÓÙ˚¬ Œ‘€·ÈÌÛ˙¡…Õ”⁄‹¸Ò—Á«™∫@%,_,\\-,:,\\,,\(,\),\',&,^,`,¥,\",/,Ä,£";
 var sAlfanumChar = " \u0000-\u003A,\u003C-\u007B,\u007D-\uFFFF"; // vale lo que sea menos la barra vertical y el punto y coma
 var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";
 var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",|,;" + "]" ; //Contiene la barra vertical y el punto y com
 var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]";
 
function writeselect(zsidselect,zstabindex){
  // formato de zzurcurr : "ESP;;Peseta;;0||EUR;;Euro;;2||$$1;;Cambio1;;2Cambio2||"
  //quitamos el dolar pq nos sirve de separacion
  
  var zoalllistregexp = new  RegExp("(" + sAlfNumRegExpPlusBarraSemicolon +"*)" + "[\$][\$](" + sAlfNumRegExpPlusBarraSemicolon +"*)");
  var zocurrencytuplaregexp =  new  RegExp("(" + sAlfanumRegExpString + "*)[;][;](" + sAlfanumRegExpString +"*)[;][;](" + sAlfanumRegExpString +"*)");
  var zotipocambioregexp = new  RegExp("(" + sAlfanumRegExpString + "*)[;][;](" + sAlfanumRegExpString +"*)"); //IdTipoCambio;;NombreTipoCambio


  //1) Separar la lista  
  var zsselectinfo = '<%=zzurcurr%>';
  var zarrresultList = zoalllistregexp.exec(zsselectinfo);
  var zarrcurrencylist = zarrresultList[1];
  var zarrtipocambiolist = zarrresultList[2];
  
  //2) Crear las select
  if (zsidselect == "idmoneda"){
	zsselect= createselect(zarrcurrencylist,zsidselect,zstabindex,zocurrencytuplaregexp);
  } 
  else{
	zsselect = createselect(zarrtipocambiolist,zsidselect,zstabindex,zotipocambioregexp);
  }	  
  document.write(zsselect);
}

function createselect(zslistinfo,zsidselect,zstabindex,zotuplaregexp){
 //Cadena con tuplas separadas por ||
  var zolistregexp = new  RegExp("(" +sAlfNumRegExpPlusSemicolon + "*)[|][|](" +sAlfNumRegExpPlusBarraSemicolon+"*)"); 
  
 zsselect = "<SELECT class='selectform75' id= " + zsidselect + " tabIndex = " + zstabindex + " name= " + zsidselect + " > ";
 zarrlist = zolistregexp.exec(zslistinfo);
  
     while  (zarrlist != null){
   		zstupla = zarrlist[1];
   		zssResto = zarrlist[2];
   		
   		//Tratamiento de la tupla
        zarrtuplainfo =zotuplaregexp.exec(zstupla); 
                
        if (zarrtuplainfo != null){
   			zsid = zarrtuplainfo[1];
   			zsname = zarrtuplainfo[2];
   			if (zarrtuplainfo.length > 3){
   				zsvalue = zarrtuplainfo[3];
   			}
   			else{zsvalue = zsid;}
   		    zsselect = zsselect +  "<OPTION id= " + zsid + " value= " + zsvalue + ">" + zsname + "</OPTION> ";
        }
   		zarrlist = zolistregexp.exec(zssResto);
  }
  
  zsselect = zsselect + "</SELECT>"; 
  return(zsselect);
}
function m4match(){
	var sfunciones = "m4valinput('_currency_oblig','NombreFormulario','cantidad',m4select('NombreFormulario','idmoneda','value'),'<%=Tran_shco_g0.getProperty("Literal.CurrencyValue")%>')";
	sfunciones = sfunciones + "*m4valinput('_date_oblig','NombreFormulario','fechadecambio',0,'<%=Tran_shco_g0.getProperty("Literal.CurrencyChangeDate")%>',sformatofechas)";
	var verr = m4valform(sfunciones);
	if (verr == 1){m4return();}
}

function m4return(){
var oobject =  m4window_extension_return(0);
if (oobject.tagName == "INPUT"){
	oobject.value = m4select('NombreFormulario','idmoneda','text');
}else{
	if (oobject.childNodes.length != 0) oobject.childNodes[0].nodeValue = m4select('NombreFormulario','idmoneda','text');
}
m4returnvalues(new Array(m4valor('NombreFormulario','cantidad','','get'),m4select('NombreFormulario','idmoneda','id'),m4select('NombreFormulario','idtipocambio','id'),m4valor('NombreFormulario','fechadecambio','','get'),m4select('NombreFormulario','idmoneda','value'),m4select('NombreFormulario','idmoneda','text')));
}

</script>
</head>
<body >
<h2><%=Tran_shco_g0.getProperty("Literal.CurrencyTitle")%></h2>
<form action="" method="post" name="NombreFormulario" id="NombreFormulario">
<table class="form" width="100%" cellspacing="0" >
	<thead>
	   <tr><td>&nbsp;</td></tr>
	</thead>
	<tbody>
		
	<tr><td>&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("Literal.CurrencyValue")%>&nbsp;</td>
		<td><input tabindex="1" class="form" type="text" id="cantidad" name="cantidad" size="32" maxlength="28" title="<%=Tran_shco_g0.getProperty("Literal.CurrencyQuatity")%>" value="" />&nbsp;</td>
	</tr>
	<tr><td>&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("Literal.Currency")%>&nbsp; </td>
        <td><script type="text/javascript" language="Javascript1.5">writeselect("idmoneda","2");</script></td>
      </tr>
      <tr><td class="form">&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("Literal.CurrencyChangeType")%>&nbsp; </td>
         <td><script type="text/javascript" language="Javascript1.5">writeselect("idtipocambio","3");</script></td>
       </tr>
	<tr>
		<td>&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("Literal.CurrencyChangeDate")%>&nbsp;</td>
		<td>
			<input tabindex="6" class="form" type="text" id="fechadecambio" name="fechadecambio" size="15" maxlength="12" title="<%=Tran_shco_g0.getProperty("Literal.CurrencyChangeDate")%>" value="" />&nbsp;
			<a tabindex="7" href="javascript:m4calendar(m4objeto('NombreFormulario','fechadecambio'))" >
				<img  <%@ include file="../files_gif/ic_cal.jsp" %> alt="Calendario" />
			</a>
		</td>
	</tr>
	<tr><td>&nbsp;</td></tr>
	<tr>
		<td colspan="3" align="center">
			<a title="<%=Tran_shco_g0.getProperty("Button.Ok")%>" href="javascript:m4match()" tabindex="8"><img alt="<%=Tran_shco_g0.getProperty("Button.Ok")%>"  <%@ include file="../files_gif/ic_ace.jsp" %> /></a>
			<a title= "<%=Tran_shco_g0.getProperty("Button.Close")%>" href="javascript:window.close();"><img alt="<%=Tran_shco_g0.getProperty("Button.Close")%>" <%@include file="../files_gif/ic_cer.jsp" %>  /></a>
		</td>
	</tr>
	</tbody>
</table>
</form>
<script type="text/javascript" language="Javascript1.5">
  establishinputvalues();
  m4settitle('<%=Tran_shco_g0.getProperty("Literal.CurrencyTitle")%>');
</script>
</body>
</html>