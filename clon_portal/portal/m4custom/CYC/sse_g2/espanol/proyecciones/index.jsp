<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*"%>
<%@ page import="java.text.DecimalFormat" %>

<%
//no cache
  response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=UTF-8");
  request.setCharacterEncoding("UTF8");
  
  String anio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio");
  if ((anio==null)||(anio.equals(""))){anio = "0";}

%>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" charset="UTF-8">
  <meta name="description" content="Informe de compensación total <%=anio%>">

  <title>Informe de compensación total <%=anio%></title>
  
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/styles.css">
  <link rel="stylesheet" media="print" href="./css/print.css">  

  <script type="text/javascript" src="./js/jquery-3.5.1.js"></script>
  <script src="./js/dirty-json.js"></script>
  <script type="text/javascript" src="./js/chart.js"></script>
  <script type="text/javascript" src="./js/chartjs-plugin-datalabels.min.js"></script>
  <script type="text/javascript" src="./js/printGrafDoughnut.js"></script>
  <script type="text/javascript" src="./js/printGrafBar.js"></script>
</head>
<body>
  <div class="container mt-3">

    <!-- Flotantes -->
    <div class="flota-btn-rv">
      <button class="print-btn" onclick="print()">
        <img src="./assets/print-sharp.svg"/>
      </button>
      <button class="print-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
        <span class="glyphicon glyphicon-chevron-up up" aria-hidden="true"></span>
      </button>
    </div>

    <!-- Datos empleado -->
    <div class="row mb-3">
      <div class="col-md-6 fr">
        <img class="logo" src="./assets/logo.png"/>
      </div>
      <div class="col-md-6">
        <h3 id="tt"></h3>
        <h3 id="tn"></h3>
        <h3 id="tg"></h3>
      </div>      
    </div>    

    <!-- Trio de gráficos -->
    <div id="graff" class="row sombox mt-5 p-3"></div>

    <!-- <div class="row sombox mt-5 p-3">
      <div class="col-md-4">
        <h4 class="titgra">Retribución Directa</h4> 
        <canvas id="graf00" width="416" height="416"></canvas>
      </div>    
      <div class="col-md-4">
        <h4 class="titgra">Compensación Total</h4> 
        <canvas id="graf01" width="416" height="416"></canvas>
      </div>  
      <div class="col-md-4">
        <h4 class="titgra">Retribución Flexible</h4> 
        <canvas id="graf02" width="416" height="416"></canvas>
      </div>  
    </div>  -->

    <!-- <div class="row sombox mt-5 p-3">
      <div class="col-md-6">
        <h4 class="titgra">Retribución Directa</h4> 
        <canvas id="graf00" width="416" height="416"></canvas>
      </div>    
      <div class="col-md-6">
        <h4 class="titgra">Compensación Total</h4> 
        <canvas id="graf01" width="416" height="416"></canvas>
      </div>
    </div>  -->

    <!-- Tablas -->
    <div class="row">
      <div id="tables" data-anio="<%=anio%>"></div>      
    </div>

    <!-- Gráfico últimos años -->
    <div id="grafvert" class="row sombox mt-3 p-3 dgraf03">
      <h4 class="titgra mt-3">Comparativa Retribución últimos 5 años</h4> 
      <div class="col-md-12 mt-3">
        <canvas id="graf03" width="1000" height="300"></canvas>
      </div>    
    </div> 

  </div>


  <script type="module" src="./js/script.js"></script>  
</body>
</html>