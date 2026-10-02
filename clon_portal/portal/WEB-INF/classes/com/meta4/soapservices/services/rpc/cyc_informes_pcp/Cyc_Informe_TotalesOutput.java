/**
 * Cyc_Informe_TotalesOutput.java
 * Self generated code for Bussines Object CYC_INFORMES_PCP.
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

package com.meta4.soapservices.services.rpc.cyc_informes_pcp;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CYC_INFORME_TOTALES.
 * @author Meta4
 */
public
class Cyc_Informe_TotalesOutput
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
    
    /* CYC_INFORME_TOTALES */
    public Cyc_Informe_TotalesBlock Cyc_Informe_Totales = null;
    private void setCyc_Informe_Totales(Cyc_Informe_TotalesBlock ai_arg)
    {
        Cyc_Informe_Totales = ai_arg;
    }
    private Cyc_Informe_TotalesBlock getCyc_Informe_Totales()
    {
        return Cyc_Informe_Totales;
    }
    void setCyc_Informe_Totales(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Totales = new Cyc_Informe_TotalesBlock();
        Cyc_Informe_Totales.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Cyc_Informe_TotalesOutput */

