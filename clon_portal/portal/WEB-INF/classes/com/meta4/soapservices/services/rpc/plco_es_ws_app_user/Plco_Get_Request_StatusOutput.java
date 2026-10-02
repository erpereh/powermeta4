/**
 * Plco_Get_Request_StatusOutput.java
 * Self generated code for Bussines Object PLCO_ES_WS_APP_USER.
 *
 * Copyright Meta4 Spain S.A.
 * Centro Europa Empresarial - Edf. Roma
 * C/ Rozabella, 8
 * 28230 Las Rozas - Madrid
 * Spain
 *
 * Private and Confidential
 * The information contained in this document is the property of Meta4 Spain S.A.
 * It is for the exclusive use of designated employees
 * and not for distribution without prior written authorization.
 */

package com.meta4.soapservices.services.rpc.plco_es_ws_app_user;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method PLCO_GET_REQUEST_STATUS.
 * @author Meta4
 */
public
class Plco_Get_Request_StatusOutput
{
    
    /* return value */
    private String m_return = null;
    public void setReturn(String ai_arg)
    {
        m_return = ai_arg;
    }
    public String getReturn()
    {
        return m_return;
    }
    
    /* LogMessage */   
    public LogMessage[] logMessage = null;
    private void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    private LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    

} /* end of class Plco_Get_Request_StatusOutput */

