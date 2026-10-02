/**
 * Csp_Crear_ObjService.java
 * Self generated code for Business Object CSP_CREAR_OBJ.
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

package com.meta4.soapservices.services.rpc.csp_crear_obj;

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
 * SOAP Service for Bussines Object CSP_CREAR_OBJ.
 * @author Meta4
 */
public
class Csp_Crear_ObjService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Crear_ObjService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_CREAR_OBJ";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_CREAR_OBJ
     * CSP_CREAR_OBJ
     * 
     */
    public
    Csp_Crear_ObjOutput
    CSP_CREAR_OBJ
    (
        String ARG_NM_OBJ
,        String ARG_DESCRIPTION
,        String ARG_ANIO
,        Double ARG_PESO
,        Double ARG_ID_NIVEL
,        String ARG_ACUERDO
,        String ARG_COM_EVAL
,        String ARG_COM_EMP
,        String ARG_EMPLEADO
,        String ARG_PLAN
,        String ARG_TIPO
    ) throws M4SoapException
    {
        m_log.debug("CSP_CREAR_OBJ(...)");

        // return object for this method.
        Csp_Crear_ObjOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_OBJ";
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
            if (ARG_NM_OBJ != null) htArgs.put("ARG_NM_OBJ", M4BusinessMethodArg.toString(ARG_NM_OBJ));
            if (ARG_DESCRIPTION != null) htArgs.put("ARG_DESCRIPTION", M4BusinessMethodArg.toString(ARG_DESCRIPTION));
            if (ARG_ANIO != null) htArgs.put("ARG_ANIO", M4BusinessMethodArg.toString(ARG_ANIO));
            if (ARG_PESO != null) htArgs.put("ARG_PESO", M4BusinessMethodArg.toString(ARG_PESO));
            if (ARG_ID_NIVEL != null) htArgs.put("ARG_ID_NIVEL", M4BusinessMethodArg.toString(ARG_ID_NIVEL));
            if (ARG_ACUERDO != null) htArgs.put("ARG_ACUERDO", M4BusinessMethodArg.toString(ARG_ACUERDO));
            if (ARG_COM_EVAL != null) htArgs.put("ARG_COM_EVAL", M4BusinessMethodArg.toString(ARG_COM_EVAL));
            if (ARG_COM_EMP != null) htArgs.put("ARG_COM_EMP", M4BusinessMethodArg.toString(ARG_COM_EMP));
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));
            if (ARG_PLAN != null) htArgs.put("ARG_PLAN", M4BusinessMethodArg.toString(ARG_PLAN));
            if (ARG_TIPO != null) htArgs.put("ARG_TIPO", M4BusinessMethodArg.toString(ARG_TIPO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_GUARDAR_OBJ.
            m4Op.outputDef(Csp_Guardar_ObjBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Crear_ObjOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_GUARDAR_OBJ.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_ObjBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Obj(m4Op, xml, nNode);

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
    } /* end of method CSP_CREAR_OBJ */


    /**
     * CSP_CREAR_OBJ_2
     * CSP_CREAR_OBJ_2
     * CSP_CREAR_OBJ_2
     */
    public
    Csp_Crear_Obj_2Output
    CSP_CREAR_OBJ_2
    (
        String ARG_NM_OBJ
,        String ARG_DESCRIPTION
,        String ARG_ANIO
,        Double ARG_PESO
,        Double ARG_ID_NIVEL
,        String ARG_ACUERDO
,        String ARG_COM_EVAL
,        String ARG_COM_EMP
,        String ARG_EMPLEADO
,        String ARG_PLAN
,        String ARG_TIPO
,        String ARG_ID_MAG
,        Double ARG_PRESU
    ) throws M4SoapException
    {
        m_log.debug("CSP_CREAR_OBJ_2(...)");

        // return object for this method.
        Csp_Crear_Obj_2Output methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_OBJ";
        final String METHOD_NAME = "CARGA_1";
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
            if (ARG_NM_OBJ != null) htArgs.put("ARG_NM_OBJ", M4BusinessMethodArg.toString(ARG_NM_OBJ));
            if (ARG_DESCRIPTION != null) htArgs.put("ARG_DESCRIPTION", M4BusinessMethodArg.toString(ARG_DESCRIPTION));
            if (ARG_ANIO != null) htArgs.put("ARG_ANIO", M4BusinessMethodArg.toString(ARG_ANIO));
            if (ARG_PESO != null) htArgs.put("ARG_PESO", M4BusinessMethodArg.toString(ARG_PESO));
            if (ARG_ID_NIVEL != null) htArgs.put("ARG_ID_NIVEL", M4BusinessMethodArg.toString(ARG_ID_NIVEL));
            if (ARG_ACUERDO != null) htArgs.put("ARG_ACUERDO", M4BusinessMethodArg.toString(ARG_ACUERDO));
            if (ARG_COM_EVAL != null) htArgs.put("ARG_COM_EVAL", M4BusinessMethodArg.toString(ARG_COM_EVAL));
            if (ARG_COM_EMP != null) htArgs.put("ARG_COM_EMP", M4BusinessMethodArg.toString(ARG_COM_EMP));
            if (ARG_EMPLEADO != null) htArgs.put("ARG_EMPLEADO", M4BusinessMethodArg.toString(ARG_EMPLEADO));
            if (ARG_PLAN != null) htArgs.put("ARG_PLAN", M4BusinessMethodArg.toString(ARG_PLAN));
            if (ARG_TIPO != null) htArgs.put("ARG_TIPO", M4BusinessMethodArg.toString(ARG_TIPO));
            if (ARG_ID_MAG != null) htArgs.put("ARG_ID_MAG", M4BusinessMethodArg.toString(ARG_ID_MAG));
            if (ARG_PRESU != null) htArgs.put("ARG_PRESU", M4BusinessMethodArg.toString(ARG_PRESU));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_GUARDAR_OBJ.
            m4Op.outputDef(Csp_Guardar_ObjBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Crear_Obj_2Output();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_GUARDAR_OBJ.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_ObjBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Obj(m4Op, xml, nNode);

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
    } /* end of method CSP_CREAR_OBJ_2 */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Rol_ObjBlock CSP_ROL_OBJ
,        Csp_Guardar_ObjBlock CSP_GUARDAR_OBJ
,        Csp_Comprobar_PlanBlock CSP_COMPROBAR_PLAN
,        Csp_Level_ObjetivosBlock CSP_LEVEL_OBJETIVOS
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_GUARDAR_OBJ";
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
            if ( CSP_ROL_OBJ != null ) 
            {
            	CSP_ROL_OBJ.writeOperations(m4Op);
            }
            if ( CSP_GUARDAR_OBJ != null ) 
            {
            	CSP_GUARDAR_OBJ.writeOperations(m4Op);
            }
            if ( CSP_COMPROBAR_PLAN != null ) 
            {
            	CSP_COMPROBAR_PLAN.writeOperations(m4Op);
            }
            if ( CSP_LEVEL_OBJETIVOS != null ) 
            {
            	CSP_LEVEL_OBJETIVOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_ROL_OBJ.
            m4Op.outputDef(Csp_Rol_ObjBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Rol_ObjBlock.NODE_NAME, true);

            // gets the values in CSP_GUARDAR_OBJ.
            m4Op.outputDef(Csp_Guardar_ObjBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_NAME, true);

            // gets the values in CSP_COMPROBAR_PLAN.
            m4Op.outputDef(Csp_Comprobar_PlanBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Comprobar_PlanBlock.NODE_NAME, true);

            // gets the values in CSP_LEVEL_OBJETIVOS.
            m4Op.outputDef(Csp_Level_ObjetivosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Level_ObjetivosBlock.NODE_NAME, true);

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

            // set node CSP_ROL_OBJ.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Rol_ObjBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Rol_ObjBlock.NODE_NAME);
            methodOutput.setCsp_Rol_Obj(m4Op, xml, nNode);
            // set node CSP_GUARDAR_OBJ.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Guardar_ObjBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Guardar_ObjBlock.NODE_NAME);
            methodOutput.setCsp_Guardar_Obj(m4Op, xml, nNode);
            // set node CSP_COMPROBAR_PLAN.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Comprobar_PlanBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Comprobar_PlanBlock.NODE_NAME);
            methodOutput.setCsp_Comprobar_Plan(m4Op, xml, nNode);
            // set node CSP_LEVEL_OBJETIVOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Level_ObjetivosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Level_ObjetivosBlock.NODE_NAME);
            methodOutput.setCsp_Level_Objetivos(m4Op, xml, nNode);

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


} /* end class Csp_Crear_ObjService */
