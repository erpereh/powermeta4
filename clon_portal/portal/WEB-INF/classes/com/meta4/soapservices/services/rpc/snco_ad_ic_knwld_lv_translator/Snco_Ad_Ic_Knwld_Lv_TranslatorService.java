/**
 * Snco_Ad_Ic_Knwld_Lv_TranslatorService.java
 * Self generated code for Business Object SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
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

package com.meta4.soapservices.services.rpc.snco_ad_ic_knwld_lv_translator;

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
 * SOAP Service for Bussines Object SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
 * @author Meta4
 */
public
class Snco_Ad_Ic_Knwld_Lv_TranslatorService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Ic_Knwld_Lv_TranslatorService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * AD_IC_ADB_INTERFACE
     * Interface for ADB callings
     * Interface for ADB callings
     */
    public
    Ad_Ic_Adb_InterfaceOutput
    AD_IC_ADB_INTERFACE
    (
        String AD_IC_KNOWLEDGE_COLUMN
,        String AD_IC_KNOWLEDGE_LEVEL
,        String AD_IC_DETAILS_LEVEL
,        Snco_Ad_Ic_Knoledge_LevelBlock SNCO_AD_IC_KNOLEDGE_LEVEL
,        Snco_Ad_Ic_Know_Map_ConfigBlock SNCO_AD_IC_KNOW_MAP_CONFIG
,        Snco_Ad_Ic_Knwld_Lv_TranslatorBlock SNCO_AD_IC_KNWLD_LV_TRANSLATOR
,        Snco_Ad_Ic_Extraction_DatesBlock SNCO_AD_IC_EXTRACTION_DATES
    ) throws M4SoapException
    {
        m_log.debug("AD_IC_ADB_INTERFACE(...)");

        // return object for this method.
        Ad_Ic_Adb_InterfaceOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
        final String METHOD_NAME = "AD_IC_ADB_INTERFACE";
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
            if (AD_IC_KNOWLEDGE_COLUMN != null) htArgs.put("AD_IC_KNOWLEDGE_COLUMN", M4BusinessMethodArg.toString(AD_IC_KNOWLEDGE_COLUMN));
            if (AD_IC_KNOWLEDGE_LEVEL != null) htArgs.put("AD_IC_KNOWLEDGE_LEVEL", M4BusinessMethodArg.toString(AD_IC_KNOWLEDGE_LEVEL));
            if (AD_IC_DETAILS_LEVEL != null) htArgs.put("AD_IC_DETAILS_LEVEL", M4BusinessMethodArg.toString(AD_IC_DETAILS_LEVEL));
            if ( SNCO_AD_IC_KNOLEDGE_LEVEL != null ) 
            {
            	SNCO_AD_IC_KNOLEDGE_LEVEL.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_KNOW_MAP_CONFIG != null ) 
            {
            	SNCO_AD_IC_KNOW_MAP_CONFIG.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_KNWLD_LV_TRANSLATOR != null ) 
            {
            	SNCO_AD_IC_KNWLD_LV_TRANSLATOR.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_EXTRACTION_DATES != null ) 
            {
            	SNCO_AD_IC_EXTRACTION_DATES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_IC_KNOLEDGE_LEVEL.
            m4Op.outputDef(Snco_Ad_Ic_Knoledge_LevelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Knoledge_LevelBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_KNOW_MAP_CONFIG.
            m4Op.outputDef(Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
            m4Op.outputDef(Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_EXTRACTION_DATES.
            m4Op.outputDef(Snco_Ad_Ic_Extraction_DatesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Extraction_DatesBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Ad_Ic_Adb_InterfaceOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_IC_KNOLEDGE_LEVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Knoledge_LevelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Knoledge_LevelBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Knoledge_Level(m4Op, xml, nNode);
            // set node SNCO_AD_IC_KNOW_MAP_CONFIG.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Know_Map_Config(m4Op, xml, nNode);
            // set node SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Knwld_Lv_Translator(m4Op, xml, nNode);
            // set node SNCO_AD_IC_EXTRACTION_DATES.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Extraction_DatesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Extraction_DatesBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Extraction_Dates(m4Op, xml, nNode);

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
    } /* end of method AD_IC_ADB_INTERFACE */


    /**
     * AD_IC_WHOLE_TRANSLTIN_FROM_ADB
     * Traducción completa desde ADB
     * Traducción completa desde ADB
     */
    public
    Ad_Ic_Whole_Transltin_From_AdbOutput
    AD_IC_WHOLE_TRANSLTIN_FROM_ADB
    (
    ) throws M4SoapException
    {
        m_log.debug("AD_IC_WHOLE_TRANSLTIN_FROM_ADB(...)");

        // return object for this method.
        Ad_Ic_Whole_Transltin_From_AdbOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
        final String METHOD_NAME = "AD_IC_WHOLE_TRANSLTIN_FROM_ADB";
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

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_IC_WHOLE_TRANSLATION.
            m4Op.outputDef(Snco_Ad_Ic_Whole_TranslationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Whole_TranslationBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Ad_Ic_Whole_Transltin_From_AdbOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_IC_WHOLE_TRANSLATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Whole_TranslationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Whole_TranslationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Whole_Translation(m4Op, xml, nNode);

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
    } /* end of method AD_IC_WHOLE_TRANSLTIN_FROM_ADB */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Snco_Ad_Ic_Knoledge_LevelBlock SNCO_AD_IC_KNOLEDGE_LEVEL
,        Snco_Ad_Ic_Know_Map_ConfigBlock SNCO_AD_IC_KNOW_MAP_CONFIG
,        Snco_Ad_Ic_Extraction_DatesBlock SNCO_AD_IC_EXTRACTION_DATES
,        Snco_Ad_Ic_Whole_TranslationBlock SNCO_AD_IC_WHOLE_TRANSLATION
,        Snco_Ad_Ic_Knwld_Lv_TranslatorBlock SNCO_AD_IC_KNWLD_LV_TRANSLATOR
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
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
            if ( SNCO_AD_IC_KNOLEDGE_LEVEL != null ) 
            {
            	SNCO_AD_IC_KNOLEDGE_LEVEL.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_KNOW_MAP_CONFIG != null ) 
            {
            	SNCO_AD_IC_KNOW_MAP_CONFIG.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_EXTRACTION_DATES != null ) 
            {
            	SNCO_AD_IC_EXTRACTION_DATES.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_WHOLE_TRANSLATION != null ) 
            {
            	SNCO_AD_IC_WHOLE_TRANSLATION.writeOperations(m4Op);
            }
            if ( SNCO_AD_IC_KNWLD_LV_TRANSLATOR != null ) 
            {
            	SNCO_AD_IC_KNWLD_LV_TRANSLATOR.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_IC_KNOLEDGE_LEVEL.
            m4Op.outputDef(Snco_Ad_Ic_Knoledge_LevelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Knoledge_LevelBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_KNOW_MAP_CONFIG.
            m4Op.outputDef(Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_EXTRACTION_DATES.
            m4Op.outputDef(Snco_Ad_Ic_Extraction_DatesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Extraction_DatesBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_WHOLE_TRANSLATION.
            m4Op.outputDef(Snco_Ad_Ic_Whole_TranslationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Whole_TranslationBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
            m4Op.outputDef(Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_NAME, true);

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

            // set node SNCO_AD_IC_KNOLEDGE_LEVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Knoledge_LevelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Knoledge_LevelBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Knoledge_Level(m4Op, xml, nNode);
            // set node SNCO_AD_IC_KNOW_MAP_CONFIG.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Know_Map_ConfigBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Know_Map_Config(m4Op, xml, nNode);
            // set node SNCO_AD_IC_EXTRACTION_DATES.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Extraction_DatesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Extraction_DatesBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Extraction_Dates(m4Op, xml, nNode);
            // set node SNCO_AD_IC_WHOLE_TRANSLATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Whole_TranslationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Whole_TranslationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Whole_Translation(m4Op, xml, nNode);
            // set node SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Ic_Knwld_Lv_Translator(m4Op, xml, nNode);

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


} /* end class Snco_Ad_Ic_Knwld_Lv_TranslatorService */
