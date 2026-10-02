/**
 * M4LoadobjectOutput.java
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
    
    /* CYC_FASE_PCP */
    public Cyc_Fase_PcpBlock Cyc_Fase_Pcp = null;
    private void setCyc_Fase_Pcp(Cyc_Fase_PcpBlock ai_arg)
    {
        Cyc_Fase_Pcp = ai_arg;
    }
    private Cyc_Fase_PcpBlock getCyc_Fase_Pcp()
    {
        return Cyc_Fase_Pcp;
    }
    void setCyc_Fase_Pcp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fase_Pcp = new Cyc_Fase_PcpBlock();
        Cyc_Fase_Pcp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FEED_BACK */
    public Cyc_Feed_BackBlock Cyc_Feed_Back = null;
    private void setCyc_Feed_Back(Cyc_Feed_BackBlock ai_arg)
    {
        Cyc_Feed_Back = ai_arg;
    }
    private Cyc_Feed_BackBlock getCyc_Feed_Back()
    {
        return Cyc_Feed_Back;
    }
    void setCyc_Feed_Back(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Feed_Back = new Cyc_Feed_BackBlock();
        Cyc_Feed_Back.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_PUNTOS_FASE */
    public Cyc_Puntos_FaseBlock Cyc_Puntos_Fase = null;
    private void setCyc_Puntos_Fase(Cyc_Puntos_FaseBlock ai_arg)
    {
        Cyc_Puntos_Fase = ai_arg;
    }
    private Cyc_Puntos_FaseBlock getCyc_Puntos_Fase()
    {
        return Cyc_Puntos_Fase;
    }
    void setCyc_Puntos_Fase(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Puntos_Fase = new Cyc_Puntos_FaseBlock();
        Cyc_Puntos_Fase.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FEEDBACK_SELECCION */
    public Cyc_Feedback_SeleccionBlock Cyc_Feedback_Seleccion = null;
    private void setCyc_Feedback_Seleccion(Cyc_Feedback_SeleccionBlock ai_arg)
    {
        Cyc_Feedback_Seleccion = ai_arg;
    }
    private Cyc_Feedback_SeleccionBlock getCyc_Feedback_Seleccion()
    {
        return Cyc_Feedback_Seleccion;
    }
    void setCyc_Feedback_Seleccion(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Feedback_Seleccion = new Cyc_Feedback_SeleccionBlock();
        Cyc_Feedback_Seleccion.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_PENULTIMO_FEED_BACK */
    public Cyc_Penultimo_Feed_BackBlock Cyc_Penultimo_Feed_Back = null;
    private void setCyc_Penultimo_Feed_Back(Cyc_Penultimo_Feed_BackBlock ai_arg)
    {
        Cyc_Penultimo_Feed_Back = ai_arg;
    }
    private Cyc_Penultimo_Feed_BackBlock getCyc_Penultimo_Feed_Back()
    {
        return Cyc_Penultimo_Feed_Back;
    }
    void setCyc_Penultimo_Feed_Back(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Penultimo_Feed_Back = new Cyc_Penultimo_Feed_BackBlock();
        Cyc_Penultimo_Feed_Back.readOperations(ai_m4Op, ai_xml, ai_data);
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
    

} /* end of class M4LoadobjectOutput */

