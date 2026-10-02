<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wklist_f_outputdef.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
 String zRecordsNumber ="*";
 if (z_portal_f.equals("1")){
 	zRecordsNumber = "[0-" + zsWklistMaxIndex + "]";
}%>
<m4:outputdef m4alias="<%=znodo1%>" m4object="<%=zsubsesion%>" node="<%=znodo1%>" records="<%=zRecordsNumber%>"/>
<m4:outputdef m4alias="<%=znodo2%>" m4object="<%=zsubsesion%>" node="<%=znodo2%>" records="<%=zRecordsNumber%>"/>
<m4:outputdef m4alias="<%=znodocom%>" m4object="<%=zsubsesion%>" node="<%=znodocom%>" records="*"/>
<m4:outputdef m4alias="<%=znodolabel%>" m4object="<%=zm4object%>" node="<%=znodolabel%>" records="*"/>
<m4:endjob/>

<m4:count outputdef="<%=znodo1%>" m4place="local" m4varname="sLocalCount1" />
<m4:count outputdef="<%=znodo2%>" m4place="local" m4varname="sLocalCount2" />
<%
  int zLocalCount1 = new Integer(sLocalCount1).intValue();
  int zLocalCount2 = new Integer(sLocalCount2).intValue(); 
%>
<%try {
   M4Operations m4f = new M4Operations(request);
   m4f.moveData (znodo1,zsubsesion,znodo1,"0");
   m4f.moveData (znodo2,zsubsesion,znodo2,"0");
}catch(Exception e) {}

zerror="";
int zcount1 = 0;
int zcount2 = 0;
try {
	M4Operations m = new M4Operations(request);
	zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
} catch(Exception e) {}
String	zcountv2 = String.valueOf(zcount2);
String	zcountv1 = String.valueOf(zcount1);
%>
