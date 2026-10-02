/**
 * Csp_Lista_Empl_DepenService.java
 * Self generated code for Business Object CSP_LISTA_EMPL_DEPEN.
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

package com.meta4.soapservices.services.rpc.csp_lista_empl_depen;

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
 * SOAP Service for Bussines Object CSP_LISTA_EMPL_DEPEN.
 * @author Meta4
 */
public
class Csp_Lista_Empl_DepenService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Lista_Empl_DepenService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_LISTA_EMPL_DEPEN";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_LISTA_EMPL_DEPEN
     * CSP_LISTA_EMPL_DEPEN
     * 
     */
    public
    Csp_Lista_Empl_DepenOutput
    CSP_LISTA_EMPL_DEPEN
    (
        String ARG_EMPLEADO
,        String ARG_ANNO
,        Calendar ARG_FECHA_INI_PROC
,        String ARG_AREA
,        String ARG_UNIDAD
,        String ARG_SERVICIO
    ) throws M4SoapException
    {
        m_log.debug("CSP_LISTA_EMPL_DEPEN(...)");

        // return object for this method.
        Csp_Lista_Empl_DepenOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_LISTA_EMPL_DEPEN";
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
            if (ARG_ANNO != null) htArgs.put("ARG_ANNO", M4BusinessMethodArg.toString(ARG_ANNO));
            if (ARG_FECHA_INI_PROC != null) htArgs.put("ARG_FECHA_INI_PROC", M4BusinessMethodArg.toString(ARG_FECHA_INI_PROC));
            if (ARG_AREA != null) htArgs.put("ARG_AREA", M4BusinessMethodArg.toString(ARG_AREA));
            if (ARG_UNIDAD != null) htArgs.put("ARG_UNIDAD", M4BusinessMethodArg.toString(ARG_UNIDAD));
            if (ARG_SERVICIO != null) htArgs.put("ARG_SERVICIO", M4BusinessMethodArg.toString(ARG_SERVICIO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_LISTA_EMPL_DEPEN.
            m4Op.outputDef(Csp_Lista_Empl_DepenBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Lista_Empl_DepenBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Lista_Empl_DepenOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_LISTA_EMPL_DEPEN.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Lista_Empl_DepenBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Lista_Empl_DepenBlock.NODE_NAME);
            methodOutput.setCsp_Lista_Empl_Depen(m4Op, xml, nNode);

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
    } /* end of method CSP_LISTA_EMPL_DEPEN */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Lista_Empl_DepenBlock CSP_LISTA_EMPL_DEPEN
,        Csp_Calcula_DependientesBlock CSP_CALCULA_DEPENDIENTES
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_LISTA_EMPL_DEPEN";
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
            if ( CSP_LISTA_EMPL_DEPEN != null ) 
            {
            	CSP_LISTA_EMPL_DEPEN.writeOperations(m4Op);
            }
            if ( CSP_CALCULA_DEPENDIENTES != null ) 
            {
            	CSP_CALCULA_DEPENDIENTES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_LISTA_EMPL_DEPEN.
            m4Op.outputDef(Csp_Lista_Empl_DepenBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Lista_Empl_DepenBlock.NODE_NAME, true);

            // gets the values in CSP_CALCULA_DEPENDIENTES.
            m4Op.outputDef(Csp_Calcula_DependientesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Calcula_DependientesBlock.NODE_NAME, true);

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

            // set node CSP_LISTA_EMPL_DEPEN.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Lista_Empl_DepenBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Lista_Empl_DepenBlock.NODE_NAME);
            methodOutput.setCsp_Lista_Empl_Depen(m4Op, xml, nNode);
            // set node CSP_CALCULA_DEPENDIENTES.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Calcula_DependientesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Calcula_DependientesBlock.NODE_NAME);
            methodOutput.setCsp_Calcula_Dependientes(m4Op, xml, nNode);

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


} /* end class Csp_Lista_Empl_DepenService */
