/**
 * Cyc_Informe_GrupalService.java
 * Self generated code for Business Object CYC_INFORME_GRUPAL.
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

package com.meta4.soapservices.services.rpc.cyc_informe_grupal;

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
 * SOAP Service for Bussines Object CYC_INFORME_GRUPAL.
 * @author Meta4
 */
public
class Cyc_Informe_GrupalService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Informe_GrupalService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_INFORME_GRUPAL";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_INFORME_GRUPAL
     * CYC_INFORME_GRUPAL
     * 
     */
    public
    Cyc_Informe_GrupalOutput
    CYC_INFORME_GRUPAL
    (
        String ARG_FASE
,        String ARG_SOCIEDAD
,        String ARG_FEC_INICIO
,        String ARG_FEC_FIN
    ) throws M4SoapException
    {
        m_log.debug("CYC_INFORME_GRUPAL(...)");

        // return object for this method.
        Cyc_Informe_GrupalOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_INFORME_GRUPAL";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));
            if (ARG_FEC_INICIO != null) htArgs.put("ARG_FEC_INICIO", M4BusinessMethodArg.toString(ARG_FEC_INICIO));
            if (ARG_FEC_FIN != null) htArgs.put("ARG_FEC_FIN", M4BusinessMethodArg.toString(ARG_FEC_FIN));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_INFORME_GRUPAL.
            m4Op.outputDef(Cyc_Informe_GrupalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_GrupalBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Informe_GrupalOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_INFORME_GRUPAL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_GrupalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_GrupalBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Grupal(m4Op, xml, nNode);

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
    } /* end of method CYC_INFORME_GRUPAL */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Informe_GrupalBlock CYC_INFORME_GRUPAL
,        Cyc_Es_Alta_Igrupal_HBlock CYC_ES_ALTA_IGRUPAL_H
,        Cyc_Es_Alta_Igrupal_OroBlock CYC_ES_ALTA_IGRUPAL_ORO
,        Cyc_Informe_Grupal_Fase_IBlock CYC_INFORME_GRUPAL_FASE_I
,        Cyc_Informe_Grupal_Fase_IiBlock CYC_INFORME_GRUPAL_FASE_II
,        Cyc_Informe_Grupal_Fase_IiiBlock CYC_INFORME_GRUPAL_FASE_III
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_INFORME_GRUPAL";
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
            if ( CYC_INFORME_GRUPAL != null ) 
            {
            	CYC_INFORME_GRUPAL.writeOperations(m4Op);
            }
            if ( CYC_ES_ALTA_IGRUPAL_H != null ) 
            {
            	CYC_ES_ALTA_IGRUPAL_H.writeOperations(m4Op);
            }
            if ( CYC_ES_ALTA_IGRUPAL_ORO != null ) 
            {
            	CYC_ES_ALTA_IGRUPAL_ORO.writeOperations(m4Op);
            }
            if ( CYC_INFORME_GRUPAL_FASE_I != null ) 
            {
            	CYC_INFORME_GRUPAL_FASE_I.writeOperations(m4Op);
            }
            if ( CYC_INFORME_GRUPAL_FASE_II != null ) 
            {
            	CYC_INFORME_GRUPAL_FASE_II.writeOperations(m4Op);
            }
            if ( CYC_INFORME_GRUPAL_FASE_III != null ) 
            {
            	CYC_INFORME_GRUPAL_FASE_III.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_INFORME_GRUPAL.
            m4Op.outputDef(Cyc_Informe_GrupalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_GrupalBlock.NODE_NAME, true);

            // gets the values in CYC_ES_ALTA_IGRUPAL_H.
            m4Op.outputDef(Cyc_Es_Alta_Igrupal_HBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Es_Alta_Igrupal_HBlock.NODE_NAME, true);

            // gets the values in CYC_ES_ALTA_IGRUPAL_ORO.
            m4Op.outputDef(Cyc_Es_Alta_Igrupal_OroBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Es_Alta_Igrupal_OroBlock.NODE_NAME, true);

            // gets the values in CYC_INFORME_GRUPAL_FASE_I.
            m4Op.outputDef(Cyc_Informe_Grupal_Fase_IBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IBlock.NODE_NAME, true);

            // gets the values in CYC_INFORME_GRUPAL_FASE_II.
            m4Op.outputDef(Cyc_Informe_Grupal_Fase_IiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IiBlock.NODE_NAME, true);

            // gets the values in CYC_INFORME_GRUPAL_FASE_III.
            m4Op.outputDef(Cyc_Informe_Grupal_Fase_IiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IiiBlock.NODE_NAME, true);

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

            // set node CYC_INFORME_GRUPAL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_GrupalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_GrupalBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Grupal(m4Op, xml, nNode);
            // set node CYC_ES_ALTA_IGRUPAL_H.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Es_Alta_Igrupal_HBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Es_Alta_Igrupal_HBlock.NODE_NAME);
            methodOutput.setCyc_Es_Alta_Igrupal_H(m4Op, xml, nNode);
            // set node CYC_ES_ALTA_IGRUPAL_ORO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Es_Alta_Igrupal_OroBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Es_Alta_Igrupal_OroBlock.NODE_NAME);
            methodOutput.setCyc_Es_Alta_Igrupal_Oro(m4Op, xml, nNode);
            // set node CYC_INFORME_GRUPAL_FASE_I.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_Grupal_Fase_IBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Grupal_Fase_I(m4Op, xml, nNode);
            // set node CYC_INFORME_GRUPAL_FASE_II.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_Grupal_Fase_IiBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Grupal_Fase_Ii(m4Op, xml, nNode);
            // set node CYC_INFORME_GRUPAL_FASE_III.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Informe_Grupal_Fase_IiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Informe_Grupal_Fase_IiiBlock.NODE_NAME);
            methodOutput.setCyc_Informe_Grupal_Fase_Iii(m4Op, xml, nNode);

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


} /* end class Cyc_Informe_GrupalService */
