/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_SERVICIO_BASICO.
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

package com.meta4.soapservices.services.rpc.cyc_servicio_basico;

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
    
    /* CYC_ROL */
    public Cyc_RolBlock Cyc_Rol = null;
    private void setCyc_Rol(Cyc_RolBlock ai_arg)
    {
        Cyc_Rol = ai_arg;
    }
    private Cyc_RolBlock getCyc_Rol()
    {
        return Cyc_Rol;
    }
    void setCyc_Rol(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Rol = new Cyc_RolBlock();
        Cyc_Rol.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_DATOS_BASICOS */
    public Cyc_Datos_BasicosBlock Cyc_Datos_Basicos = null;
    private void setCyc_Datos_Basicos(Cyc_Datos_BasicosBlock ai_arg)
    {
        Cyc_Datos_Basicos = ai_arg;
    }
    private Cyc_Datos_BasicosBlock getCyc_Datos_Basicos()
    {
        return Cyc_Datos_Basicos;
    }
    void setCyc_Datos_Basicos(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Datos_Basicos = new Cyc_Datos_BasicosBlock();
        Cyc_Datos_Basicos.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FOTO_EMPLEADO */
    public Cyc_Foto_EmpleadoBlock Cyc_Foto_Empleado = null;
    private void setCyc_Foto_Empleado(Cyc_Foto_EmpleadoBlock ai_arg)
    {
        Cyc_Foto_Empleado = ai_arg;
    }
    private Cyc_Foto_EmpleadoBlock getCyc_Foto_Empleado()
    {
        return Cyc_Foto_Empleado;
    }
    void setCyc_Foto_Empleado(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Foto_Empleado = new Cyc_Foto_EmpleadoBlock();
        Cyc_Foto_Empleado.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FECHA_FEEDBACK */
    public Cyc_Fecha_FeedbackBlock Cyc_Fecha_Feedback = null;
    private void setCyc_Fecha_Feedback(Cyc_Fecha_FeedbackBlock ai_arg)
    {
        Cyc_Fecha_Feedback = ai_arg;
    }
    private Cyc_Fecha_FeedbackBlock getCyc_Fecha_Feedback()
    {
        return Cyc_Fecha_Feedback;
    }
    void setCyc_Fecha_Feedback(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fecha_Feedback = new Cyc_Fecha_FeedbackBlock();
        Cyc_Fecha_Feedback.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_CONFIGURACION_PCP */
    public Cyc_Configuracion_PcpBlock Cyc_Configuracion_Pcp = null;
    private void setCyc_Configuracion_Pcp(Cyc_Configuracion_PcpBlock ai_arg)
    {
        Cyc_Configuracion_Pcp = ai_arg;
    }
    private Cyc_Configuracion_PcpBlock getCyc_Configuracion_Pcp()
    {
        return Cyc_Configuracion_Pcp;
    }
    void setCyc_Configuracion_Pcp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Configuracion_Pcp = new Cyc_Configuracion_PcpBlock();
        Cyc_Configuracion_Pcp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

