<%@page contentType="text/html"%> 
<%@page pageEncoding="UTF-8"%> 
<!DOCTYPE>
<html>
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 

  <%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
  <%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
  <%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
  <%@ include file="/sse_g3/sse_train_trans.jsp"%>

  <%

    String empleado = (String)request.getAttribute("empleado");
    String periodo = (String)request.getAttribute("periodo");
    String role = (String)request.getAttribute("role");
    String zVis = (String)request.getAttribute("zVis");
    zVis = ( zVis==null || zVis.equals("") ) ? "1" : "";
    String zSMCO_ID_HR = (zVis.equals("1")) ? "" : com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", empleado);
    String estilo = (zVis.equals("1")) ? "/css/estilo_sse.css" : "/css/estilo_mss.css";

    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
    String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
    if ((estado==null)||(estado.equals(""))){estado="0";}
    if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

    if (zVis.equals("1")){ %><%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %><% }

    String zsubsesion = "SSE_H_HR_COURSE";
    String zmeta4object = "SSE_H_HR_COURSE";
    String znodo = "SSE_H_HR_COURSE";

    String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";

    String zventanas = (zVis.equals("1")) ? "20" : "2000";

    int zvuelta = 5;
    String zdireccion = "sse_g3/sse_g3_p21.jsp";
    String zestado = "21";

    int zregistroinicial = Integer.valueOf(zinicios).intValue() - 1;
    int zventana  = Integer.valueOf(zventanas).intValue();
    int zregistrofinal = zregistroinicial + zventana - 1;

    String zoutputdef = zsubsesion + "!" + znodo + "[*]";
    String zmove = znodo + ":" + znodo + "[FIRST]";
    String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

    String zSCO_DT_START = zcomun + "SCO_DT_START";
    String zSCO_DT_END = zcomun + "SCO_DT_END";
    String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";
    String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";
    String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";
    String zSCO_ID_STATE = zcomun + "SCO_ID_STATE";
    String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";
    String zSCO_ID_DEV_SUBACTION = zcomun + "SCO_ID_DEV_SUBACTION";

    String sSortNode = zmeta4object + "!" + znodo + ".Sort";

    String estitabla = (zVis.equals("1")) ? "tablaestados" : "barraregistros";
    String textonodata = (zVis.equals("1")) ? Tran.getProperty("Label.NoDataFound99") : TrainEss.getProperty("Label.NoData");

  %>

  <link type="text/css" rel="stylesheet" href="<%=estilo%>"/>

  <link type="text/css" rel="stylesheet" href="/LibQ/DataTables_CSS_CYC/datatables_css_portal_CYC.css" />
  <!-- <link type="text/css" rel="stylesheet" href="/LibQ/DataTables_min/datatables.min.css" /> -->
  <script type="text/javascript" src="/LibQ/jQuery-3.3.1/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="/LibQ/DataTables_min/datatables.min.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_es.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_pt_ordenado.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js"></script>
  <script type="text/javascript" src="/LibQ/DataTables_Q_js/datatable_general.js"></script>


  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  
  <title><%=TrainEss.getProperty("Label.HistTrain")%></title>



  <style type="text/css">

    .cent-text{
      text-align:center;
    }

  </style>


</head>
<body>


  <m4:startpage m4task="<%=zsubsesion%>"/>


    <m4:beginjob/>

      <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

      <m4:exec m4method="<%=zmetodocarga%>">
        <m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/>
      </m4:exec>

      <m4:sortitems m4name="<%=sSortNode%>">
        <m4:param name="SCO_DT_START" value="DESC"/>
      </m4:sortitems>

      <m4:outputdef m4alias="<%=znodo%>">
        <m4:param name="m4name0" value="<%=zoutputdef%>"/>
      </m4:outputdef>

    <m4:endjob/>

    <m4:move>
      <m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/>
    </m4:move>


    <% String zcounti = new Integer( new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo) -1 ).toString(); %>


    <%if (zVis.equals("1")){%>
    <table width="100%" style="padding-bottom: 20px;">
      <tr>
        <td class="titulofuncional" colspan="2"><%=TrainEss.getProperty("Label.HistTrain")%></td>
      </tr>
      <tr>
        <td valign="top"><img alt="<%=TrainEss.getProperty("Label.HistTrain")%>" title="<%=TrainEss.getProperty("Label.HistTrain")%>"   src="/iconos/noname_evalua_cursos_74_100.gif" width="100" height="100" /></td>
        <td><div class="descripcionfuncional"><%=TrainEss.getProperty("Label.HistTrainDesc")%></div></td>
      </tr>
    </table>
    <%}%>


    <table id="tablaSalida" class="<%=estitabla%>" width="100%" cellspacing="0">

      <thead>

        <tr style="background-color: white;">
          <th data-funbus="buscaqcontencade" data-tipo="text"><m4:label m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/></th>
          <th data-tipo="none"></th>
          <th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicos" data-origen="tablaSalida"><m4:label m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/></th>
          <th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicos" data-origen="tablaSalida"><m4:label m4name="<%=zSCO_NM_STATE%>" htmlsafe="true"/></th>
          <th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicosFechaOnlyYear" data-origen="tablaSalida" data-separa="-" data-posicion="2"><m4:label m4name="<%=zSCO_DT_START%>" htmlsafe="true"/></th>
          <th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicosFechaOnlyYear" data-origen="tablaSalida" data-separa="-" data-posicion="2"><m4:label m4name="<%=zSCO_DT_END%>" htmlsafe="true"/></th>
          <th data-funbus="buscaqcontencade" data-tipo="text"><m4:label m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></th>
        </tr>

        <tr>
          <td><m4:label m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe = "true"/></td>
          <td><center>Certificado</center></td>
          <td><m4:label m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe = "true"/></td>
          <td><m4:label m4name="<%=zSCO_NM_STATE%>" htmlsafe = "true"/></td>
          <td><m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
          <td><m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
          <td><m4:label m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe = "true"/></td>
        </tr>
        
      </thead>

      <tbody>


        <!-- <tr>
          <td>á</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> -->

        <m4:loop from="0" to="<%=zcounti%>">
        <m4:item m4varname="zDato" m4name="<%=zSCO_ID_STATE%>"/>
        <% String idSesion = (zDato.equals("01")) ? new M4Operations(request).getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION") : ""; %>

        <tr>  
          <td><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/></td>
          <td class="cent-text">
            <%if(!idSesion.equals("")){ %>
              <a class="enlacefuncional" title="Certificado" href="./certificado/sse_g3_p21_certificado.jsp?tr=<%=idSesion%>" target="_blank"><img src="/iconos/ic_ord_down_15_15.gif"></a>
            <%}%>
          </td>   
          <td class="cent-text"><m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/></td>
          <td class="cent-text"><m4:item m4name="<%=zSCO_NM_STATE%>" htmlsafe="true"/></td>    
          <td class="cent-text"><m4:item m4name="<%=zSCO_DT_START%>" htmlsafe="true"/></td>
          <td class="cent-text"><m4:item m4name="<%=zSCO_DT_END%>" htmlsafe="true"/></td>
          <td><m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></td>  
        </tr> 

        </m4:loop>
      </tbody>


    </table>


  <m4:endpage/>



  <script type="text/javascript">

    $(document).ready(function() {

      colocaFiltros_thead('#tablaSalida');
      $('#tablaSalida').DataTable({ 
        columnDefs: [
          { type: 'ord-pt-cyc', targets: 0 },
          { type: 'ord-pt-cyc', targets: 1 },
          { type: 'ord-pt-cyc', targets: 2 },
          { type: 'ord-pt-cyc', targets: 3 },
          { type: 'fecha-es-cyc', targets: 4 },
          { type: 'fecha-es-cyc', targets: 5 },
          { type: 'ord-pt-cyc', targets: 6 },
        ],
        order: [[ 4, "desc" ]],
        language: txtESDatatable,
        scrollY: "300px",
        scrollX: true,
        paging: false,
        ordering: true,
        info: true
      });
      cargaFunBusqueda_thead('#tablaSalida');

    } );

  </script>


</body>
</html>



