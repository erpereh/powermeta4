/**
 * Csp_Consulta_Work_UnitOutput.java
 * Self generated code for Bussines Object CSP_CONSULTA_WORK_UNIT.
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

package com.meta4.soapservices.services.rpc.csp_consulta_work_unit;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CSP_CONSULTA_WORK_UNIT.
 * @author Meta4
 */
public
class Csp_Consulta_Work_UnitOutput
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
    
    /* CSP_CONSULTA_7 */
    public Csp_Consulta_7Block Csp_Consulta_7 = null;
    private void setCsp_Consulta_7(Csp_Consulta_7Block ai_arg)
    {
        Csp_Consulta_7 = ai_arg;
    }
    private Csp_Consulta_7Block getCsp_Consulta_7()
    {
        return Csp_Consulta_7;
    }
    void setCsp_Consulta_7(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_7 = new Csp_Consulta_7Block();
        Csp_Consulta_7.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Csp_Consulta_Work_UnitOutput */

