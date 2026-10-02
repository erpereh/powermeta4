/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_INICIO.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_inicio;

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
    
    /* CYC_PILA */
    public Cyc_PilaBlock Cyc_Pila = null;
    private void setCyc_Pila(Cyc_PilaBlock ai_arg)
    {
        Cyc_Pila = ai_arg;
    }
    private Cyc_PilaBlock getCyc_Pila()
    {
        return Cyc_Pila;
    }
    void setCyc_Pila(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Pila = new Cyc_PilaBlock();
        Cyc_Pila.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_DATOS_PB */
    public Cyc_Datos_PbBlock Cyc_Datos_Pb = null;
    private void setCyc_Datos_Pb(Cyc_Datos_PbBlock ai_arg)
    {
        Cyc_Datos_Pb = ai_arg;
    }
    private Cyc_Datos_PbBlock getCyc_Datos_Pb()
    {
        return Cyc_Datos_Pb;
    }
    void setCyc_Datos_Pb(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Datos_Pb = new Cyc_Datos_PbBlock();
        Cyc_Datos_Pb.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCA_FASEI */
    public Cyc_Busca_FaseiBlock Cyc_Busca_Fasei = null;
    private void setCyc_Busca_Fasei(Cyc_Busca_FaseiBlock ai_arg)
    {
        Cyc_Busca_Fasei = ai_arg;
    }
    private Cyc_Busca_FaseiBlock getCyc_Busca_Fasei()
    {
        return Cyc_Busca_Fasei;
    }
    void setCyc_Busca_Fasei(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Busca_Fasei = new Cyc_Busca_FaseiBlock();
        Cyc_Busca_Fasei.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_OBTENER_ID_HR */
    public Cyc_Obtener_Id_HrBlock Cyc_Obtener_Id_Hr = null;
    private void setCyc_Obtener_Id_Hr(Cyc_Obtener_Id_HrBlock ai_arg)
    {
        Cyc_Obtener_Id_Hr = ai_arg;
    }
    private Cyc_Obtener_Id_HrBlock getCyc_Obtener_Id_Hr()
    {
        return Cyc_Obtener_Id_Hr;
    }
    void setCyc_Obtener_Id_Hr(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Obtener_Id_Hr = new Cyc_Obtener_Id_HrBlock();
        Cyc_Obtener_Id_Hr.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_BUSCADOR_INICIO */
    public Cyc_Buscador_InicioBlock Cyc_Buscador_Inicio = null;
    private void setCyc_Buscador_Inicio(Cyc_Buscador_InicioBlock ai_arg)
    {
        Cyc_Buscador_Inicio = ai_arg;
    }
    private Cyc_Buscador_InicioBlock getCyc_Buscador_Inicio()
    {
        return Cyc_Buscador_Inicio;
    }
    void setCyc_Buscador_Inicio(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Buscador_Inicio = new Cyc_Buscador_InicioBlock();
        Cyc_Buscador_Inicio.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_TITULACION */
    public Cyc_Mayor_TitulacionBlock Cyc_Mayor_Titulacion = null;
    private void setCyc_Mayor_Titulacion(Cyc_Mayor_TitulacionBlock ai_arg)
    {
        Cyc_Mayor_Titulacion = ai_arg;
    }
    private Cyc_Mayor_TitulacionBlock getCyc_Mayor_Titulacion()
    {
        return Cyc_Mayor_Titulacion;
    }
    void setCyc_Mayor_Titulacion(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Titulacion = new Cyc_Mayor_TitulacionBlock();
        Cyc_Mayor_Titulacion.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MAYOR_CERTIFICADO */
    public Cyc_Mayor_CertificadoBlock Cyc_Mayor_Certificado = null;
    private void setCyc_Mayor_Certificado(Cyc_Mayor_CertificadoBlock ai_arg)
    {
        Cyc_Mayor_Certificado = ai_arg;
    }
    private Cyc_Mayor_CertificadoBlock getCyc_Mayor_Certificado()
    {
        return Cyc_Mayor_Certificado;
    }
    void setCyc_Mayor_Certificado(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Mayor_Certificado = new Cyc_Mayor_CertificadoBlock();
        Cyc_Mayor_Certificado.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_RESULTADO_BUSCADOR */
    public Cyc_Resultado_BuscadorBlock Cyc_Resultado_Buscador = null;
    private void setCyc_Resultado_Buscador(Cyc_Resultado_BuscadorBlock ai_arg)
    {
        Cyc_Resultado_Buscador = ai_arg;
    }
    private Cyc_Resultado_BuscadorBlock getCyc_Resultado_Buscador()
    {
        return Cyc_Resultado_Buscador;
    }
    void setCyc_Resultado_Buscador(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Resultado_Buscador = new Cyc_Resultado_BuscadorBlock();
        Cyc_Resultado_Buscador.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_REALIZACION_FEEDBACK */
    public Cyc_Realizacion_FeedbackBlock Cyc_Realizacion_Feedback = null;
    private void setCyc_Realizacion_Feedback(Cyc_Realizacion_FeedbackBlock ai_arg)
    {
        Cyc_Realizacion_Feedback = ai_arg;
    }
    private Cyc_Realizacion_FeedbackBlock getCyc_Realizacion_Feedback()
    {
        return Cyc_Realizacion_Feedback;
    }
    void setCyc_Realizacion_Feedback(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Realizacion_Feedback = new Cyc_Realizacion_FeedbackBlock();
        Cyc_Realizacion_Feedback.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

