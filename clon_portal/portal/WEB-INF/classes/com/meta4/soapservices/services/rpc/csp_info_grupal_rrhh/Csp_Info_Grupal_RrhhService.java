/**
 * Csp_Info_Grupal_RrhhService.java
 * Self generated code for Business Object CSP_INFO_GRUPAL_RRHH.
 *
 * Copyright Meta4 Spain S.A.
 * Centro Europa Empresarial - Edificio Roma
 * C/ Rozabella, 8
 * 28230 Las Rozas - Madrid
 * Spain
 *
 * Private and Confidential
 * The information contained in this document is the property of Meta4 Spain S.A.
 * It is for the exclusive use of designated employees
 * and not for distribution without prior written authorization.
 */

package com.meta4.soapservices.services.rpc.csp_info_grupal_rrhh;

import com.meta4.m4operations.M4Operations;
import com.meta4.session.M4SessionManager;
import com.meta4.soapservices.session.*;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;

import com.meta4.common.utils.logsystem.M4LogManager;
import com.meta4.common.utils.logsystem.M4ILogger;
import com.meta4.m4operations.LogMessage;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import java.util.*;

/**
 * SOAP Service for Bussines Object CSP_INFO_GRUPAL_RRHH.
 * @author Meta4
 */
public
class Csp_Info_Grupal_RrhhService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Info_Grupal_RrhhService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_INFO_GRUPAL_RRHH";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_INFO_GRUPAL_RRHH
     * CSP_INFO_GRUPAL_RRHH
     * 
     */
    public
    Csp_Info_Grupal_RrhhOutput
    CSP_INFO_GRUPAL_RRHH
    (
        String ARG_EMPLEADO
,        String ARG_NOMBRE
,        String ARG_APELLIDO1
,        String ARG_APELLIDO2
,        String ARG_DIRECCION
,        String ARG_AREA
,        String ARG_ANIO
    ) throws M4SoapException
    {
        m_log.debug("CSP_INFO_GRUPAL_RRHH(...)");

        // return object for this method.
        Csp_Info_Grupal_RrhhOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_RP_ORO_MSS";
        final String METHOD_NAME = "CSP_CARGA";
        final String METHOD_ALIAS = METHOD_NAME;
        
        // Create LN4 method parameters list.
        Hashtable htArgs = new Hashtable();

        // retrieves soap and meta4 session.
        M4ISoapSession soapSession = M4SoapSessionManager.getSoapSession();
        M4SessionManager sessionManager = soapSession.getM4Session();
  
        // executes appserver method.
        try
        {
            // Configure M4Connect to return the M4XML file and do not parse it.
            Hashtable ht = new Hashtable();
            ht.put(M4Operations.M4_EXECUTOR_DOXML, M4Operations.M4_EXECUTOR_TRUE);
            ht.put(M4Operations.M4_EXECUTOR_DOPARSE, M4Operations.M4_EXECUTOR_FALSE);
            
            // get the current internal type
            final int internalType = 1;
            
            // the reset m4xml space internal type constant
            final int RESET_M4XML_SPACE_INTERNAL_TYPE = 91;

            // create a M4Operations object for the current sesion.
            m4Op = new M4SoapOperations(sessionManager, ht);

            // subsesion init.
            if (internalType == RESET_M4XML_SPACE_INTERNAL_TYPE) {
            	m4Op.initSessionTask();
            }
            else {
            	m4Op.initTask(M4OBJECT_ALIAS);
            }
            
            // transaction init. Preserve m4object in server (3rd parameter = true).
            m4Op.beginJob();
            m4Op.createData(M4OBJECT_ALIAS, M4OBJECT_NAME, true);
        
            // fill input arguments.
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));
            if (ARG_NOMBRE != null) htArgs.put("ARG_NOMBRE", M4BusinessMethodArg.toString(ARG_NOMBRE));
            if (ARG_APELLIDO1 != null) htArgs.put("ARG_APELLIDO1", M4BusinessMethodArg.toString(ARG_APELLIDO1));
            if (ARG_APELLIDO2 != null) htArgs.put("ARG_APELLIDO2", M4BusinessMethodArg.toString(ARG_APELLIDO2));
            if (ARG_DIRECCION != null) htArgs.put("ARG_DIRECCION", M4BusinessMethodArg.toString(ARG_DIRECCION));
            if (ARG_AREA != null) htArgs.put("ARG_AREA", M4BusinessMethodArg.toString(ARG_AREA));
            if (ARG_ANIO != null) htArgs.put("ARG_ANIO", M4BusinessMethodArg.toString(ARG_ANIO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_COMPETENCIAS_EVAL.
            m4Op.outputDef(Csp_Competencias_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Competencias_EvalBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Info_Grupal_RrhhOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_COMPETENCIAS_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Competencias_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Competencias_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Competencias_Eval(m4Op, xml, nNode);

            // subsesion end.
            m4Op.endTask();
            
        }
        catch(Exception e)
        {
            m_log.debug("[EXCEPTION]", e);

            // throws a M4SoapException with the original exception.
            throw M4SoapException.makeException(e);
        }
 
        // return.
        return methodOutput;
    } /* end of method CSP_INFO_GRUPAL_RRHH */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Lista_EmpBlock CSP_LISTA_EMP
,        Csp_Rp_Oro_MssBlock CSP_RP_ORO_MSS
,        Csp_Buscar_ProcBlock CSP_BUSCAR_PROC
,        Csp_Unidad_PadreBlock CSP_UNIDAD_PADRE
,        Csp_Almacen_HijosBlock CSP_ALMACEN_HIJOS
,        Csp_Consulta_HijaBlock CSP_CONSULTA_HIJA
,        Csp_Consulta_AreasBlock CSP_CONSULTA_AREAS
,        Csp_Consulta_UnidadBlock CSP_CONSULTA_UNIDAD
,        Csp_Competencias_EvalBlock CSP_COMPETENCIAS_EVAL
,        Csp_Consulta_DireccionBlock CSP_CONSULTA_DIRECCION
,        Csp_Consulta_ServiciosBlock CSP_CONSULTA_SERVICIOS
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_RP_ORO_MSS";
        final String METHOD_NAME = "SYS_LOAD_SERVER";
        final String METHOD_ALIAS = METHOD_NAME;
        
        // Create LN4 method parameters list.
        Hashtable htArgs = new Hashtable();

        // retrieves soap and meta4 session.
        M4ISoapSession soapSession = M4SoapSessionManager.getSoapSession();
        M4SessionManager sessionManager = soapSession.getM4Session();
  
        // executes appserver method.
        try
        {
            // Configure M4Connect to return the M4XML file and do not parse it.
            Hashtable ht = new Hashtable();
            ht.put(M4Operations.M4_EXECUTOR_DOXML, M4Operations.M4_EXECUTOR_TRUE);
            ht.put(M4Operations.M4_EXECUTOR_DOPARSE, M4Operations.M4_EXECUTOR_FALSE);
            
            // get the current internal type
            final int internalType = 255;
            
            // the reset m4xml space internal type constant
            final int RESET_M4XML_SPACE_INTERNAL_TYPE = 91;

            // create a M4Operations object for the current sesion.
            m4Op = new M4SoapOperations(sessionManager, ht);

            // subsesion init.
            if (internalType == RESET_M4XML_SPACE_INTERNAL_TYPE) {
            	m4Op.initSessionTask();
            }
            else {
            	m4Op.initTask(M4OBJECT_ALIAS);
            }
            
            // transaction init. Preserve m4object in server (3rd parameter = true).
            m4Op.beginJob();
            m4Op.createData(M4OBJECT_ALIAS, M4OBJECT_NAME, true);
        
            // fill input arguments.
            if ( CSP_LISTA_EMP != null ) 
            {
            	CSP_LISTA_EMP.writeOperations(m4Op);
            }
            if ( CSP_RP_ORO_MSS != null ) 
            {
            	CSP_RP_ORO_MSS.writeOperations(m4Op);
            }
            if ( CSP_BUSCAR_PROC != null ) 
            {
            	CSP_BUSCAR_PROC.writeOperations(m4Op);
            }
            if ( CSP_UNIDAD_PADRE != null ) 
            {
            	CSP_UNIDAD_PADRE.writeOperations(m4Op);
            }
            if ( CSP_ALMACEN_HIJOS != null ) 
            {
            	CSP_ALMACEN_HIJOS.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_HIJA != null ) 
            {
            	CSP_CONSULTA_HIJA.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_AREAS != null ) 
            {
            	CSP_CONSULTA_AREAS.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_UNIDAD != null ) 
            {
            	CSP_CONSULTA_UNIDAD.writeOperations(m4Op);
            }
            if ( CSP_COMPETENCIAS_EVAL != null ) 
            {
            	CSP_COMPETENCIAS_EVAL.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_DIRECCION != null ) 
            {
            	CSP_CONSULTA_DIRECCION.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_SERVICIOS != null ) 
            {
            	CSP_CONSULTA_SERVICIOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_LISTA_EMP.
            m4Op.outputDef(Csp_Lista_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Lista_EmpBlock.NODE_NAME, true);

            // gets the values in CSP_RP_ORO_MSS.
            m4Op.outputDef(Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_NAME, true);

            // gets the values in CSP_BUSCAR_PROC.
            m4Op.outputDef(Csp_Buscar_ProcBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Buscar_ProcBlock.NODE_NAME, true);

            // gets the values in CSP_UNIDAD_PADRE.
            m4Op.outputDef(Csp_Unidad_PadreBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Unidad_PadreBlock.NODE_NAME, true);

            // gets the values in CSP_ALMACEN_HIJOS.
            m4Op.outputDef(Csp_Almacen_HijosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Almacen_HijosBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_HIJA.
            m4Op.outputDef(Csp_Consulta_HijaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_HijaBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_AREAS.
            m4Op.outputDef(Csp_Consulta_AreasBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_AreasBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_UNIDAD.
            m4Op.outputDef(Csp_Consulta_UnidadBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_UnidadBlock.NODE_NAME, true);

            // gets the values in CSP_COMPETENCIAS_EVAL.
            m4Op.outputDef(Csp_Competencias_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Competencias_EvalBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_DIRECCION.
            m4Op.outputDef(Csp_Consulta_DireccionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_DireccionBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_SERVICIOS.
            m4Op.outputDef(Csp_Consulta_ServiciosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_ServiciosBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new M4LoadobjectOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_LISTA_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Lista_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Lista_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Lista_Emp(m4Op, xml, nNode);
            // set node CSP_RP_ORO_MSS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Rp_Oro_MssBlock.NODE_NAME);
            methodOutput.setCsp_Rp_Oro_Mss(m4Op, xml, nNode);
            // set node CSP_BUSCAR_PROC.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Buscar_ProcBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Buscar_ProcBlock.NODE_NAME);
            methodOutput.setCsp_Buscar_Proc(m4Op, xml, nNode);
            // set node CSP_UNIDAD_PADRE.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Unidad_PadreBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Unidad_PadreBlock.NODE_NAME);
            methodOutput.setCsp_Unidad_Padre(m4Op, xml, nNode);
            // set node CSP_ALMACEN_HIJOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Almacen_HijosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Almacen_HijosBlock.NODE_NAME);
            methodOutput.setCsp_Almacen_Hijos(m4Op, xml, nNode);
            // set node CSP_CONSULTA_HIJA.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_HijaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_HijaBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Hija(m4Op, xml, nNode);
            // set node CSP_CONSULTA_AREAS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_AreasBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_AreasBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Areas(m4Op, xml, nNode);
            // set node CSP_CONSULTA_UNIDAD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_UnidadBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_UnidadBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Unidad(m4Op, xml, nNode);
            // set node CSP_COMPETENCIAS_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Competencias_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Competencias_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Competencias_Eval(m4Op, xml, nNode);
            // set node CSP_CONSULTA_DIRECCION.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_DireccionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_DireccionBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Direccion(m4Op, xml, nNode);
            // set node CSP_CONSULTA_SERVICIOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_ServiciosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_ServiciosBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Servicios(m4Op, xml, nNode);

            // subsesion end.
            m4Op.endTask();
            
        }
        catch(Exception e)
        {
            m_log.debug("[EXCEPTION]", e);

            // throws a M4SoapException with the original exception.
            throw M4SoapException.makeException(e);
        }
 
        // return.
        return methodOutput;
    } /* end of method M4LoadObject */


} /* end class Csp_Info_Grupal_RrhhService */
