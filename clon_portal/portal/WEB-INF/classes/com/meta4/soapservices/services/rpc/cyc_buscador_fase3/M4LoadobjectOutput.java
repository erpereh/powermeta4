/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASE3.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_fase3;

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
    
    /* CYC_PILA_4 */
    public Cyc_Pila_4Block Cyc_Pila_4 = null;
    private void setCyc_Pila_4(Cyc_Pila_4Block ai_arg)
    {
        Cyc_Pila_4 = ai_arg;
    }
    private Cyc_Pila_4Block getCyc_Pila_4()
    {
        return Cyc_Pila_4;
    }
    void setCyc_Pila_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Pila_4 = new Cyc_Pila_4Block();
        Cyc_Pila_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_DATOS_PB_3 */
    public Cyc_Datos_Pb_3Block Cyc_Datos_Pb_3 = null;
    private void setCyc_Datos_Pb_3(Cyc_Datos_Pb_3Block ai_arg)
    {
        Cyc_Datos_Pb_3 = ai_arg;
    }
    private Cyc_Datos_Pb_3Block getCyc_Datos_Pb_3()
    {
        return Cyc_Datos_Pb_3;
    }
    void setCyc_Datos_Pb_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Datos_Pb_3 = new Cyc_Datos_Pb_3Block();
        Cyc_Datos_Pb_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCA_FASEII_3 */
    public Cyc_Busca_Faseii_3Block Cyc_Busca_Faseii_3 = null;
    private void setCyc_Busca_Faseii_3(Cyc_Busca_Faseii_3Block ai_arg)
    {
        Cyc_Busca_Faseii_3 = ai_arg;
    }
    private Cyc_Busca_Faseii_3Block getCyc_Busca_Faseii_3()
    {
        return Cyc_Busca_Faseii_3;
    }
    void setCyc_Busca_Faseii_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Busca_Faseii_3 = new Cyc_Busca_Faseii_3Block();
        Cyc_Busca_Faseii_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_OBTENER_ID_HR_4 */
    public Cyc_Obtener_Id_Hr_4Block Cyc_Obtener_Id_Hr_4 = null;
    private void setCyc_Obtener_Id_Hr_4(Cyc_Obtener_Id_Hr_4Block ai_arg)
    {
        Cyc_Obtener_Id_Hr_4 = ai_arg;
    }
    private Cyc_Obtener_Id_Hr_4Block getCyc_Obtener_Id_Hr_4()
    {
        return Cyc_Obtener_Id_Hr_4;
    }
    void setCyc_Obtener_Id_Hr_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Obtener_Id_Hr_4 = new Cyc_Obtener_Id_Hr_4Block();
        Cyc_Obtener_Id_Hr_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCADOR_INICIO_4 */
    public Cyc_Buscador_Inicio_4Block Cyc_Buscador_Inicio_4 = null;
    private void setCyc_Buscador_Inicio_4(Cyc_Buscador_Inicio_4Block ai_arg)
    {
        Cyc_Buscador_Inicio_4 = ai_arg;
    }
    private Cyc_Buscador_Inicio_4Block getCyc_Buscador_Inicio_4()
    {
        return Cyc_Buscador_Inicio_4;
    }
    void setCyc_Buscador_Inicio_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Buscador_Inicio_4 = new Cyc_Buscador_Inicio_4Block();
        Cyc_Buscador_Inicio_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_FEED_BACK_2 */
    public Cyc_Mayor_Feed_Back_2Block Cyc_Mayor_Feed_Back_2 = null;
    private void setCyc_Mayor_Feed_Back_2(Cyc_Mayor_Feed_Back_2Block ai_arg)
    {
        Cyc_Mayor_Feed_Back_2 = ai_arg;
    }
    private Cyc_Mayor_Feed_Back_2Block getCyc_Mayor_Feed_Back_2()
    {
        return Cyc_Mayor_Feed_Back_2;
    }
    void setCyc_Mayor_Feed_Back_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Feed_Back_2 = new Cyc_Mayor_Feed_Back_2Block();
        Cyc_Mayor_Feed_Back_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_TITULACION_4 */
    public Cyc_Mayor_Titulacion_4Block Cyc_Mayor_Titulacion_4 = null;
    private void setCyc_Mayor_Titulacion_4(Cyc_Mayor_Titulacion_4Block ai_arg)
    {
        Cyc_Mayor_Titulacion_4 = ai_arg;
    }
    private Cyc_Mayor_Titulacion_4Block getCyc_Mayor_Titulacion_4()
    {
        return Cyc_Mayor_Titulacion_4;
    }
    void setCyc_Mayor_Titulacion_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Titulacion_4 = new Cyc_Mayor_Titulacion_4Block();
        Cyc_Mayor_Titulacion_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_CERTIFICADO_4 */
    public Cyc_Mayor_Certificado_4Block Cyc_Mayor_Certificado_4 = null;
    private void setCyc_Mayor_Certificado_4(Cyc_Mayor_Certificado_4Block ai_arg)
    {
        Cyc_Mayor_Certificado_4 = ai_arg;
    }
    private Cyc_Mayor_Certificado_4Block getCyc_Mayor_Certificado_4()
    {
        return Cyc_Mayor_Certificado_4;
    }
    void setCyc_Mayor_Certificado_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Certificado_4 = new Cyc_Mayor_Certificado_4Block();
        Cyc_Mayor_Certificado_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_RESULTADO_BUSCADOR_4 */
    public Cyc_Resultado_Buscador_4Block Cyc_Resultado_Buscador_4 = null;
    private void setCyc_Resultado_Buscador_4(Cyc_Resultado_Buscador_4Block ai_arg)
    {
        Cyc_Resultado_Buscador_4 = ai_arg;
    }
    private Cyc_Resultado_Buscador_4Block getCyc_Resultado_Buscador_4()
    {
        return Cyc_Resultado_Buscador_4;
    }
    void setCyc_Resultado_Buscador_4(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Resultado_Buscador_4 = new Cyc_Resultado_Buscador_4Block();
        Cyc_Resultado_Buscador_4.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_REALIZACION_FEEDBACK_3 */
    public Cyc_Realizacion_Feedback_3Block Cyc_Realizacion_Feedback_3 = null;
    private void setCyc_Realizacion_Feedback_3(Cyc_Realizacion_Feedback_3Block ai_arg)
    {
        Cyc_Realizacion_Feedback_3 = ai_arg;
    }
    private Cyc_Realizacion_Feedback_3Block getCyc_Realizacion_Feedback_3()
    {
        return Cyc_Realizacion_Feedback_3;
    }
    void setCyc_Realizacion_Feedback_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Realizacion_Feedback_3 = new Cyc_Realizacion_Feedback_3Block();
        Cyc_Realizacion_Feedback_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

