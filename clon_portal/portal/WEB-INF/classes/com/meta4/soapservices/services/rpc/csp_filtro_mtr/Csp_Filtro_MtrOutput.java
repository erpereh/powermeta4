/**
 * Csp_Filtro_MtrOutput.java
 * Self generated code for Bussines Object CSP_FILTRO_MTR.
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

package com.meta4.soapservices.services.rpc.csp_filtro_mtr;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CSP_FILTRO_MTR.
 * @author Meta4
 */
public
class Csp_Filtro_MtrOutput
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
    
    /* CSP_CONSULTA_CENTROS */
    public Csp_Consulta_CentrosBlock Csp_Consulta_Centros = null;
    private void setCsp_Consulta_Centros(Csp_Consulta_CentrosBlock ai_arg)
    {
        Csp_Consulta_Centros = ai_arg;
    }
    private Csp_Consulta_CentrosBlock getCsp_Consulta_Centros()
    {
        return Csp_Consulta_Centros;
    }
    void setCsp_Consulta_Centros(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Centros = new Csp_Consulta_CentrosBlock();
        Csp_Consulta_Centros.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_DIRECCION */
    public Csp_Consulta_DireccionBlock Csp_Consulta_Direccion = null;
    private void setCsp_Consulta_Direccion(Csp_Consulta_DireccionBlock ai_arg)
    {
        Csp_Consulta_Direccion = ai_arg;
    }
    private Csp_Consulta_DireccionBlock getCsp_Consulta_Direccion()
    {
        return Csp_Consulta_Direccion;
    }
    void setCsp_Consulta_Direccion(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Direccion = new Csp_Consulta_DireccionBlock();
        Csp_Consulta_Direccion.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_PUESTO */
    public Csp_Consulta_PuestoBlock Csp_Consulta_Puesto = null;
    private void setCsp_Consulta_Puesto(Csp_Consulta_PuestoBlock ai_arg)
    {
        Csp_Consulta_Puesto = ai_arg;
    }
    private Csp_Consulta_PuestoBlock getCsp_Consulta_Puesto()
    {
        return Csp_Consulta_Puesto;
    }
    void setCsp_Consulta_Puesto(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Puesto = new Csp_Consulta_PuestoBlock();
        Csp_Consulta_Puesto.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_SERVICIOS */
    public Csp_Consulta_ServiciosBlock Csp_Consulta_Servicios = null;
    private void setCsp_Consulta_Servicios(Csp_Consulta_ServiciosBlock ai_arg)
    {
        Csp_Consulta_Servicios = ai_arg;
    }
    private Csp_Consulta_ServiciosBlock getCsp_Consulta_Servicios()
    {
        return Csp_Consulta_Servicios;
    }
    void setCsp_Consulta_Servicios(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Servicios = new Csp_Consulta_ServiciosBlock();
        Csp_Consulta_Servicios.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_UNIDAD */
    public Csp_Consulta_UnidadBlock Csp_Consulta_Unidad = null;
    private void setCsp_Consulta_Unidad(Csp_Consulta_UnidadBlock ai_arg)
    {
        Csp_Consulta_Unidad = ai_arg;
    }
    private Csp_Consulta_UnidadBlock getCsp_Consulta_Unidad()
    {
        return Csp_Consulta_Unidad;
    }
    void setCsp_Consulta_Unidad(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Unidad = new Csp_Consulta_UnidadBlock();
        Csp_Consulta_Unidad.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_AREAS */
    public Csp_Consulta_AreasBlock Csp_Consulta_Areas = null;
    private void setCsp_Consulta_Areas(Csp_Consulta_AreasBlock ai_arg)
    {
        Csp_Consulta_Areas = ai_arg;
    }
    private Csp_Consulta_AreasBlock getCsp_Consulta_Areas()
    {
        return Csp_Consulta_Areas;
    }
    void setCsp_Consulta_Areas(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Areas = new Csp_Consulta_AreasBlock();
        Csp_Consulta_Areas.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Csp_Filtro_MtrOutput */

