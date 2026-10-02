<%@ include file="../mss_g1/smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SMCO_KNOWLEDGE_FEEDBACK";
   String znodo = "SMCO_GENERIC_PERSON_HEADER";

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
   String PERSDATAPHOTO= zcomun + "SMCO_PHOTO_ESS";

   String PERSDATAMARITAL = zcomun + "SMCO_MARITAL_STATUS";

   String PERSDATAHIREDATA = zcomun + "SMCO_HIRE_DATA";
   String PERSDATAKEYEMPLOYEE = zcomun + "SMCO_KEY_EMPLOYEE";

   String PERSDATAPERSONTYPE = zcomun + "SMCO_PERSON_TYPE";

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

  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
  <%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  %>

  <m4:item m4varname="tp_person" m4name="<%=PERSDATAPERSONTYPE%>"/>
  <m4:item m4varname="is_key_employee" m4name="<%=PERSDATAKEYEMPLOYEE%>"/>
  <m4:item m4varname="this_age" m4name="<%=PERSDATAAGE%>"/>

<script type="text/javaScript">
  function open_WEB(path)
  {
    window.open(path,'Vis','width=800;height=600,resizable,scrollbars');
  }

function load_prof(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1024;height=650,resizable,scrollbars');
}

function load_cv(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&zVis=0&person=" + empleado + "&RET=DAT";
  window.open(dir,'Vis','width=1024;height=650,resizable,scrollbars');
}

</script>

<br/>

<table class="tablaestadosborde" width="100%" cellspacing="0"  border="0">
  <tr>
    <td width="15%"><img alt='<%=ProfCv.getProperty("prof_cv.Alt")%>' src='/fotos/<m4:item m4name="<%=PERSDATAPHOTO%>" htmlsafe = "true"/>' width="90" height="120"/></td>
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
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATADTBIRTH%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATADTBIRTH%>"/></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAAGE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAAGE%>"/>&nbsp;<%if (this_age.equals("")){}else{%><%=ProfCv.getProperty("prof_cv.anios")%><%}%></td>

      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAGENDER%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAGENDER%>"/></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHOMEPAGE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<a href="javascript:open_WEB('<m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/>');"
        title="<%=ProfCv.getProperty("prof_cv.Title6")%>"><u><m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/></u></a></td>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAEMAIL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<a href="mailto:<m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/>" title="<%=ProfCv.getProperty("prof_cv.Title5")%>"><u><m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/></u></a></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAPHONE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAPHONE%>"/></td>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAMOVIL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAMOVIL%>"/></td>

        <% if (tp_person.equals("1")){%>

          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAKEYEMPLOYEE%>"/></b></td>
          <% if(is_key_employee.equals("1")) { %>
            <td class="textorojo">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
          <%}else{%>
            <td class="fuentevalor">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
          <%}%>
      <%}else{%>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAMARITAL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAMARITAL%>"/></td>
      <%}%>
      </tr>

      <% if (tp_person.equals("1")){%>
        <tr>
          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHIREDATA%>"/></b></td>
          <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=PERSDATAHIREDATA%>"/></td>
        </tr>
      <%}%>

      <% if (tp_person.equals("1")){%>
        <tr>
          <td class="fuentevalor">&nbsp;</td>
          <m4:item m4name="<%=PERSDATASID%>" htmlsafe="true" m4varname="sIDPerson"/>
          <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
          <td class="fuentevalor" colspan="3" align="right"><a class="enlacefuncional" title="<%=ProfCv.getProperty("prof_cv.MasProf")%>" href="javascript:load_prof('<%=sIDPerson%>');">
          <img align="right" alt="<%=ProfCv.getProperty("prof_cv.MasProf")%>"  src="/iconos/add.gif" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
          </a></td>
        </tr>
      <%}else{%>
        <tr>
          <td class="fuentevalor">&nbsp;</td>
          <m4:item m4name="<%=PERSDATASID%>" htmlsafe="true" m4varname="sIDPerson"/>
          <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
          <td class="fuentevalor" colspan="3" align="right"><a class="enlacefuncional" title="<%=ProfCv.getProperty("prof_cv.MasCV")%>" href="javascript:load_cv('<%=sIDPerson%>');">
          <img align="right" alt="<%=ProfCv.getProperty("prof_cv.MasCV")%>"  src="/iconos/add.gif" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
          </a></td>
        </tr>
      <%}%>
      <tr><td colspan="4">&nbsp;</td></tr>

      </table>
    </td>
  </tr>
</table>
</m4:loop>