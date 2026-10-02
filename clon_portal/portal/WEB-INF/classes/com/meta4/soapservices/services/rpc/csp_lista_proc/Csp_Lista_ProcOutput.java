/**
 * Csp_Lista_ProcOutput.java
 * Self generated code for Bussines Object CSP_LISTA_PROC.
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

package com.meta4.soapservices.services.rpc.csp_lista_proc;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CSP_LISTA_PROC.
 * @author Meta4
 */
public
class Csp_Lista_ProcOutput
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
    
    /* CSP_LISTA_PROC_TOTAL */
    public Csp_Lista_Proc_TotalBlock Csp_Lista_Proc_Total = null;
    private void setCsp_Lista_Proc_Total(Csp_Lista_Proc_TotalBlock ai_arg)
    {
        Csp_Lista_Proc_Total = ai_arg;
    }
    private Csp_Lista_Proc_TotalBlock getCsp_Lista_Proc_Total()
    {
        return Csp_Lista_Proc_Total;
    }
    void setCsp_Lista_Proc_Total(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Lista_Proc_Total = new Csp_Lista_Proc_TotalBlock();
        Csp_Lista_Proc_Total.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_LISTA_PROC_EVALUADOR */
    public Csp_Lista_Proc_EvaluadorBlock Csp_Lista_Proc_Evaluador = null;
    private void setCsp_Lista_Proc_Evaluador(Csp_Lista_Proc_EvaluadorBlock ai_arg)
    {
        Csp_Lista_Proc_Evaluador = ai_arg;
    }
    private Csp_Lista_Proc_EvaluadorBlock getCsp_Lista_Proc_Evaluador()
    {
        return Csp_Lista_Proc_Evaluador;
    }
    void setCsp_Lista_Proc_Evaluador(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Lista_Proc_Evaluador = new Csp_Lista_Proc_EvaluadorBlock();
        Csp_Lista_Proc_Evaluador.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Csp_Lista_ProcOutput */

