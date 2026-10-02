/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK_2.
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

package com.meta4.soapservices.services.rpc.csp_guardar_feedback_2;

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
    
    /* CSP_INSERTAR_PUNTOS */
    public Csp_Insertar_PuntosBlock Csp_Insertar_Puntos = null;
    private void setCsp_Insertar_Puntos(Csp_Insertar_PuntosBlock ai_arg)
    {
        Csp_Insertar_Puntos = ai_arg;
    }
    private Csp_Insertar_PuntosBlock getCsp_Insertar_Puntos()
    {
        return Csp_Insertar_Puntos;
    }
    void setCsp_Insertar_Puntos(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Insertar_Puntos = new Csp_Insertar_PuntosBlock();
        Csp_Insertar_Puntos.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_DATOS_FB */
    public Csp_Guardar_Datos_FbBlock Csp_Guardar_Datos_Fb = null;
    private void setCsp_Guardar_Datos_Fb(Csp_Guardar_Datos_FbBlock ai_arg)
    {
        Csp_Guardar_Datos_Fb = ai_arg;
    }
    private Csp_Guardar_Datos_FbBlock getCsp_Guardar_Datos_Fb()
    {
        return Csp_Guardar_Datos_Fb;
    }
    void setCsp_Guardar_Datos_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Datos_Fb = new Csp_Guardar_Datos_FbBlock();
        Csp_Guardar_Datos_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_COMENT_FB */
    public Csp_Guardar_Coment_FbBlock Csp_Guardar_Coment_Fb = null;
    private void setCsp_Guardar_Coment_Fb(Csp_Guardar_Coment_FbBlock ai_arg)
    {
        Csp_Guardar_Coment_Fb = ai_arg;
    }
    private Csp_Guardar_Coment_FbBlock getCsp_Guardar_Coment_Fb()
    {
        return Csp_Guardar_Coment_Fb;
    }
    void setCsp_Guardar_Coment_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Coment_Fb = new Csp_Guardar_Coment_FbBlock();
        Csp_Guardar_Coment_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_PUNTOS_FB */
    public Csp_Guardar_Puntos_FbBlock Csp_Guardar_Puntos_Fb = null;
    private void setCsp_Guardar_Puntos_Fb(Csp_Guardar_Puntos_FbBlock ai_arg)
    {
        Csp_Guardar_Puntos_Fb = ai_arg;
    }
    private Csp_Guardar_Puntos_FbBlock getCsp_Guardar_Puntos_Fb()
    {
        return Csp_Guardar_Puntos_Fb;
    }
    void setCsp_Guardar_Puntos_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Puntos_Fb = new Csp_Guardar_Puntos_FbBlock();
        Csp_Guardar_Puntos_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_INSERTAR_ACCIONES */
    public Csp_Insertar_AccionesBlock Csp_Insertar_Acciones = null;
    private void setCsp_Insertar_Acciones(Csp_Insertar_AccionesBlock ai_arg)
    {
        Csp_Insertar_Acciones = ai_arg;
    }
    private Csp_Insertar_AccionesBlock getCsp_Insertar_Acciones()
    {
        return Csp_Insertar_Acciones;
    }
    void setCsp_Insertar_Acciones(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Insertar_Acciones = new Csp_Insertar_AccionesBlock();
        Csp_Insertar_Acciones.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_INSERTAR_DATOS_FB */
    public Csp_Insertar_Datos_FbBlock Csp_Insertar_Datos_Fb = null;
    private void setCsp_Insertar_Datos_Fb(Csp_Insertar_Datos_FbBlock ai_arg)
    {
        Csp_Insertar_Datos_Fb = ai_arg;
    }
    private Csp_Insertar_Datos_FbBlock getCsp_Insertar_Datos_Fb()
    {
        return Csp_Insertar_Datos_Fb;
    }
    void setCsp_Insertar_Datos_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Insertar_Datos_Fb = new Csp_Insertar_Datos_FbBlock();
        Csp_Insertar_Datos_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_FEEDBACK_2 */
    public Csp_Guardar_Feedback_2Block Csp_Guardar_Feedback_2 = null;
    private void setCsp_Guardar_Feedback_2(Csp_Guardar_Feedback_2Block ai_arg)
    {
        Csp_Guardar_Feedback_2 = ai_arg;
    }
    private Csp_Guardar_Feedback_2Block getCsp_Guardar_Feedback_2()
    {
        return Csp_Guardar_Feedback_2;
    }
    void setCsp_Guardar_Feedback_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Feedback_2 = new Csp_Guardar_Feedback_2Block();
        Csp_Guardar_Feedback_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_ACCIONES_FB */
    public Csp_Guardar_Acciones_FbBlock Csp_Guardar_Acciones_Fb = null;
    private void setCsp_Guardar_Acciones_Fb(Csp_Guardar_Acciones_FbBlock ai_arg)
    {
        Csp_Guardar_Acciones_Fb = ai_arg;
    }
    private Csp_Guardar_Acciones_FbBlock getCsp_Guardar_Acciones_Fb()
    {
        return Csp_Guardar_Acciones_Fb;
    }
    void setCsp_Guardar_Acciones_Fb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Acciones_Fb = new Csp_Guardar_Acciones_FbBlock();
        Csp_Guardar_Acciones_Fb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

