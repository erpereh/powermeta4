/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASEI.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_fasei;

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
    
    /* CYC_PILA_2 */
    public Cyc_Pila_2Block Cyc_Pila_2 = null;
    private void setCyc_Pila_2(Cyc_Pila_2Block ai_arg)
    {
        Cyc_Pila_2 = ai_arg;
    }
    private Cyc_Pila_2Block getCyc_Pila_2()
    {
        return Cyc_Pila_2;
    }
    void setCyc_Pila_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Pila_2 = new Cyc_Pila_2Block();
        Cyc_Pila_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_DATOS_PB_1 */
    public Cyc_Datos_Pb_1Block Cyc_Datos_Pb_1 = null;
    private void setCyc_Datos_Pb_1(Cyc_Datos_Pb_1Block ai_arg)
    {
        Cyc_Datos_Pb_1 = ai_arg;
    }
    private Cyc_Datos_Pb_1Block getCyc_Datos_Pb_1()
    {
        return Cyc_Datos_Pb_1;
    }
    void setCyc_Datos_Pb_1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Datos_Pb_1 = new Cyc_Datos_Pb_1Block();
        Cyc_Datos_Pb_1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCA_FASEI_1 */
    public Cyc_Busca_Fasei_1Block Cyc_Busca_Fasei_1 = null;
    private void setCyc_Busca_Fasei_1(Cyc_Busca_Fasei_1Block ai_arg)
    {
        Cyc_Busca_Fasei_1 = ai_arg;
    }
    private Cyc_Busca_Fasei_1Block getCyc_Busca_Fasei_1()
    {
        return Cyc_Busca_Fasei_1;
    }
    void setCyc_Busca_Fasei_1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Busca_Fasei_1 = new Cyc_Busca_Fasei_1Block();
        Cyc_Busca_Fasei_1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_FEED_BACK */
    public Cyc_Mayor_Feed_BackBlock Cyc_Mayor_Feed_Back = null;
    private void setCyc_Mayor_Feed_Back(Cyc_Mayor_Feed_BackBlock ai_arg)
    {
        Cyc_Mayor_Feed_Back = ai_arg;
    }
    private Cyc_Mayor_Feed_BackBlock getCyc_Mayor_Feed_Back()
    {
        return Cyc_Mayor_Feed_Back;
    }
    void setCyc_Mayor_Feed_Back(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Feed_Back = new Cyc_Mayor_Feed_BackBlock();
        Cyc_Mayor_Feed_Back.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_OBTENER_ID_HR_2 */
    public Cyc_Obtener_Id_Hr_2Block Cyc_Obtener_Id_Hr_2 = null;
    private void setCyc_Obtener_Id_Hr_2(Cyc_Obtener_Id_Hr_2Block ai_arg)
    {
        Cyc_Obtener_Id_Hr_2 = ai_arg;
    }
    private Cyc_Obtener_Id_Hr_2Block getCyc_Obtener_Id_Hr_2()
    {
        return Cyc_Obtener_Id_Hr_2;
    }
    void setCyc_Obtener_Id_Hr_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Obtener_Id_Hr_2 = new Cyc_Obtener_Id_Hr_2Block();
        Cyc_Obtener_Id_Hr_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCADOR_INICIO_2 */
    public Cyc_Buscador_Inicio_2Block Cyc_Buscador_Inicio_2 = null;
    private void setCyc_Buscador_Inicio_2(Cyc_Buscador_Inicio_2Block ai_arg)
    {
        Cyc_Buscador_Inicio_2 = ai_arg;
    }
    private Cyc_Buscador_Inicio_2Block getCyc_Buscador_Inicio_2()
    {
        return Cyc_Buscador_Inicio_2;
    }
    void setCyc_Buscador_Inicio_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Buscador_Inicio_2 = new Cyc_Buscador_Inicio_2Block();
        Cyc_Buscador_Inicio_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_TITULACION_2 */
    public Cyc_Mayor_Titulacion_2Block Cyc_Mayor_Titulacion_2 = null;
    private void setCyc_Mayor_Titulacion_2(Cyc_Mayor_Titulacion_2Block ai_arg)
    {
        Cyc_Mayor_Titulacion_2 = ai_arg;
    }
    private Cyc_Mayor_Titulacion_2Block getCyc_Mayor_Titulacion_2()
    {
        return Cyc_Mayor_Titulacion_2;
    }
    void setCyc_Mayor_Titulacion_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Titulacion_2 = new Cyc_Mayor_Titulacion_2Block();
        Cyc_Mayor_Titulacion_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_CERTIFICADO_2 */
    public Cyc_Mayor_Certificado_2Block Cyc_Mayor_Certificado_2 = null;
    private void setCyc_Mayor_Certificado_2(Cyc_Mayor_Certificado_2Block ai_arg)
    {
        Cyc_Mayor_Certificado_2 = ai_arg;
    }
    private Cyc_Mayor_Certificado_2Block getCyc_Mayor_Certificado_2()
    {
        return Cyc_Mayor_Certificado_2;
    }
    void setCyc_Mayor_Certificado_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Certificado_2 = new Cyc_Mayor_Certificado_2Block();
        Cyc_Mayor_Certificado_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_RESULTADO_BUSCADOR_2 */
    public Cyc_Resultado_Buscador_2Block Cyc_Resultado_Buscador_2 = null;
    private void setCyc_Resultado_Buscador_2(Cyc_Resultado_Buscador_2Block ai_arg)
    {
        Cyc_Resultado_Buscador_2 = ai_arg;
    }
    private Cyc_Resultado_Buscador_2Block getCyc_Resultado_Buscador_2()
    {
        return Cyc_Resultado_Buscador_2;
    }
    void setCyc_Resultado_Buscador_2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Resultado_Buscador_2 = new Cyc_Resultado_Buscador_2Block();
        Cyc_Resultado_Buscador_2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_REALIZACION_FEEDBACK_1 */
    public Cyc_Realizacion_Feedback_1Block Cyc_Realizacion_Feedback_1 = null;
    private void setCyc_Realizacion_Feedback_1(Cyc_Realizacion_Feedback_1Block ai_arg)
    {
        Cyc_Realizacion_Feedback_1 = ai_arg;
    }
    private Cyc_Realizacion_Feedback_1Block getCyc_Realizacion_Feedback_1()
    {
        return Cyc_Realizacion_Feedback_1;
    }
    void setCyc_Realizacion_Feedback_1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Realizacion_Feedback_1 = new Cyc_Realizacion_Feedback_1Block();
        Cyc_Realizacion_Feedback_1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

