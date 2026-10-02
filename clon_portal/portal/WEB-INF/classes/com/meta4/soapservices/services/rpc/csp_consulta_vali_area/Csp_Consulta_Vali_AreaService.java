/**
 * Csp_Consulta_Vali_AreaService.java
 * Self generated code for Business Object CSP_CONSULTA_VALI_AREA.
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

package com.meta4.soapservices.services.rpc.csp_consulta_vali_area;

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
 * SOAP Service for Bussines Object CSP_CONSULTA_VALI_AREA.
 * @author Meta4
 */
public
class Csp_Consulta_Vali_AreaService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_Vali_AreaService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_CONSULTA_VALI_AREA";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_CONSULTA_8_UNIDAD
     * CSP_CONSULTA_8_UNIDAD
     * 
     */
    public
    Csp_Consulta_8_UnidadOutput
    CSP_CONSULTA_8_UNIDAD
    (
        String ARG_UNIDAD_SUP
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_8_UNIDAD(...)");

        // return object for this method.
        Csp_Consulta_8_UnidadOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_8_UNIDAD";
        final String METHOD_NAME = "CSP_CONSULTA_8_UNIDAD";
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
            if (ARG_UNIDAD_SUP != null) htArgs.put("ARG_UNIDAD_SUP", M4BusinessMethodArg.toString(ARG_UNIDAD_SUP));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_8_UNIDAD.
            m4Op.outputDef(Csp_Consulta_8_UnidadBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_8_UnidadBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_8_UnidadOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_8_UNIDAD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_8_UnidadBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_8_UnidadBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_8_Unidad(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_8_UNIDAD */


    /**
     * CSP_CONSULTA_8_EMPLEADOS
     * CSP_CONSULTA_8_EMPLEADOS
     * 
     */
    public
    Csp_Consulta_8_EmpleadosOutput
    CSP_CONSULTA_8_EMPLEADOS
    (
        String ARG_LISTA_UNIDAD
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_8_EMPLEADOS(...)");

        // return object for this method.
        Csp_Consulta_8_EmpleadosOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_8_EMPLEADOS";
        final String METHOD_NAME = "CSP_CONSULTA_8_EMPLEADO";
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
            if (ARG_LISTA_UNIDAD != null) htArgs.put("ARG_LISTA_UNIDAD", M4BusinessMethodArg.toString(ARG_LISTA_UNIDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_8_EMPLEADOS.
            m4Op.outputDef(Csp_Consulta_8_EmpleadosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_8_EmpleadosBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_8_EmpleadosOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_8_EMPLEADOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_8_EmpleadosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_8_EmpleadosBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_8_Empleados(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_8_EMPLEADOS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Consulta_8_UnidadBlock CSP_CONSULTA_8_UNIDAD
,        Csp_Consulta_8_EmpleadosBlock CSP_CONSULTA_8_EMPLEADOS
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_8_UNIDAD";
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
            if ( CSP_CONSULTA_8_UNIDAD != null ) 
            {
            	CSP_CONSULTA_8_UNIDAD.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_8_EMPLEADOS != null ) 
            {
            	CSP_CONSULTA_8_EMPLEADOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_8_UNIDAD.
            m4Op.outputDef(Csp_Consulta_8_UnidadBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_8_UnidadBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_8_EMPLEADOS.
            m4Op.outputDef(Csp_Consulta_8_EmpleadosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_8_EmpleadosBlock.NODE_NAME, true);

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

            // set node CSP_CONSULTA_8_UNIDAD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_8_UnidadBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_8_UnidadBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_8_Unidad(m4Op, xml, nNode);
            // set node CSP_CONSULTA_8_EMPLEADOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_8_EmpleadosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_8_EmpleadosBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_8_Empleados(m4Op, xml, nNode);

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


} /* end class Csp_Consulta_Vali_AreaService */
