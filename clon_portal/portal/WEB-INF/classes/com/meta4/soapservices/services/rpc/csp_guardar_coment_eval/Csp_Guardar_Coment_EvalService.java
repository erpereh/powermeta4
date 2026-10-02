/**
 * Csp_Guardar_Coment_EvalService.java
 * Self generated code for Business Object CSP_GUARDAR_COMENT_EVAL.
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

package com.meta4.soapservices.services.rpc.csp_guardar_coment_eval;

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
 * SOAP Service for Bussines Object CSP_GUARDAR_COMENT_EVAL.
 * @author Meta4
 */
public
class Csp_Guardar_Coment_EvalService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_Coment_EvalService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_GUARDAR_COMENT_EVAL";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_GUARDAR_COMENT_EVAL
     * CSP_GUARDAR_COMENT_EVAL
     * 
     */
    public
    Csp_Guardar_Coment_EvalOutput
    CSP_GUARDAR_COMENT_EVAL
    (
        String ARG_ID_EVALUADO
,        Calendar ARG_F_INI_EVAL
,        String ARG_ROL_COMEN
,        String ARG_COMENTARIO
,        String ARG_AGREE_COMENT
,        String ARG_ID_COMENT
,        String ARG_TIPO
    ) throws M4SoapException
    {
        m_log.debug("CSP_GUARDAR_COMENT_EVAL(...)");

        // return object for this method.
        Csp_Guardar_Coment_EvalOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_COMENT_EVAL";
        final String METHOD_NAME = "CSP_GUARDA_COMENTARIO";
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
            if (ARG_ID_EVALUADO != null) htArgs.put("ARG_ID_EVALUADO", M4BusinessMethodArg.toString(ARG_ID_EVALUADO));
            if (ARG_F_INI_EVAL != null) htArgs.put("ARG_F_INI_EVAL", M4BusinessMethodArg.toString(ARG_F_INI_EVAL));
            if (ARG_ROL_COMEN != null) htArgs.put("ARG_ROL_COMEN", M4BusinessMethodArg.toString(ARG_ROL_COMEN));
            if (ARG_COMENTARIO != null) htArgs.put("ARG_COMENTARIO", M4BusinessMethodArg.toString(ARG_COMENTARIO));
            if (ARG_AGREE_COMENT != null) htArgs.put("ARG_AGREE_COMENT", M4BusinessMethodArg.toString(ARG_AGREE_COMENT));
            if (ARG_ID_COMENT != null) htArgs.put("ARG_ID_COMENT", M4BusinessMethodArg.toString(ARG_ID_COMENT));
            if (ARG_TIPO != null) htArgs.put("ARG_TIPO", M4BusinessMethodArg.toString(ARG_TIPO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Guardar_Coment_EvalOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);


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
    } /* end of method CSP_GUARDAR_COMENT_EVAL */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Aux_H_EvaluateBlock CSP_AUX_H_EVALUATE
,        Csp_Guardar_Coment_EvalBlock CSP_GUARDAR_COMENT_EVAL
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_COMENT_EVAL";
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
            if ( CSP_AUX_H_EVALUATE != null ) 
            {
            	CSP_AUX_H_EVALUATE.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_COMENT_EVAL != null ) 
            {
            	CSP_GUARDAR_COMENT_EVAL.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_AUX_H_EVALUATE.
            m4Op.outputDef(Csp_Aux_H_EvaluateBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Aux_H_EvaluateBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_COMENT_EVAL.
            m4Op.outputDef(Csp_Guardar_Coment_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_Coment_EvalBlock.NODE_NAME, true);

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

            // set node CSP_AUX_H_EVALUATE.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Aux_H_EvaluateBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Aux_H_EvaluateBlock.NODE_NAME);
            methodOutput.setCsp_Aux_H_Evaluate(m4Op, xml, nNode);
            // set node CSP_GUARDAR_COMENT_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_Coment_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_Coment_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Coment_Eval(m4Op, xml, nNode);

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


} /* end class Csp_Guardar_Coment_EvalService */
