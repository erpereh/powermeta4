/**
 * Cyc_Informes_PcpService.java
 * Self generated code for Business Object CYC_INFORMES_PCP.
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

package com.meta4.soapservices.services.rpc.cyc_informes_pcp;

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
 * SOAP Service for Bussines Object CYC_INFORMES_PCP.
 * @author Meta4
 */
public
class Cyc_Informes_PcpService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Informes_PcpService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_GRUPO_FII
     * CYC_GRUPO_FII
     * 
     */
    public
    Cyc_Grupo_FiiOutput
    CYC_GRUPO_FII
    (
        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRUPO_FII(...)");

        // return object for this method.
        Cyc_Grupo_FiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_GRUPO_FII";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_GRUPO_FII.
            m4Op.outputDef(Cyc_Grupo_FiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Grupo_FiiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grupo_FiiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_GRUPO_FII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Grupo_FiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Grupo_FiiBlock.NODE_NAME);
            methodOutput.setCyc_Grupo_Fii(m4Op, xml, nNode);

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
    } /* end of method CYC_GRUPO_FII */


    /**
     * CYC_GRUPO_FIII
     * CYC_GRUPO_FIII
     * 
     */
    public
    Cyc_Grupo_FiiiOutput
    CYC_GRUPO_FIII
    (
        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRUPO_FIII(...)");

        // return object for this method.
        Cyc_Grupo_FiiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_GRUPO_FIII";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_GRUPO_FIII.
            m4Op.outputDef(Cyc_Grupo_FiiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Grupo_FiiiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grupo_FiiiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_GRUPO_FIII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Grupo_FiiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Grupo_FiiiBlock.NODE_NAME);
            methodOutput.setCyc_Grupo_Fiii(m4Op, xml, nNode);

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
    } /* end of method CYC_GRUPO_FIII */


    /**
     * CYC_INFORME_TOTALES
     * CYC_INFORME_TOTALES
     * 
     */
    public
    Cyc_Informe_TotalesOutput
    CYC_INFORME_TOTALES
    (
        String ARG_FASE
    ) throws M4SoapException
    {
        m_log.debug("CYC_INFORME_TOTALES(...)");

        // return object for this method.
        Cyc_Informe_TotalesOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_INFORME_TOTALES";
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
            if (ARG_FASE != null) htArgs.put("ARG_FASE", M4BusinessMethodArg.toString(ARG_FASE));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_INFORME_TOTALES.
            m4Op.outputDef(Cyc_Informe_TotalesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_TotalesBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Informe_TotalesOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_INFORME_TOTALES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_TotalesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_TotalesBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Totales(m4Op, xml, nNode);

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
    } /* end of method CYC_INFORME_TOTALES */


    /**
     * CYC_COMPETENCIAS_FII
     * CYC_COMPETENCIAS_FII
     * 
     */
    public
    Cyc_Competencias_FiiOutput
    CYC_COMPETENCIAS_FII
    (
        String ARG_SOCIEDAD
,        String ARG_COLECTIVO
    ) throws M4SoapException
    {
        m_log.debug("CYC_COMPETENCIAS_FII(...)");

        // return object for this method.
        Cyc_Competencias_FiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_COMPETENCIAS_FII";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));
            if (ARG_COLECTIVO != null) htArgs.put("ARG_COLECTIVO", M4BusinessMethodArg.toString(ARG_COLECTIVO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_COMPETENCIAS_FII.
            m4Op.outputDef(Cyc_Competencias_FiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FiiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Competencias_FiiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_COMPETENCIAS_FII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FiiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fii(m4Op, xml, nNode);

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
    } /* end of method CYC_COMPETENCIAS_FII */


    /**
     * CYC_COMPETENCIAS_FIII
     * CYC_COMPETENCIAS_FIII
     * 
     */
    public
    Cyc_Competencias_FiiiOutput
    CYC_COMPETENCIAS_FIII
    (
        String ARG_SOCIEDAD
,        String ARG_COLECTIVO
    ) throws M4SoapException
    {
        m_log.debug("CYC_COMPETENCIAS_FIII(...)");

        // return object for this method.
        Cyc_Competencias_FiiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_COMPETENCIAS_FIII";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));
            if (ARG_COLECTIVO != null) htArgs.put("ARG_COLECTIVO", M4BusinessMethodArg.toString(ARG_COLECTIVO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_COMPETENCIAS_FIII.
            m4Op.outputDef(Cyc_Competencias_FiiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FiiiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Competencias_FiiiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_COMPETENCIAS_FIII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FiiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FiiiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fiii(m4Op, xml, nNode);

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
    } /* end of method CYC_COMPETENCIAS_FIII */


    /**
     * CYC_COMPETENCIAS_FASEI
     * CYC_COMPETENCIAS_FASEI
     * 
     */
    public
    Cyc_Competencias_FaseiOutput
    CYC_COMPETENCIAS_FASEI
    (
        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CYC_COMPETENCIAS_FASEI(...)");

        // return object for this method.
        Cyc_Competencias_FaseiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_COMPETENCIAS_FASEI";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_COMPETENCIAS_FASEI.
            m4Op.outputDef(Cyc_Competencias_FaseiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FaseiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Competencias_FaseiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_COMPETENCIAS_FASEI.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FaseiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FaseiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fasei(m4Op, xml, nNode);

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
    } /* end of method CYC_COMPETENCIAS_FASEI */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Grupo_FiiBlock CYC_GRUPO_FII
,        Cyc_Fix_InglesBlock CYC_FIX_INGLES
,        Cyc_Grupo_FiiiBlock CYC_GRUPO_FIII
,        Cyc_Informes_PcpBlock CYC_INFORMES_PCP
,        Cyc_Fix_ColectivoBlock CYC_FIX_COLECTIVO
,        Cyc_Informe_TotalesBlock CYC_INFORME_TOTALES
,        Cyc_Competencias_FiiBlock CYC_COMPETENCIAS_FII
,        Cyc_Competencias_FiiiBlock CYC_COMPETENCIAS_FIII
,        Cyc_Competencias_FaseiBlock CYC_COMPETENCIAS_FASEI
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_INFORMES_PCP";
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
            if ( CYC_GRUPO_FII != null ) 
            {
            	CYC_GRUPO_FII.writeOperations(m4Op);
            }
            if ( CYC_FIX_INGLES != null ) 
            {
            	CYC_FIX_INGLES.writeOperations(m4Op);
            }
            if ( CYC_GRUPO_FIII != null ) 
            {
            	CYC_GRUPO_FIII.writeOperations(m4Op);
            }
            if ( CYC_INFORMES_PCP != null ) 
            {
            	CYC_INFORMES_PCP.writeOperations(m4Op);
            }
            if ( CYC_FIX_COLECTIVO != null ) 
            {
            	CYC_FIX_COLECTIVO.writeOperations(m4Op);
            }
            if ( CYC_INFORME_TOTALES != null ) 
            {
            	CYC_INFORME_TOTALES.writeOperations(m4Op);
            }
            if ( CYC_COMPETENCIAS_FII != null ) 
            {
            	CYC_COMPETENCIAS_FII.writeOperations(m4Op);
            }
            if ( CYC_COMPETENCIAS_FIII != null ) 
            {
            	CYC_COMPETENCIAS_FIII.writeOperations(m4Op);
            }
            if ( CYC_COMPETENCIAS_FASEI != null ) 
            {
            	CYC_COMPETENCIAS_FASEI.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_GRUPO_FII.
            m4Op.outputDef(Cyc_Grupo_FiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Grupo_FiiBlock.NODE_NAME, true);

            // gets the values in CYC_FIX_INGLES.
            m4Op.outputDef(Cyc_Fix_InglesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fix_InglesBlock.NODE_NAME, true);

            // gets the values in CYC_GRUPO_FIII.
            m4Op.outputDef(Cyc_Grupo_FiiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Grupo_FiiiBlock.NODE_NAME, true);

            // gets the values in CYC_INFORMES_PCP.
            m4Op.outputDef(Cyc_Informes_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informes_PcpBlock.NODE_NAME, true);

            // gets the values in CYC_FIX_COLECTIVO.
            m4Op.outputDef(Cyc_Fix_ColectivoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fix_ColectivoBlock.NODE_NAME, true);

            // gets the values in CYC_INFORME_TOTALES.
            m4Op.outputDef(Cyc_Informe_TotalesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_TotalesBlock.NODE_NAME, true);

            // gets the values in CYC_COMPETENCIAS_FII.
            m4Op.outputDef(Cyc_Competencias_FiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FiiBlock.NODE_NAME, true);

            // gets the values in CYC_COMPETENCIAS_FIII.
            m4Op.outputDef(Cyc_Competencias_FiiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FiiiBlock.NODE_NAME, true);

            // gets the values in CYC_COMPETENCIAS_FASEI.
            m4Op.outputDef(Cyc_Competencias_FaseiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Competencias_FaseiBlock.NODE_NAME, true);

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

            // set node CYC_GRUPO_FII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Grupo_FiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Grupo_FiiBlock.NODE_NAME);
            methodOutput.setCyc_Grupo_Fii(m4Op, xml, nNode);
            // set node CYC_FIX_INGLES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fix_InglesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fix_InglesBlock.NODE_NAME);
            methodOutput.setCyc_Fix_Ingles(m4Op, xml, nNode);
            // set node CYC_GRUPO_FIII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Grupo_FiiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Grupo_FiiiBlock.NODE_NAME);
            methodOutput.setCyc_Grupo_Fiii(m4Op, xml, nNode);
            // set node CYC_INFORMES_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informes_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informes_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Informes_Pcp(m4Op, xml, nNode);
            // set node CYC_FIX_COLECTIVO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fix_ColectivoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fix_ColectivoBlock.NODE_NAME);
            methodOutput.setCyc_Fix_Colectivo(m4Op, xml, nNode);
            // set node CYC_INFORME_TOTALES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_TotalesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_TotalesBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Totales(m4Op, xml, nNode);
            // set node CYC_COMPETENCIAS_FII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FiiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fii(m4Op, xml, nNode);
            // set node CYC_COMPETENCIAS_FIII.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FiiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FiiiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fiii(m4Op, xml, nNode);
            // set node CYC_COMPETENCIAS_FASEI.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Competencias_FaseiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Competencias_FaseiBlock.NODE_NAME);
            methodOutput.setCyc_Competencias_Fasei(m4Op, xml, nNode);

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


} /* end class Cyc_Informes_PcpService */
