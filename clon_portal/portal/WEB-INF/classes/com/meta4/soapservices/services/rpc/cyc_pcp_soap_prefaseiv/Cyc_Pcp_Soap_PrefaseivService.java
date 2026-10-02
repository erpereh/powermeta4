/**
 * Cyc_Pcp_Soap_PrefaseivService.java
 * Self generated code for Business Object CYC_PCP_SOAP_PREFASEIV.
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

package com.meta4.soapservices.services.rpc.cyc_pcp_soap_prefaseiv;

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
 * SOAP Service for Bussines Object CYC_PCP_SOAP_PREFASEIV.
 * @author Meta4
 */
public
class Cyc_Pcp_Soap_PrefaseivService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Pcp_Soap_PrefaseivService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_PCP_SOAP_PREFASEIV";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CARGA
     * CARGA
     * CARGA DATOS
     */
    public
    CargaOutput
    CARGA
    (
        String ARG_ID_HR
,        Calendar FECHA_INI
,        Calendar FECHA_FIN
    ) throws M4SoapException
    {
        m_log.debug("CARGA(...)");

        // return object for this method.
        CargaOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_PCP_SOAP_PREFASEIV";
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
            if (ARG_ID_HR != null) htArgs.put("ARG_ID_HR", M4BusinessMethodArg.toString(ARG_ID_HR));
            if (FECHA_INI != null) htArgs.put("FECHA_INI", M4BusinessMethodArg.toString(FECHA_INI));
            if (FECHA_FIN != null) htArgs.put("FECHA_FIN", M4BusinessMethodArg.toString(FECHA_FIN));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_PCP_SOAP_PREFASEIV.
            m4Op.outputDef(Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new CargaOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_PCP_SOAP_PREFASEIV.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME);
            methodOutput.setCyc_Pcp_Soap_Prefaseiv(m4Op, xml, nNode);

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
    } /* end of method CARGA */


    /**
     * GUARDAR
     * GUARDAR
     * GUARDAR DATOS
     */
    public
    GuardarOutput
    GUARDAR
    (
        String ID_HR
,        String ARG_P_DESA
,        String ARG_P_RETE
,        String ARG_P_ROTA
,        String ARG_MEN_OR_COA
,        String ARG_MEN_COA
,        String ARG_OBJET
,        String ARG_ACCION
,        String ARG_PERIO_REU
,        String ARG_COMPRO
,        String ARG_AVA_CONSE
,        Calendar FECHA_INI
,        Calendar FECHA_FIN
    ) throws M4SoapException
    {
        m_log.debug("GUARDAR(...)");

        // return object for this method.
        GuardarOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_PCP_SOAP_PREFASEIV";
        final String METHOD_NAME = "GUARDAR";
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
            if (ID_HR != null) htArgs.put("ID_HR", M4BusinessMethodArg.toString(ID_HR));
            if (ARG_P_DESA != null) htArgs.put("ARG_P_DESA", M4BusinessMethodArg.toString(ARG_P_DESA));
            if (ARG_P_RETE != null) htArgs.put("ARG_P_RETE", M4BusinessMethodArg.toString(ARG_P_RETE));
            if (ARG_P_ROTA != null) htArgs.put("ARG_P_ROTA", M4BusinessMethodArg.toString(ARG_P_ROTA));
            if (ARG_MEN_OR_COA != null) htArgs.put("ARG_MEN_OR_COA", M4BusinessMethodArg.toString(ARG_MEN_OR_COA));
            if (ARG_MEN_COA != null) htArgs.put("ARG_MEN_COA", M4BusinessMethodArg.toString(ARG_MEN_COA));
            if (ARG_OBJET != null) htArgs.put("ARG_OBJET", M4BusinessMethodArg.toString(ARG_OBJET));
            if (ARG_ACCION != null) htArgs.put("ARG_ACCION", M4BusinessMethodArg.toString(ARG_ACCION));
            if (ARG_PERIO_REU != null) htArgs.put("ARG_PERIO_REU", M4BusinessMethodArg.toString(ARG_PERIO_REU));
            if (ARG_COMPRO != null) htArgs.put("ARG_COMPRO", M4BusinessMethodArg.toString(ARG_COMPRO));
            if (ARG_AVA_CONSE != null) htArgs.put("ARG_AVA_CONSE", M4BusinessMethodArg.toString(ARG_AVA_CONSE));
            if (FECHA_INI != null) htArgs.put("FECHA_INI", M4BusinessMethodArg.toString(FECHA_INI));
            if (FECHA_FIN != null) htArgs.put("FECHA_FIN", M4BusinessMethodArg.toString(FECHA_FIN));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_PCP_SOAP_PREFASEIV.
            m4Op.outputDef(Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new GuardarOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_PCP_SOAP_PREFASEIV.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME);
            methodOutput.setCyc_Pcp_Soap_Prefaseiv(m4Op, xml, nNode);

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
    } /* end of method GUARDAR */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Pcp_Soap_PrefaseivBlock CYC_PCP_SOAP_PREFASEIV
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_PCP_SOAP_PREFASEIV";
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
            if ( CYC_PCP_SOAP_PREFASEIV != null ) 
            {
            	CYC_PCP_SOAP_PREFASEIV.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_PCP_SOAP_PREFASEIV.
            m4Op.outputDef(Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME, true);

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

            // set node CYC_PCP_SOAP_PREFASEIV.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Pcp_Soap_PrefaseivBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Pcp_Soap_PrefaseivBlock.NODE_NAME);
            methodOutput.setCyc_Pcp_Soap_Prefaseiv(m4Op, xml, nNode);

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


} /* end class Cyc_Pcp_Soap_PrefaseivService */
