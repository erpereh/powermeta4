/**
 * Cyc_Carga_RecomendacionesOutput.java
 * Self generated code for Bussines Object CYC_SERVICIO_FEEDBACK.
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

package com.meta4.soapservices.services.rpc.cyc_servicio_feedback;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CYC_CARGA_RECOMENDACIONES.
 * @author Meta4
 */
public
class Cyc_Carga_RecomendacionesOutput
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
    
    /* CYC_FEEDBACK_OBSERVACIONES */
    public Cyc_Feedback_ObservacionesBlock Cyc_Feedback_Observaciones = null;
    private void setCyc_Feedback_Observaciones(Cyc_Feedback_ObservacionesBlock ai_arg)
    {
        Cyc_Feedback_Observaciones = ai_arg;
    }
    private Cyc_Feedback_ObservacionesBlock getCyc_Feedback_Observaciones()
    {
        return Cyc_Feedback_Observaciones;
    }
    void setCyc_Feedback_Observaciones(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Feedback_Observaciones = new Cyc_Feedback_ObservacionesBlock();
        Cyc_Feedback_Observaciones.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FEEDBACK_RECOMENDACIONES */
    public Cyc_Feedback_RecomendacionesBlock Cyc_Feedback_Recomendaciones = null;
    private void setCyc_Feedback_Recomendaciones(Cyc_Feedback_RecomendacionesBlock ai_arg)
    {
        Cyc_Feedback_Recomendaciones = ai_arg;
    }
    private Cyc_Feedback_RecomendacionesBlock getCyc_Feedback_Recomendaciones()
    {
        return Cyc_Feedback_Recomendaciones;
    }
    void setCyc_Feedback_Recomendaciones(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Feedback_Recomendaciones = new Cyc_Feedback_RecomendacionesBlock();
        Cyc_Feedback_Recomendaciones.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Cyc_Carga_RecomendacionesOutput */

