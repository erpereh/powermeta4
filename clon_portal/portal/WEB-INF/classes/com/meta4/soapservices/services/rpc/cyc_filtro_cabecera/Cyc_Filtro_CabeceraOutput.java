/**
 * Cyc_Filtro_CabeceraOutput.java
 * Self generated code for Bussines Object CYC_FILTRO_CABECERA.
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

package com.meta4.soapservices.services.rpc.cyc_filtro_cabecera;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CYC_FILTRO_CABECERA.
 * @author Meta4
 */
public
class Cyc_Filtro_CabeceraOutput
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
    
    /* CYC_FILTRO_CERTIF */
    public Cyc_Filtro_CertifBlock Cyc_Filtro_Certif = null;
    private void setCyc_Filtro_Certif(Cyc_Filtro_CertifBlock ai_arg)
    {
        Cyc_Filtro_Certif = ai_arg;
    }
    private Cyc_Filtro_CertifBlock getCyc_Filtro_Certif()
    {
        return Cyc_Filtro_Certif;
    }
    void setCyc_Filtro_Certif(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_Certif = new Cyc_Filtro_CertifBlock();
        Cyc_Filtro_Certif.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILTRO_DIRECCION */
    public Cyc_Filtro_DireccionBlock Cyc_Filtro_Direccion = null;
    private void setCyc_Filtro_Direccion(Cyc_Filtro_DireccionBlock ai_arg)
    {
        Cyc_Filtro_Direccion = ai_arg;
    }
    private Cyc_Filtro_DireccionBlock getCyc_Filtro_Direccion()
    {
        return Cyc_Filtro_Direccion;
    }
    void setCyc_Filtro_Direccion(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_Direccion = new Cyc_Filtro_DireccionBlock();
        Cyc_Filtro_Direccion.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILTRO_GRUPONIVEL */
    public Cyc_Filtro_GruponivelBlock Cyc_Filtro_Gruponivel = null;
    private void setCyc_Filtro_Gruponivel(Cyc_Filtro_GruponivelBlock ai_arg)
    {
        Cyc_Filtro_Gruponivel = ai_arg;
    }
    private Cyc_Filtro_GruponivelBlock getCyc_Filtro_Gruponivel()
    {
        return Cyc_Filtro_Gruponivel;
    }
    void setCyc_Filtro_Gruponivel(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_Gruponivel = new Cyc_Filtro_GruponivelBlock();
        Cyc_Filtro_Gruponivel.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILTRO_TITULACION */
    public Cyc_Filtro_TitulacionBlock Cyc_Filtro_Titulacion = null;
    private void setCyc_Filtro_Titulacion(Cyc_Filtro_TitulacionBlock ai_arg)
    {
        Cyc_Filtro_Titulacion = ai_arg;
    }
    private Cyc_Filtro_TitulacionBlock getCyc_Filtro_Titulacion()
    {
        return Cyc_Filtro_Titulacion;
    }
    void setCyc_Filtro_Titulacion(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_Titulacion = new Cyc_Filtro_TitulacionBlock();
        Cyc_Filtro_Titulacion.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FAMILA_PUESTO */
    public Cyc_Famila_PuestoBlock Cyc_Famila_Puesto = null;
    private void setCyc_Famila_Puesto(Cyc_Famila_PuestoBlock ai_arg)
    {
        Cyc_Famila_Puesto = ai_arg;
    }
    private Cyc_Famila_PuestoBlock getCyc_Famila_Puesto()
    {
        return Cyc_Famila_Puesto;
    }
    void setCyc_Famila_Puesto(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Famila_Puesto = new Cyc_Famila_PuestoBlock();
        Cyc_Famila_Puesto.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Cyc_Filtro_CabeceraOutput */

