<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
   String nombre = "";
   String valor = "";
   String from_other_page = "";

   String id_incidence_back = "";
   String id_incidence_date_back = "";
   String incidencie_population_back = "";
   String add_value = "";
	boolean bEnd = false;
	String valorMassive = "";
	String newValor = "";   
	String sLog = "";

	Hashtable zhash = new Hashtable(20);
	Enumeration oenum = request.getParameterNames();
	   while(oenum.hasMoreElements ()){
		    add_value = "YES";
			 nombre = (String) oenum.nextElement();
			 //valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
			 valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);

			 //Decrypt a set of employees
			 if (nombre.equals("SET_OF_EMPLOYEES_SELECTED")){
				//the string will be: lengthOfID,ID, ejample: 3,hji4,jkhu5,jkhui => means = hji + jkhu + jkhui
				//we must decrypt each ID individually
				//result: M11#M22#M33
				valorMassive = valor;
				while (!bEnd) {
					int iNextSep = valorMassive.indexOf(",");
					sLog = sLog + ": iNextSep=" + iNextSep;
					if (iNextSep!=-1){
						int iIDlength = Integer.parseInt(valorMassive.substring(0,iNextSep));
						String sID = valorMassive.substring(iNextSep+1,iNextSep+iIDlength+1);
						sID = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", sID);
						sLog = sLog + ": sID=" + sID;
						newValor = newValor + sID + "#";
						
						if (iNextSep+iIDlength == valorMassive.length()){
							bEnd = true;
						}else{
							valorMassive = valorMassive.substring(iNextSep+iIDlength+1);	
							sLog = sLog + ": valorMassive=" + valorMassive;							
						}
					}else{bEnd = true;}
				}
				valor = newValor;
			}

			 //Rest of parameters
			 if (nombre.equals("SCO_ID_INCIDENCE")){
			     valor = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", valor);}

			 if (nombre.equals("REC")){
			     valor = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", valor);}

			 if (nombre.equals("from_other_page")){
				 from_other_page = valor;
				 add_value = "NO";}
			 if (nombre.equals("id_incidence_back")){
				 id_incidence_back = valor;
				 add_value = "NO";}
			 if (nombre.equals("id_incidence_date_back")){
				 id_incidence_date_back = valor;
				 add_value = "NO";}
			 if (nombre.equals("incidencie_population_back")){
				 incidencie_population_back = valor;add_value = "NO";}
				 
			 if (add_value.equals("YES")){zhash.put (nombre,valor);}
		
	}
   String zparametro = "";
   String zsubsesion = (String)zhash.get("TAG");
	zhash.remove("TAG");
	zparametro	+="TAG"+ "=" + (zsubsesion) + "{"; 
	zparametro	+="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
	zhash.remove("REC");
	zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
	zhash.remove("ACC"); 
	zparametro	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
	zhash.remove("NOD");
	
	String key =""; 
	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
			 key = (String) enumhash.nextElement();
			    valor = (String) zhash.get(key);
			    zhash.remove(key); 
				zparametro	+= key + "=" + valor + "{" ;
			}	
   
   //String _SERVER="+"http://"+ request.getServerName()+":"+ request.getServerPort()";
   
   
   String zmeta4object = zsubsesion;
   String znodo = "SSE_PRINCIPAL";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".GESTION";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="GESTION_ARG" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%

	String zerror = "0";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo,zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem(znodo,zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}else{
	zredireccion = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zredireccion);

	if (from_other_page.equals("YES")){
	zredireccion = zredireccion + "?id_incidence=" + id_incidence_back + "&id_incidence_date=" + id_incidence_date_back + "&incidencie_population=" + incidencie_population_back;}
	
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">

<%
}
%>

<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
<%@include file="generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
