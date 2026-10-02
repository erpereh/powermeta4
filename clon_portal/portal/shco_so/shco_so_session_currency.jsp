<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_session_currency.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>


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

<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>
<html>
<head>
<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
<title><%=Tran_shco_so.getProperty("so.ChangeOfCurr")%></title>
<meta http-equiv="Pragma" content="no-cache;">
<%
response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
response.setHeader("Pragma","no-cache"); //HTTP 1.0
response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
%>
</head>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="java.util.*, java.text.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.format.*, com.meta4.m4operations.M4Operations" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>


<% 

   M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
  
   // Obtaining the current date
   Calendar cal = Calendar.getInstance();
   int iday     = cal.get(Calendar.DAY_OF_MONTH);
   int imonth   = cal.get(Calendar.MONTH)+1;
   int ihour    = cal.get(Calendar.HOUR_OF_DAY);
   int iminutes = cal.get(Calendar.MINUTE);
   String sday  = (iday < 10)?   "0"+iday  : String.valueOf(iday);
   String smonth= (imonth < 10)? "0"+imonth: String.valueOf(imonth);
   String shour = (ihour < 10)?  "0"+ihour : String.valueOf(ihour);
   String sminutes= (iminutes < 10)? "0"+iminutes: String.valueOf(iminutes);
   String syear = String.valueOf(cal.get(Calendar.YEAR));
   
   // Obtain the default currency and the default exchange rate type 
   StringBuffer sbCurrency =new StringBuffer();
   StringBuffer sbExType =new StringBuffer();
    try{
    	M4Operations m_opr=new M4Operations(request);
    	m_opr.getInfoSessionM4Object(sbCurrency,sbExType,new StringBuffer(),new StringBuffer());
    } catch(Exception e) {
    	m_log.trace("Exception while retrieving options from the session object, in page session_currency.jsp: " +e.toString());	
    } 
    m_log.trace("Default currency is: " +sbCurrency+" and default exchange type ID is "+sbExType);
    if (sbCurrency == null || sbExType == null) {
	out.println("null");
    }
    String stFilterCurrency="FROM &SCH_CURRENCY A WHERE (A.ID_CURRENCY = '" + sbCurrency.toString()+ "')";
    String stFilterExType="FROM &SCH_LU_EX_TYPE A WHERE (A.EX_TYPE = " + sbExType.toString() + ")";
    
%>   
<m4:page subsessionid="SESSION">
<m4:job>
	<m4:datadef m4name="NM_CURRENCY" m4o="SCH_TR_CURRENCY"/>
	<m4:exec m4method="NM_CURRENCY.UNLOAD"/>


	<m4:exec m4method="NM_CURRENCY.LOADONLY"/>
	
	<m4:outputdef
        	m4alias="CURRENCY">
		<m4:param name="M4NAME0" value="NM_CURRENCY!SCH_TR_CURRENCY[*]"/>
	</m4:outputdef>

	<m4:datadef m4name="NM_EX_TYPE" m4o="SCH_TR_LU_EX_TYPE"/>
	<m4:exec m4method="NM_EX_TYPE.UNLOAD"/>
	

	<m4:exec m4method="NM_EX_TYPE.LOADONLY"/>


	<m4:outputdef
        	m4alias="EX_TYPE">
		<m4:param name="M4NAME0" value="NM_EX_TYPE!SCH_TR_LU_EX_TYPE[*]"/>
	</m4:outputdef>
	</m4:job>

	<%@ include file="../shco_g0/shco_gen_formats.jsp" %>

<%  
   // Formatting sdate from oracle format to the preconfigured format
   String sdate= syear+"-"+smonth+"-"+sday+" 00:00:00";
   M4SessionManager m4session = M4Context.getSession(request);
   try{    	    
	    // Deprecated: sdate = M4Context.parserFormat(m4session, sdate, 4, M4Context.M4_PARSER_MODE_OUT, "");
	    M4Format objformat = m4session.getM4Format();
	    sdate = objformat.outFormat(sdate, "date", zdateformat);	        
	    
    } catch(Exception e) {
            m_log.trace("Exception while formatting, in page session_currency.jsp: " +e.toString());
    } 
	   	   
%>

<script language="JavaScript">
	var bRefresh=true;	
	
	// Auxiliar variables used in the lookup list
	var currencyid;
	var currencynm;
	
	var typeid;
	var typenm;

	// Return the auxiliar fields
	function getcurrencyid(){
		return currencyid;
	}
	function getcurrencynm(){
		return currencynm;
	}

	// Return the auxiliar fields
	function gettypeid(){
		return typeid;
	}
	function gettypenm(){
		return typenm;
	}
	

	function doChangeCurrencySubmit(form){
		var sfunciones = "m4valinput('_date_oblig','data','m4_date_exchange',1,'<%=Tran_shco_so.getProperty("so.DateOfChange")%>',sformatofechas)";
    	var verr=m4valform(sfunciones);
           if (verr == 1){	
		   		bRefresh=false;
				form.submit();   		 
           }
		   
	}
	
	function close2(){
    		bRefresh=true;
    		this.close();
    	}
    
    	function setLocationParent(){    	
    	/* cancellation with the X */ 
    		if (bRefresh){    		
			this.opener.location = this.opener.location;
		}
    	}
</script>

<script language="JavaScript">
    function update_currencyid_selected(theselect, currencyid) {
	theindex=theselect.selectedIndex;
	currencyid.value = theselect.options[theindex].value;
    }	
    
     function update_typeid_selected(theselect, typeid) {
	theindex=theselect.selectedIndex;
	typeid.value = theselect.options[theindex].value;
    }	
    
</script>
<body onunload="setLocationParent()">
<% String zcssuser=l_zcss;%>
<form method="POST" action="/servlet/CheckSecurity/JSP/shco_so/shco_so_change_currency.jsp?css=<%=sStyleSheet%>" name="data" id="data">
	<input type="hidden" id="m4_dtexchange" name="m4_dtexchange" value="">	
	<input type="hidden" id ="m4_extype" name="m4_extype" value="">
	<input type="hidden" id="lang" name="lang" value="<%=zlanguser%>" />
	<input type="hidden" name="DateFormat" value="<%=zdateformat%>">
	<table  class="tablalink" cellspacing="2" border="0" align="center" height="100%" width="100%">	
		<tr><td colspan="2" class="texto2" align="center"></td></tr>
		<tr><td colspan="2" class="texto2" align="center"><%=Tran_shco_so.getProperty("so.ChangeOfCurr")%></td></tr>
		<tr><td colspan="2" class="texto2" align="center"></td></tr>
		<tr>
			<td class="texto1"><%=Tran_shco_so.getProperty("so.Curr")%></td>
			<td class="texto1">		
				<input type="hidden" name="m4_currency_id" size="5" 
				          value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sbCurrency.toString())%>" 
					  onFocus="this.blur()" onBlur="return false">

				<script language="JavaScript">
					document.write("<select class=\"selectform75\" name=\"the_select\" onClick=\"update_currencyid_selected(this, document.data.m4_currency_id)\">");				
					document.write("<option>Esta opción es necesaria para navegadores de Netscape");
					document.write("</select>");
				</script>
					  
					 <!-- 3) do it in java! (espanol) -->
					 <m4:count outputdef="CURRENCY" m4varname="sNumberOfCurrencies"/>
					 <% 
					 String sErrorCurrencyName = "_sl_co_so_2" ;
					 boolean isTheDefaultInTheList = false; 
					 %>
					 <m4:dataloop start="0" stop="<%=sNumberOfCurrencies%>" outputdef="CURRENCY">
						<m4:item m4varname="sCurrencyID" item="ID_CURRENCY" outputdef="CURRENCY" />	
						<m4:item m4varname="sCurrencyName" item="NM_CURRENCY" outputdef="CURRENCY" />
						<script language="JavaScript">
							option = new Option("<%= sCurrencyID %> - <%= sCurrencyName %>", "<%= sCurrencyID %>")      
							document.data.the_select.options[document.data.the_select.length] = option
						</script>
						<% 
						m_log.trace("Trying to see if currency ID is the user one: "+sCurrencyID+" #");
						if (sCurrencyID.equalsIgnoreCase(sbCurrency.toString())) {
						m_log.trace("This Currency ID matches!: "+sCurrencyID);
						isTheDefaultInTheList  = true;
						%>
							<m4:item m4varname="sDefaultCurrencyName" item="NM_CURRENCY" outputdef="CURRENCY" />
							<input type="hidden" name="m4_currency_nm" size="20" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sDefaultCurrencyName)%>" onFocus="this.blur()" onBlur="return false">
							<script language="JavaScript">
								document.data.the_select.options[document.data.the_select.length-1].selected = true;
							</script>
						<%
					
						}
					%>
					</m4:dataloop>
					
					<% if (!isTheDefaultInTheList){ %>
						<input type="hidden" id="m4_currency_nm" name="m4_currency_nm" size="20" value="" onFocus="this.blur()" onBlur="return false">
						<script type ="text/javascript">
							var sMessage= m4getmessage('<%=sErrorCurrencyName%>'); 
							m4valor('data','m4_currency_nm',sMessage,'set');
						</script>
					<% }%>
					
					<script language="JavaScript">
						if (document.data.the_select.length != 0) {document.data.the_select.options[0] = null;};
					</script>
					
			</td>
		<tr>
			<td class="texto1"><%=Tran_shco_so.getProperty("so.DateOfChange")%></td>
			<td class="texto1">
				<input type="text" id="m4_date_exchange" name="m4_date_exchange" size="20" value="<%=sdate%>">
			</td>
		</tr>
		<tr>	
			<td class="texto1"><%=Tran_shco_so.getProperty("so.TypeOfChange")%></td>
			<td class="texto1">		
				<input type="hidden" name="m4_type_id" size="5" 
				          value="<%=sbExType.toString()%>" 
					  onFocus="this.blur()" onBlur="return false">
					  
				<script language="JavaScript">
					document.write("<select class=\"selectform75\" name=\"the_selectExType\" onClick=\"update_typeid_selected(this, document.data.m4_type_id)\">");				
					document.write("<option>Esta opción es necesaria para navegadores de Netscape");
					document.write("</select>");
				</script>
				
					<!-- 3) do it in java! (espanol) -->
					<m4:count outputdef="EX_TYPE" m4varname="sNumberOfExchangeRateSources"/>
					 <% 
					 String sErrorSourceName = "_sl_co_so_3";
					 boolean isTheDefaultSourceInTheList = false; 
					 %>
					<m4:dataloop start="0" stop="<%=sNumberOfExchangeRateSources%>" outputdef="EX_TYPE">
						<m4:item m4varname="sExchangeRateSourceID" item="EX_TYPE" outputdef="EX_TYPE"/>	
						<m4:item m4varname="sExchangeRateSourceName" item="NM_EX_TYPE" outputdef="EX_TYPE"/>
						<script language="JavaScript">
							option = new Option("<%= sExchangeRateSourceID %> - <%= sExchangeRateSourceName %>", "<%= sExchangeRateSourceID %>")      
							document.data.the_selectExType.options[document.data.the_selectExType.length] = option
						</script>
						<% 
						m_log.trace("Trying to see if exchange rate source ID is the user one: "+sExchangeRateSourceID+" #");
						if (sExchangeRateSourceID.equalsIgnoreCase(sbExType.toString())) {
						m_log.trace("This Exchange Rate Source ID matches!: "+sExchangeRateSourceID);
						isTheDefaultSourceInTheList  = true;
						%>
							<m4:item m4varname="sDefaultExchangeRateSourceName" item="NM_EX_TYPE" outputdef="EX_TYPE"/>
							<input type="hidden" name="m4_type_nm" size="20" value="<%=sDefaultExchangeRateSourceName%>" onFocus="this.blur()" onBlur="return false">
							<script language="JavaScript">
								document.data.the_selectExType.options[document.data.the_selectExType.length-1].selected = true;
							</script>
						<%
						}
					%>
					</m4:dataloop>
					<% if (!isTheDefaultSourceInTheList){ %>
						<input type="hidden" id="m4_type_nm" name="m4_type_nm" size="20" value="" onFocus="this.blur()" onBlur="return false">
						<script type ="text/javascript">
							var sMessage= m4getmessage('<%=sErrorSourceName%>'); 
							m4valor('data','m4_type_nm',sMessage,'set');
						</script>
					<% }%>
					
					<script language="JavaScript">
						if (document.data.the_selectExType.length != 0) {document.data.the_selectExType.options[0] = null;};
					</script>
			</td>
		</tr>
		<tr>
			
			<td class="" align="center"><a tabindex="1" title="<%=Tran_shco_so.getProperty("so.Change")%>" href="javascript:doChangeCurrencySubmit(document.data);"><img <%@ include file="../files_gif/ic_ace.jsp" %> title="<%=Tran_shco_so.getProperty("so.Change")%>"	></a>&nbsp;</td>
			<td class="" align="center"><a tabindex="2" title="<%=Tran_shco_so.getProperty("so.Cancel")%>" href="javascript:close2();"><img <%@ include file="../files_gif/ic_can.jsp" %> title="<%=Tran_shco_so.getProperty("so.Cancel")%>" 	></a>&nbsp;</td>
		</tr>
</table>
</form>
</m4:page>
</body>
</html>
