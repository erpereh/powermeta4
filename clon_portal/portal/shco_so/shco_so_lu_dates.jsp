<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_lu_dates.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%-- Desde funcional: Añadimos las traducciones,hoja de estilos y errores--%>
<%
	String zlanguser = request.getParameter("lang");
	if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "en";}
%>
<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="shco_so_trans.jsp" %>
<%@ include file="shco_gen_so_include.jspf" %>

<%
M4SessionManager l_zsm = M4Context.getSession(request);
SavParamsInterface l_oSP = l_zsm.getSavParamsInstance();
String l_zcss = (String) l_oSP.getParameterValue("PORTAL_PARAM", "CSS");
%>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=zlanguser%>.js"></script>
<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>

<html>
<head>
<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
<title><%=Tran_shco_so.getProperty("so.DateFilter")%></title>
</head>





<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="java.util.*, java.text.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.format.*, com.meta4.m4operations.M4Operations" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>
<%@ include file="../shco_g0/shco_gen_formats.jsp" %>


<% 
   M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
  
   // Obtaining the current date
   Calendar cal = Calendar.getInstance();
   int iday     = cal.get(Calendar.DAY_OF_MONTH);
   int imonth   = cal.get(Calendar.MONTH)+1;
   String sday  = (iday < 10)?   "0"+iday  : String.valueOf(iday);
   String smonth= (imonth < 10)? "0"+imonth: String.valueOf(imonth);
   String syear = String.valueOf(cal.get(Calendar.YEAR));
    
%>   

<%  
   // Formatting sdate from oracle format to the preconfigured format
   String sdate= syear+"-"+smonth+"-"+sday+" 00:00:00";
   try{    
	    M4SessionManager m4session = M4Context.getSession(request);
	    // Deprecated: sdate = M4Context.parserFormat(m4session, sdate, 4, M4Context.M4_PARSER_MODE_OUT, "");
	    M4Format objformat = m4session.getM4Format();
	    sdate = objformat.outFormat(sdate, "date", zdateformat);	        
	    
    } catch(Exception e) {
            m_log.trace("Exception while formatting, in page lu_date.jsp: " +e.toString());
    } 
%>


<script language="JavaScript">
    var bRefresh=true;			
    function val(form){
    	var sfunciones = "m4valinput('_date_oblig','myform','STARTDATE',1,'<%=Tran_shco_so.getProperty("so.StartDate")%>',sformatofechas)";
			sfunciones = sfunciones+"*"+"m4valinput('_date_oblig','myform','ENDDATE',1,'<%=Tran_shco_so.getProperty("so.EndDate")%>',sformatofechas)";
    	var verr=m4valform(sfunciones);
		if (verr==1){
		   sfunciones = "m4valinput('_com','myform','STARTDATE','myform','ENDDATE','<=','_date',0,sMSG_ERROR_ID+'_sl_co_gn_3','<%=Tran_shco_so.getProperty("so.StartDate")%>','<%=Tran_shco_so.getProperty("so.EndDate")%>')";
		   var verr=m4valform(sfunciones);
           if (verr == 1){	
               	  bRefresh=false;
               	  form.DateIni.value = form.STARTDATE.value;
               	  form.DateEnd.value = form.ENDDATE.value ;	 
               	  form.submit();	   		 
           }
		}
    }
	
    function selectiondone(form) {
       if ((form.STARTDATE.value=="")||(form.ENDDATE.value=="")){
       	<!--alert("Debe poner las fechas.");-->
       	m4setlog('_sl_co_so_9');
       } else {
       	bRefresh=false;
       	form.DateIni.value = form.STARTDATE.value;
       	form.DateEnd.value = form.ENDDATE.value ;	 
       	form.submit();	
       }
	}

    function close2(){
    	bRefresh=true;
		this.close();
    }
    
    function setLocationParent(){    	
    	/* cancellation with the X */    	
    	if (bRefresh)
		{
    		sUrl = this.opener.location.href;
    		sUrlQuitar = "&filterdates=1";
    		sUrl=sUrl.substring(0,sUrl.length - sUrlQuitar.length);    		
    		this.opener.location = this.opener.location;
			this.opener.location.href = sUrl  ;
		}
    }
    
</script>
<body onunload="setLocationParent()">
<form method="POST" action="/servlet/CheckSecurity/JSP/shco_so/shco_so_change_dates.jsp?css=<%=sStyleSheet%>" id="myform" name="myform">
   	    <input type="hidden" id="lang" name="lang" value="<%=zlanguser%>" />
		<input type="hidden" name="DateIni" value="<%=sdate%>">	
		<input type="hidden" name="DateEnd" value="<%=sdate%>">
		<input type="hidden" name="DateFormat" value="<%=zdateformat%>">
        <table  class="tablalink" cellspacing="2" border="0" align="center" height="100%" width="100%">
    		<tr><td colspan="2" class="texto2" align="center"></td></tr>
    		<tr><td colspan="2" class="texto2" align="center"><%=Tran_shco_so.getProperty("so.DateFilter")%></td></tr>
    		<tr><td colspan="2" class="texto2" align="center"></td></tr>		
        	<tr>
				<td class="texto1"><%=Tran_shco_so.getProperty("so.StartDate")%></td>
        		<td class="texto1">
        			<input type="text" id="STARTDATE" name="STARTDATE" size="20" value="<%=sdate%>">
        		</td>
        	</tr>
        	<tr>
				<td class="texto1"><%=Tran_shco_so.getProperty("so.EndDate")%></td>
        		<td class="texto1">
        			<input type="text" id="ENDDATE" name="ENDDATE" size="20" value="<%=sdate%>">
        		</td>
        	</tr>
        	<tr>
        		<% String zcssuser=l_zcss;%>
        		<td class="" align="center"><a tabindex="1" title="<%=Tran_shco_so.getProperty("so.Change")%>" href="javascript:val(document.myform);"><img <%@ include file="../files_gif/ic_ace.jsp" %> title="<%=Tran_shco_so.getProperty("so.Change")%>"	></a>&nbsp;</td>
				<td class="" align="center"><a tabindex="2" title="<%=Tran_shco_so.getProperty("so.Cancel")%>" href="javascript:close2();"><img <%@ include file="../files_gif/ic_can.jsp" %> title="<%=Tran_shco_so.getProperty("so.Cancel")%>" 	></a>&nbsp;</td>
        	</tr>
        </table>
</form>

</body>
</html>
