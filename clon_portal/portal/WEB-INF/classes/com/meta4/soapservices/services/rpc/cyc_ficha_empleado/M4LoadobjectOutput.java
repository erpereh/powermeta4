/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_FICHA_EMPLEADO.
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

package com.meta4.soapservices.services.rpc.cyc_ficha_empleado;

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
    
    /* CYC_H_ORO */
    public Cyc_H_OroBlock Cyc_H_Oro = null;
    private void setCyc_H_Oro(Cyc_H_OroBlock ai_arg)
    {
        Cyc_H_Oro = ai_arg;
    }
    private Cyc_H_OroBlock getCyc_H_Oro()
    {
        return Cyc_H_Oro;
    }
    void setCyc_H_Oro(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_H_Oro = new Cyc_H_OroBlock();
        Cyc_H_Oro.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FICHA_EMPLEADO */
    public Cyc_Ficha_EmpleadoBlock Cyc_Ficha_Empleado = null;
    private void setCyc_Ficha_Empleado(Cyc_Ficha_EmpleadoBlock ai_arg)
    {
        Cyc_Ficha_Empleado = ai_arg;
    }
    private Cyc_Ficha_EmpleadoBlock getCyc_Ficha_Empleado()
    {
        return Cyc_Ficha_Empleado;
    }
    void setCyc_Ficha_Empleado(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Ficha_Empleado = new Cyc_Ficha_EmpleadoBlock();
        Cyc_Ficha_Empleado.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FIX_FECHA_ALTA */
    public Cyc_Fix_Fecha_AltaBlock Cyc_Fix_Fecha_Alta = null;
    private void setCyc_Fix_Fecha_Alta(Cyc_Fix_Fecha_AltaBlock ai_arg)
    {
        Cyc_Fix_Fecha_Alta = ai_arg;
    }
    private Cyc_Fix_Fecha_AltaBlock getCyc_Fix_Fecha_Alta()
    {
        return Cyc_Fix_Fecha_Alta;
    }
    void setCyc_Fix_Fecha_Alta(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fix_Fecha_Alta = new Cyc_Fix_Fecha_AltaBlock();
        Cyc_Fix_Fecha_Alta.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FECHAS_FEEDBACK */
    public Cyc_Fechas_FeedbackBlock Cyc_Fechas_Feedback = null;
    private void setCyc_Fechas_Feedback(Cyc_Fechas_FeedbackBlock ai_arg)
    {
        Cyc_Fechas_Feedback = ai_arg;
    }
    private Cyc_Fechas_FeedbackBlock getCyc_Fechas_Feedback()
    {
        return Cyc_Fechas_Feedback;
    }
    void setCyc_Fechas_Feedback(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fechas_Feedback = new Cyc_Fechas_FeedbackBlock();
        Cyc_Fechas_Feedback.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FIX_NOTAS_FASE1 */
    public Cyc_Fix_Notas_Fase1Block Cyc_Fix_Notas_Fase1 = null;
    private void setCyc_Fix_Notas_Fase1(Cyc_Fix_Notas_Fase1Block ai_arg)
    {
        Cyc_Fix_Notas_Fase1 = ai_arg;
    }
    private Cyc_Fix_Notas_Fase1Block getCyc_Fix_Notas_Fase1()
    {
        return Cyc_Fix_Notas_Fase1;
    }
    void setCyc_Fix_Notas_Fase1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fix_Notas_Fase1 = new Cyc_Fix_Notas_Fase1Block();
        Cyc_Fix_Notas_Fase1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FICHA_DATOS_PERSONALES */
    public Cyc_Ficha_Datos_PersonalesBlock Cyc_Ficha_Datos_Personales = null;
    private void setCyc_Ficha_Datos_Personales(Cyc_Ficha_Datos_PersonalesBlock ai_arg)
    {
        Cyc_Ficha_Datos_Personales = ai_arg;
    }
    private Cyc_Ficha_Datos_PersonalesBlock getCyc_Ficha_Datos_Personales()
    {
        return Cyc_Ficha_Datos_Personales;
    }
    void setCyc_Ficha_Datos_Personales(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Ficha_Datos_Personales = new Cyc_Ficha_Datos_PersonalesBlock();
        Cyc_Ficha_Datos_Personales.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

