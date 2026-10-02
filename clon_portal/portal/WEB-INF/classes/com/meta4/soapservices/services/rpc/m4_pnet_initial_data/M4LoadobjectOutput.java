/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object M4_PNET_INITIAL_DATA.
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

package com.meta4.soapservices.services.rpc.m4_pnet_initial_data;

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
    public LogMessage[] logMessage = null;
    private void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    private LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    
    /* M4_PNET_INITIAL_DATA */
    public M4_Pnet_Initial_DataBlock M4_Pnet_Initial_Data = null;
    private void setM4_Pnet_Initial_Data(M4_Pnet_Initial_DataBlock ai_arg)
    {
        M4_Pnet_Initial_Data = ai_arg;
    }
    private M4_Pnet_Initial_DataBlock getM4_Pnet_Initial_Data()
    {
        return M4_Pnet_Initial_Data;
    }
    void setM4_Pnet_Initial_Data(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        M4_Pnet_Initial_Data = new M4_Pnet_Initial_DataBlock();
        M4_Pnet_Initial_Data.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

