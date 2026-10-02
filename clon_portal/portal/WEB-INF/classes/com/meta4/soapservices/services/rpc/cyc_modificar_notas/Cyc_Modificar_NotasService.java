/**
 * Cyc_Modificar_NotasService.java
 * Self generated code for Business Object CYC_MODIFICAR_NOTAS.
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

package com.meta4.soapservices.services.rpc.cyc_modificar_notas;

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
 * SOAP Service for Bussines Object CYC_MODIFICAR_NOTAS.
 * @author Meta4
 */
public
class Cyc_Modificar_NotasService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Modificar_NotasService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_MODIFICAR_NOTAS";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_MODIFICAR_FASE_I
     * CYC_MODIFICAR_FASE_I
     * CYC_MODIFICAR_FASE_I
     */
    public
    Cyc_Modificar_Fase_IOutput
    CYC_MODIFICAR_FASE_I
    (
        Cyc_Modificar_Fase_IBlock CYC_MODIFICAR_FASE_I
    ) throws M4SoapException
    {
        m_log.debug("CYC_MODIFICAR_FASE_I(...)");

        // return object for this method.
        Cyc_Modificar_Fase_IOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_MODIFICAR_FASE_I";
        final String METHOD_NAME = "IMPUTSTREAM";
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
            if ( CYC_MODIFICAR_FASE_I != null ) 
            {
            	CYC_MODIFICAR_FASE_I.writeOperations(m4Op);
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
            methodOutput = new Cyc_Modificar_Fase_IOutput();
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
    } /* end of method CYC_MODIFICAR_FASE_I */


    /**
     * CYC_MODIFICAR_FASE_II
     * CYC_MODIFICAR_FASE_II
     * 
     */
    public
    Cyc_Modificar_Fase_IiOutput
    CYC_MODIFICAR_FASE_II
    (
        Cyc_Modificar_Fase_IiBlock CYC_MODIFICAR_FASE_II
    ) throws M4SoapException
    {
        m_log.debug("CYC_MODIFICAR_FASE_II(...)");

        // return object for this method.
        Cyc_Modificar_Fase_IiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_MODIFICAR_FASE_II";
        final String METHOD_NAME = "IMPUTSTREAM";
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
            if ( CYC_MODIFICAR_FASE_II != null ) 
            {
            	CYC_MODIFICAR_FASE_II.writeOperations(m4Op);
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
            methodOutput = new Cyc_Modificar_Fase_IiOutput();
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
    } /* end of method CYC_MODIFICAR_FASE_II */


    /**
     * CYC_MODIFICAR_FASE_III
     * CYC_MODIFICAR_FASE_III
     * 
     */
    public
    Cyc_Modificar_Fase_IiiOutput
    CYC_MODIFICAR_FASE_III
    (
        Cyc_Modificar_Fase_IiiBlock CYC_MODIFICAR_FASE_III
    ) throws M4SoapException
    {
        m_log.debug("CYC_MODIFICAR_FASE_III(...)");

        // return object for this method.
        Cyc_Modificar_Fase_IiiOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_MODIFICAR_FASE_III";
        final String METHOD_NAME = "IMPUTSTREAM";
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
            if ( CYC_MODIFICAR_FASE_III != null ) 
            {
            	CYC_MODIFICAR_FASE_III.writeOperations(m4Op);
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
            methodOutput = new Cyc_Modificar_Fase_IiiOutput();
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
    } /* end of method CYC_MODIFICAR_FASE_III */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Modificar_NotasBlock CYC_MODIFICAR_NOTAS
,        Cyc_Modificar_Fase_IBlock CYC_MODIFICAR_FASE_I
,        Cyc_Modificar_Fase_IiBlock CYC_MODIFICAR_FASE_II
,        Cyc_Modificar_Fase_IiiBlock CYC_MODIFICAR_FASE_III
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_MODIFICAR_NOTAS";
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
            if ( CYC_MODIFICAR_NOTAS != null ) 
            {
            	CYC_MODIFICAR_NOTAS.writeOperations(m4Op);
            }
            if ( CYC_MODIFICAR_FASE_I != null ) 
            {
            	CYC_MODIFICAR_FASE_I.writeOperations(m4Op);
            }
            if ( CYC_MODIFICAR_FASE_II != null ) 
            {
            	CYC_MODIFICAR_FASE_II.writeOperations(m4Op);
            }
            if ( CYC_MODIFICAR_FASE_III != null ) 
            {
            	CYC_MODIFICAR_FASE_III.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_MODIFICAR_NOTAS.
            m4Op.outputDef(Cyc_Modificar_NotasBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Modificar_NotasBlock.NODE_NAME, true);

            // gets the values in CYC_MODIFICAR_FASE_I.
            m4Op.outputDef(Cyc_Modificar_Fase_IBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Modificar_Fase_IBlock.NODE_NAME, true);

            // gets the values in CYC_MODIFICAR_FASE_II.
            m4Op.outputDef(Cyc_Modificar_Fase_IiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Modificar_Fase_IiBlock.NODE_NAME, true);

            // gets the values in CYC_MODIFICAR_FASE_III.
            m4Op.outputDef(Cyc_Modificar_Fase_IiiBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Modificar_Fase_IiiBlock.NODE_NAME, true);

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

            // set node CYC_MODIFICAR_NOTAS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Modificar_NotasBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Modificar_NotasBlock.NODE_NAME);
            methodOutput.setCyc_Modificar_Notas(m4Op, xml, nNode);
            // set node CYC_MODIFICAR_FASE_I.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Modificar_Fase_IBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Modificar_Fase_IBlock.NODE_NAME);
            methodOutput.setCyc_Modificar_Fase_I(m4Op, xml, nNode);
            // set node CYC_MODIFICAR_FASE_II.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Modificar_Fase_IiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Modificar_Fase_IiBlock.NODE_NAME);
            methodOutput.setCyc_Modificar_Fase_Ii(m4Op, xml, nNode);
            // set node CYC_MODIFICAR_FASE_III.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Modificar_Fase_IiiBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Modificar_Fase_IiiBlock.NODE_NAME);
            methodOutput.setCyc_Modificar_Fase_Iii(m4Op, xml, nNode);

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


} /* end class Cyc_Modificar_NotasService */
