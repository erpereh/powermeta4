/**
 * Sco_Clock_Inout_ApiService.java
 * Self generated code for Business Object SCO_CLOCK_INOUT_API.
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

package com.meta4.soapservices.services.rpc.sco_clock_inout_api;

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
 * SOAP Service for Bussines Object SCO_CLOCK_INOUT_API.
 * @author Meta4
 */
public
class Sco_Clock_Inout_ApiService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sco_Clock_Inout_ApiService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "SCO_CLOCK_INOUT_API";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * SCO_CLOCK_INOUT_API
     * SCO_CLOCK_INOUT_API
     * Clock in/out API
     */
    public
    Sco_Clock_Inout_ApiOutput
    SCO_CLOCK_INOUT_API
    (
        String ARG_CARD_NUMBER
,        Calendar ARG_TIME
,        Double ARG_GMT_OFFSET_MIN
,        String ARG_DIRECTION
,        String ARG_ACTIVITY
,        String ARG_RETURN_MSG_TP
,        Double ARG_DIRECTION_CTRL
,        String ARG_CLOCK_MACHINE_GRP
    ) throws M4SoapException
    {
        m_log.debug("SCO_CLOCK_INOUT_API(...)");

        // return object for this method.
        Sco_Clock_Inout_ApiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SCO_CLOCK_INOUT_API";
        final String METHOD_NAME = "SCO_CLOCK_INOUT_API";
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
            if (ARG_CARD_NUMBER != null) htArgs.put("ARG_CARD_NUMBER", M4BusinessMethodArg.toString(ARG_CARD_NUMBER));
            if (ARG_TIME != null) htArgs.put("ARG_TIME", M4BusinessMethodArg.toString(ARG_TIME));
            if (ARG_GMT_OFFSET_MIN != null) htArgs.put("ARG_GMT_OFFSET_MIN", M4BusinessMethodArg.toString(ARG_GMT_OFFSET_MIN));
            if (ARG_DIRECTION != null) htArgs.put("ARG_DIRECTION", M4BusinessMethodArg.toString(ARG_DIRECTION));
            if (ARG_ACTIVITY != null) htArgs.put("ARG_ACTIVITY", M4BusinessMethodArg.toString(ARG_ACTIVITY));
            if (ARG_RETURN_MSG_TP != null) htArgs.put("ARG_RETURN_MSG_TP", M4BusinessMethodArg.toString(ARG_RETURN_MSG_TP));
            if (ARG_DIRECTION_CTRL != null) htArgs.put("ARG_DIRECTION_CTRL", M4BusinessMethodArg.toString(ARG_DIRECTION_CTRL));
            if (ARG_CLOCK_MACHINE_GRP != null) htArgs.put("ARG_CLOCK_MACHINE_GRP", M4BusinessMethodArg.toString(ARG_CLOCK_MACHINE_GRP));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SCO_CLOCK_INOUT_API.
            m4Op.outputDef(Sco_Clock_Inout_ApiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Sco_Clock_Inout_ApiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Sco_Clock_Inout_ApiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node SCO_CLOCK_INOUT_API.
            nData = xml.findData(M4OBJECT_ALIAS, Sco_Clock_Inout_ApiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Sco_Clock_Inout_ApiBlock.NODE_NAME);
            methodOutput.setSco_Clock_Inout_Api(m4Op, xml, nNode);

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
    } /* end of method SCO_CLOCK_INOUT_API */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Sco_Clock_Inout_ApiBlock SCO_CLOCK_INOUT_API
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SCO_CLOCK_INOUT_API";
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
            if ( SCO_CLOCK_INOUT_API != null ) 
            {
            	SCO_CLOCK_INOUT_API.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SCO_CLOCK_INOUT_API.
            m4Op.outputDef(Sco_Clock_Inout_ApiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Sco_Clock_Inout_ApiBlock.NODE_NAME, true);

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

            // set node SCO_CLOCK_INOUT_API.
            nData = xml.findData(M4OBJECT_ALIAS, Sco_Clock_Inout_ApiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Sco_Clock_Inout_ApiBlock.NODE_NAME);
            methodOutput.setSco_Clock_Inout_Api(m4Op, xml, nNode);

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


} /* end class Sco_Clock_Inout_ApiService */
