<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_mt_count.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%int  zcount  = 0;
int  zcounti  = 0;
int  zcounti2  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
    zcounti2 = m.getCountInClient(znodo2,zm4object,znodo2);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;

String zUpd = request.getParameter("zUpd");
String zPkA = request.getParameter("zPkA");
if ((zUpd==null)||(zUpd.equals(""))){zUpd = "INSERTAR";}
if (zcounti2>0){zUpd = "ACT";}
if ((zPkA==null)||(zPkA.equals(""))){zPkA = "";}else{zUpd = "ACT";}
%>
