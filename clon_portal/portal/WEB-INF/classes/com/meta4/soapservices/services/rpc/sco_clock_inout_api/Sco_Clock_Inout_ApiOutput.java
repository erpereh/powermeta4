/**
 * Sco_Clock_Inout_ApiOutput.java
 * Self generated code for Bussines Object SCO_CLOCK_INOUT_API.
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

package com.meta4.soapservices.services.rpc.sco_clock_inout_api;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method SCO_CLOCK_INOUT_API.
 * @author Meta4
 */
public
class Sco_Clock_Inout_ApiOutput
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
    
    /* SCO_CLOCK_INOUT_API */
    public Sco_Clock_Inout_ApiBlock Sco_Clock_Inout_Api = null;
    private void setSco_Clock_Inout_Api(Sco_Clock_Inout_ApiBlock ai_arg)
    {
        Sco_Clock_Inout_Api = ai_arg;
    }
    private Sco_Clock_Inout_ApiBlock getSco_Clock_Inout_Api()
    {
        return Sco_Clock_Inout_Api;
    }
    void setSco_Clock_Inout_Api(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Sco_Clock_Inout_Api = new Sco_Clock_Inout_ApiBlock();
        Sco_Clock_Inout_Api.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Sco_Clock_Inout_ApiOutput */

