/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK_EMP.
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

package com.meta4.soapservices.services.rpc.csp_guardar_feedback_emp;

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
    
    /* CSP_GUARDAR_DATOS_EMP */
    public Csp_Guardar_Datos_EmpBlock Csp_Guardar_Datos_Emp = null;
    private void setCsp_Guardar_Datos_Emp(Csp_Guardar_Datos_EmpBlock ai_arg)
    {
        Csp_Guardar_Datos_Emp = ai_arg;
    }
    private Csp_Guardar_Datos_EmpBlock getCsp_Guardar_Datos_Emp()
    {
        return Csp_Guardar_Datos_Emp;
    }
    void setCsp_Guardar_Datos_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Datos_Emp = new Csp_Guardar_Datos_EmpBlock();
        Csp_Guardar_Datos_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
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
    
    /* CSP_GUARDAR_COMENT_EMP */
    public Csp_Guardar_Coment_EmpBlock Csp_Guardar_Coment_Emp = null;
    private void setCsp_Guardar_Coment_Emp(Csp_Guardar_Coment_EmpBlock ai_arg)
    {
        Csp_Guardar_Coment_Emp = ai_arg;
    }
    private Csp_Guardar_Coment_EmpBlock getCsp_Guardar_Coment_Emp()
    {
        return Csp_Guardar_Coment_Emp;
    }
    void setCsp_Guardar_Coment_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Coment_Emp = new Csp_Guardar_Coment_EmpBlock();
        Csp_Guardar_Coment_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_INSERTAR_DATOS_EMP */
    public Csp_Insertar_Datos_EmpBlock Csp_Insertar_Datos_Emp = null;
    private void setCsp_Insertar_Datos_Emp(Csp_Insertar_Datos_EmpBlock ai_arg)
    {
        Csp_Insertar_Datos_Emp = ai_arg;
    }
    private Csp_Insertar_Datos_EmpBlock getCsp_Insertar_Datos_Emp()
    {
        return Csp_Insertar_Datos_Emp;
    }
    void setCsp_Insertar_Datos_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Insertar_Datos_Emp = new Csp_Insertar_Datos_EmpBlock();
        Csp_Insertar_Datos_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_ACCIONES_EMP */
    public Csp_Guardar_Acciones_EmpBlock Csp_Guardar_Acciones_Emp = null;
    private void setCsp_Guardar_Acciones_Emp(Csp_Guardar_Acciones_EmpBlock ai_arg)
    {
        Csp_Guardar_Acciones_Emp = ai_arg;
    }
    private Csp_Guardar_Acciones_EmpBlock getCsp_Guardar_Acciones_Emp()
    {
        return Csp_Guardar_Acciones_Emp;
    }
    void setCsp_Guardar_Acciones_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Acciones_Emp = new Csp_Guardar_Acciones_EmpBlock();
        Csp_Guardar_Acciones_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_FEEDBACK_EMP */
    public Csp_Guardar_Feedback_EmpBlock Csp_Guardar_Feedback_Emp = null;
    private void setCsp_Guardar_Feedback_Emp(Csp_Guardar_Feedback_EmpBlock ai_arg)
    {
        Csp_Guardar_Feedback_Emp = ai_arg;
    }
    private Csp_Guardar_Feedback_EmpBlock getCsp_Guardar_Feedback_Emp()
    {
        return Csp_Guardar_Feedback_Emp;
    }
    void setCsp_Guardar_Feedback_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Feedback_Emp = new Csp_Guardar_Feedback_EmpBlock();
        Csp_Guardar_Feedback_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

