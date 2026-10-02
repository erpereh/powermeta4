<%
String znombre = "";
	String zvalor = "";
	String zraiz ="";
	String zurlcuerpo ="";
	String zredireccioncuerpo ="";
	String zfiltro ="";
	String znivel ="";
	String zurl ="";
	String zredireccion="";
	String zkey ="";
	
	Hashtable zhash = new Hashtable(20);
	Enumeration oenum = request.getParameterNames();
	 while(oenum.hasMoreElements ()){
		 znombre = (String) oenum.nextElement();
		 zvalor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,znombre);
		 zhash.put (znombre,zvalor);
	}
    zraiz =(String)zhash.get("_A");
	zhash.remove("_A");
	   zurlcuerpo =(String)zhash.get("_B");
	zhash.remove("_B");
	zredireccioncuerpo =(String)zhash.get("_C");
	zhash.remove("_C");
	
	if (zredireccioncuerpo != null){	
	//Take out ID_WORKITEM from the URL and set it to the SESSION
     	String sURLFromWKItem=""; 
     	String sIdWorkItem = "ID_WORKITEM=";
     	int iPosWkItem = zredireccioncuerpo.lastIndexOf(sIdWorkItem);
     	int iPosAmp = -1;
     	if (iPosWkItem != -1){	   
     	  sURLFromWKItem = zredireccioncuerpo.substring(iPosWkItem + sIdWorkItem.length());
     	  zredireccioncuerpo= zredireccioncuerpo.substring(0,iPosWkItem);
     	  iPosAmp = sURLFromWKItem.lastIndexOf("&");
     	  if (iPosAmp != -1){	     
     		 zredireccioncuerpo = zredireccioncuerpo + sURLFromWKItem.substring(iPosAmp);
     		 sURLFromWKItem = sURLFromWKItem.substring(sIdWorkItem.length(),iPosAmp);
     	  }	
     	  session.setAttribute("ID_WORKITEM", sURLFromWKItem);  
     	}
	}
	zfiltro =(String)zhash.get("zfiltro");
	zhash.remove("zfiltro");
	
	znivel =(String)zhash.get("znivel");
	zhash.remove("znivel");
	
	zurl = zraiz + zurlcuerpo;
	
	zredireccion = zraiz + zredireccioncuerpo + "&zfiltro=" + zfiltro + "&znivel=" + znivel + "&lang=fr";
	

   

	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
	  zkey = (String) enumhash.nextElement();
	  zvalor = (String) zhash.get(zkey);
	  zhash.remove(zkey); 
	  if (zkey.equals("ID_WORKITEM"))
	  {
		session.setAttribute("ID_WORKITEM", zvalor);  
	  }else{				
		zredireccion	+= "&"+zkey + "=" + zvalor  ;
	 }
 }	

 
zredireccion = java.net.URLEncoder.encode(zredireccion);
zredireccion = java.net.URLEncoder.encode(zredireccion);
zurl = zurl + "?_C=" + zredireccion;
if (zraiz == null) {
	zurl = "/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=fr&estado=0";
%>
	<script Language="JavaScript">
	straux=window.location.href;
	if(straux.indexOf("login")==-1)
	{aux_zurl="servlet/CheckSecurity/JSP/" + straux.substring(straux.indexOf("servlet/CheckSecurity/JSP/") + "servlet/CheckSecurity/JSP/".length, straux.length);
	}else{
	aux_zurl = "/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=fr&estado=0";
	}
	</script>
<%}%>
	
<form id="login" name="login" action="/servlet/login" method="post">
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0" cellpadding="2">
<tr><td class="fuentelinktitulo">&nbsp;Votre identification&nbsp;:</td></tr>
<tr><td class="fuentelinkcampo">&nbsp;Nom d'utilisateur&nbsp;:</td></tr>
<tr><td class="fuentelinkcampo"><input type="hidden" name="_LANG" value="4" /><input type="hidden" id="_URL" name="_URL"  value="" />&nbsp;&nbsp;<input alt="&Eacute;crivez votre nom d'utilisateur" type="text" id="_USER" name="_USER" size="14" /></td></tr>
<tr><td class="fuentelinkcampo">&nbsp;Mot de passe&nbsp;:</td></tr>
<tr><td class="fuentelinkcampo">&nbsp;&nbsp;<input title="&Eacute;crivez votre mot de passe" size="14" type="password" id="_PASSWD" name="_PASSWD" /></td></tr>
<tr><td class="fuentelinkcampo" align="center"><input title="Entrer" type="image" src="/iconos/icono_enviar_ess_36_36.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" id="enviar" name="enviar" /></td></tr>
</table>
</td></tr></table>
</form>
<%if (zraiz == null) {%>
<script type="text/javascript">
document.forms.login._URL.value=aux_zurl;
m4focus("login","_USER");
</script>
<%}else{%>
<script type="text/javascript">
document.forms.login._URL.value='<%=zurl%>';
m4focus("login","_USER");
</script>
<%}%>
