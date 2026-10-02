/**
 * Csp_Guardar_Feedback_EmpService.java
 * Self generated code for Business Object CSP_GUARDAR_FEEDBACK_EMP.
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

package com.meta4.soapservices.services.rpc.csp_guardar_feedback_emp;

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
 * SOAP Service for Bussines Object CSP_GUARDAR_FEEDBACK_EMP.
 * @author Meta4
 */
public
class Csp_Guardar_Feedback_EmpService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_Feedback_EmpService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_GUARDAR_FEEDBACK_EMP";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_GUARDAR_FEEDBACK_EMP
     * CSP_GUARDAR_FEEDBACK_EMP
     * 
     */
    public
    Csp_Guardar_Feedback_EmpOutput
    CSP_GUARDAR_FEEDBACK_EMP
    (
        String ARG_EMPLEADO
,        Calendar ARG_DT_START
,        Csp_Insertar_Datos_EmpBlock CSP_INSERTAR_DATOS_EMP
,        Csp_Insertar_AccionesBlock CSP_INSERTAR_ACCIONES
    ) throws M4SoapException
    {
        m_log.debug("CSP_GUARDAR_FEEDBACK_EMP(...)");

        // return object for this method.
        Csp_Guardar_Feedback_EmpOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_FEEDBACK_EMP";
        final String METHOD_NAME = "GUARDAR";
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
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));
            if ( CSP_INSERTAR_DATOS_EMP != null ) 
            {
            	CSP_INSERTAR_DATOS_EMP.writeOperations(m4Op);
            }
            if ( CSP_INSERTAR_ACCIONES != null ) 
            {
            	CSP_INSERTAR_ACCIONES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Guardar_Feedback_EmpOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);


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
    } /* end of method CSP_GUARDAR_FEEDBACK_EMP */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Pasar_EstadoBlock CSP_PASAR_ESTADO
,        Csp_Guardar_Datos_EmpBlock CSP_GUARDAR_DATOS_EMP
,        Csp_Insertar_AccionesBlock CSP_INSERTAR_ACCIONES
,        Csp_Guardar_Coment_EmpBlock CSP_GUARDAR_COMENT_EMP
,        Csp_Insertar_Datos_EmpBlock CSP_INSERTAR_DATOS_EMP
,        Csp_Guardar_Acciones_EmpBlock CSP_GUARDAR_ACCIONES_EMP
,        Csp_Guardar_Feedback_EmpBlock CSP_GUARDAR_FEEDBACK_EMP
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_FEEDBACK_EMP";
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
            if ( CSP_PASAR_ESTADO != null ) 
            {
            	CSP_PASAR_ESTADO.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_DATOS_EMP != null ) 
            {
            	CSP_GUARDAR_DATOS_EMP.writeOperations(m4Op);
            }
            if ( CSP_INSERTAR_ACCIONES != null ) 
            {
            	CSP_INSERTAR_ACCIONES.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_COMENT_EMP != null ) 
            {
            	CSP_GUARDAR_COMENT_EMP.writeOperations(m4Op);
            }
            if ( CSP_INSERTAR_DATOS_EMP != null ) 
            {
            	CSP_INSERTAR_DATOS_EMP.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_ACCIONES_EMP != null ) 
            {
            	CSP_GUARDAR_ACCIONES_EMP.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_FEEDBACK_EMP != null ) 
            {
            	CSP_GUARDAR_FEEDBACK_EMP.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_PASAR_ESTADO.
            m4Op.outputDef(Csp_Pasar_EstadoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Pasar_EstadoBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_DATOS_EMP.
            m4Op.outputDef(Csp_Guardar_Datos_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_Datos_EmpBlock.NODE_NAME, true);

            // gets the values in CSP_INSERTAR_ACCIONES.
            m4Op.outputDef(Csp_Insertar_AccionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Insertar_AccionesBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_COMENT_EMP.
            m4Op.outputDef(Csp_Guardar_Coment_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_Coment_EmpBlock.NODE_NAME, true);

            // gets the values in CSP_INSERTAR_DATOS_EMP.
            m4Op.outputDef(Csp_Insertar_Datos_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Insertar_Datos_EmpBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_ACCIONES_EMP.
            m4Op.outputDef(Csp_Guardar_Acciones_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_Acciones_EmpBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_FEEDBACK_EMP.
            m4Op.outputDef(Csp_Guardar_Feedback_EmpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_Feedback_EmpBlock.NODE_NAME, true);

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

            // set node CSP_PASAR_ESTADO.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Pasar_EstadoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Pasar_EstadoBlock.NODE_NAME);
            methodOutput.setCsp_Pasar_Estado(m4Op, xml, nNode);
            // set node CSP_GUARDAR_DATOS_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_Datos_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_Datos_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Datos_Emp(m4Op, xml, nNode);
            // set node CSP_INSERTAR_ACCIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Insertar_AccionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Insertar_AccionesBlock.NODE_NAME);
            methodOutput.setCsp_Insertar_Acciones(m4Op, xml, nNode);
            // set node CSP_GUARDAR_COMENT_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_Coment_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_Coment_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Coment_Emp(m4Op, xml, nNode);
            // set node CSP_INSERTAR_DATOS_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Insertar_Datos_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Insertar_Datos_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Insertar_Datos_Emp(m4Op, xml, nNode);
            // set node CSP_GUARDAR_ACCIONES_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_Acciones_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_Acciones_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Acciones_Emp(m4Op, xml, nNode);
            // set node CSP_GUARDAR_FEEDBACK_EMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_Feedback_EmpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_Feedback_EmpBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Feedback_Emp(m4Op, xml, nNode);

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


} /* end class Csp_Guardar_Feedback_EmpService */
