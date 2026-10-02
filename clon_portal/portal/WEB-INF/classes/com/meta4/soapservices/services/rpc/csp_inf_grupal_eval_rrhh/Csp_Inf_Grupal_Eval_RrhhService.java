/**
 * Csp_Inf_Grupal_Eval_RrhhService.java
 * Self generated code for Business Object CSP_INF_GRUPAL_EVAL_RRHH.
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

package com.meta4.soapservices.services.rpc.csp_inf_grupal_eval_rrhh;

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
 * SOAP Service for Bussines Object CSP_INF_GRUPAL_EVAL_RRHH.
 * @author Meta4
 */
public
class Csp_Inf_Grupal_Eval_RrhhService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Inf_Grupal_Eval_RrhhService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_INF_GRUPAL_EVAL_RRHH";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_INF_GRUPAL_EVAL_RRHH
     * CSP_INF_GRUPAL_EVAL_RRHH
     * CSP_INF_GRUPAL_EVAL_RRHH
     */
    public
    Csp_Inf_Grupal_Eval_RrhhOutput
    CSP_INF_GRUPAL_EVAL_RRHH
    (
        String ARG_ID_EMPLEADO
,        String ARG_NOMBRE
,        String ARG_APELLIDO_1
,        String ARG_APELLIDO_2
,        String ARG_DIRECCION
,        String ARG_AREA
,        String ARG_ID_PLAN_EV
,        Calendar ARG_DT_INI_PROC
,        String ARG_ANNO_EVAL
,        String ARG_EVALUADOR
,        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CSP_INF_GRUPAL_EVAL_RRHH(...)");

        // return object for this method.
        Csp_Inf_Grupal_Eval_RrhhOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_INF_GRUPAL_EVAL";
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
            if (ARG_ID_EMPLEADO != null) htArgs.put("ARG_ID_EMPLEADO", M4BusinessMethodArg.toString(ARG_ID_EMPLEADO));
            if (ARG_NOMBRE != null) htArgs.put("ARG_NOMBRE", M4BusinessMethodArg.toString(ARG_NOMBRE));
            if (ARG_APELLIDO_1 != null) htArgs.put("ARG_APELLIDO_1", M4BusinessMethodArg.toString(ARG_APELLIDO_1));
            if (ARG_APELLIDO_2 != null) htArgs.put("ARG_APELLIDO_2", M4BusinessMethodArg.toString(ARG_APELLIDO_2));
            if (ARG_DIRECCION != null) htArgs.put("ARG_DIRECCION", M4BusinessMethodArg.toString(ARG_DIRECCION));
            if (ARG_AREA != null) htArgs.put("ARG_AREA", M4BusinessMethodArg.toString(ARG_AREA));
            if (ARG_ID_PLAN_EV != null) htArgs.put("ARG_ID_PLAN_EV", M4BusinessMethodArg.toString(ARG_ID_PLAN_EV));
            if (ARG_DT_INI_PROC != null) htArgs.put("ARG_DT_INI_PROC", M4BusinessMethodArg.toString(ARG_DT_INI_PROC));
            if (ARG_ANNO_EVAL != null) htArgs.put("ARG_ANNO_EVAL", M4BusinessMethodArg.toString(ARG_ANNO_EVAL));
            if (ARG_EVALUADOR != null) htArgs.put("ARG_EVALUADOR", M4BusinessMethodArg.toString(ARG_EVALUADOR));
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_INF_GRUPAL_EVAL.
            m4Op.outputDef(Csp_Inf_Grupal_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Inf_Grupal_EvalBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Inf_Grupal_Eval_RrhhOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_INF_GRUPAL_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Inf_Grupal_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Inf_Grupal_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Inf_Grupal_Eval(m4Op, xml, nNode);

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
    } /* end of method CSP_INF_GRUPAL_EVAL_RRHH */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Inf_Grupal_EvalBlock CSP_INF_GRUPAL_EVAL
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_INF_GRUPAL_EVAL";
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
            if ( CSP_INF_GRUPAL_EVAL != null ) 
            {
            	CSP_INF_GRUPAL_EVAL.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_INF_GRUPAL_EVAL.
            m4Op.outputDef(Csp_Inf_Grupal_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Inf_Grupal_EvalBlock.NODE_NAME, true);

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

            // set node CSP_INF_GRUPAL_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Inf_Grupal_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Inf_Grupal_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Inf_Grupal_Eval(m4Op, xml, nNode);

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


} /* end class Csp_Inf_Grupal_Eval_RrhhService */
