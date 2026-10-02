/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK.
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

package com.meta4.soapservices.services.rpc.csp_guardar_feedback;

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
    
    /* CSP_PASAR_ESTADO */
    public Csp_Pasar_EstadoBlock Csp_Pasar_Estado = null;
    private void setCsp_Pasar_Estado(Csp_Pasar_EstadoBlock ai_arg)
    {
        Csp_Pasar_Estado = ai_arg;
    }
    private Csp_Pasar_EstadoBlock getCsp_Pasar_Estado()
    {
        return Csp_Pasar_Estado;
    }
    void setCsp_Pasar_Estado(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Pasar_Estado = new Csp_Pasar_EstadoBlock();
        Csp_Pasar_Estado.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_SACAR_FASE_FB */
    public Csp_Sacar_Fase_FbBlock Csp_Sacar_Fase_Fb = null;
    private void setCsp_Sacar_Fase_Fb(Csp_Sacar_Fase_FbBlock ai_arg)
    {
        Csp_Sacar_Fase_Fb = ai_arg;
    }
    private Csp_Sacar_Fase_FbBlock getCsp_Sacar_Fase_Fb()
    {
        return Csp_Sacar_Fase_Fb;
    }
    void setCsp_Sacar_Fase_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Sacar_Fase_Fb = new Csp_Sacar_Fase_FbBlock();
        Csp_Sacar_Fase_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_FEEDBACK */
    public Csp_Guardar_FeedbackBlock Csp_Guardar_Feedback = null;
    private void setCsp_Guardar_Feedback(Csp_Guardar_FeedbackBlock ai_arg)
    {
        Csp_Guardar_Feedback = ai_arg;
    }
    private Csp_Guardar_FeedbackBlock getCsp_Guardar_Feedback()
    {
        return Csp_Guardar_Feedback;
    }
    void setCsp_Guardar_Feedback(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Feedback = new Csp_Guardar_FeedbackBlock();
        Csp_Guardar_Feedback.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

