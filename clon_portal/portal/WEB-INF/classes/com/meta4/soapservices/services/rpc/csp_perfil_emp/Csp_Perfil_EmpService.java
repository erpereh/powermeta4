/**
 * Csp_Perfil_EmpService.java
 * Self generated code for Business Object CSP_PERFIL_EMP.
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

package com.meta4.soapservices.services.rpc.csp_perfil_emp;

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
 * SOAP Service for Bussines Object CSP_PERFIL_EMP.
 * @author Meta4
 */
public
class Csp_Perfil_EmpService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Perfil_EmpService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_PERFIL_EMP";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_PERFIL_EMP
     * CSP_PERFIL_EMP
     * 
     */
    public
    Csp_Perfil_EmpOutput
    CSP_PERFIL_EMP
    (
        String ARG_PERSONA
    ) throws M4SoapException
    {
        m_log.debug("CSP_PERFIL_EMP(...)");

        // return object for this method.
        Csp_Perfil_EmpOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_PERFIL_USER";
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
            if (ARG_PERSONA != null) htArgs.put("ARG_PERSONA", M4BusinessMethodArg.toString(ARG_PERSONA));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_PERFIL_USER.
            m4Op.outputDef(Csp_Perfil_UserBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Perfil_UserBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Perfil_EmpOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_PERFIL_USER.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Perfil_UserBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Perfil_UserBlock.NODE_NAME);
            methodOutput.setCsp_Perfil_User(m4Op, xml, nNode);

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
    } /* end of method CSP_PERFIL_EMP */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Eval_DesempBlock CSP_EVAL_DESEMP
,        Csp_Perfil_UserBlock CSP_PERFIL_USER
,        Csp_Eval_Desem_1Block CSP_EVAL_DESEM_1
,        Csp_Eval_Des_EvaluadorBlock CSP_EVAL_DES_EVALUADOR
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_EVAL_DESEM_1";
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
            if ( CSP_EVAL_DESEMP != null ) 
            {
            	CSP_EVAL_DESEMP.writeOperations(m4Op);
            }
            if ( CSP_PERFIL_USER != null ) 
            {
            	CSP_PERFIL_USER.writeOperations(m4Op);
            }
            if ( CSP_EVAL_DESEM_1 != null ) 
            {
            	CSP_EVAL_DESEM_1.writeOperations(m4Op);
            }
            if ( CSP_EVAL_DES_EVALUADOR != null ) 
            {
            	CSP_EVAL_DES_EVALUADOR.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_EVAL_DESEMP.
            m4Op.outputDef(Csp_Eval_DesempBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Eval_DesempBlock.NODE_NAME, true);

            // gets the values in CSP_PERFIL_USER.
            m4Op.outputDef(Csp_Perfil_UserBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Perfil_UserBlock.NODE_NAME, true);

            // gets the values in CSP_EVAL_DESEM_1.
            m4Op.outputDef(Csp_Eval_Desem_1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Eval_Desem_1Block.NODE_NAME, true);

            // gets the values in CSP_EVAL_DES_EVALUADOR.
            m4Op.outputDef(Csp_Eval_Des_EvaluadorBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Eval_Des_EvaluadorBlock.NODE_NAME, true);

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

            // set node CSP_EVAL_DESEMP.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Eval_DesempBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Eval_DesempBlock.NODE_NAME);
            methodOutput.setCsp_Eval_Desemp(m4Op, xml, nNode);
            // set node CSP_PERFIL_USER.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Perfil_UserBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Perfil_UserBlock.NODE_NAME);
            methodOutput.setCsp_Perfil_User(m4Op, xml, nNode);
            // set node CSP_EVAL_DESEM_1.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Eval_Desem_1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Eval_Desem_1Block.NODE_NAME);
            methodOutput.setCsp_Eval_Desem_1(m4Op, xml, nNode);
            // set node CSP_EVAL_DES_EVALUADOR.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Eval_Des_EvaluadorBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Eval_Des_EvaluadorBlock.NODE_NAME);
            methodOutput.setCsp_Eval_Des_Evaluador(m4Op, xml, nNode);

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


} /* end class Csp_Perfil_EmpService */
