/**
 * Sntc_Adb_View_AlertService.java
 * Self generated code for Business Object SNTC_ADB_VIEW_ALERT.
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

package com.meta4.soapservices.services.rpc.sntc_adb_view_alert;

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
 * SOAP Service for Bussines Object SNTC_ADB_VIEW_ALERT.
 * @author Meta4
 */
public
class Sntc_Adb_View_AlertService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Adb_View_AlertService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "SNTC_ADB_VIEW_ALERT";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CANCEL_ALERT
     * Cancel Alert
     * 
     */
    public
    Cancel_AlertOutput
    CANCEL_ALERT
    (
        String ARG_ID_WORKITEM
    ) throws M4SoapException
    {
        m_log.debug("CANCEL_ALERT(...)");

        // return object for this method.
        Cancel_AlertOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNTC_ADB_VIEW_ALERT";
        final String METHOD_NAME = "CANCEL_ALERT";
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
            if (ARG_ID_WORKITEM != null) htArgs.put("ARG_ID_WORKITEM", M4BusinessMethodArg.toString(ARG_ID_WORKITEM));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cancel_AlertOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));


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
    } /* end of method CANCEL_ALERT */


    /**
     * GENERATE_RSS
     * Generate RSS
     * 
     */
    public
    Generate_RssOutput
    GENERATE_RSS
    (
        String ARG_TYPE_ALERT
,        String ARG_ONLY_ONE_SOC
    ) throws M4SoapException
    {
        m_log.debug("GENERATE_RSS(...)");

        // return object for this method.
        Generate_RssOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNTC_ADB_VIEW_ALERT";
        final String METHOD_NAME = "GENERATE_RSS";
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
            if (ARG_TYPE_ALERT != null) htArgs.put("ARG_TYPE_ALERT", M4BusinessMethodArg.toString(ARG_TYPE_ALERT));
            if (ARG_ONLY_ONE_SOC != null) htArgs.put("ARG_ONLY_ONE_SOC", M4BusinessMethodArg.toString(ARG_ONLY_ONE_SOC));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNTC_GADGET_ALERT.
            m4Op.outputDef(Sntc_Gadget_AlertBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Sntc_Gadget_AlertBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Generate_RssOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNTC_GADGET_ALERT.
            nData = xml.findData(M4OBJECT_ALIAS, Sntc_Gadget_AlertBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Sntc_Gadget_AlertBlock.NODE_NAME);
            methodOutput.setSntc_Gadget_Alert(m4Op, xml, nNode);

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
    } /* end of method GENERATE_RSS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Sntc_Gadget_AlertBlock SNTC_GADGET_ALERT
,        Sntc_Adb_View_AlertBlock SNTC_ADB_VIEW_ALERT
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNTC_ADB_VIEW_ALERT";
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
            if ( SNTC_GADGET_ALERT != null ) 
            {
            	SNTC_GADGET_ALERT.writeOperations(m4Op);
            }
            if ( SNTC_ADB_VIEW_ALERT != null ) 
            {
            	SNTC_ADB_VIEW_ALERT.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNTC_GADGET_ALERT.
            m4Op.outputDef(Sntc_Gadget_AlertBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Sntc_Gadget_AlertBlock.NODE_NAME, true);

            // gets the values in SNTC_ADB_VIEW_ALERT.
            m4Op.outputDef(Sntc_Adb_View_AlertBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Sntc_Adb_View_AlertBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new M4LoadobjectOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNTC_GADGET_ALERT.
            nData = xml.findData(M4OBJECT_ALIAS, Sntc_Gadget_AlertBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Sntc_Gadget_AlertBlock.NODE_NAME);
            methodOutput.setSntc_Gadget_Alert(m4Op, xml, nNode);
            // set node SNTC_ADB_VIEW_ALERT.
            nData = xml.findData(M4OBJECT_ALIAS, Sntc_Adb_View_AlertBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Sntc_Adb_View_AlertBlock.NODE_NAME);
            methodOutput.setSntc_Adb_View_Alert(m4Op, xml, nNode);

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


} /* end class Sntc_Adb_View_AlertService */
