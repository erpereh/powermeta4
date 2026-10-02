<%@ include file="../../mss_g1/smco_prof_cv_trans.jsp" %>

<%
   M4SessionManager m4Session = M4Context.getSession(request);
   String sPathTempURI = m4Session.getUserTempURI() + '/';

   String zcalling_page = (String)request.getAttribute("calling_page");
   String zsubsesion = "";
   String znodo = "";

   if (zcalling_page.equals("smco_g1_profs_info")){
     zsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
     znodo = "SMCO_PROFS_INFO_PERSONAL_DATA";
   }else{
     zsubsesion = "SSE_EMP_CV";
     znodo = "SMCO_PERSON_HEADER_CV";
   }

   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String PERSDATAGBNAME = zcomun + "SMCO_GB_NAME";
   String PERSDATADTBIRTH = zcomun + "SMCO_DT_BIRTH";
   String PERSDATAGENDER = zcomun + "SMCO_N_GENDER";
   String PERSDATANATIONALITY = zcomun + "SMCO_NATIONALITY";
   String PERSDATAHOMEPAGE = zcomun + "SMCO_HOME_PAGE";
   String PERSDATASID = zcomun + "SMCO_ID_PERSON";
   String PERSDATAEMAIL = zcomun + "SMCO_EMAIL";
   String PERSDATAAGE= zcomun + "SMCO_AGE";
   String PERSDATAPHONE= zcomun + "SMCO_PHONE";
   String PERSDATAMOVIL= zcomun + "SMCO_PHONE_MOVIL";
   String PERSDATANAMEPHOTO= zcomun + "SMCO_PRP_NAME_PHOTO";

   String PERSDATAKEY= "";
   String PERSDATAHIREDATE= "";
   String PERSDATAMARITAL = "";
   
   
   if (zcalling_page.equals("smco_g1_profs_info")){
     PERSDATAKEY= zcomun + "SMCO_KEY_EMPLOYEE";
     PERSDATAHIREDATE= zcomun + "SMCO_HIRE_DATA";
   }else{
     PERSDATAMARITAL= zcomun + "SMCO_MARITAL_STATUS";
   }

  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient("",zsubsesion,znodo);
  } catch(Exception e) {}

  String zcountv = String.valueOf(zcounti);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  %>

<m4:getapplparam section="PORTAL_PARAM" key="FIELDS_VISIBILITY" output="jsp"/>
<%
  String zfieldvis = (String)pageContext.getAttribute("FIELDS_VISIBILITY");
%>

<div id="employee_header" name="employee_header">
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
  <%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  %>

  <m4:item m4varname="is_key_employee" m4name="<%=PERSDATAKEY%>"/>
  <m4:item m4varname="this_age" m4name="<%=PERSDATAAGE%>"/>

<script type="text/javaScript">
  function open_WEB(path)
  {
    window.open(path,'Vis','width=800;height=600,resizable,scrollbars');
  }
</script>

<table width="100%" cellspacing="0" class="barraregistros">
  <tr height="40">
    <td class="titulofuncional2" width="40%"><b></b></td>
    <td class="titulofuncional3" width="60%"><b><i><m4:item m4name="<%=PERSDATAGBNAME%>" htmlsafe = "true"/>&nbsp;(<m4:item m4name="<%=PERSDATASID%>"/>)</b></i></td>
  </tr>
</table>
<br/>

<table class="tablaestadosborde" width="100%" cellspacing="0">
  <tr>
    <td width="15%"><img alt='<%=ProfCv.getProperty("prof_cv.Alt")%>' src='<%=sPathTempURI%><m4:item m4name="<%=PERSDATANAMEPHOTO%>" htmlsafe = "true"/>' width="120" height="120"/></td>
    <td width="85%"  valign="top">
      <table class="barraregistros" width="100%" cellspacing="0">
      <tr>
        <td class="tablaestadosceldatitulo" colspan="4">&nbsp;<%=ProfCv.getProperty("prof_cv.Title4")%></td>
      </tr>
      <tr><td colspan="4">&nbsp;</td></tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAGBNAME%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAGBNAME%>"/></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATANATIONALITY%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATANATIONALITY%>"/></td>

      </tr>
      
      <%if(zfieldvis.equals("1")){%>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATADTBIRTH%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATADTBIRTH%>"/></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAAGE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAAGE%>"/>&nbsp;<%if (this_age.equals("")){}else{%><%=ProfCv.getProperty("prof_cv.anios")%><%}%></td>
      </tr>
      <%}else{%>
            <%if(zfieldvis.equals("2")){%>      
            <tr>
            <td class="fuentevalor">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label36")%></b></td>
            <td class="fuentevalor" colspan = 3 >&nbsp;<m4:item m4name="<%=PERSDATADTBIRTH%>" m4format = "d MMMM "  /></td>                       
            </tr>
            <%}%>
      <%}%>


        <%if(zfieldvis.equals("1")){%>
          <tr>
          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAGENDER%>"/></b></td>
          <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAGENDER%>"/></td>
          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHOMEPAGE%>"/></b></td>
          <td class="fuentevalor">&nbsp;<a href="javascript:open_WEB('<m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/>');"
          title="<%=ProfCv.getProperty("prof_cv.Title6")%>"><u><m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/></u></a></td>
          </tr>                       
      <%}else{%>
           <tr>
          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHOMEPAGE%>"/></b></td>
          <td class="fuentevalor" colspan="4">&nbsp;<a href="javascript:open_WEB('<m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/>');"
          title="<%=ProfCv.getProperty("prof_cv.Title6")%>"><u><m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/></u></a></td>
          </tr>
      <%}%>

      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAEMAIL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<a href="mailto:<m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/>" title="<%=ProfCv.getProperty("prof_cv.Title5")%>"><u><m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/></u></a></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAPHONE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAPHONE%>"/></td>
      </tr>
        <tr>
            <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAMOVIL%>"/></b></td>
            <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAMOVIL%>"/></td>
     
            <% if (zcalling_page.equals("smco_g1_profs_info")){%>
              <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAKEY%>"/></b></td>
              <% if(is_key_employee.equals("1")) { %>
                <td class="fuentevalorojo">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
              <%}else{%>
                <td class="fuentevalor">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
              <%}%>
            <%}else{%>
	        		  <%if(zfieldvis.equals("1")){%>    
			              <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAMARITAL%>"/></b></td>
						  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAMARITAL%>"/></td>
		              <%}else{%>
					      <td class="fuentevalor">&nbsp;</td>
  					      <td class="fuentevalor">&nbsp;</td>
			          <%}%>
            <%}%>
     
          </tr>

      


              
      
      <% if (zcalling_page.equals("smco_g1_profs_info")){%>
        <tr>
          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHIREDATE%>"/></b></td>
          <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=PERSDATAHIREDATE%>"/></td>
        </tr>
      <%}%>
      <tr><td colspan="4">&nbsp;</td></tr>

      </table>
    </td>
  </tr>
</table>
</m4:loop>
</div>