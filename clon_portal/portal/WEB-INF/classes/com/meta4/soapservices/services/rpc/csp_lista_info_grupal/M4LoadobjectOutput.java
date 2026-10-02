/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_LISTA_INFO_GRUPAL.
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

package com.meta4.soapservices.services.rpc.csp_lista_info_grupal;

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
    
    /* CSP_LISTA_EMP */
    public Csp_Lista_EmpBlock Csp_Lista_Emp = null;
    private void setCsp_Lista_Emp(Csp_Lista_EmpBlock ai_arg)
    {
        Csp_Lista_Emp = ai_arg;
    }
    private Csp_Lista_EmpBlock getCsp_Lista_Emp()
    {
        return Csp_Lista_Emp;
    }
    void setCsp_Lista_Emp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Lista_Emp = new Csp_Lista_EmpBlock();
        Csp_Lista_Emp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_RP_ORO_MSS */
    public Csp_Rp_Oro_MssBlock Csp_Rp_Oro_Mss = null;
    private void setCsp_Rp_Oro_Mss(Csp_Rp_Oro_MssBlock ai_arg)
    {
        Csp_Rp_Oro_Mss = ai_arg;
    }
    private Csp_Rp_Oro_MssBlock getCsp_Rp_Oro_Mss()
    {
        return Csp_Rp_Oro_Mss;
    }
    void setCsp_Rp_Oro_Mss(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Rp_Oro_Mss = new Csp_Rp_Oro_MssBlock();
        Csp_Rp_Oro_Mss.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_BUSCAR_PROC */
    public Csp_Buscar_ProcBlock Csp_Buscar_Proc = null;
    private void setCsp_Buscar_Proc(Csp_Buscar_ProcBlock ai_arg)
    {
        Csp_Buscar_Proc = ai_arg;
    }
    private Csp_Buscar_ProcBlock getCsp_Buscar_Proc()
    {
        return Csp_Buscar_Proc;
    }
    void setCsp_Buscar_Proc(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Buscar_Proc = new Csp_Buscar_ProcBlock();
        Csp_Buscar_Proc.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_UNIDAD_PADRE */
    public Csp_Unidad_PadreBlock Csp_Unidad_Padre = null;
    private void setCsp_Unidad_Padre(Csp_Unidad_PadreBlock ai_arg)
    {
        Csp_Unidad_Padre = ai_arg;
    }
    private Csp_Unidad_PadreBlock getCsp_Unidad_Padre()
    {
        return Csp_Unidad_Padre;
    }
    void setCsp_Unidad_Padre(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Unidad_Padre = new Csp_Unidad_PadreBlock();
        Csp_Unidad_Padre.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_ALMACEN_HIJOS */
    public Csp_Almacen_HijosBlock Csp_Almacen_Hijos = null;
    private void setCsp_Almacen_Hijos(Csp_Almacen_HijosBlock ai_arg)
    {
        Csp_Almacen_Hijos = ai_arg;
    }
    private Csp_Almacen_HijosBlock getCsp_Almacen_Hijos()
    {
        return Csp_Almacen_Hijos;
    }
    void setCsp_Almacen_Hijos(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Almacen_Hijos = new Csp_Almacen_HijosBlock();
        Csp_Almacen_Hijos.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_HIJA */
    public Csp_Consulta_HijaBlock Csp_Consulta_Hija = null;
    private void setCsp_Consulta_Hija(Csp_Consulta_HijaBlock ai_arg)
    {
        Csp_Consulta_Hija = ai_arg;
    }
    private Csp_Consulta_HijaBlock getCsp_Consulta_Hija()
    {
        return Csp_Consulta_Hija;
    }
    void setCsp_Consulta_Hija(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Hija = new Csp_Consulta_HijaBlock();
        Csp_Consulta_Hija.readOperations(ai_m4Op, ai_xml, ai_data);
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
    
    /* CSP_COMPETENCIAS_EVAL */
    public Csp_Competencias_EvalBlock Csp_Competencias_Eval = null;
    private void setCsp_Competencias_Eval(Csp_Competencias_EvalBlock ai_arg)
    {
        Csp_Competencias_Eval = ai_arg;
    }
    private Csp_Competencias_EvalBlock getCsp_Competencias_Eval()
    {
        return Csp_Competencias_Eval;
    }
    void setCsp_Competencias_Eval(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Competencias_Eval = new Csp_Competencias_EvalBlock();
        Csp_Competencias_Eval.readOperations(ai_m4Op, ai_xml, ai_data);
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
    

} /* end of class M4LoadobjectOutput */

