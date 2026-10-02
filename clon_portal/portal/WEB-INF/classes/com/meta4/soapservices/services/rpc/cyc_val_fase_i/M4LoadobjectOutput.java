/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_VAL_FASE_I.
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

package com.meta4.soapservices.services.rpc.cyc_val_fase_i;

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
    
    /* CYC_MT_FASE_I */
    public Cyc_Mt_Fase_IBlock Cyc_Mt_Fase_I = null;
    private void setCyc_Mt_Fase_I(Cyc_Mt_Fase_IBlock ai_arg)
    {
        Cyc_Mt_Fase_I = ai_arg;
    }
    private Cyc_Mt_Fase_IBlock getCyc_Mt_Fase_I()
    {
        return Cyc_Mt_Fase_I;
    }
    void setCyc_Mt_Fase_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mt_Fase_I = new Cyc_Mt_Fase_IBlock();
        Cyc_Mt_Fase_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_VAL_FASE_I */
    public Cyc_Val_Fase_IBlock Cyc_Val_Fase_I = null;
    private void setCyc_Val_Fase_I(Cyc_Val_Fase_IBlock ai_arg)
    {
        Cyc_Val_Fase_I = ai_arg;
    }
    private Cyc_Val_Fase_IBlock getCyc_Val_Fase_I()
    {
        return Cyc_Val_Fase_I;
    }
    void setCyc_Val_Fase_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Val_Fase_I = new Cyc_Val_Fase_IBlock();
        Cyc_Val_Fase_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_CREA_FASE_I */
    public Cyc_Crea_Fase_IBlock Cyc_Crea_Fase_I = null;
    private void setCyc_Crea_Fase_I(Cyc_Crea_Fase_IBlock ai_arg)
    {
        Cyc_Crea_Fase_I = ai_arg;
    }
    private Cyc_Crea_Fase_IBlock getCyc_Crea_Fase_I()
    {
        return Cyc_Crea_Fase_I;
    }
    void setCyc_Crea_Fase_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Crea_Fase_I = new Cyc_Crea_Fase_IBlock();
        Cyc_Crea_Fase_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

