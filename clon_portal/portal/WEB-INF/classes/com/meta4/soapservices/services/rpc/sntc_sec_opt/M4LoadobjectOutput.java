/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object SNTC_SEC_OPT.
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

package com.meta4.soapservices.services.rpc.sntc_sec_opt;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method M4LoadObject.
 * @author Meta4
 */
public
class M4LoadobjectOutput
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
    private LogMessage[] logMessage = null;
    public void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    public LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    
    /* SNTC_SEC_OPT */
    private Sntc_Sec_OptBlock Sntc_Sec_Opt = null;
    public void setSntc_Sec_Opt(Sntc_Sec_OptBlock ai_arg)
    {
        Sntc_Sec_Opt = ai_arg;
    }
    public Sntc_Sec_OptBlock getSntc_Sec_Opt()
    {
        return Sntc_Sec_Opt;
    }
    void setSntc_Sec_Opt(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Sntc_Sec_Opt = new Sntc_Sec_OptBlock();
        Sntc_Sec_Opt.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

