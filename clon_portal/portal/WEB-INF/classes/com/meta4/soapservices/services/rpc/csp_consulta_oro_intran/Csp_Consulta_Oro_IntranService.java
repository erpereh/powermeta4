/**
 * Csp_Consulta_Oro_IntranService.java
 * Self generated code for Business Object CSP_CONSULTA_ORO_INTRAN.
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

package com.meta4.soapservices.services.rpc.csp_consulta_oro_intran;

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
 * SOAP Service for Bussines Object CSP_CONSULTA_ORO_INTRAN.
 * @author Meta4
 */
public
class Csp_Consulta_Oro_IntranService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_Oro_IntranService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_CONSULTA_ORO_INTRAN";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_CONSULTA_ORO_INTRAN
     * CSP_CONSULTA_ORO_INTRAN
     * 
     */
    public
    Csp_Consulta_Oro_IntranOutput
    CSP_CONSULTA_ORO_INTRAN
    (
        String ARG_SOCIEDAD
,        String ARG_ID_EMPLEADO
,        String ARG_CVE_SELF
,        String ARG_COMPUTA
,        String ARG_DIRECTOR
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_ORO_INTRAN(...)");

        // return object for this method.
        Csp_Consulta_Oro_IntranOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_ORO_INTRAN";
        final String METHOD_NAME = "CSP_CONSULTA_ORO_INTRAN";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));
            if (ARG_ID_EMPLEADO != null) htArgs.put("ARG_ID_EMPLEADO", M4BusinessMethodArg.toString(ARG_ID_EMPLEADO));
            if (ARG_CVE_SELF != null) htArgs.put("ARG_CVE_SELF", M4BusinessMethodArg.toString(ARG_CVE_SELF));
            if (ARG_COMPUTA != null) htArgs.put("ARG_COMPUTA", M4BusinessMethodArg.toString(ARG_COMPUTA));
            if (ARG_DIRECTOR != null) htArgs.put("ARG_DIRECTOR", M4BusinessMethodArg.toString(ARG_DIRECTOR));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_ORO_INTRAN.
            m4Op.outputDef(Csp_Consulta_Oro_IntranBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_Oro_IntranBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_Oro_IntranOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_ORO_INTRAN.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_Oro_IntranBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_Oro_IntranBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Oro_Intran(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_ORO_INTRAN */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Consulta_Oro_IntranBlock CSP_CONSULTA_ORO_INTRAN
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_ORO_INTRAN";
        final String METHOD_NAME = "ROOTLOAD";
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
            final int internalType = 41;
            
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
            if ( CSP_CONSULTA_ORO_INTRAN != null ) 
            {
            	CSP_CONSULTA_ORO_INTRAN.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_ORO_INTRAN.
            m4Op.outputDef(Csp_Consulta_Oro_IntranBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_Oro_IntranBlock.NODE_NAME, true);

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

            // set node CSP_CONSULTA_ORO_INTRAN.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_Oro_IntranBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_Oro_IntranBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Oro_Intran(m4Op, xml, nNode);

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


} /* end class Csp_Consulta_Oro_IntranService */
