/**
 * Cyc_Ficha_EmpleadoService.java
 * Self generated code for Business Object CYC_FICHA_EMPLEADO.
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

package com.meta4.soapservices.services.rpc.cyc_ficha_empleado;

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
 * SOAP Service for Bussines Object CYC_FICHA_EMPLEADO.
 * @author Meta4
 */
public
class Cyc_Ficha_EmpleadoService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Ficha_EmpleadoService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_FICHA_EMPLEADO";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FICHA_EMPLEADO
     * CYC_FICHA_EMPLEADO
     * 
     */
    public
    Cyc_Ficha_EmpleadoOutput
    CYC_FICHA_EMPLEADO
    (
        String ARG_ID_EMPLEADO
    ) throws M4SoapException
    {
        m_log.debug("CYC_FICHA_EMPLEADO(...)");

        // return object for this method.
        Cyc_Ficha_EmpleadoOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FICHA_EMPLEADO";
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

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FICHA_DATOS_PERSONALES.
            m4Op.outputDef(Cyc_Ficha_Datos_PersonalesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Ficha_Datos_PersonalesBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Ficha_EmpleadoOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FICHA_DATOS_PERSONALES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Ficha_Datos_PersonalesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Ficha_Datos_PersonalesBlock.NODE_NAME);
            methodOutput.setCyc_Ficha_Datos_Personales(m4Op, xml, nNode);

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
    } /* end of method CYC_FICHA_EMPLEADO */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_H_OroBlock CYC_H_ORO
,        Cyc_Ficha_EmpleadoBlock CYC_FICHA_EMPLEADO
,        Cyc_Fix_Fecha_AltaBlock CYC_FIX_FECHA_ALTA
,        Cyc_Fechas_FeedbackBlock CYC_FECHAS_FEEDBACK
,        Cyc_Fix_Notas_Fase1Block CYC_FIX_NOTAS_FASE1
,        Cyc_Ficha_Datos_PersonalesBlock CYC_FICHA_DATOS_PERSONALES
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FICHA_EMPLEADO";
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
            if ( CYC_H_ORO != null ) 
            {
            	CYC_H_ORO.writeOperations(m4Op);
            }
            if ( CYC_FICHA_EMPLEADO != null ) 
            {
            	CYC_FICHA_EMPLEADO.writeOperations(m4Op);
            }
            if ( CYC_FIX_FECHA_ALTA != null ) 
            {
            	CYC_FIX_FECHA_ALTA.writeOperations(m4Op);
            }
            if ( CYC_FECHAS_FEEDBACK != null ) 
            {
            	CYC_FECHAS_FEEDBACK.writeOperations(m4Op);
            }
            if ( CYC_FIX_NOTAS_FASE1 != null ) 
            {
            	CYC_FIX_NOTAS_FASE1.writeOperations(m4Op);
            }
            if ( CYC_FICHA_DATOS_PERSONALES != null ) 
            {
            	CYC_FICHA_DATOS_PERSONALES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_H_ORO.
            m4Op.outputDef(Cyc_H_OroBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_H_OroBlock.NODE_NAME, true);

            // gets the values in CYC_FICHA_EMPLEADO.
            m4Op.outputDef(Cyc_Ficha_EmpleadoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Ficha_EmpleadoBlock.NODE_NAME, true);

            // gets the values in CYC_FIX_FECHA_ALTA.
            m4Op.outputDef(Cyc_Fix_Fecha_AltaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fix_Fecha_AltaBlock.NODE_NAME, true);

            // gets the values in CYC_FECHAS_FEEDBACK.
            m4Op.outputDef(Cyc_Fechas_FeedbackBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fechas_FeedbackBlock.NODE_NAME, true);

            // gets the values in CYC_FIX_NOTAS_FASE1.
            m4Op.outputDef(Cyc_Fix_Notas_Fase1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Fix_Notas_Fase1Block.NODE_NAME, true);

            // gets the values in CYC_FICHA_DATOS_PERSONALES.
            m4Op.outputDef(Cyc_Ficha_Datos_PersonalesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Ficha_Datos_PersonalesBlock.NODE_NAME, true);

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

            // set node CYC_H_ORO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_H_OroBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_H_OroBlock.NODE_NAME);
            methodOutput.setCyc_H_Oro(m4Op, xml, nNode);
            // set node CYC_FICHA_EMPLEADO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Ficha_EmpleadoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Ficha_EmpleadoBlock.NODE_NAME);
            methodOutput.setCyc_Ficha_Empleado(m4Op, xml, nNode);
            // set node CYC_FIX_FECHA_ALTA.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fix_Fecha_AltaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fix_Fecha_AltaBlock.NODE_NAME);
            methodOutput.setCyc_Fix_Fecha_Alta(m4Op, xml, nNode);
            // set node CYC_FECHAS_FEEDBACK.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fechas_FeedbackBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fechas_FeedbackBlock.NODE_NAME);
            methodOutput.setCyc_Fechas_Feedback(m4Op, xml, nNode);
            // set node CYC_FIX_NOTAS_FASE1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Fix_Notas_Fase1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Fix_Notas_Fase1Block.NODE_NAME);
            methodOutput.setCyc_Fix_Notas_Fase1(m4Op, xml, nNode);
            // set node CYC_FICHA_DATOS_PERSONALES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Ficha_Datos_PersonalesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Ficha_Datos_PersonalesBlock.NODE_NAME);
            methodOutput.setCyc_Ficha_Datos_Personales(m4Op, xml, nNode);

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


} /* end class Cyc_Ficha_EmpleadoService */
