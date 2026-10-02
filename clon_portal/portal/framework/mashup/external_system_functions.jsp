<%-- =========================================================
	@(#) FileVersion: 821.003.037
	@(#) FileDescription: external_system_functions.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= --%>

<%! 

/**
 * Builds a message by concatenating a code with an optional detail.
 *
 * <p>If the detail is provided (i.e., not null), the method returns a string
 * in the format "code:detail". If the detail is null, the method returns only
 * the code.
 *
 * @param code   The code to be included in the message. It must not be null.
 * @param detail The optional detail to be included in the message. It can be null.
 * @return The message
 * @throws Exception if an error occurs during message creation.
 */
static String makeMessage(String code, String detail) throws Exception {
	if (detail != null) return code + " : " + detail;
	else return code; 
}

%>
