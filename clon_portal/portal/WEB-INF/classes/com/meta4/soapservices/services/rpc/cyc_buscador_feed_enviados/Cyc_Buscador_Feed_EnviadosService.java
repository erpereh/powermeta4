/**
 * Cyc_Buscador_Feed_EnviadosService.java
 * Self generated code for Business Object CYC_BUSCADOR_FEED_ENVIADOS.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_feed_enviados;

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
 * SOAP Service for Bussines Object CYC_BUSCADOR_FEED_ENVIADOS.
 * @author Meta4
 */
public
class Cyc_Buscador_Feed_EnviadosService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Buscador_Feed_EnviadosService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_BUSCADOR_FEED_ENVIADOS";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FILTRO_FB_ENVIADOS
     * CYC_FILTRO_FB_ENVIADOS
     * 
     */
    public
    Cyc_Filtro_Fb_EnviadosOutput
    CYC_FILTRO_FB_ENVIADOS
    (
        Cyc_Fb_Param_Entrada_EnviadosBlock CYC_FB_PARAM_ENTRADA_ENVIADOS
    ) throws M4SoapException
    {
        m_log.debug("CYC_FILTRO_FB_ENVIADOS(...)");

        // return object for this method.
        Cyc_Filtro_Fb_EnviadosOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FB_PARAM_ENTRADA_ENVIADOS";
        final String METHOD_NAME = "ADREGISTER";
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
            if ( CYC_FB_PARAM_ENTRADA_ENVIADOS != null ) 
            {
            	CYC_FB_PARAM_ENTRADA_ENVIADOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILTRO_FB_ENVIADOS.
            m4Op.outputDef(Cyc_Filtro_Fb_EnviadosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_Fb_EnviadosBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Filtro_Fb_EnviadosOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILTRO_FB_ENVIADOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_Fb_EnviadosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_Fb_EnviadosBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Fb_Enviados(m4Op, xml, nNode);

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
    } /* end of method CYC_FILTRO_FB_ENVIADOS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Filtro_Fb_EnviadosBlock CYC_FILTRO_FB_ENVIADOS
,        Cyc_Fix_Buscador_Feedback_EBlock CYC_FIX_BUSCADOR_FEEDBACK_E
,        Cyc_Fb_Param_Entrada_EnviadosBlock CYC_FB_PARAM_ENTRADA_ENVIADOS
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_FB_ENVIADOS";
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
            if ( CYC_FILTRO_FB_ENVIADOS != null ) 
            {
            	CYC_FILTRO_FB_ENVIADOS.writeOperations(m4Op);
            }
            if ( CYC_FIX_BUSCADOR_FEEDBACK_E != null ) 
            {
            	CYC_FIX_BUSCADOR_FEEDBACK_E.writeOperations(m4Op);
            }
            if ( CYC_FB_PARAM_ENTRADA_ENVIADOS != null ) 
            {
            	CYC_FB_PARAM_ENTRADA_ENVIADOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILTRO_FB_ENVIADOS.
            m4Op.outputDef(Cyc_Filtro_Fb_EnviadosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_Fb_EnviadosBlock.NODE_NAME, true);

            // gets the values in CYC_FIX_BUSCADOR_FEEDBACK_E.
            m4Op.outputDef(Cyc_Fix_Buscador_Feedback_EBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fix_Buscador_Feedback_EBlock.NODE_NAME, true);

            // gets the values in CYC_FB_PARAM_ENTRADA_ENVIADOS.
            m4Op.outputDef(Cyc_Fb_Param_Entrada_EnviadosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fb_Param_Entrada_EnviadosBlock.NODE_NAME, true);

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

            // set node CYC_FILTRO_FB_ENVIADOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_Fb_EnviadosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_Fb_EnviadosBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Fb_Enviados(m4Op, xml, nNode);
            // set node CYC_FIX_BUSCADOR_FEEDBACK_E.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fix_Buscador_Feedback_EBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fix_Buscador_Feedback_EBlock.NODE_NAME);
            methodOutput.setCyc_Fix_Buscador_Feedback_E(m4Op, xml, nNode);
            // set node CYC_FB_PARAM_ENTRADA_ENVIADOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fb_Param_Entrada_EnviadosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fb_Param_Entrada_EnviadosBlock.NODE_NAME);
            methodOutput.setCyc_Fb_Param_Entrada_Enviados(m4Op, xml, nNode);

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


} /* end class Cyc_Buscador_Feed_EnviadosService */
