/**
 * Sntc_Ad_PopulationService.java
 * Self generated code for Business Object SNTC_AD_POPULATION.
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

package com.meta4.soapservices.services.rpc.sntc_ad_population;

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
 * SOAP Service for Bussines Object SNTC_AD_POPULATION.
 * @author Meta4
 */
public
class Sntc_Ad_PopulationService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Ad_PopulationService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * LOAD_PERSONS
     * Cargamos las personas
     * Cargamos las personas
     */
    public
    Load_PersonsOutput
    LOAD_PERSONS
    (
        String AI_ID_HR
,        String AI_GB_NAME
,        String AI_WORK_UNIT
,        String AI_WORK_LOCATION
,        String AI_JOB_CODE
,        String AI_PHONE
,        Calendar AI_FILTER_DATE
,        String AI_TYPE_POP
,        String AI_ONLY_ONE_EMPLOYEE
,        Snco_Ad_PopulationBlock SNCO_AD_POPULATION
    ) throws M4SoapException
    {
        m_log.debug("LOAD_PERSONS(...)");

        // return object for this method.
        Load_PersonsOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_POPULATION";
        final String METHOD_NAME = "LOAD_PERSONS";
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
            if (AI_ID_HR != null) htArgs.put("AI_ID_HR", M4BusinessMethodArg.toString(AI_ID_HR));
            if (AI_GB_NAME != null) htArgs.put("AI_GB_NAME", M4BusinessMethodArg.toString(AI_GB_NAME));
            if (AI_WORK_UNIT != null) htArgs.put("AI_WORK_UNIT", M4BusinessMethodArg.toString(AI_WORK_UNIT));
            if (AI_WORK_LOCATION != null) htArgs.put("AI_WORK_LOCATION", M4BusinessMethodArg.toString(AI_WORK_LOCATION));
            if (AI_JOB_CODE != null) htArgs.put("AI_JOB_CODE", M4BusinessMethodArg.toString(AI_JOB_CODE));
            if (AI_PHONE != null) htArgs.put("AI_PHONE", M4BusinessMethodArg.toString(AI_PHONE));
            if (AI_FILTER_DATE != null) htArgs.put("AI_FILTER_DATE", M4BusinessMethodArg.toString(AI_FILTER_DATE));
            if (AI_TYPE_POP != null) htArgs.put("AI_TYPE_POP", M4BusinessMethodArg.toString(AI_TYPE_POP));
            if (AI_ONLY_ONE_EMPLOYEE != null) htArgs.put("AI_ONLY_ONE_EMPLOYEE", M4BusinessMethodArg.toString(AI_ONLY_ONE_EMPLOYEE));
            if ( SNCO_AD_POPULATION != null ) 
            {
            	SNCO_AD_POPULATION.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_POPULATION.
            m4Op.outputDef(Snco_Ad_PopulationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Load_PersonsOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_POPULATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_PopulationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Population(m4Op, xml, nNode);

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
    } /* end of method LOAD_PERSONS */


    /**
     * CALC_SENTENCE
     * Calcular la sentencia
     * Calcular la sentencia para la población según los argumentos
     */
    public
    Calc_SentenceOutput
    CALC_SENTENCE
    (
        Calendar AI_DFILTER_DATE
,        Double AI_BHIERARCHIC
,        Double AI_BWITH_FILTERS
,        Double AI_BONLY_FIRST_LEVEL
,        Double DELETE_FILTER
,        Snco_Ad_PopulationBlock SNCO_AD_POPULATION
    ) throws M4SoapException
    {
        m_log.debug("CALC_SENTENCE(...)");

        // return object for this method.
        Calc_SentenceOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_POPULATION";
        final String METHOD_NAME = "_CALC_SENTENCE";
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
            if (AI_DFILTER_DATE != null) htArgs.put("AI_DFILTER_DATE", M4BusinessMethodArg.toString(AI_DFILTER_DATE));
            if (AI_BHIERARCHIC != null) htArgs.put("AI_BHIERARCHIC", M4BusinessMethodArg.toString(AI_BHIERARCHIC));
            if (AI_BWITH_FILTERS != null) htArgs.put("AI_BWITH_FILTERS", M4BusinessMethodArg.toString(AI_BWITH_FILTERS));
            if (AI_BONLY_FIRST_LEVEL != null) htArgs.put("AI_BONLY_FIRST_LEVEL", M4BusinessMethodArg.toString(AI_BONLY_FIRST_LEVEL));
            if (DELETE_FILTER != null) htArgs.put("DELETE_FILTER", M4BusinessMethodArg.toString(DELETE_FILTER));
            if ( SNCO_AD_POPULATION != null ) 
            {
            	SNCO_AD_POPULATION.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_POPULATION.
            m4Op.outputDef(Snco_Ad_PopulationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Calc_SentenceOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.setLogMessage(xml.getLog(M4OBJECT_ALIAS));

            // set node SNCO_AD_POPULATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_PopulationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Population(m4Op, xml, nNode);

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
    } /* end of method CALC_SENTENCE */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Snco_Ad_H_Hr_RespBlock SNCO_AD_H_HR_RESP
,        Snco_Ad_Pop_ConstBlock SNCO_AD_POP_CONST
,        Snco_Ad_PopulationBlock SNCO_AD_POPULATION
,        Snco_Ad_Person_ListBlock SNCO_AD_PERSON_LIST
,        Snco_Ad_Hierarchic_WuBlock SNCO_AD_HIERARCHIC_WU
,        Snco_Ad_Criteria_NamesBlock SNCO_AD_CRITERIA_NAMES
,        Snco_Ad_Gr_Hierarchic_InfoBlock SNCO_AD_GR_HIERARCHIC_INFO
,        Snco_Ad_Criteria_PopulationBlock SNCO_AD_CRITERIA_POPULATION
,        Snco_Ad_Pop_Max_Scale_LevelBlock SNCO_AD_POP_MAX_SCALE_LEVEL
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "SNCO_AD_POPULATION";
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
            if ( SNCO_AD_H_HR_RESP != null ) 
            {
            	SNCO_AD_H_HR_RESP.writeOperations(m4Op);
            }
            if ( SNCO_AD_POP_CONST != null ) 
            {
            	SNCO_AD_POP_CONST.writeOperations(m4Op);
            }
            if ( SNCO_AD_POPULATION != null ) 
            {
            	SNCO_AD_POPULATION.writeOperations(m4Op);
            }
            if ( SNCO_AD_PERSON_LIST != null ) 
            {
            	SNCO_AD_PERSON_LIST.writeOperations(m4Op);
            }
            if ( SNCO_AD_HIERARCHIC_WU != null ) 
            {
            	SNCO_AD_HIERARCHIC_WU.writeOperations(m4Op);
            }
            if ( SNCO_AD_CRITERIA_NAMES != null ) 
            {
            	SNCO_AD_CRITERIA_NAMES.writeOperations(m4Op);
            }
            if ( SNCO_AD_GR_HIERARCHIC_INFO != null ) 
            {
            	SNCO_AD_GR_HIERARCHIC_INFO.writeOperations(m4Op);
            }
            if ( SNCO_AD_CRITERIA_POPULATION != null ) 
            {
            	SNCO_AD_CRITERIA_POPULATION.writeOperations(m4Op);
            }
            if ( SNCO_AD_POP_MAX_SCALE_LEVEL != null ) 
            {
            	SNCO_AD_POP_MAX_SCALE_LEVEL.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in SNCO_AD_H_HR_RESP.
            m4Op.outputDef(Snco_Ad_H_Hr_RespBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_H_Hr_RespBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_POP_CONST.
            m4Op.outputDef(Snco_Ad_Pop_ConstBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Pop_ConstBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_POPULATION.
            m4Op.outputDef(Snco_Ad_PopulationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_PERSON_LIST.
            m4Op.outputDef(Snco_Ad_Person_ListBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Person_ListBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_HIERARCHIC_WU.
            m4Op.outputDef(Snco_Ad_Hierarchic_WuBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Hierarchic_WuBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_CRITERIA_NAMES.
            m4Op.outputDef(Snco_Ad_Criteria_NamesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Criteria_NamesBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_GR_HIERARCHIC_INFO.
            m4Op.outputDef(Snco_Ad_Gr_Hierarchic_InfoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Gr_Hierarchic_InfoBlock.NODE_NAME, true);

            // gets the values in SNCO_AD_CRITERIA_POPULATION.
            m4Op.outputDef(Snco_Ad_Criteria_PopulationBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Snco_Ad_Criteria_PopulationBlock.NODE_NAME, true);

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

            // set node SNCO_AD_H_HR_RESP.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_H_Hr_RespBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_H_Hr_RespBlock.NODE_NAME);
            methodOutput.setSnco_Ad_H_Hr_Resp(m4Op, xml, nNode);
            // set node SNCO_AD_POP_CONST.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Pop_ConstBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Pop_ConstBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Pop_Const(m4Op, xml, nNode);
            // set node SNCO_AD_POPULATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_PopulationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_PopulationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Population(m4Op, xml, nNode);
            // set node SNCO_AD_PERSON_LIST.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Person_ListBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Person_ListBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Person_List(m4Op, xml, nNode);
            // set node SNCO_AD_HIERARCHIC_WU.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Hierarchic_WuBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Hierarchic_WuBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Hierarchic_Wu(m4Op, xml, nNode);
            // set node SNCO_AD_CRITERIA_NAMES.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Criteria_NamesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Criteria_NamesBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Criteria_Names(m4Op, xml, nNode);
            // set node SNCO_AD_GR_HIERARCHIC_INFO.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Gr_Hierarchic_InfoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Gr_Hierarchic_InfoBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Gr_Hierarchic_Info(m4Op, xml, nNode);
            // set node SNCO_AD_CRITERIA_POPULATION.
            nData = xml.findData(M4OBJECT_ALIAS, Snco_Ad_Criteria_PopulationBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Snco_Ad_Criteria_PopulationBlock.NODE_NAME);
            methodOutput.setSnco_Ad_Criteria_Population(m4Op, xml, nNode);
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


} /* end class Sntc_Ad_PopulationService */
