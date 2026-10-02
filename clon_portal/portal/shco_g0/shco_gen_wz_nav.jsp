<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_nav.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String zerror="";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
}catch(Exception e) {}

int zcount  = 0;
int zcounti = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodoview,zm4object,znodoview);
    zcounti = m.getCountInClient(znodoview,zm4object,znodoview);
} catch(Exception e) {}

String zcountv = String.valueOf(zcounti);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;
String zUpd = request.getParameter("zUpd");
String zPkA = request.getParameter("zPkA");
if ((zUpd==null)||(zUpd.equals(""))){zUpd = "01";}
if ((zPkA==null)||(zPkA.equals(""))){zPkA = "";}else{zUpd = "ACT";}
%>
<script type="text/javascript" language="Javascript1.5">vnum = "<%=zcountv%>";</script>
