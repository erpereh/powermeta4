/**
 * Csp_Estado_ProcService.java
 * Self generated code for Business Object CSP_ESTADO_PROC.
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

package com.meta4.soapservices.services.rpc.csp_estado_proc;

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
 * SOAP Service for Bussines Object CSP_ESTADO_PROC.
 * @author Meta4
 */
public
class Csp_Estado_ProcService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Estado_ProcService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_ESTADO_PROC";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_ESTADO_PROC
     * CSP_ESTADO_PROC
     * 
     */
    public
    Csp_Estado_ProcOutput
    CSP_ESTADO_PROC
    (
        String ARG_ID_HR
,        String ARG_ANIO_DESDE
,        String ARG_ANIO_HASTA
,        String ARG_TIPO
    ) throws M4SoapException
    {
        m_log.debug("CSP_ESTADO_PROC(...)");

        // return object for this method.
        Csp_Estado_ProcOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_ESTADO_EVAL";
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
            if (ARG_ANIO_DESDE != null) htArgs.put("ARG_ANIO_DESDE", M4BusinessMethodArg.toString(ARG_ANIO_DESDE));
            if (ARG_ANIO_HASTA != null) htArgs.put("ARG_ANIO_HASTA", M4BusinessMethodArg.toString(ARG_ANIO_HASTA));
            if (ARG_TIPO != null) htArgs.put("ARG_TIPO", M4BusinessMethodArg.toString(ARG_TIPO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_ESTADO_EVAL.
            m4Op.outputDef(Csp_Estado_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Estado_ProcOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_ESTADO_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Estado_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Estado_Eval(m4Op, xml, nNode);

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
    } /* end of method CSP_ESTADO_PROC */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Ult_ProBlock CSP_ULT_PRO
,        Csp_Plan_AntBlock CSP_PLAN_ANT
,        Csp_Sacar_OrgBlock CSP_SACAR_ORG
,        Csp_Estado_EvalBlock CSP_ESTADO_EVAL
,        Csp_Obj_Eva_AntBlock CSP_OBJ_EVA_ANT
,        Csp_Estado_Plan_AntBlock CSP_ESTADO_PLAN_ANT
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_ESTADO_EVAL";
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
            if ( CSP_ULT_PRO != null ) 
            {
            	CSP_ULT_PRO.writeOperations(m4Op);
            }
            if ( CSP_PLAN_ANT != null ) 
            {
            	CSP_PLAN_ANT.writeOperations(m4Op);
            }
            if ( CSP_SACAR_ORG != null ) 
            {
            	CSP_SACAR_ORG.writeOperations(m4Op);
            }
            if ( CSP_ESTADO_EVAL != null ) 
            {
            	CSP_ESTADO_EVAL.writeOperations(m4Op);
            }
            if ( CSP_OBJ_EVA_ANT != null ) 
            {
            	CSP_OBJ_EVA_ANT.writeOperations(m4Op);
            }
            if ( CSP_ESTADO_PLAN_ANT != null ) 
            {
            	CSP_ESTADO_PLAN_ANT.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_ULT_PRO.
            m4Op.outputDef(Csp_Ult_ProBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Ult_ProBlock.NODE_NAME, true);

            // gets the values in CSP_PLAN_ANT.
            m4Op.outputDef(Csp_Plan_AntBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Plan_AntBlock.NODE_NAME, true);

            // gets the values in CSP_SACAR_ORG.
            m4Op.outputDef(Csp_Sacar_OrgBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Sacar_OrgBlock.NODE_NAME, true);

            // gets the values in CSP_ESTADO_EVAL.
            m4Op.outputDef(Csp_Estado_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_NAME, true);

            // gets the values in CSP_OBJ_EVA_ANT.
            m4Op.outputDef(Csp_Obj_Eva_AntBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Obj_Eva_AntBlock.NODE_NAME, true);

            // gets the values in CSP_ESTADO_PLAN_ANT.
            m4Op.outputDef(Csp_Estado_Plan_AntBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Estado_Plan_AntBlock.NODE_NAME, true);

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

            // set node CSP_ULT_PRO.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Ult_ProBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Ult_ProBlock.NODE_NAME);
            methodOutput.setCsp_Ult_Pro(m4Op, xml, nNode);
            // set node CSP_PLAN_ANT.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Plan_AntBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Plan_AntBlock.NODE_NAME);
            methodOutput.setCsp_Plan_Ant(m4Op, xml, nNode);
            // set node CSP_SACAR_ORG.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Sacar_OrgBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Sacar_OrgBlock.NODE_NAME);
            methodOutput.setCsp_Sacar_Org(m4Op, xml, nNode);
            // set node CSP_ESTADO_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Estado_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Estado_Eval(m4Op, xml, nNode);
            // set node CSP_OBJ_EVA_ANT.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Obj_Eva_AntBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Obj_Eva_AntBlock.NODE_NAME);
            methodOutput.setCsp_Obj_Eva_Ant(m4Op, xml, nNode);
            // set node CSP_ESTADO_PLAN_ANT.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Estado_Plan_AntBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Estado_Plan_AntBlock.NODE_NAME);
            methodOutput.setCsp_Estado_Plan_Ant(m4Op, xml, nNode);

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


} /* end class Csp_Estado_ProcService */
