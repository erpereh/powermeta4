/**
 * Cyc_Buscador_FaseivOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASEIV.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_faseiv;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CYC_BUSCADOR_FASEIV.
 * @author Meta4
 */
public
class Cyc_Buscador_FaseivOutput
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
    
    /* CYC_BUSCADOR_FASEIV */
    public Cyc_Buscador_FaseivBlock Cyc_Buscador_Faseiv = null;
    private void setCyc_Buscador_Faseiv(Cyc_Buscador_FaseivBlock ai_arg)
    {
        Cyc_Buscador_Faseiv = ai_arg;
    }
    private Cyc_Buscador_FaseivBlock getCyc_Buscador_Faseiv()
    {
        return Cyc_Buscador_Faseiv;
    }
    void setCyc_Buscador_Faseiv(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Buscador_Faseiv = new Cyc_Buscador_FaseivBlock();
        Cyc_Buscador_Faseiv.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Cyc_Buscador_FaseivOutput */

