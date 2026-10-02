/**
 * Cyc_Servicio_BasicoService.java
 * Self generated code for Business Object CYC_SERVICIO_BASICO.
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

package com.meta4.soapservices.services.rpc.cyc_servicio_basico;

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
 * SOAP Service for Bussines Object CYC_SERVICIO_BASICO.
 * @author Meta4
 */
public
class Cyc_Servicio_BasicoService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Servicio_BasicoService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_SERVICIO_BASICO";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_DATOS_BASICOS
     * CYC_DATOS_BASICOS
     * 
     */
    public
    Cyc_Datos_BasicosOutput
    CYC_DATOS_BASICOS
    (
        String ARG_USUARIO
    ) throws M4SoapException
    {
        m_log.debug("CYC_DATOS_BASICOS(...)");

        // return object for this method.
        Cyc_Datos_BasicosOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_DATOS_BASICOS";
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
            if (ARG_USUARIO != null) htArgs.put("ARG_USUARIO", M4BusinessMethodArg.toString(ARG_USUARIO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_DATOS_BASICOS.
            m4Op.outputDef(Cyc_Datos_BasicosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Datos_BasicosBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Datos_BasicosOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_DATOS_BASICOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Datos_BasicosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Datos_BasicosBlock.NODE_NAME);
            methodOutput.setCyc_Datos_Basicos(m4Op, xml, nNode);

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
    } /* end of method CYC_DATOS_BASICOS */


    /**
     * CYC_FECHA_FEEDBACK
     * CYC_FECHA_FEEDBACK
     * 
     */
    public
    Cyc_Fecha_FeedbackOutput
    CYC_FECHA_FEEDBACK
    (
        String ARG_FASE
,        String ARG_EMPLEADO
    ) throws M4SoapException
    {
        m_log.debug("CYC_FECHA_FEEDBACK(...)");

        // return object for this method.
        Cyc_Fecha_FeedbackOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FECHA_FEEDBACK";
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
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FECHA_FEEDBACK.
            m4Op.outputDef(Cyc_Fecha_FeedbackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fecha_FeedbackBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Fecha_FeedbackOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FECHA_FEEDBACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fecha_FeedbackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fecha_FeedbackBlock.NODE_NAME);
            methodOutput.setCyc_Fecha_Feedback(m4Op, xml, nNode);

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
    } /* end of method CYC_FECHA_FEEDBACK */


    /**
     * CYC_CONFIGURACION_CARGAR
     * CYC_CONFIGURACION_CARGAR
     * 
     */
    public
    Cyc_Configuracion_CargarOutput
    CYC_CONFIGURACION_CARGAR
    (
        String ARG_EMPLEADO
    ) throws M4SoapException
    {
        m_log.debug("CYC_CONFIGURACION_CARGAR(...)");

        // return object for this method.
        Cyc_Configuracion_CargarOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_CONFIGURACION_PCP";
        final String METHOD_NAME = "CARGAR";
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

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_CONFIGURACION_PCP.
            m4Op.outputDef(Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Configuracion_CargarOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_CONFIGURACION_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Configuracion_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Configuracion_Pcp(m4Op, xml, nNode);

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
    } /* end of method CYC_CONFIGURACION_CARGAR */


    /**
     * CYC_CONFIGURACION_GUARDAR
     * CYC_CONFIGURACION_GUARDAR
     * 
     */
    public
    Cyc_Configuracion_GuardarOutput
    CYC_CONFIGURACION_GUARDAR
    (
        String ARG_EMPLEADO
,        String ARG_JSON
    ) throws M4SoapException
    {
        m_log.debug("CYC_CONFIGURACION_GUARDAR(...)");

        // return object for this method.
        Cyc_Configuracion_GuardarOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_CONFIGURACION_PCP";
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
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));
            if (ARG_JSON != null) htArgs.put("ARG_JSON", M4BusinessMethodArg.toString(ARG_JSON));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_CONFIGURACION_PCP.
            m4Op.outputDef(Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Configuracion_GuardarOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_CONFIGURACION_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Configuracion_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Configuracion_Pcp(m4Op, xml, nNode);

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
    } /* end of method CYC_CONFIGURACION_GUARDAR */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_RolBlock CYC_ROL
,        Cyc_Datos_BasicosBlock CYC_DATOS_BASICOS
,        Cyc_Foto_EmpleadoBlock CYC_FOTO_EMPLEADO
,        Cyc_Fecha_FeedbackBlock CYC_FECHA_FEEDBACK
,        Cyc_Configuracion_PcpBlock CYC_CONFIGURACION_PCP
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_ROL";
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
            if ( CYC_ROL != null ) 
            {
            	CYC_ROL.writeOperations(m4Op);
            }
            if ( CYC_DATOS_BASICOS != null ) 
            {
            	CYC_DATOS_BASICOS.writeOperations(m4Op);
            }
            if ( CYC_FOTO_EMPLEADO != null ) 
            {
            	CYC_FOTO_EMPLEADO.writeOperations(m4Op);
            }
            if ( CYC_FECHA_FEEDBACK != null ) 
            {
            	CYC_FECHA_FEEDBACK.writeOperations(m4Op);
            }
            if ( CYC_CONFIGURACION_PCP != null ) 
            {
            	CYC_CONFIGURACION_PCP.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_ROL.
            m4Op.outputDef(Cyc_RolBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_RolBlock.NODE_NAME, true);

            // gets the values in CYC_DATOS_BASICOS.
            m4Op.outputDef(Cyc_Datos_BasicosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Datos_BasicosBlock.NODE_NAME, true);

            // gets the values in CYC_FOTO_EMPLEADO.
            m4Op.outputDef(Cyc_Foto_EmpleadoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Foto_EmpleadoBlock.NODE_NAME, true);

            // gets the values in CYC_FECHA_FEEDBACK.
            m4Op.outputDef(Cyc_Fecha_FeedbackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fecha_FeedbackBlock.NODE_NAME, true);

            // gets the values in CYC_CONFIGURACION_PCP.
            m4Op.outputDef(Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_NAME, true);

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

            // set node CYC_ROL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_RolBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_RolBlock.NODE_NAME);
            methodOutput.setCyc_Rol(m4Op, xml, nNode);
            // set node CYC_DATOS_BASICOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Datos_BasicosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Datos_BasicosBlock.NODE_NAME);
            methodOutput.setCyc_Datos_Basicos(m4Op, xml, nNode);
            // set node CYC_FOTO_EMPLEADO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Foto_EmpleadoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Foto_EmpleadoBlock.NODE_NAME);
            methodOutput.setCyc_Foto_Empleado(m4Op, xml, nNode);
            // set node CYC_FECHA_FEEDBACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fecha_FeedbackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fecha_FeedbackBlock.NODE_NAME);
            methodOutput.setCyc_Fecha_Feedback(m4Op, xml, nNode);
            // set node CYC_CONFIGURACION_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Configuracion_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Configuracion_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Configuracion_Pcp(m4Op, xml, nNode);

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


} /* end class Cyc_Servicio_BasicoService */
