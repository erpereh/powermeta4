<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: outputdef genéricos para las listas
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_list_outputdef.jsp
	@(#)Date: 21/02/2002
--%>

<%//BEGIN Datadef y outputdef necesarios para la inclusión del filtro avanzado

    String zm4objectdynfilter  = "SHCO_GN_DYNFILTER";
    String zm4oaliasdynfilter = zm4objectdynfilter;

    //Nodos usados de SHCO_GN_DYNFILTER
    String znodolabeldynfilter = "SHCO_GN_LABEL";
    String znododynfilterlist = "SHCO_DYNFILTER_LIST";
%>	
	
    <m4:datadef m4o="<%=zm4objectdynfilter%>" m4name="<%=zm4oaliasdynfilter%>" />

    <m4:outputdef m4alias="<%=znodolabeldynfilter%>" m4object="<%=zm4oaliasdynfilter%>" node="<%=znodolabeldynfilter%>" records="*"/>
    <m4:outputdef m4alias="<%=znododynfilterlist%>" m4object="<%=zm4oaliasdynfilter%>" node="<%=znododynfilterlist%>" records="*"/>

<% //END: Datadef y outputdef necesarios para la inclusión del filtro avanzado%>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoroot%>" ><m4:param name="m4name0" value="<%=zoutputdefroot%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflabel%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>

