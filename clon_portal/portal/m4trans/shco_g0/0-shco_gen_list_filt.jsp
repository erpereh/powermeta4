<%--
	@(#)FileVersion: 813.001.080
	@(#)FileDescription: formulario genérico para filtros
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2015
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP3Q2
	@(#)InternalName: shco_gen_list_filt.jsp
	@(#)Date: 21/02/2002
--%>

<script type="text/javascript" language="Javascript1.5">
function changetoeasyfilter(){

    var divdinfilter = document.getElementById('dinfilter');
    var diveasyfilter = document.getElementById('easyfilter');	

    diveasyfilter.style.display= "";
    divdinfilter.style.display= "none";
}
function changetodinfilter(){

    var divdinfilter = document.getElementById('dinfilter');
    var diveasyfilter = document.getElementById('easyfilter');	

    diveasyfilter.style.display= "none";
    divdinfilter.style.display= "";			
}
</script>

<form action="<%=zaccion%>" method="post" name="oculto" id="oculto">
<input type="hidden" id="znivelmenu" name="znivelmenu" value="<%=znivelmenu%>" />
<input type="hidden" id="znew" name="znew" value="<%=znew%>" />
<input type="hidden" id="znw" name="znw" value="<%=znw%>" />
<input type="hidden" id="zpag" name="zpag" value="<%=zpag%>" />
<input type="hidden" id="zinicio" name="zinicio" value="" />
<input type="hidden" id="zOrdenCampo" name="zOrdenCampo" value="<%=zOrdenCampo%>" />
<input type="hidden" id="zOrden" name="zOrden" value="<%=zOrden%>" />

<input type="hidden" id="zf1id" name="zf1id" value="" />
<input type="hidden" id="zf3id" name="zf3id" value="" />
<input type="hidden" id="zv1" name="zv1" value="" />
<input type="hidden" id="zf2id" name="zf2id" value="" />
<input type="hidden" id="zf4id" name="zf4id" value="" />
<input type="hidden" id="zv2" name="zv2" value="" />

<input type="hidden" id="ARG_LANGUAGE" name="ARG_LANGUAGE" value="" />
<input type="hidden" id="ARG_API_SQL" name="ARG_API_SQL" value="" />
<input type="hidden" id="ARG_ID_SENTENCE" name="ARG_ID_SENTENCE" value="" />
<input type="hidden" id="ARG_ID_SCENARIO" name="ARG_ID_SCENARIO" value="" />
	
<input type="hidden" id="zisdynfilter" name="zisdynfilter" value="<%=zisdynfilter%>" />
<input type="hidden" id="ztipocarga" name="ztipocarga" value="<%=ztipocarga%>" />

<input type="hidden" id="zfilter_1" name="zfilter_1" value="<%=zfilter_1%>" />
<input type="hidden" id="zfilter_2" name="zfilter_2" value="<%=zfilter_2%>" />

</form>

<%@ page import="com.meta4.common.utils.logsystem.*" %>

<% 


// Creates a log object for these jsp pages.
M4i18nCategory m_log = (M4i18nCategory)
M4i18nCategory.getInstance("com.meta4.jsp");

    // Si está vacía indica que no nos han pasado ningún parámetro, entonces los leemos del 
    // Meta4Object
    if (("".equals(zisdynfilter)) && (!"NORMAL".equals(ztipocarga)) ){
        // Argumento pasado al filtrar el nodo
        String sLoadType = "";
        try {
            M4Operations t = new M4Operations(request);
            sLoadType = t.getItem("SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_LOAD_TYPE");
        } catch(Exception e) {
            if (m_log.isTraceEnabled()) m_log.trace("[shco_gen_list_filt.jsp] Error reading item SHCO_LOAD_TYPE",e);
        }

        if (sLoadType.indexOf("DYNFILTER##")<0){
            //Es filtro sencillo
            zdinfilterstyle = "display=none";
            zeasyfilterstyle = "";

            //Averiguamos los valores necesarios para rellenar el formulario del filtro
            // con las condiciones por las que se filtró el Meta4Object
            String cFilterSep = "{";
            String cFieldSep = "*";
            int iFirstFilterPos = sLoadType.indexOf(cFilterSep);
            if (iFirstFilterPos>0){
                
                //Condiciones del primer filtro
                String sFirstFilter = sLoadType.substring(0,iFirstFilterPos);
                int iPos = sFirstFilter.indexOf(cFieldSep);
                zf1id = sFirstFilter.substring(0,iPos);

                int iPos2 = sFirstFilter.indexOf(cFieldSep,(iPos +1));
                zf3id = sFirstFilter.substring((iPos + 1), iPos2);

                zv1 = sFirstFilter.substring((iPos2 + 1), (sFirstFilter.length()));
                
                //Condiciones del segundo filtro
				zv2="";
				if (sLoadType.length() > iFirstFilterPos +1){
                   String sSecondFilter = sLoadType.substring((iFirstFilterPos + 1 ), (sLoadType.length() - 1) );
                   iPos = sSecondFilter.indexOf(cFieldSep);
                   zf2id= sSecondFilter.substring(0,iPos);

                   iPos2 = sSecondFilter.indexOf(cFieldSep,(iPos +1));
                   zf4id = sSecondFilter.substring((iPos + 1), iPos2);
                
                   zv2 = sSecondFilter.substring((iPos2 + 1), (sSecondFilter.length()));
				}
            }
            if (m_log.isTraceEnabled()) {
                m_log.trace("[shco_gen_list_filt.jsp] Easy filter with paramenters: zf1id: " + zf1id + ", zf3id: " + zf3id + ", zv1: " + zv1);
                m_log.trace("[shco_gen_list_filt.jsp] Easy filter with paramenters: zf2id: " + zf2id + ", zf4id: " + zf4id + ", zv2: " + zv2);
            }
        }
        else{    
            //Es filtro dinámico
            zdinfilterstyle = "";
            zeasyfilterstyle = "display=none";

            //Averiguamos los valores necesarios para rellenar el formulario del filtro
            // con las condiciones por las que se filtró el Meta4Object
            String cSep = "##";
            
            int i1 = sLoadType.indexOf(cSep);
            int i2 = sLoadType.indexOf(cSep, i1 + 2);
            if (i2>0){
                //Condiciones del filtro
                zapisql = sLoadType.substring(i1 + 2,i2);
                
                int i3 = sLoadType.indexOf(cSep, i2 + 2);
                znatlanguage = sLoadType.substring(i2 + 2,i3);

                int i4 = sLoadType.indexOf(cSep, i3 + 2);
                zidsentence = sLoadType.substring(i3 + 2,i4);

                zidscenario = sLoadType.substring(i4 + 2,sLoadType.length());
            }
            if (m_log.isTraceEnabled()) {
                m_log.trace("[shco_gen_list_filt.jsp] Advance filter with paramenters: zapisql: " + zapisql + ", znatlanguage: " + znatlanguage + ", zidsentence: " + zidsentence + ", zidscenario:" + zidscenario);
            }
        }
    }

    int zCol =1;
	if ((zf4id.indexOf ("(") != -1 ) || (zf4id.indexOf (")") != -1 ) || (zf4id.indexOf ("'") != -1 ))  {zf4id = "";}
	if ((zf3id.indexOf ("(") != -1 ) || (zf3id.indexOf (")") != -1 ) || (zf3id.indexOf ("'") != -1 ))  {zf3id = "";}
	if ((zf2id.indexOf ("(") != -1 ) || (zf2id.indexOf (")") != -1 ) || (zf2id.indexOf ("'") != -1 ))  {zf2id = "";}
	if ((zf1id.indexOf ("(") != -1 ) || (zf1id.indexOf (")") != -1 ) || (zf1id.indexOf ("'") != -1 ))  {zf1id = "";}


%>

<form action=" " method="post" name="FormularioFiltro" id="FormularioFiltro">

<div id= "easyfilter" class="capaform" style ="<%=zeasyfilterstyle%>">
<table class="filtro" width="100%" cellspacing="0" >
<thead><tr class="titulo">
    <m4:item m4name="<%=zhasdynfilter%>"  m4varname ="zdynfilterinlist" htmlsafe="true"/>
    <% if ("1".equals(zdynfilterinlist)){ %>
        <th colspan ="<%=zCol%>" align="right">&nbsp;<a href="" onclick="javascript:changetodinfilter();return false;"><m4:label m4name="<%=zSHCOLBADVANCEFIL%>" htmlsafe="true"/></a></th>
    <%} else{%>
        <th >&nbsp;</th>  
    <%}%>
</tr></thead>
<tbody>
<tr class="filtro">
	<td class="fuentevalor" colspan="<%=zCol%>">
	<select tabindex="1" id="list1" class="select30" name="list1" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" onchange="m4buscar('list1','list3')">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>"><option id="A<m4:item m4name="<%=zIDFIELD%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zNFIELD%>" htmlsafe="true"/></option></m4:loop>
	</select>
	<select tabindex="2" id="list3" class="select30" name="list3" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>"><option id ="A<m4:item m4name="<%=zIDVALUE%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE2%>" htmlsafe="true"/>"><m4:item m4name="<%=zNVALUE%>" htmlsafe="true"/></option></m4:loop>
	</select>
	<script type="text/javascript" language="Javascript1.5"><!--
        if ('<%=zf1id%>'!= ""){
            m4searchoption(m4objeto('FormularioFiltro','list1'),'<%=zf1id%>');
        }
	var mlist3 = new Array(); 
	var selectfinal = document.getElementById("list3");
	var l=0;
	for (var i=0; i < selectfinal.options.length; i++){
		var mfila = [selectfinal.options[i].value,selectfinal.options[i].text,selectfinal.options[i].id];
		mlist3[l++] = mfila;
	}
        m4buscar('list1','list3','<%=zf3id%>');
        --></script>
        <input class="filtro" type="text" id="VALOR1" name="VALOR1" maxlength="50" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> " tabindex="3" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zv1)%>" /></td>
</tr>

<tr class="filtro">
	<td class="fuentevalor" colspan="<%=zCol%>">
	<select tabindex="4" id="list2" class="select30" name="list2" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" onchange="m4buscar('list2','list4')">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option id ="B<m4:item m4name="<%=zIDFIELD%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zNFIELD%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	<select tabindex="5" id="list4" class="select30" name="list4" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" >
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option id ="B<m4:item m4name="<%=zIDVALUE%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE2%>" htmlsafe="true"/>">
	<m4:item m4name="<%=zNVALUE%>" htmlsafe="true"/>
	</option>
	</m4:loop>
	</select>
	<script type="text/javascript" language="Javascript1.5">
        if ('<%=zf2id%>'!= ""){
            m4searchoption(m4objeto('FormularioFiltro','list2'),'<%=zf2id%>');
        }
        m4buscar('list2','list4','<%=zf4id%>');
        </script>
	<input class="filtro" type="text" id="VALOR2" name="VALOR2" maxlength="50" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> " tabindex="6" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zv2)%>"  /></td>
</tr>

  <%@ include file="/shco_g0/shco_gen_list_filter_buttons.jspf" %>

</tbody>
</table></div>
</form>

<% if ("1".equals(zdynfilterinlist)){

    //inclusion dinámica de la parte correspondiente al filtro dinámico.
    request.setAttribute("zdinfilterstyle", zdinfilterstyle);
    request.setAttribute("zsubsesion",zsubsesion);
    //request.setAttribute("zaccion",zaccion);
    request.setAttribute("zpag",zpag);
    request.setAttribute("znw",znw);
    request.setAttribute("znew",znew);
    request.setAttribute("zidsentence",zidsentence);
    request.setAttribute("zapisql",zapisql);
    request.setAttribute("znatlanguage",znatlanguage);
    request.setAttribute("zidscenario",zidscenario);

    request.setAttribute("zSHCOLBEASYFILT",zSHCOLBEASYFILT); 
    request.setAttribute("zSHCOLBDEL", zSHCOLBDEL);
    request.setAttribute("zSHCOLBNEW", zSHCOLBNEW);
    request.setAttribute("zSHCOLBFILT", zSHCOLBFILT);
    request.setAttribute("zSHCOLBCLOSE", zSHCOLBCLOSE);
    request.setAttribute("zSHCOLBCLEAN_val", zSHCOLBCLEAN_val);
    request.setAttribute("zSHCOLBTITLE", zSHCOLBTITLE);
    request.setAttribute("zSHCOLBLIST", zSHCOLBLIST);
	request.setAttribute("zSHCOLBEDIT", zSHCOLBEDIT);
    
    try{ %>
        <jsp:include page="/m4trans/shco_g0/0-shco_gen_dynfilter_simplified.jsp" flush="false"/>
    <%}catch(Exception e){
        if (m_log.isTraceEnabled()) {
            m_log.trace("[shco_gen_list_filt.jsp] Error including shco_gen_dynfilter_simplified ",e );
        }
    }
}%>

<% if ("0".equals(zisdynfilter)){%>
    <script type="text/javascript" language="Javascript1.5">document.forms["FormularioFiltro"].elements["list1"].focus();</script>
<%}%>


