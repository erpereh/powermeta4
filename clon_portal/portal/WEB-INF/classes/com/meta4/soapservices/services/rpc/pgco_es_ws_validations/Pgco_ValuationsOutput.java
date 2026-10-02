/**
 * Pgco_ValuationsOutput.java
 * Self generated code for Bussines Object PGCO_ES_WS_VALIDATIONS.
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

package com.meta4.soapservices.services.rpc.pgco_es_ws_validations;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method PGCO_VALUATIONS.
 * @author Meta4
 */
public
class Pgco_ValuationsOutput
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
    
    /* PGCO_ES_WS_VALIDATIONS */
    public Pgco_Es_Ws_ValidationsBlock Pgco_Es_Ws_Validations = null;
    private void setPgco_Es_Ws_Validations(Pgco_Es_Ws_ValidationsBlock ai_arg)
    {
        Pgco_Es_Ws_Validations = ai_arg;
    }
    private Pgco_Es_Ws_ValidationsBlock getPgco_Es_Ws_Validations()
    {
        return Pgco_Es_Ws_Validations;
    }
    void setPgco_Es_Ws_Validations(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Pgco_Es_Ws_Validations = new Pgco_Es_Ws_ValidationsBlock();
        Pgco_Es_Ws_Validations.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Pgco_ValuationsOutput */

