/**
 * Plco_Es_Ws_App_UserService.java
 * Self generated code for Business Object PLCO_ES_WS_APP_USER.
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

package com.meta4.soapservices.services.rpc.plco_es_ws_app_user;

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
 * SOAP Service for Bussines Object PLCO_ES_WS_APP_USER.
 * @author Meta4
 */
public
class Plco_Es_Ws_App_UserService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Plco_Es_Ws_App_UserService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "PLCO_ES_WS_APP_USER";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * PLCO_USER_ROLE_ORG
     * PLCO_USER_ROLE_ORG
     * Invoke to inform change of user profile.
     */
    public
    Plco_User_Role_OrgOutput
    PLCO_USER_ROLE_ORG
    (
        String ARG_PLCO_ID_APP_USER
,        String ARG_PLCO_ID_PERSON
,        String ARG_PLCO_ID_ORGANIZATION
,        String ARG_PLCO_IND_DELETE
,        String ARG_PLCO_IND_EMPLOYEE
,        String ARG_PLCO_DT_START
,        String ARG_PLCO_DT_END
,        String ARG_PLCO_DTT_REQUEST
    ) throws M4SoapException
    {
        m_log.debug("PLCO_USER_ROLE_ORG(...)");

        // return object for this method.
        Plco_User_Role_OrgOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "PLCO_ES_WS_APP_USER";
        final String METHOD_NAME = "PLCO_USER_ROLE_ORG";
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
            if (ARG_PLCO_ID_APP_USER != null) htArgs.put("ARG_PLCO_ID_APP_USER", M4BusinessMethodArg.toString(ARG_PLCO_ID_APP_USER));
            if (ARG_PLCO_ID_PERSON != null) htArgs.put("ARG_PLCO_ID_PERSON", M4BusinessMethodArg.toString(ARG_PLCO_ID_PERSON));
            if (ARG_PLCO_ID_ORGANIZATION != null) htArgs.put("ARG_PLCO_ID_ORGANIZATION", M4BusinessMethodArg.toString(ARG_PLCO_ID_ORGANIZATION));
            if (ARG_PLCO_IND_DELETE != null) htArgs.put("ARG_PLCO_IND_DELETE", M4BusinessMethodArg.toString(ARG_PLCO_IND_DELETE));
            if (ARG_PLCO_IND_EMPLOYEE != null) htArgs.put("ARG_PLCO_IND_EMPLOYEE", M4BusinessMethodArg.toString(ARG_PLCO_IND_EMPLOYEE));
            if (ARG_PLCO_DT_START != null) htArgs.put("ARG_PLCO_DT_START", M4BusinessMethodArg.toString(ARG_PLCO_DT_START));
            if (ARG_PLCO_DT_END != null) htArgs.put("ARG_PLCO_DT_END", M4BusinessMethodArg.toString(ARG_PLCO_DT_END));
            if (ARG_PLCO_DTT_REQUEST != null) htArgs.put("ARG_PLCO_DTT_REQUEST", M4BusinessMethodArg.toString(ARG_PLCO_DTT_REQUEST));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Plco_User_Role_OrgOutput();
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
    } /* end of method PLCO_USER_ROLE_ORG */


    /**
     * PLCO_GET_REQUEST_STATUS
     * PLCO_GET_REQUEST_STATUS
     * Invoked to identify status of request
     */
    public
    Plco_Get_Request_StatusOutput
    PLCO_GET_REQUEST_STATUS
    (
        String ARG_PLCO_ID_APP_USER
,        String ARG_PLCO_ID_ORGANIZATION
,        String ARG_PLCO_DTT_REQUEST
    ) throws M4SoapException
    {
        m_log.debug("PLCO_GET_REQUEST_STATUS(...)");

        // return object for this method.
        Plco_Get_Request_StatusOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "PLCO_ES_WS_APP_USER";
        final String METHOD_NAME = "PLCO_GET_REQUEST_STATUS";
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
            if (ARG_PLCO_ID_APP_USER != null) htArgs.put("ARG_PLCO_ID_APP_USER", M4BusinessMethodArg.toString(ARG_PLCO_ID_APP_USER));
            if (ARG_PLCO_ID_ORGANIZATION != null) htArgs.put("ARG_PLCO_ID_ORGANIZATION", M4BusinessMethodArg.toString(ARG_PLCO_ID_ORGANIZATION));
            if (ARG_PLCO_DTT_REQUEST != null) htArgs.put("ARG_PLCO_DTT_REQUEST", M4BusinessMethodArg.toString(ARG_PLCO_DTT_REQUEST));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Plco_Get_Request_StatusOutput();
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
    } /* end of method PLCO_GET_REQUEST_STATUS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Plco_Es_Ws_App_UserBlock PLCO_ES_WS_APP_USER
,        Plco_Es_Ws_Au_RequestsBlock PLCO_ES_WS_AU_REQUESTS
,        Plco_Es_Ws_Au_App_ValuesBlock PLCO_ES_WS_AU_APP_VALUES
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "PLCO_ES_WS_APP_USER";
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
            if ( PLCO_ES_WS_APP_USER != null ) 
            {
            	PLCO_ES_WS_APP_USER.writeOperations(m4Op);
            }
            if ( PLCO_ES_WS_AU_REQUESTS != null ) 
            {
            	PLCO_ES_WS_AU_REQUESTS.writeOperations(m4Op);
            }
            if ( PLCO_ES_WS_AU_APP_VALUES != null ) 
            {
            	PLCO_ES_WS_AU_APP_VALUES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in PLCO_ES_WS_APP_USER.
            m4Op.outputDef(Plco_Es_Ws_App_UserBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Plco_Es_Ws_App_UserBlock.NODE_NAME, true);

            // gets the values in PLCO_ES_WS_AU_REQUESTS.
            m4Op.outputDef(Plco_Es_Ws_Au_RequestsBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Plco_Es_Ws_Au_RequestsBlock.NODE_NAME, true);

            // gets the values in PLCO_ES_WS_AU_APP_VALUES.
            m4Op.outputDef(Plco_Es_Ws_Au_App_ValuesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Plco_Es_Ws_Au_App_ValuesBlock.NODE_NAME, true);

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

            // set node PLCO_ES_WS_APP_USER.
            nData = xml.findData(M4OBJECT_ALIAS, Plco_Es_Ws_App_UserBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Plco_Es_Ws_App_UserBlock.NODE_NAME);
            methodOutput.setPlco_Es_Ws_App_User(m4Op, xml, nNode);
            // set node PLCO_ES_WS_AU_REQUESTS.
            nData = xml.findData(M4OBJECT_ALIAS, Plco_Es_Ws_Au_RequestsBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Plco_Es_Ws_Au_RequestsBlock.NODE_NAME);
            methodOutput.setPlco_Es_Ws_Au_Requests(m4Op, xml, nNode);
            // set node PLCO_ES_WS_AU_APP_VALUES.
            nData = xml.findData(M4OBJECT_ALIAS, Plco_Es_Ws_Au_App_ValuesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Plco_Es_Ws_Au_App_ValuesBlock.NODE_NAME);
            methodOutput.setPlco_Es_Ws_Au_App_Values(m4Op, xml, nNode);

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


} /* end class Plco_Es_Ws_App_UserService */
