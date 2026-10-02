/**
 * Cyc_Servicio_FeedbackService.java
 * Self generated code for Business Object CYC_SERVICIO_FEEDBACK.
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

package com.meta4.soapservices.services.rpc.cyc_servicio_feedback;

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
 * SOAP Service for Bussines Object CYC_SERVICIO_FEEDBACK.
 * @author Meta4
 */
public
class Cyc_Servicio_FeedbackService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Servicio_FeedbackService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FASE_I
     * CYC_FASE_I
     * 
     */
    public
    Cyc_Fase_IOutput
    CYC_FASE_I
    (
        String ARG_ID_EMPLEADO
,        Calendar ARG_DT_START
    ) throws M4SoapException
    {
        m_log.debug("CYC_FASE_I(...)");

        // return object for this method.
        Cyc_Fase_IOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_CARGA_FASE_I";
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
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FEED_BACK.
            m4Op.outputDef(Cyc_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Fase_IOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Feed_Back(m4Op, xml, nNode);

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
    } /* end of method CYC_FASE_I */


    /**
     * CYC_FASE_II
     * CYC_FASE_II
     * 
     */
    public
    Cyc_Fase_IiOutput
    CYC_FASE_II
    (
        String ARG_ID_EMPLEADO
,        Calendar ARG_DT_START
    ) throws M4SoapException
    {
        m_log.debug("CYC_FASE_II(...)");

        // return object for this method.
        Cyc_Fase_IiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_CARGA_FASE_II";
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
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FEED_BACK.
            m4Op.outputDef(Cyc_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Fase_IiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Feed_Back(m4Op, xml, nNode);

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
    } /* end of method CYC_FASE_II */


    /**
     * CYC_FASE_III
     * CYC_FASE_III
     * 
     */
    public
    Cyc_Fase_IiiOutput
    CYC_FASE_III
    (
        String ARG_ID_EMPLEADO
,        Calendar ARG_DT_START
    ) throws M4SoapException
    {
        m_log.debug("CYC_FASE_III(...)");

        // return object for this method.
        Cyc_Fase_IiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_CARGA_FASE_III";
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
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FEED_BACK.
            m4Op.outputDef(Cyc_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Fase_IiiOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Feed_Back(m4Op, xml, nNode);

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
    } /* end of method CYC_FASE_III */


    /**
     * CYC_GRABAR_FEEDBACK
     * CYC_GRABAR_FEEDBACK
     * 
     */
    public
    Cyc_Grabar_FeedbackOutput
    CYC_GRABAR_FEEDBACK
    (
        Cyc_Feed_BackBlock CYC_FEED_BACK
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRABAR_FEEDBACK(...)");

        // return object for this method.
        Cyc_Grabar_FeedbackOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_GRABACION";
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
            if ( CYC_FEED_BACK != null ) 
            {
            	CYC_FEED_BACK.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grabar_FeedbackOutput();
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
    } /* end of method CYC_GRABAR_FEEDBACK */


    /**
     * CYC_GRABAR_SELECCION
     * CYC_GRABAR_SELECCION
     * 
     */
    public
    Cyc_Grabar_SeleccionOutput
    CYC_GRABAR_SELECCION
    (
        Cyc_Feedback_SeleccionBlock CYC_FEEDBACK_SELECCION
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRABAR_SELECCION(...)");

        // return object for this method.
        Cyc_Grabar_SeleccionOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEEDBACK_SELECCION";
        final String METHOD_NAME = "CYC_GRABACION";
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
            if ( CYC_FEEDBACK_SELECCION != null ) 
            {
            	CYC_FEEDBACK_SELECCION.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grabar_SeleccionOutput();
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
    } /* end of method CYC_GRABAR_SELECCION */


    /**
     * CYC_GRABAR_PUNTOS_FASE
     * CYC_GRABAR_PUNTOS_FASE
     * 
     */
    public
    Cyc_Grabar_Puntos_FaseOutput
    CYC_GRABAR_PUNTOS_FASE
    (
        Cyc_Puntos_FaseBlock CYC_PUNTOS_FASE
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRABAR_PUNTOS_FASE(...)");

        // return object for this method.
        Cyc_Grabar_Puntos_FaseOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_PUNTOS_FASE";
        final String METHOD_NAME = "CYC_GRABACION";
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
            if ( CYC_PUNTOS_FASE != null ) 
            {
            	CYC_PUNTOS_FASE.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grabar_Puntos_FaseOutput();
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
    } /* end of method CYC_GRABAR_PUNTOS_FASE */


    /**
     * CYC_GRABAR_OBSERVACIONES
     * CYC_GRABAR_OBSERVACIONES
     * 
     */
    public
    Cyc_Grabar_ObservacionesOutput
    CYC_GRABAR_OBSERVACIONES
    (
        Cyc_Feedback_ObservacionesBlock CYC_FEEDBACK_OBSERVACIONES
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRABAR_OBSERVACIONES(...)");

        // return object for this method.
        Cyc_Grabar_ObservacionesOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEEDBACK_OBSERVACIONES";
        final String METHOD_NAME = "CYC_GRABACION";
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
            if ( CYC_FEEDBACK_OBSERVACIONES != null ) 
            {
            	CYC_FEEDBACK_OBSERVACIONES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grabar_ObservacionesOutput();
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
    } /* end of method CYC_GRABAR_OBSERVACIONES */


    /**
     * CYC_CARGA_RECOMENDACIONES
     * CYC_CARGA_RECOMENDACIONES
     * 
     */
    public
    Cyc_Carga_RecomendacionesOutput
    CYC_CARGA_RECOMENDACIONES
    (
        String ARG_ID_EMPLEADO
,        String ARG_ID_FASE
,        String ARG_DT_START
,        String ARG_ID_ORGANIZATION
    ) throws M4SoapException
    {
        m_log.debug("CYC_CARGA_RECOMENDACIONES(...)");

        // return object for this method.
        Cyc_Carga_RecomendacionesOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_CARGA_RECOMENDACIONES";
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
            if (ARG_ID_FASE != null) htArgs.put("ARG_ID_FASE", M4BusinessMethodArg.toString(ARG_ID_FASE));
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));
            if (ARG_ID_ORGANIZATION != null) htArgs.put("ARG_ID_ORGANIZATION", M4BusinessMethodArg.toString(ARG_ID_ORGANIZATION));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FEEDBACK_OBSERVACIONES.
            m4Op.outputDef(Cyc_Feedback_ObservacionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feedback_ObservacionesBlock.NODE_NAME, true);

            // gets the values in CYC_FEEDBACK_RECOMENDACIONES.
            m4Op.outputDef(Cyc_Feedback_RecomendacionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feedback_RecomendacionesBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Carga_RecomendacionesOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FEEDBACK_OBSERVACIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feedback_ObservacionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feedback_ObservacionesBlock.NODE_NAME);
            methodOutput.setCyc_Feedback_Observaciones(m4Op, xml, nNode);
            // set node CYC_FEEDBACK_RECOMENDACIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feedback_RecomendacionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feedback_RecomendacionesBlock.NODE_NAME);
            methodOutput.setCyc_Feedback_Recomendaciones(m4Op, xml, nNode);

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
    } /* end of method CYC_CARGA_RECOMENDACIONES */


    /**
     * CYC_GRABAR_RECOMENDACIONES
     * CYC_GRABAR_RECOMENDACIONES
     * 
     */
    public
    Cyc_Grabar_RecomendacionesOutput
    CYC_GRABAR_RECOMENDACIONES
    (
        Cyc_Feedback_RecomendacionesBlock CYC_FEEDBACK_RECOMENDACIONES
    ) throws M4SoapException
    {
        m_log.debug("CYC_GRABAR_RECOMENDACIONES(...)");

        // return object for this method.
        Cyc_Grabar_RecomendacionesOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEEDBACK_RECOMENDACIONES";
        final String METHOD_NAME = "CYC_GRABACION";
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
            if ( CYC_FEEDBACK_RECOMENDACIONES != null ) 
            {
            	CYC_FEEDBACK_RECOMENDACIONES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Grabar_RecomendacionesOutput();
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
    } /* end of method CYC_GRABAR_RECOMENDACIONES */


    /**
     * CYC_CARGA_FEEDBACK_EMPLEADO
     * CYC_CARGA_FEEDBACK_EMPLEADO
     * 
     */
    public
    Cyc_Carga_Feedback_EmpleadoOutput
    CYC_CARGA_FEEDBACK_EMPLEADO
    (
        String ARG_ID_EMPLEADO
,        String ARG_ID_ORGANIZATION
,        String ARG_ID_FASE
,        String ARG_DT_START
    ) throws M4SoapException
    {
        m_log.debug("CYC_CARGA_FEEDBACK_EMPLEADO(...)");

        // return object for this method.
        Cyc_Carga_Feedback_EmpleadoOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FEED_BACK";
        final String METHOD_NAME = "CYC_CARGA_FEEDBACK";
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
            if (ARG_ID_ORGANIZATION != null) htArgs.put("ARG_ID_ORGANIZATION", M4BusinessMethodArg.toString(ARG_ID_ORGANIZATION));
            if (ARG_ID_FASE != null) htArgs.put("ARG_ID_FASE", M4BusinessMethodArg.toString(ARG_ID_FASE));
            if (ARG_DT_START != null) htArgs.put("ARG_DT_START", M4BusinessMethodArg.toString(ARG_DT_START));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FEED_BACK.
            m4Op.outputDef(Cyc_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Carga_Feedback_EmpleadoOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Feed_Back(m4Op, xml, nNode);

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
    } /* end of method CYC_CARGA_FEEDBACK_EMPLEADO */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Fase_PcpBlock CYC_FASE_PCP
,        Cyc_Feed_BackBlock CYC_FEED_BACK
,        Cyc_Puntos_FaseBlock CYC_PUNTOS_FASE
,        Cyc_Feedback_SeleccionBlock CYC_FEEDBACK_SELECCION
,        Cyc_Penultimo_Feed_BackBlock CYC_PENULTIMO_FEED_BACK
,        Cyc_Feedback_ObservacionesBlock CYC_FEEDBACK_OBSERVACIONES
,        Cyc_Feedback_RecomendacionesBlock CYC_FEEDBACK_RECOMENDACIONES
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FASE_PCP";
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
            if ( CYC_FASE_PCP != null ) 
            {
            	CYC_FASE_PCP.writeOperations(m4Op);
            }
            if ( CYC_FEED_BACK != null ) 
            {
            	CYC_FEED_BACK.writeOperations(m4Op);
            }
            if ( CYC_PUNTOS_FASE != null ) 
            {
            	CYC_PUNTOS_FASE.writeOperations(m4Op);
            }
            if ( CYC_FEEDBACK_SELECCION != null ) 
            {
            	CYC_FEEDBACK_SELECCION.writeOperations(m4Op);
            }
            if ( CYC_PENULTIMO_FEED_BACK != null ) 
            {
            	CYC_PENULTIMO_FEED_BACK.writeOperations(m4Op);
            }
            if ( CYC_FEEDBACK_OBSERVACIONES != null ) 
            {
            	CYC_FEEDBACK_OBSERVACIONES.writeOperations(m4Op);
            }
            if ( CYC_FEEDBACK_RECOMENDACIONES != null ) 
            {
            	CYC_FEEDBACK_RECOMENDACIONES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FASE_PCP.
            m4Op.outputDef(Cyc_Fase_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fase_PcpBlock.NODE_NAME, true);

            // gets the values in CYC_FEED_BACK.
            m4Op.outputDef(Cyc_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_NAME, true);

            // gets the values in CYC_PUNTOS_FASE.
            m4Op.outputDef(Cyc_Puntos_FaseBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Puntos_FaseBlock.NODE_NAME, true);

            // gets the values in CYC_FEEDBACK_SELECCION.
            m4Op.outputDef(Cyc_Feedback_SeleccionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feedback_SeleccionBlock.NODE_NAME, true);

            // gets the values in CYC_PENULTIMO_FEED_BACK.
            m4Op.outputDef(Cyc_Penultimo_Feed_BackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Penultimo_Feed_BackBlock.NODE_NAME, true);

            // gets the values in CYC_FEEDBACK_OBSERVACIONES.
            m4Op.outputDef(Cyc_Feedback_ObservacionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feedback_ObservacionesBlock.NODE_NAME, true);

            // gets the values in CYC_FEEDBACK_RECOMENDACIONES.
            m4Op.outputDef(Cyc_Feedback_RecomendacionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Feedback_RecomendacionesBlock.NODE_NAME, true);

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

            // set node CYC_FASE_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fase_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fase_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Fase_Pcp(m4Op, xml, nNode);
            // set node CYC_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Feed_Back(m4Op, xml, nNode);
            // set node CYC_PUNTOS_FASE.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Puntos_FaseBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Puntos_FaseBlock.NODE_NAME);
            methodOutput.setCyc_Puntos_Fase(m4Op, xml, nNode);
            // set node CYC_FEEDBACK_SELECCION.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feedback_SeleccionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feedback_SeleccionBlock.NODE_NAME);
            methodOutput.setCyc_Feedback_Seleccion(m4Op, xml, nNode);
            // set node CYC_PENULTIMO_FEED_BACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Penultimo_Feed_BackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Penultimo_Feed_BackBlock.NODE_NAME);
            methodOutput.setCyc_Penultimo_Feed_Back(m4Op, xml, nNode);
            // set node CYC_FEEDBACK_OBSERVACIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feedback_ObservacionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feedback_ObservacionesBlock.NODE_NAME);
            methodOutput.setCyc_Feedback_Observaciones(m4Op, xml, nNode);
            // set node CYC_FEEDBACK_RECOMENDACIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Feedback_RecomendacionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Feedback_RecomendacionesBlock.NODE_NAME);
            methodOutput.setCyc_Feedback_Recomendaciones(m4Op, xml, nNode);

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


} /* end class Cyc_Servicio_FeedbackService */
