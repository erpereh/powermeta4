/**
 * Csp_Actualizar_EstadoService.java
 * Self generated code for Business Object CSP_ACTUALIZAR_ESTADO.
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

package com.meta4.soapservices.services.rpc.csp_actualizar_estado;

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
 * SOAP Service for Bussines Object CSP_ACTUALIZAR_ESTADO.
 * @author Meta4
 */
public
class Csp_Actualizar_EstadoService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Actualizar_EstadoService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_ACTUALIZAR_ESTADO";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * ACTUALIZAR_ESTADO
     * Actualizar_Estado
     * 
     */
    public
    Actualizar_EstadoOutput
    ACTUALIZAR_ESTADO
    (
        String ARG_ID_HR
,        String ARG_ANIO_DESDE
,        String ARG_ANIO_HASTA
,        String ARG_TIPO
,        Double ARG_ESTADO
,        String ARG_ID_PROC
,        Calendar ARG_DT_STAR_EVAL
    ) throws M4SoapException
    {
        m_log.debug("ACTUALIZAR_ESTADO(...)");

        // return object for this method.
        Actualizar_EstadoOutput methodOutput = null;
        
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
            if (ARG_ESTADO != null) htArgs.put("ARG_ESTADO", M4BusinessMethodArg.toString(ARG_ESTADO));
            if (ARG_ID_PROC != null) htArgs.put("ARG_ID_PROC", M4BusinessMethodArg.toString(ARG_ID_PROC));
            if (ARG_DT_STAR_EVAL != null) htArgs.put("ARG_DT_STAR_EVAL", M4BusinessMethodArg.toString(ARG_DT_STAR_EVAL));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Actualizar_EstadoOutput();
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
    } /* end of method ACTUALIZAR_ESTADO */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Estado_EvalBlock CSP_ESTADO_EVAL
,        Csp_Actualizar_ComentarioBlock CSP_ACTUALIZAR_COMENTARIO
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
            if ( CSP_ESTADO_EVAL != null ) 
            {
            	CSP_ESTADO_EVAL.writeOperations(m4Op);
            }
            if ( CSP_ACTUALIZAR_COMENTARIO != null ) 
            {
            	CSP_ACTUALIZAR_COMENTARIO.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_ESTADO_EVAL.
            m4Op.outputDef(Csp_Estado_EvalBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_NAME, true);

            // gets the values in CSP_ACTUALIZAR_COMENTARIO.
            m4Op.outputDef(Csp_Actualizar_ComentarioBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Actualizar_ComentarioBlock.NODE_NAME, true);

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

            // set node CSP_ESTADO_EVAL.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Estado_EvalBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Estado_EvalBlock.NODE_NAME);
            methodOutput.setCsp_Estado_Eval(m4Op, xml, nNode);
            // set node CSP_ACTUALIZAR_COMENTARIO.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Actualizar_ComentarioBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Actualizar_ComentarioBlock.NODE_NAME);
            methodOutput.setCsp_Actualizar_Comentario(m4Op, xml, nNode);

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


} /* end class Csp_Actualizar_EstadoService */
