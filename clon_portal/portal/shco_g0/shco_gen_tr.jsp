<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_tr.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="shco_gen_bag.jsp" %>
<%@ include file="shco_gen_css.jsp" %><%@ include file="shco_gen_list_arg.jsp" %><%
String zClose = request.getParameter("zClose");
if ((zClose==null)||(zClose.equals(""))){zClose = "0";}
String zP = request.getParameter("zP");
String zC = request.getParameter("zC");
if ((zC==null)||(zC.equals(""))){zC = "";}
// Parámetros del M4Object:

String zm4object = zC;
String zsub = request.getParameter("zsub");
if ((zsub==null)||(zsub.equals(""))){zsub = zm4object;}
String zsubsesion = zsub;

String zm4objectArg = request.getParameter("zm4objectArg");
if ((zm4objectArg==null)||(zm4objectArg.equals(""))){zm4objectArg = zsub;}

String znodo = zm4object;
	
															//*MODIFICABLE
String zdireccion = "shco_g0/shco_gen_tr.jsp";								//*MODIFICABLE

//escribe el nombre  de esta pag. 
String zredireccion = "shco_gen_tr.jsp";
  


String znodo2 ="SHCO_GN_MT_FILTER_KEY";
String znodo3 ="SHCO_GN_MT_FILT";
String znodoroot = "SHCO_GN_ROOT";
String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_TR";


String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";

String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";						//COMUN MT
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";
      
String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";
String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]"; 
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
String zsortitems = zm4object + "!" + znodo + "."+ zOrdenCampo;;				//COMUN MT

String znodolabel = "SHCO_GN_LABEL";
String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";
String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";

 
String zaccion = "/servlet/CheckSecurity/JSP/" + zdireccion;
String zIDVALUE = zcomun2 + "SCO_ID_KEY";
String zIDTYPE2 = zcomun2 +  "SCO_ID_TYPE";
String zNVALUE = zcomun2 +  "SCO_NM_KEY";
   
String zIDFIELD = zcomun3 + "SCO_ID_FIELD";
String zIDTYPE = zcomun3 +  "SCO_ID_TYPE";
String zNFIELD = zcomun3 +  "SCO_NM_FIELD";
//Items de labels	
String zSHCOLBFR = zraizlabel + "SHCO_LB_FR";
String zSHCOLBAPP = zraizlabel + "SHCO_LB_APP";
String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOS";
%><%@ include file="shco_gen_label.jsp" %><%@ include file="shco_gen_list_js.jsp" %>
<script type="text/javascript" language="Javascript1.5">
function m4filtrar_close(){m4valor('oculto','zClose','1','set');m4filtrar();}
function pru(){var vClose='<%=zClose%>';if (vClose=="1"){if (typeof(opener.ventana) != "unknown"){opener.m4fil_ret();}window.close();}}
</script>
</head><body onload="javascript:pru();">
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="LOAD_TYPE_ARG" value="<%=ztipocarga%>"/><m4:param name="M4O_ARG" value="<%=zm4objectArg%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoroot%>" ><m4:param name="m4name0" value="<%=zoutputdefroot%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflabel%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
<%
int  zcounti2  = 0;
int  zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti2 = m.getCountInClient(znodo2,zm4object,znodo2);
    zcounti3 = m.getCountInClient(znodo3,zm4object,znodo3);
} catch(Exception e) {}

String	zcountv2 = String.valueOf(zcounti2);
String	zcountv3 = String.valueOf(zcounti3);
%>
<%@include file="shco_gen_title.jsp" %>

<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
<form action=" " method="post" name="FormularioFiltro" id="FormularioFiltro">
<div id= "easyfilter" class="capaform" style ="<%=zeasyfilterstyle%>">
<table class="filtro" width="100%" cellspacing="0">
<tbody>
<tr class="filtro">
	<td class="fuentecampo">
	<select tabindex="1" id="list1" class="select30" name="list1" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" onchange="m4buscar('list1','list3')">
	<%if ( zf1id != ""){%>
	<option id="<%=zf1id%>" value="<%=zf1val%>"><%=zf1txt%></option>
	<%}%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>"><option id="A<m4:item m4name="<%=zIDFIELD%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zNFIELD%>" htmlsafe="true"/></option></m4:loop>
	</select>
	<select tabindex="2" id="list3" class="select30" name="list3" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>"><option id ="A<m4:item m4name="<%=zIDVALUE%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE2%>" htmlsafe="true"/>"><m4:item m4name="<%=zNVALUE%>" htmlsafe="true"/></option></m4:loop>
	</select>
	<script type="text/javascript" language="Javascript1.5"><!--
	var mlist3 = new Array(); 
	var selectfinal = document.getElementById("list3");
	var l=0;
	for (var i=0; i < selectfinal.options.length; i++){
		var mfila = [selectfinal.options[i].value,selectfinal.options[i].text,selectfinal.options[i].id];
		mlist3[l++] = mfila;
	}
	m4buscar('list1','list3','<%=zf3id%>');
	--></script><input class="filtro" type="text" id="VALOR1" name="VALOR1" maxlength="50" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBFR%>" htmlsafe="true"/>" tabindex="3" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zv1)%>" /></td>
</tr>
<tr class="filtro">
	<td class="fuentecampo">
	<select tabindex="4" id="list2" class="select30" name="list2" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" onchange="m4buscar('list2','list4')">
	<%if ( zf2id != ""){%>
	<option id="<%=zf2id%>" value="<%=zf2val%>"> <%=zf2txt%></option>
	<%}%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option id ="B<m4:item m4name="<%=zIDFIELD%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zNFIELD%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	<select tabindex="5" id="list4" class="select30" name="list4" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" >
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option id ="B<m4:item m4name="<%=zIDVALUE%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE2%>" htmlsafe="true"/>">
	<m4:item m4name="<%=zNVALUE%>" htmlsafe="true"/>
	</option>
	</m4:loop>
	</select>
	<script type="text/javascript" language="Javascript1.5">m4buscar('list2','list4','<%=zf4id%>');</script>
	<input class="filtro" type="text" id="VALOR2" name="VALOR2" maxlength="50" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBFR%>" htmlsafe="true"/>" tabindex="6" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zv2)%>"  /></td>
</tr>
<tr>
	<td class="boton">
	<a title="<m4:label m4name="<%=zSHCOLBAPP%>" htmlsafe="true"/>" href="javascript:m4filtrar_close();" tabindex="7"><img alt="<m4:label m4name="<%=zSHCOLBAPP%>" htmlsafe="true"/>"  <%@include file="../files_gif/ic_ace.jsp" %>  /></a>
	<a title="<m4:label m4name="<%=zSHCOLBCLOSE%>" htmlsafe="true"/>" tabindex="8"href="javascript:window.close();"><img alt="<m4:label m4name="<%=zSHCOLBCLOSE%>" htmlsafe="true"/>" <%@include file="../files_gif/ic_cer.jsp" %>  /></a>
	</td>
</tr>
</tbody>
</table></form>
<form action="<%=zaccion%>" method="post" name="oculto" id="oculto">
<input type="hidden" id="znivelmenu" name="znivelmenu" value="<%=znivelmenu%>" />
<input type="hidden" id="zinicio" name="zinicio" value="" /><input type="hidden" id="zf1id" name="zf1id" value="" />
<input type="hidden" id="zf1val" name="zf1val" value="" /><input type="hidden" id="zf1txt" name="zf1txt" value="" />
<input type="hidden" id="zf3id" name="zf3id" value="" /><input type="hidden" id="zf3val" name="zf3val" value="" />
<input type="hidden" id="zf3txt" name="zf3txt" value="" /><input type="hidden" id="zv1" name="zv1" value="" />
<input type="hidden" id="zf2id" name="zf2id" value="" /><input type="hidden" id="zf2val" name="zf2val" value="" />
<input type="hidden" id="zf2txt" name="zf2txt" value="" /><input type="hidden" id="zf4id" name="zf4id" value="" />
<input type="hidden" id="zf4val" name="zf4val" value="" /><input type="hidden" id="zf4txt" name="zf4txt" value="" />
<input type="hidden" id="zv2" name="zv2" value="" /><input type="hidden" id="zClose" name="zClose" value="" />
<input type="hidden" id="zP" name="zP" value="<%=zP%>" /><input type="hidden" id="zC" name="zC" value="<%=zC%>" />
<input type="hidden" id="zsub" name="zsub" value="<%=zsub%>" /><input type="hidden" id="ztipocarga" name="ztipocarga" value="<%=ztipocarga%>" />
<input type="hidden" id="zisdynfilter" name="zisdynfilter" value="<%=zisdynfilter%>" />
</form>
</body><m4:endpage/></div>
</html>
