<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 TranMsssitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<head>
<%
   String zproc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"proc");   
   String ztitle = TranMss.getProperty("ev_mss.DefObjEmp");
%>

<title><%=ztitle%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%  
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios =zobjtabla.m4paramvalor("zinicios");
String zfiltrowu = zobjtabla.m4paramvalor("zfiltrowu");
String znombrewu = zobjtabla.m4paramvalor("znombrewu");
String zfiltropuesto = zobjtabla.m4paramvalor("zfiltropuesto");
String znombrepuesto =zobjtabla.m4paramvalor("znombrepuesto");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zfiltrowu==null)|| (""==zfiltrowu)){zfiltrowu = "XXX01";} 
if ((zfiltropuesto==null)|| (""==zfiltropuesto)){zfiltropuesto = "XXX01";} 
if ((znombrewu==null)|| (""==znombrewu)){znombrewu = Tran.getProperty("All");} 
if ((znombrepuesto==null)|| (""==znombrepuesto)){znombrepuesto =  Tran.getProperty("All");}
%>
<script type="text/javascript">

function filtrar(num){

var valorwu =m4select("filtroworkunit","formfiltro","value");
var nombrewu =m4select("filtroworkunit","formfiltro","text");
var valorpuesto =m4select("filtropuesto","formfiltro","value");
var nombrepuesto =m4select("filtropuesto","formfiltro","text");

m4valor("oculto","zfiltrowu",valorwu,"set");
m4valor("oculto","znombrewu",nombrewu,"set");
m4valor("oculto","zfiltropuesto",valorpuesto,"set");
m4valor("oculto","znombrepuesto",nombrepuesto,"set");

m4submit("oculto");
}

function navegar(IdRH,Ordinal,Inicio,Fin,NombreEmpleado){


m4valor("ocultolink","zID_PERSONA",IdRH,"set");
m4valor("ocultolink","zOrdinal_HR",Ordinal,"set");
m4valor("ocultolink","zInicio",Inicio,"set");
m4valor("ocultolink","zFin",Fin,"set");
m4valor("ocultolink","NombreEmpleado",NombreEmpleado,"set");

m4submit("ocultolink");

}


</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>


<%
   String zsubsesion = "SSM_LISTA_GENERICA";
   String zmeta4object = "SSM_LISTA_GENERICA";
   String znodo = "SSM_H_HR_EMP";
   String znodolistaworkunit = "SSM_WORK_UNIT";
   String znodolistajob = "SSM_PUESTO";

   String ztipocarga = " ";
   String zventanas = "30";
   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p15.jsp";
   String zlink = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31" + zproc ;
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String vID_HR ="";
   String vOR_HR_ROLE ="";
   String vDT_START ="";
   String vDT_END ="";
   String vGB_NAME ="";   

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zSCO_ID_HR = zraiz + "SCO_ID_HR";
   String zSCO_DT_START = zraiz + "SCO_DT_START";
   String zSCO_DT_END= zraiz + "SCO_DT_END";
   String zSTD_N_FAMILY_NAME_1 = zraiz + "STD_N_FAMILY_NAME_1";
   String zSTD_N_FIRST_NAME = zraiz + "STD_N_FIRST_NAME";
   String zSCO_GB_NAME = zraiz + "SCO_GB_NAME";
   String zSTD_ID_JOB_CODE_HR = zraiz + "STD_ID_JOB_CODE";
   String zSTD_N_JOB_CODE_HR = zraiz + "STD_N_JOB_CODE";   
   String zSTD_ID_WORK_UNIT_HR = zraiz + "STD_ID_WORK_UNIT";
   String zSTD_N_WORK_UNIT_HR = zraiz + "STD_N_WORK_UNIT";   
   String zSCO_OR_HR_ROLE = zraiz + "SCO_OR_HR_ROLE";
   String zSCO_N_ROLE = zraiz + "SCO_N_ROLE";
   
   String zoutputdeflistaworkunit= zsubsesion + "!" + znodolistaworkunit + "[*]";
   String zmovelistaworkunit = znodolistaworkunit + ":" + znodolistaworkunit + "[FIRST]";
   String zcomunw = znodolistaworkunit + ":" + zsubsesion + "!" + znodolistaworkunit + "[&VAR.m4lix]" + ".";
   String zSTD_ID_WORK_UNIT = zcomunw + "STD_ID_WORK_UNIT";
   String zSTD_N_WORK_UNIT = zcomunw + "STD_N_WORK_UNIT";
   
   String zoutputdeflistajob = zsubsesion + "!" + znodolistajob + "[*]";
   String zmovelistajob = znodolistajob + ":" + znodolistajob + "[FIRST]";
   String zcomunjob = znodolistajob + ":" + zsubsesion + "!" + znodolistajob + "[&VAR.m4lix]" + ".";
   String zSTD_ID_JOB_CODE = zcomunjob + "STD_ID_JOB_CODE";
   String zSTD_N_JOB_CODE = zcomunjob + "STD_N_JOB_CODE";


   String znodoprincipal = "SSM_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodo,"","FILTRO_WUNIT",zfiltrowu);
	    m.setItem(zsubsesion,znodo,"","FILTRO_JOB",zfiltropuesto);
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolistajob%>"><m4:param name="m4name0" value="<%=zoutputdeflistajob%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolistaworkunit%>" ><m4:param name="m4name0" value="<%=zoutputdeflistaworkunit%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelistajob%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelistaworkunit%>"/></m4:move>
<%
	int  zcounti  = 0;	
	int  zcount  = 0;
	int  zcountiwu  = 0;	
	int  zcountwu  = 0;
	int  zcountilista  = 0;	
	int  zcountlista  = 0;
	int  zcounti2  = 0;	
	int  zcount2  = 0;
	
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcountwu = m.getCount(znodolistaworkunit,zsubsesion,znodolistaworkunit);
		zcountiwu = m.getCountInClient(znodolistaworkunit,zsubsesion,znodolistaworkunit);
		zcountlista = m.getCount(znodolistajob,zsubsesion,znodolistajob);
		zcountilista = m.getCountInClient(znodolistajob,zsubsesion,znodolistajob);
		
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvwu = String.valueOf(zcountiwu);
	String	zcountvlista = String.valueOf(zcountilista);
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");
String sFiltroNameL2=Tran.getProperty("Label.All");


if (zfiltrowu.equals("XXX01"))
{
 znombrewu =sFiltroNameL;
}

if (zfiltropuesto.equals("XXX01"))
{
 znombrepuesto =sFiltroNameL2; 
}
%>
<table width="100%" cellspacing="0"> 
<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr>
	<td><img alt="<%=ztitle%>" title="<%=ztitle%>" src="/iconos/noname_puesto_144_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrCargaObj")%></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=TranMss.getProperty("ev_mss.LinkSmart")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_smart.jsp?estado=31"><%=TranMss.getProperty("ev_mss.LinkSmart")%></a></li>
		<li><a class="enlacefuncional" tabindex="1" title="<%=TranMss.getProperty("ev_mss.LblJob")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3"><%=TranMss.getProperty("ev_mss.LblJob")%></a></li>
	   </ul>		
	</td>		

</tr>

</table>
<form name="formfiltro" id="formfiltro" action=" ">

<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" ><%=Tran.getProperty("Label.Filter")%></td></tr>
<tr>
	<td class="fuentecampofiltro" ><m4:label m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe="true"/>:&nbsp;
	<select id="filtroworkunit" class="fuenteapartados" onchange="filtrar(2)" title="<%=Tran.getProperty("Label.Uo")%>">	

	<option value="XXX01"><%=sFiltroNameL%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountvwu).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTD_ID_WORK_UNIT%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	<script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltrowu%>'!= "XXX01"){
        m4searchoptioness('formfiltro','filtroworkunit','<%=zfiltrowu%>');
      }
	 </script>
</tr>		
<tr>
	<td class="fuentecampofiltro" ><m4:label m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe="true"/>:&nbsp;
	<select id="filtropuesto" class="fuenteapartados" onchange="filtrar(3)"title="<%=Tran.getProperty("Label.Job")%>">	

	<option value="XXX01"><%=sFiltroNameL2%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountvlista).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTD_ID_JOB_CODE%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe = "true"/></option>
	</m4:loop>
	</select>
	</td>
		<script type="text/javascript" language="Javascript1.5">
        if ('<%=zfiltropuesto%>'!= "XXX01"){
          m4searchoptioness('formfiltro','filtropuesto','<%=zfiltropuesto%>');
        }
	 </script>
</tr>		
</table>
</form>
<form action="<%=zlink%>" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltrowu" name="zfiltrowu"  value="<%=zfiltrowu%>" />
<input type="hidden" id="znombrewu" name="znombrewu"  value="<%=znombrewu%>" />
<input type="hidden" id="zfiltropuesto" name="zfiltropuesto"  value="<%=zfiltropuesto%>" />
<input type="hidden" id="znombrepuesto" name="znombrepuesto"  value="<%=znombrepuesto%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
<input type="hidden" id="zOrdinal" name="zOrdinal" value="<%=zSCO_OR_HR_ROLE%>"  />
<input type="hidden" id="proc" name="proc" value="<%=zproc%>"  />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_1.jsp?estado=31" method="post" name="ocultolink" id="ocultolink">
<input type="hidden" id="zID_PERSONA" name="zID_PERSONA"  value="" />
<input type="hidden" id="zOrdinal_HR" name="zOrdinal_HR"  value="" />
<input type="hidden" id="zInicio" name="zInicio"  value="" />
<input type="hidden" id="zFin" name="zFin"  value="" />
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado"  value="" />	
</form>

<form name="NombreFormulario" id="NombreFormulario" action=" ">
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<m4:item m4name="<%=zSCO_ID_HR%>" htmlsafe = "true"/>"/>
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<m4:item m4name="<%=zSCO_OR_HR_ROLE%>" htmlsafe = "true"/>"/>
<input type="hidden" id="SCO_DT_START" name="SCO_DT_START" value="<m4:item m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/>"/>
<input type="hidden" id="SCO_DT_END" name="SCO_DT_END" value="<m4:item m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/>"/>
<input type="hidden" id="SCO_GB_NAME" name="SCO_GB_NAME" value="<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/>"/>




<% if (zcounti > 0) { %>	
<table width="100%" cellspacing="0">

<tr>

	<td class="tablaestadosceldatitulo" colspan="5"><m4:label m4name="<%=zSCO_GB_NAME%>"  htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" colspan="5"><m4:label m4name="<%=zSCO_N_ROLE%>"  htmlsafe = "true"/></td>	
	<td class="tablaestadosceldatitulo" colspan="5"><m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>	
	<td class="tablaestadosceldatitulo" colspan="5"><m4:label m4name="<%=zSTD_N_JOB_CODE_HR%>"  htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" colspan="5"><m4:label m4name="<%=zSTD_N_WORK_UNIT_HR%>"  htmlsafe = "true"/></td>
</tr>	
<%  
	try {
		M4Operations t = new M4Operations(request);
		int i = 0;
		for (i =zregistroinicial; i < zregistrofinal+1; i++){
				String id = String.valueOf(i);
				t.moveData(znodo,zmeta4object,znodo,id);
				
%>	<tr>
    <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo%>" var="vID_HR" />
  <%vID_HR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vID_HR);%>
  <m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="<%=znodo%>" var="vOR_HR_ROLE" />
  <%vOR_HR_ROLE = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vOR_HR_ROLE);%>
  <m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>" var="vDT_START" />
  <%vDT_START = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vDT_START);%>
  <m4:item item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>" var="vDT_END" />
  <%vDT_END = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vDT_END);%>
  <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>" var="vGB_NAME" />
  <%vGB_NAME = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vGB_NAME);%>  
  <td class="fuentevalor" colspan="5"><a class="enlacefuncional" title="<m4:label m4name="<%=zSCO_GB_NAME%>"  htmlsafe = "true"/>" href="javascript:navegar('<%=vID_HR%>','<%=vOR_HR_ROLE%>','<%=vDT_START%>','<%=vDT_END%>','<%=vGB_NAME%>')"><m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></a></td>
	
	<td class="fuentevalor"  colspan="5"><m4:item m4name="<%=zSCO_N_ROLE%>"  htmlsafe="true"/></td>
	<td class="fuentevalor"  colspan="5"><m4:item m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
	<td class="fuentevalor"  colspan="5"><m4:item m4name="<%=zSTD_N_JOB_CODE_HR%>"  htmlsafe = "true"/></td>
	<td class="fuentevalor"  colspan="5"><m4:item m4name="<%=zSTD_N_WORK_UNIT_HR%>"  htmlsafe = "true"/></td>
	<%}%>
</tr>
<%
	} catch(Exception e) {}
%>	 
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
<br/> <br/> 
<%}%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</form>

<m4:endpage/>
</body>
</html>


