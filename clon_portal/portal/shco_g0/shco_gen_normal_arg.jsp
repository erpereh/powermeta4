<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_normal_arg.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_arg.jsp" %>
<%String zinicios = request.getParameter("zinicios");  
String zvent = request.getParameter("zvent");
String ztipocarga = request.getParameter("ztipocarga");
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((ztipocarga==null)||(ztipocarga.equals(""))){ztipocarga = "ALL";}
if ((zvent==null)||(zvent.equals(""))){zvent = "0";}

String zOrdenCampo = request.getParameter("zOrdenCampo");
String zOrden = request.getParameter("zOrden");
if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = "NO";}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "0";}%>