/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASE2.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_fase2;

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
    
    /* CYC_PILA_3 */
    public Cyc_Pila_3Block Cyc_Pila_3 = null;
    private void setCyc_Pila_3(Cyc_Pila_3Block ai_arg)
    {
        Cyc_Pila_3 = ai_arg;
    }
    private Cyc_Pila_3Block getCyc_Pila_3()
    {
        return Cyc_Pila_3;
    }
    void setCyc_Pila_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Pila_3 = new Cyc_Pila_3Block();
        Cyc_Pila_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_DATOS_PB_2 */
    public Cyc_Datos_Pb_2Block Cyc_Datos_Pb_2 = null;
    private void setCyc_Datos_Pb_2(Cyc_Datos_Pb_2Block ai_arg)
    {
        Cyc_Datos_Pb_2 = ai_arg;
    }
    private Cyc_Datos_Pb_2Block getCyc_Datos_Pb_2()
    {
        return Cyc_Datos_Pb_2;
    }
    void setCyc_Datos_Pb_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Datos_Pb_2 = new Cyc_Datos_Pb_2Block();
        Cyc_Datos_Pb_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCA_FASEII_2 */
    public Cyc_Busca_Faseii_2Block Cyc_Busca_Faseii_2 = null;
    private void setCyc_Busca_Faseii_2(Cyc_Busca_Faseii_2Block ai_arg)
    {
        Cyc_Busca_Faseii_2 = ai_arg;
    }
    private Cyc_Busca_Faseii_2Block getCyc_Busca_Faseii_2()
    {
        return Cyc_Busca_Faseii_2;
    }
    void setCyc_Busca_Faseii_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Busca_Faseii_2 = new Cyc_Busca_Faseii_2Block();
        Cyc_Busca_Faseii_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_OBTENER_ID_HR_3 */
    public Cyc_Obtener_Id_Hr_3Block Cyc_Obtener_Id_Hr_3 = null;
    private void setCyc_Obtener_Id_Hr_3(Cyc_Obtener_Id_Hr_3Block ai_arg)
    {
        Cyc_Obtener_Id_Hr_3 = ai_arg;
    }
    private Cyc_Obtener_Id_Hr_3Block getCyc_Obtener_Id_Hr_3()
    {
        return Cyc_Obtener_Id_Hr_3;
    }
    void setCyc_Obtener_Id_Hr_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Obtener_Id_Hr_3 = new Cyc_Obtener_Id_Hr_3Block();
        Cyc_Obtener_Id_Hr_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_FOCALIZADA */
    public Cyc_Mayor_FocalizadaBlock Cyc_Mayor_Focalizada = null;
    private void setCyc_Mayor_Focalizada(Cyc_Mayor_FocalizadaBlock ai_arg)
    {
        Cyc_Mayor_Focalizada = ai_arg;
    }
    private Cyc_Mayor_FocalizadaBlock getCyc_Mayor_Focalizada()
    {
        return Cyc_Mayor_Focalizada;
    }
    void setCyc_Mayor_Focalizada(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Focalizada = new Cyc_Mayor_FocalizadaBlock();
        Cyc_Mayor_Focalizada.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCADOR_INICIO_3 */
    public Cyc_Buscador_Inicio_3Block Cyc_Buscador_Inicio_3 = null;
    private void setCyc_Buscador_Inicio_3(Cyc_Buscador_Inicio_3Block ai_arg)
    {
        Cyc_Buscador_Inicio_3 = ai_arg;
    }
    private Cyc_Buscador_Inicio_3Block getCyc_Buscador_Inicio_3()
    {
        return Cyc_Buscador_Inicio_3;
    }
    void setCyc_Buscador_Inicio_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Buscador_Inicio_3 = new Cyc_Buscador_Inicio_3Block();
        Cyc_Buscador_Inicio_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_FEED_BACK_1 */
    public Cyc_Mayor_Feed_Back_1Block Cyc_Mayor_Feed_Back_1 = null;
    private void setCyc_Mayor_Feed_Back_1(Cyc_Mayor_Feed_Back_1Block ai_arg)
    {
        Cyc_Mayor_Feed_Back_1 = ai_arg;
    }
    private Cyc_Mayor_Feed_Back_1Block getCyc_Mayor_Feed_Back_1()
    {
        return Cyc_Mayor_Feed_Back_1;
    }
    void setCyc_Mayor_Feed_Back_1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Feed_Back_1 = new Cyc_Mayor_Feed_Back_1Block();
        Cyc_Mayor_Feed_Back_1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_TITULACION_3 */
    public Cyc_Mayor_Titulacion_3Block Cyc_Mayor_Titulacion_3 = null;
    private void setCyc_Mayor_Titulacion_3(Cyc_Mayor_Titulacion_3Block ai_arg)
    {
        Cyc_Mayor_Titulacion_3 = ai_arg;
    }
    private Cyc_Mayor_Titulacion_3Block getCyc_Mayor_Titulacion_3()
    {
        return Cyc_Mayor_Titulacion_3;
    }
    void setCyc_Mayor_Titulacion_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Titulacion_3 = new Cyc_Mayor_Titulacion_3Block();
        Cyc_Mayor_Titulacion_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_CERTIFICADO_3 */
    public Cyc_Mayor_Certificado_3Block Cyc_Mayor_Certificado_3 = null;
    private void setCyc_Mayor_Certificado_3(Cyc_Mayor_Certificado_3Block ai_arg)
    {
        Cyc_Mayor_Certificado_3 = ai_arg;
    }
    private Cyc_Mayor_Certificado_3Block getCyc_Mayor_Certificado_3()
    {
        return Cyc_Mayor_Certificado_3;
    }
    void setCyc_Mayor_Certificado_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Certificado_3 = new Cyc_Mayor_Certificado_3Block();
        Cyc_Mayor_Certificado_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_RESULTADO_BUSCADOR_3 */
    public Cyc_Resultado_Buscador_3Block Cyc_Resultado_Buscador_3 = null;
    private void setCyc_Resultado_Buscador_3(Cyc_Resultado_Buscador_3Block ai_arg)
    {
        Cyc_Resultado_Buscador_3 = ai_arg;
    }
    private Cyc_Resultado_Buscador_3Block getCyc_Resultado_Buscador_3()
    {
        return Cyc_Resultado_Buscador_3;
    }
    void setCyc_Resultado_Buscador_3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Resultado_Buscador_3 = new Cyc_Resultado_Buscador_3Block();
        Cyc_Resultado_Buscador_3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_REALIZACION_FEEDBACK_2 */
    public Cyc_Realizacion_Feedback_2Block Cyc_Realizacion_Feedback_2 = null;
    private void setCyc_Realizacion_Feedback_2(Cyc_Realizacion_Feedback_2Block ai_arg)
    {
        Cyc_Realizacion_Feedback_2 = ai_arg;
    }
    private Cyc_Realizacion_Feedback_2Block getCyc_Realizacion_Feedback_2()
    {
        return Cyc_Realizacion_Feedback_2;
    }
    void setCyc_Realizacion_Feedback_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Realizacion_Feedback_2 = new Cyc_Realizacion_Feedback_2Block();
        Cyc_Realizacion_Feedback_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

