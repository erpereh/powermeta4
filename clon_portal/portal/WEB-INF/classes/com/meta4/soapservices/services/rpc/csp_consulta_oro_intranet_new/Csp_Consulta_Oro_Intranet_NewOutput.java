/**
 * Csp_Consulta_Oro_Intranet_NewOutput.java
 * Self generated code for Bussines Object CSP_CONSULTA_ORO_INTRANET_NEW.
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

package com.meta4.soapservices.services.rpc.csp_consulta_oro_intranet_new;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CSP_CONSULTA_ORO_INTRANET_NEW.
 * @author Meta4
 */
public
class Csp_Consulta_Oro_Intranet_NewOutput
{
    
    /* return value from a LN4 method */
    private double m_return = 0.0;
    public void setReturn(double ai_arg)
    {
        m_return = ai_arg;
    }
    public double getReturn()
    {
        return m_return;
    }
    void setReturn(String ai_arg) throws Exception
    {
        m_return = M4BusinessMethodArg.toDouble(ai_arg);
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
    
    /* CSP_CONSULTA_ORO_INTRANET */
    public Csp_Consulta_Oro_IntranetBlock Csp_Consulta_Oro_Intranet = null;
    private void setCsp_Consulta_Oro_Intranet(Csp_Consulta_Oro_IntranetBlock ai_arg)
    {
        Csp_Consulta_Oro_Intranet = ai_arg;
    }
    private Csp_Consulta_Oro_IntranetBlock getCsp_Consulta_Oro_Intranet()
    {
        return Csp_Consulta_Oro_Intranet;
    }
    void setCsp_Consulta_Oro_Intranet(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Oro_Intranet = new Csp_Consulta_Oro_IntranetBlock();
        Csp_Consulta_Oro_Intranet.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Csp_Consulta_Oro_Intranet_NewOutput */

