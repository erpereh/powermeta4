/**
 * Sntc_Ad_ManagersService.java
 * Self generated code for Business Object SNTC_AD_MANAGERS.
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

package com.meta4.soapservices.services.rpc.sntc_ad_managers;

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
 * SOAP Service for Bussines Object SNTC_AD_MANAGERS.
 * @author Meta4
 */
public
class Sntc_Ad_ManagersService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Ad_ManagersService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "SNTC_AD_MANAGERS";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * MOVETO_WU
     * Moverse a la unidad organizativa
     * Moverse a la unidad organizativa
     */
    public
    Moveto_WuOutput
    MOVETO_WU
    (
        String AI_SID_WU
,        Snco_Ad_ManagersBlock SNCO_AD_MANAGERS
    ) throws M4SoapException
    {
        m_log.debug("MOVETO_WU(...)");

        // return object for this method.
        Moveto_WuOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_MANAGERS";
        final String METHOD_NAME = "MOVETO_WU";
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
            if (AI_SID_WU != null) htArgs.put("AI_SID_WU", M4BusinessMethodArg.toString(AI_SID_WU));
            if ( SNCO_AD_MANAGERS != null ) 
            {
            	SNCO_AD_MANAGERS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_MANAGERS.
            m4Op.outputDef(Snco_Ad_ManagersBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Moveto_WuOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_MANAGERS.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_ManagersBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Managers(m4Op, xml, nNode);

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
    } /* end of method MOVETO_WU */


    /**
     * LOAD_MANAGERS
     * Carga de responsables
     * Carga de responsables por unidad organizativa
     */
    public
    Load_ManagersOutput
    LOAD_MANAGERS
    (
        String AI_ID_WU
,        String AI_ID_TYPE_RESP
,        Calendar AI_DFILTER_DATE
,        Double AI_BONLY_FIRST_LEVEL
,        Snco_Ad_ManagersBlock SNCO_AD_MANAGERS
    ) throws M4SoapException
    {
        m_log.debug("LOAD_MANAGERS(...)");

        // return object for this method.
        Load_ManagersOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_MANAGERS";
        final String METHOD_NAME = "LOAD_MANAGERS";
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
            if (AI_ID_WU != null) htArgs.put("AI_ID_WU", M4BusinessMethodArg.toString(AI_ID_WU));
            if (AI_ID_TYPE_RESP != null) htArgs.put("AI_ID_TYPE_RESP", M4BusinessMethodArg.toString(AI_ID_TYPE_RESP));
            if (AI_DFILTER_DATE != null) htArgs.put("AI_DFILTER_DATE", M4BusinessMethodArg.toString(AI_DFILTER_DATE));
            if (AI_BONLY_FIRST_LEVEL != null) htArgs.put("AI_BONLY_FIRST_LEVEL", M4BusinessMethodArg.toString(AI_BONLY_FIRST_LEVEL));
            if ( SNCO_AD_MANAGERS != null ) 
            {
            	SNCO_AD_MANAGERS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_MANAGERS.
            m4Op.outputDef(Snco_Ad_ManagersBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Load_ManagersOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_MANAGERS.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_ManagersBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Managers(m4Op, xml, nNode);

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
    } /* end of method LOAD_MANAGERS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Snco_Ad_ManagersBlock SNCO_AD_MANAGERS
,        Snco_Ad_Pop_ConstBlock SNCO_AD_POP_CONST
,        Snco_Ad_Info_PersonBlock SNCO_AD_INFO_PERSON
,        Snco_Ad_Hierarchic_WuBlock SNCO_AD_HIERARCHIC_WU
,        Snco_Ad_Info_Person_PrivateBlock SNCO_AD_INFO_PERSON_PRIVATE
,        Snco_Ad_Pop_Max_Scale_LevelBlock SNCO_AD_POP_MAX_SCALE_LEVEL
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_MANAGERS";
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
            if ( SNCO_AD_MANAGERS != null ) 
            {
            	SNCO_AD_MANAGERS.writeOperations(m4Op);
            }
            if ( SNCO_AD_POP_CONST != null ) 
            {
            	SNCO_AD_POP_CONST.writeOperations(m4Op);
            }
            if ( SNCO_AD_INFO_PERSON != null ) 
            {
            	SNCO_AD_INFO_PERSON.writeOperations(m4Op);
            }
            if ( SNCO_AD_HIERARCHIC_WU != null ) 
            {
            	SNCO_AD_HIERARCHIC_WU.writeOperations(m4Op);
            }
            if ( SNCO_AD_INFO_PERSON_PRIVATE != null ) 
            {
            	SNCO_AD_INFO_PERSON_PRIVATE.writeOperations(m4Op);
            }
            if ( SNCO_AD_POP_MAX_SCALE_LEVEL != null ) 
            {
            	SNCO_AD_POP_MAX_SCALE_LEVEL.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_MANAGERS.
            m4Op.outputDef(Snco_Ad_ManagersBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_POP_CONST.
            m4Op.outputDef(Snco_Ad_Pop_ConstBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Pop_ConstBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_INFO_PERSON.
            m4Op.outputDef(Snco_Ad_Info_PersonBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Info_PersonBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_HIERARCHIC_WU.
            m4Op.outputDef(Snco_Ad_Hierarchic_WuBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Hierarchic_WuBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_INFO_PERSON_PRIVATE.
            m4Op.outputDef(Snco_Ad_Info_Person_PrivateBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Info_Person_PrivateBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_POP_MAX_SCALE_LEVEL.
            m4Op.outputDef(Snco_Ad_Pop_Max_Scale_LevelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Pop_Max_Scale_LevelBlock.NODE_NAME, true);

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

            // set node SNCO_AD_MANAGERS.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_ManagersBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_ManagersBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Managers(m4Op, xml, nNode);
            // set node SNCO_AD_POP_CONST.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Pop_ConstBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Pop_ConstBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Pop_Const(m4Op, xml, nNode);
            // set node SNCO_AD_INFO_PERSON.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Info_PersonBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Info_PersonBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Info_Person(m4Op, xml, nNode);
            // set node SNCO_AD_HIERARCHIC_WU.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Hierarchic_WuBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Hierarchic_WuBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Hierarchic_Wu(m4Op, xml, nNode);
            // set node SNCO_AD_INFO_PERSON_PRIVATE.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Info_Person_PrivateBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Info_Person_PrivateBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Info_Person_Private(m4Op, xml, nNode);
            // set node SNCO_AD_POP_MAX_SCALE_LEVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Pop_Max_Scale_LevelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Pop_Max_Scale_LevelBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Pop_Max_Scale_Level(m4Op, xml, nNode);

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


} /* end class Sntc_Ad_ManagersService */
