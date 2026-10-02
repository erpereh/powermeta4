<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*"%>
<%@ page import="java.text.DecimalFormat" %>

<%
//no cache
  response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");
  
  String anio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio");
  if ((anio==null)||(anio.equals(""))){anio = "0";}

%>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" charset="UTF-8">
  <title>Proyección Teórica Haberes año <%=anio%></title>
  <meta name="description" content="Proyección Teórica Haberes año <%=anio%>"></head>
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/chartist.min.css">
  <style>
    .container {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 12px;
      padding-top: 15px;
      padding-bottom: 60px;
      max-width: 1400px !important;
    }
    @media (min-width: 1200px) {
      .container {
        width: calc(98%);
      }
    }
    h1 {
      font-weight: 300;
      width: calc(100% - 300px);
      display: inline-block;
    }
    .col-xs-9, .col-xs-8, .col-xs-6, .col-xs-4, .col-xs-3, .col-md-6 {
      border: 2px solid grey;
      padding-top: 15px;
      padding-bottom: 15px;
      text-align: center;
      background-color: #192A53;
      color: #f2f2f2;
    }
    .col-xs-12 {
      width: 100%;
      position: relative;
      margin-right: 100%;
    }
    .no-width {
      width: unset !important;
    }
    .table>thead>tr>th {
      border-bottom: 0 !important;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
      border: 0 !important;
    }
    .boxshadow {
      box-shadow: 0 0 8px lightgrey;
      border-radius: 10px;
      display: inline !important;
      margin-right: 30px;
    }
    .boxshadow.col-xs-12 {
      padding-left: 0;
      padding-right: 0;
      margin-top: 30px;
    }
    .print-btn {
      border: 1px solid black;
      background: white;
      border-radius: 3px;
      padding: 8px 16px;
      display: flex;
      margin-top: 20px;
      float: right;
    }
    .print-btn img {
      width: 20px;
    }
    .print-btn span {
      font-size: 14px;
      padding: 0 5px;
    }
    .logo {
      width: 150px;
      display: block;
    }
    #charts {
      display: flex;
      margin-top: 20px;
    }
    .color1 {
      stroke: #5182be;
    }
    .color2 {
      stroke: #c0504d;
    }
    .color3 {
      stroke: #9bbb59;
    }
    .color4 {
      stroke: #8064a2;
    }
    .color5 {
      stroke: #4eadc7;
    }
    .color6 {
      stroke: #d88036;
    }
    .ct-legend .ct-series-0 {
      color: #5182be;
    }
    .ct-legend .ct-series-0:before {
      background-color: #5182be;
      border-color: #5182be;
    }
    .ct-legend li:before {
      width: 12px;
      height: 12px;
      position: absolute;
      left: 0;
      content: '';
      border: 3px solid transparent;
      border-radius: 50%;
      margin-top: 3px;
    }
    .ct-legend .ct-series-1 {
      color: #c0504d;
    }
    .ct-legend .ct-series-1:before {
      background-color: #c0504d;
      border-color: #c0504d;
    }
    .ct-legend .inactive {
      opacity: .5;
    }
    .ct-legend .ct-series-2 {
      color: #9bbb59;
    }
    .ct-legend .ct-series-2:before {
      background-color: #9bbb59;
      border-color: #9bbb59;
    }
    .ct-legend .ct-series-3 {
      color: #8064a2;
    }
    .ct-legend .ct-series-3:before {
      background-color: #8064a2;
      border-color: #8064a2;
    }
    .ct-legend .ct-series-4 {
      color: #4eadc7;
    }
    .ct-legend .ct-series-4:before {
      background-color: #4eadc7;
      border-color: #4eadc7;
    }
    .ct-legend .ct-series-5 {
      color: #d88036;
    }
    .ct-legend .ct-series-5:before {
      background-color: #d88036;
      border-color: #d88036;
    }
    .p10 {
      padding-top: 0px;
      margin-right: 20px;
      width: 50%;
    }
    .m10 {
      padding: 20px 0;
      margin: 40px 0;
      display: block !important;
    }
    .chart-title {
      text-align: center;
      font-size: 18px;
      margin-bottom: 20px;
    }
    text {
      stroke: darkgrey;
      font-size: 11px !important;
      font-weight: 100;
      font-family: Helvetica, Arial, sans-serif;
    }
    svg:not(:root) {
      overflow: visible !important;
    }
    .chart-pie {
      position: relative;
      padding-bottom: 30px;
      padding-top: 20px;
      overflow: hidden;
    }
    .ct-legend.ct-legend-inside {
      position: absolute;
      top: 20px;
      right: 0;
    }
    .ct-legend {
      position: relative;
      z-index: 10;
      list-style: none;
      text-align: left;
    }
    .ct-legend.ct-legend-inside li {
      display: block;
      margin: 0;
    }
    .ct-legend li {
      position: relative;
      padding: 0 23px;
      margin-right: 10px;
      margin-bottom: 3px;
      cursor: pointer;
      display: inline-block;
    }
    .ct-chart-1 svg {
      transform: translate(-80px, 0);
    }
    .ct-chart-2 svg {
      transform: translate(-126px, 0);
    }
    .ct-chart-5 .ct-legend {
      text-align: center;
    }
    .ct-label.ct-horizontal {
      font-size: 12px;
      color: black;
      font-weight: bold;
    }
    .ct-label.ct-vertical {
      font-size: 10px;
      color: #777;
    }
    td[real=false] {
      color: #c0504d;
    }
    td[real=true] {
      color: #0c7811;
    }
  </style>
  <link rel="stylesheet" media="print" href="./css/print.css">


  <script src="./js/dirty-json.js"></script>
  <script src="./js/chartist.min.js"></script>
  <script src="./js/chartist-plugin-legend.js"></script>
</head>
<body>
  <div class="container">
    <img class="logo" src="./assets/logo.png"/>
    <h1>Proyección Teórica Haberes año <%=anio%></h1>
    <button class="print-btn" onclick="print()">
      <img src="./assets/print-sharp.svg"/>
      <span>Imprimir PDF</span>
    </button>
    <div class="row">
      <div id="charts">
        <div class="boxshadow p10">
          <h3 class="chart-title">Remuneración Directa</h3>
          <div class="ct-chart-1 chart-pie"></div>
        </div>
        <div class="boxshadow p10">
          <h3 class="chart-title">Retribución Indirecta</h3>
          <div class="ct-chart-2 chart-pie"></div>
        </div>
      </div>
      <div id="tables" data-anio="<%=anio%>">
        <!-- <template id="tables"></template> -->
      </div>
    </div>
    <div class="boxshadow m10">
      <div class="ct-chart-5"></div>
    </div>
  </div>
  <script type="module" src="./js/script.js"></script>
  
</body>
</html>