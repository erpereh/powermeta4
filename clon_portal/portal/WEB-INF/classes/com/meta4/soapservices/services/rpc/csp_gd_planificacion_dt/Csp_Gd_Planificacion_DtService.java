/**
 * Csp_Gd_Planificacion_DtService.java
 * Self generated code for Business Object CSP_GD_PLANIFICACION_DT.
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

package com.meta4.soapservices.services.rpc.csp_gd_planificacion_dt;

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
 * SOAP Service for Bussines Object CSP_GD_PLANIFICACION_DT.
 * @author Meta4
 */
public
class Csp_Gd_Planificacion_DtService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Gd_Planificacion_DtService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_GD_PLANIFICACION_DT";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_GD_PLANIFICACION_DT
     * CSP_GD_PLANIFICACION_DT
     * 
     */
    public
    Csp_Gd_Planificacion_DtOutput
    CSP_GD_PLANIFICACION_DT
    (
        String ARG_EMPLEADO
,        String ARG_ANIO
,        String ARG_EVALUADOR
,        String TIPO_EVALUADOR
    ) throws M4SoapException
    {
        m_log.debug("CSP_GD_PLANIFICACION_DT(...)");

        // return object for this method.
        Csp_Gd_Planificacion_DtOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_PLANIFICACION_DT";
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
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));
            if (ARG_ANIO != null) htArgs.put("ARG_ANIO", M4BusinessMethodArg.toString(ARG_ANIO));
            if (ARG_EVALUADOR != null) htArgs.put("ARG_EVALUADOR", M4BusinessMethodArg.toString(ARG_EVALUADOR));
            if (TIPO_EVALUADOR != null) htArgs.put("TIPO_EVALUADOR", M4BusinessMethodArg.toString(TIPO_EVALUADOR));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_PLANIFICACION_DT.
            m4Op.outputDef(Csp_Planificacion_DtBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Planificacion_DtBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Gd_Planificacion_DtOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_PLANIFICACION_DT.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Planificacion_DtBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Planificacion_DtBlock.NODE_NAME);
            methodOutput.setCsp_Planificacion_Dt(m4Op, xml, nNode);

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
    } /* end of method CSP_GD_PLANIFICACION_DT */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        H_EvaluateBlock H_EVALUATE
,        Csp_Planificacion_DtBlock CSP_PLANIFICACION_DT
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_PLANIFICACION_DT";
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
            if ( H_EVALUATE != null ) 
            {
            	H_EVALUATE.writeOperations(m4Op);
            }
            if ( CSP_PLANIFICACION_DT != null ) 
            {
            	CSP_PLANIFICACION_DT.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in H_EVALUATE.
            m4Op.outputDef(H_EvaluateBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, H_EvaluateBlock.NODE_NAME, true);

            // gets the values in CSP_PLANIFICACION_DT.
            m4Op.outputDef(Csp_Planificacion_DtBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Planificacion_DtBlock.NODE_NAME, true);

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

            // set node H_EVALUATE.
            nData = xml.findData(M4OBJECT_ALIAS, H_EvaluateBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + H_EvaluateBlock.NODE_NAME);
            methodOutput.setH_Evaluate(m4Op, xml, nNode);
            // set node CSP_PLANIFICACION_DT.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Planificacion_DtBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Planificacion_DtBlock.NODE_NAME);
            methodOutput.setCsp_Planificacion_Dt(m4Op, xml, nNode);

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


} /* end class Csp_Gd_Planificacion_DtService */
