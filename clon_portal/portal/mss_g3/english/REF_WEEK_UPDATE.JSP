<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<m4:startpage m4task="DMS"/>
<m4:beginjob/>
<m4:datadef m4o="SCO_TA_API_REF_W_MOD" m4name="SCO_TA_API_REF_W_MOD"/>
<m4:exec m4method="UPDATE:SCO_TA_API_REF_W_MOD!SCO_TA_API_REF_W_MOD.SCO_UPDATE">
	<m4:param name="ARG_SCO_ID_REF_MOD" value="99"/>
	<m4:param name="ARG_SCO_SEQUENCE" value="1"/>
	<m4:param name="ARG_SCO_ID_WEEK" value="WEEK300"/>	
	<m4:param name="ARG_DT_TRANFER" value="12-05-2001"/>
</m4:exec>
<m4:outputdef>
	 <m4:param name="M4NAME0" value="SCO_TA_API_REFERENCE!SCO_TA_API_REFERENCE[*]"/>
</m4:outputdef>
<m4:endjob/>
<m4:endpage/>
