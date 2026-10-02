/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_ACTUALIZAR_ESTADO.
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

package com.meta4.soapservices.services.rpc.csp_actualizar_estado;

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
    
    /* CSP_ESTADO_EVAL */
    public Csp_Estado_EvalBlock Csp_Estado_Eval = null;
    private void setCsp_Estado_Eval(Csp_Estado_EvalBlock ai_arg)
    {
        Csp_Estado_Eval = ai_arg;
    }
    private Csp_Estado_EvalBlock getCsp_Estado_Eval()
    {
        return Csp_Estado_Eval;
    }
    void setCsp_Estado_Eval(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Estado_Eval = new Csp_Estado_EvalBlock();
        Csp_Estado_Eval.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_ACTUALIZAR_COMENTARIO */
    public Csp_Actualizar_ComentarioBlock Csp_Actualizar_Comentario = null;
    private void setCsp_Actualizar_Comentario(Csp_Actualizar_ComentarioBlock ai_arg)
    {
        Csp_Actualizar_Comentario = ai_arg;
    }
    private Csp_Actualizar_ComentarioBlock getCsp_Actualizar_Comentario()
    {
        return Csp_Actualizar_Comentario;
    }
    void setCsp_Actualizar_Comentario(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Actualizar_Comentario = new Csp_Actualizar_ComentarioBlock();
        Csp_Actualizar_Comentario.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

