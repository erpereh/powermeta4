<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_list_count.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%int  zcount  = 0;
int  zcounti  = 0;
int  zcounti2  = 0;
int  zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
    zcounti2 = m.getCountInClient(znodo2,zm4object,znodo2);
    zcounti3 = m.getCountInClient(znodo3,zm4object,znodo3);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String	zcountv2 = String.valueOf(zcounti2);
String	zcountv3 = String.valueOf(zcounti3);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;%>