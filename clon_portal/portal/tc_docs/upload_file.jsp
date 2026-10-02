<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: upload_file.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*, com.meta4.utilities.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="com.meta4.taglib.util.*"%>

<m4:page subsessionid="SESSION">

	<m4:job>

		<m4:datadef m4name="UPLOAD_FILE" m4o="SRTC_FL_UPLOAD_FILE" m4find="true"/>

		<m4:exec m4method="UPLOAD_FILE!SRTC_FL_UPLOAD_FILE.PUT"></m4:exec>   

		<m4:setfile
			m4blob="UPLOAD_FILE!SRTC_FL_UPLOAD_FILE[LAST].BLOB_FILE"
			m4path="&REQUEST.DOCREQUEST[]"/>

		<m4:outputdef m4alias="UPLOAD_FILE">
			<m4:param name="M4NAME0" value="UPLOAD_FILE!SRTC_FL_UPLOAD_FILE[LAST]"/>
		</m4:outputdef>

	</m4:job>

{"UUID":"<m4:item m4name="UPLOAD_FILE:UPLOAD_FILE!SRTC_FL_UPLOAD_FILE[LAST].UUID"/>"}
</m4:page>



