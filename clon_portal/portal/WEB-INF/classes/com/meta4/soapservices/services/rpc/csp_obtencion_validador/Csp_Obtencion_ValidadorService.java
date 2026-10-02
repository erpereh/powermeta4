/**
 * Csp_Obtencion_ValidadorService.java
 * Self generated code for Business Object CSP_OBTENCION_VALIDADOR.
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

package com.meta4.soapservices.services.rpc.csp_obtencion_validador;

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
 * SOAP Service for Bussines Object CSP_OBTENCION_VALIDADOR.
 * @author Meta4
 */
public
class Csp_Obtencion_ValidadorService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Obtencion_ValidadorService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_OBTENCION_VALIDADOR";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_CONSULTA_CD
     * CSP_CONSULTA_CD
     * 
     */
    public
    Csp_Consulta_CdOutput
    CSP_CONSULTA_CD
    (
        String ARG_SOC
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_CD(...)");

        // return object for this method.
        Csp_Consulta_CdOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_CD";
        final String METHOD_NAME = "CSP_CONSULTA_CD";
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
            if (ARG_SOC != null) htArgs.put("ARG_SOC", M4BusinessMethodArg.toString(ARG_SOC));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_CD.
            m4Op.outputDef(Csp_Consulta_CdBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_CdBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_CdOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_CD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_CdBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_CdBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Cd(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_CD */


    /**
     * CSP_CONSULTA_DG
     * CSP_CONSULTA_DG
     * 
     */
    public
    Csp_Consulta_DgOutput
    CSP_CONSULTA_DG
    (
        String ARG_SOC
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_DG(...)");

        // return object for this method.
        Csp_Consulta_DgOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_DG";
        final String METHOD_NAME = "CSP_CONSULTA_DG";
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
            if (ARG_SOC != null) htArgs.put("ARG_SOC", M4BusinessMethodArg.toString(ARG_SOC));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_DG.
            m4Op.outputDef(Csp_Consulta_DgBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_DgBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_DgOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_DG.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_DgBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_DgBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Dg(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_DG */


    /**
     * CSP_UNIDAD_SUPER
     * CSP_UNIDAD_SUPER
     * 
     */
    public
    Csp_Unidad_SuperOutput
    CSP_UNIDAD_SUPER
    (
        String ARG_UNIDAD
    ) throws M4SoapException
    {
        m_log.debug("CSP_UNIDAD_SUPER(...)");

        // return object for this method.
        Csp_Unidad_SuperOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_UNIDAD_SUPER";
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
            if (ARG_UNIDAD != null) htArgs.put("ARG_UNIDAD", M4BusinessMethodArg.toString(ARG_UNIDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_UNIDAD_SUPER.
            m4Op.outputDef(Csp_Unidad_SuperBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Unidad_SuperBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Unidad_SuperOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_UNIDAD_SUPER.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Unidad_SuperBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Unidad_SuperBlock.NODE_NAME);
            methodOutput.setCsp_Unidad_Super(m4Op, xml, nNode);

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
    } /* end of method CSP_UNIDAD_SUPER */


    /**
     * CSP_CONSULTA_VALI
     * CSP_CONSULTA_VALI
     * 
     */
    public
    Csp_Consulta_ValiOutput
    CSP_CONSULTA_VALI
    (
        String ARG_SOC
,        String ARG_ID_UNIDAD
    ) throws M4SoapException
    {
        m_log.debug("CSP_CONSULTA_VALI(...)");

        // return object for this method.
        Csp_Consulta_ValiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_VALI";
        final String METHOD_NAME = "CSP_CONSULTA_VALI";
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
            if (ARG_SOC != null) htArgs.put("ARG_SOC", M4BusinessMethodArg.toString(ARG_SOC));
            if (ARG_ID_UNIDAD != null) htArgs.put("ARG_ID_UNIDAD", M4BusinessMethodArg.toString(ARG_ID_UNIDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_VALI.
            m4Op.outputDef(Csp_Consulta_ValiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_ValiBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Consulta_ValiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_CONSULTA_VALI.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_ValiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_ValiBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Vali(m4Op, xml, nNode);

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
    } /* end of method CSP_CONSULTA_VALI */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Consulta_CdBlock CSP_CONSULTA_CD
,        Csp_Consulta_DgBlock CSP_CONSULTA_DG
,        Csp_Unidad_SuperBlock CSP_UNIDAD_SUPER
,        Csp_Consulta_ValiBlock CSP_CONSULTA_VALI
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_CONSULTA_CD";
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
            if ( CSP_CONSULTA_CD != null ) 
            {
            	CSP_CONSULTA_CD.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_DG != null ) 
            {
            	CSP_CONSULTA_DG.writeOperations(m4Op);
            }
            if ( CSP_UNIDAD_SUPER != null ) 
            {
            	CSP_UNIDAD_SUPER.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_VALI != null ) 
            {
            	CSP_CONSULTA_VALI.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_CONSULTA_CD.
            m4Op.outputDef(Csp_Consulta_CdBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_CdBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_DG.
            m4Op.outputDef(Csp_Consulta_DgBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_DgBlock.NODE_NAME, true);

            // gets the values in CSP_UNIDAD_SUPER.
            m4Op.outputDef(Csp_Unidad_SuperBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Unidad_SuperBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_VALI.
            m4Op.outputDef(Csp_Consulta_ValiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_ValiBlock.NODE_NAME, true);

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

            // set node CSP_CONSULTA_CD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_CdBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_CdBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Cd(m4Op, xml, nNode);
            // set node CSP_CONSULTA_DG.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_DgBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_DgBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Dg(m4Op, xml, nNode);
            // set node CSP_UNIDAD_SUPER.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Unidad_SuperBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Unidad_SuperBlock.NODE_NAME);
            methodOutput.setCsp_Unidad_Super(m4Op, xml, nNode);
            // set node CSP_CONSULTA_VALI.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_ValiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_ValiBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Vali(m4Op, xml, nNode);

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


} /* end class Csp_Obtencion_ValidadorService */
