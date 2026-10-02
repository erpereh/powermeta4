/**
 * Csp_Servicio_CvService.java
 * Self generated code for Business Object CSP_SERVICIO_CV.
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

package com.meta4.soapservices.services.rpc.csp_servicio_cv;

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
 * SOAP Service for Bussines Object CSP_SERVICIO_CV.
 * @author Meta4
 */
public
class Csp_Servicio_CvService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Servicio_CvService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_SERVICIO_CV";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_SERVICIO_CV
     * CSP_SERVICIO_CV
     * 
     */
    public
    Csp_Servicio_CvOutput
    CSP_SERVICIO_CV
    (
        String ARG_ID_EMPLEADO
    ) throws M4SoapException
    {
        m_log.debug("CSP_SERVICIO_CV(...)");

        // return object for this method.
        Csp_Servicio_CvOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_SERVICIO_CV";
        final String METHOD_NAME = "CARGA";
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
            if (ARG_ID_EMPLEADO != null) htArgs.put("ARG_ID_EMPLEADO", M4BusinessMethodArg.toString(ARG_ID_EMPLEADO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_SERVICIO_CV.
            m4Op.outputDef(Csp_Servicio_CvBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Servicio_CvBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Servicio_CvOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_SERVICIO_CV.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Servicio_CvBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Servicio_CvBlock.NODE_NAME);
            methodOutput.setCsp_Servicio_Cv(m4Op, xml, nNode);

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
    } /* end of method CSP_SERVICIO_CV */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_CvBlock CSP_CV
,        Csp_Servicio_CvBlock CSP_SERVICIO_CV
,        Csp_Param_GlobalBlock CSP_PARAM_GLOBAL
,        T_Aux_File_ManagerBlock T_AUX_FILE_MANAGER
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CV";
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
            if ( CSP_CV != null ) 
            {
            	CSP_CV.writeOperations(m4Op);
            }
            if ( CSP_SERVICIO_CV != null ) 
            {
            	CSP_SERVICIO_CV.writeOperations(m4Op);
            }
            if ( CSP_PARAM_GLOBAL != null ) 
            {
            	CSP_PARAM_GLOBAL.writeOperations(m4Op);
            }
            if ( T_AUX_FILE_MANAGER != null ) 
            {
            	T_AUX_FILE_MANAGER.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CV.
            m4Op.outputDef(Csp_CvBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_CvBlock.NODE_NAME, true);

            // gets the values in CSP_SERVICIO_CV.
            m4Op.outputDef(Csp_Servicio_CvBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Servicio_CvBlock.NODE_NAME, true);

            // gets the values in CSP_PARAM_GLOBAL.
            m4Op.outputDef(Csp_Param_GlobalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Param_GlobalBlock.NODE_NAME, true);

            // gets the values in T_AUX_FILE_MANAGER.
            m4Op.outputDef(T_Aux_File_ManagerBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, T_Aux_File_ManagerBlock.NODE_NAME, true);

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

            // set node CSP_CV.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_CvBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_CvBlock.NODE_NAME);
            methodOutput.setCsp_Cv(m4Op, xml, nNode);
            // set node CSP_SERVICIO_CV.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Servicio_CvBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Servicio_CvBlock.NODE_NAME);
            methodOutput.setCsp_Servicio_Cv(m4Op, xml, nNode);
            // set node CSP_PARAM_GLOBAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Param_GlobalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Param_GlobalBlock.NODE_NAME);
            methodOutput.setCsp_Param_Global(m4Op, xml, nNode);
            // set node T_AUX_FILE_MANAGER.
            nData = xml.findData(M4OBJECT_ALIAS, T_Aux_File_ManagerBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + T_Aux_File_ManagerBlock.NODE_NAME);
            methodOutput.setT_Aux_File_Manager(m4Op, xml, nNode);

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


} /* end class Csp_Servicio_CvService */
