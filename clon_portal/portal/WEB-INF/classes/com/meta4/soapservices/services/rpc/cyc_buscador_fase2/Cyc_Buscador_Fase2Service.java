/**
 * Cyc_Buscador_Fase2Service.java
 * Self generated code for Business Object CYC_BUSCADOR_FASE2.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_fase2;

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
 * SOAP Service for Bussines Object CYC_BUSCADOR_FASE2.
 * @author Meta4
 */
public
class Cyc_Buscador_Fase2Service
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Buscador_Fase2Service.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_BUSCADOR_FASE2";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_BUSCADOR_FASE2
     * CYC_BUSCADOR_FASE2
     * 
     */
    public
    Cyc_Buscador_Fase2Output
    CYC_BUSCADOR_FASE2
    (
        Cyc_Buscador_Inicio_3Block CYC_BUSCADOR_INICIO_3
    ) throws M4SoapException
    {
        m_log.debug("CYC_BUSCADOR_FASE2(...)");

        // return object for this method.
        Cyc_Buscador_Fase2Output methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_BUSCADOR_INICIO_3";
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
            if ( CYC_BUSCADOR_INICIO_3 != null ) 
            {
            	CYC_BUSCADOR_INICIO_3.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_RESULTADO_BUSCADOR_3.
            m4Op.outputDef(Cyc_Resultado_Buscador_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Resultado_Buscador_3Block.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Buscador_Fase2Output();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_RESULTADO_BUSCADOR_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Resultado_Buscador_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Resultado_Buscador_3Block.NODE_NAME);
            methodOutput.setCyc_Resultado_Buscador_3(m4Op, xml, nNode);

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
    } /* end of method CYC_BUSCADOR_FASE2 */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Pila_3Block CYC_PILA_3
,        Cyc_Datos_Pb_2Block CYC_DATOS_PB_2
,        Cyc_Busca_Faseii_2Block CYC_BUSCA_FASEII_2
,        Cyc_Obtener_Id_Hr_3Block CYC_OBTENER_ID_HR_3
,        Cyc_Mayor_FocalizadaBlock CYC_MAYOR_FOCALIZADA
,        Cyc_Buscador_Inicio_3Block CYC_BUSCADOR_INICIO_3
,        Cyc_Mayor_Feed_Back_1Block CYC_MAYOR_FEED_BACK_1
,        Cyc_Mayor_Titulacion_3Block CYC_MAYOR_TITULACION_3
,        Cyc_Mayor_Certificado_3Block CYC_MAYOR_CERTIFICADO_3
,        Cyc_Resultado_Buscador_3Block CYC_RESULTADO_BUSCADOR_3
,        Cyc_Realizacion_Feedback_2Block CYC_REALIZACION_FEEDBACK_2
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_BUSCADOR_INICIO_3";
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
            if ( CYC_PILA_3 != null ) 
            {
            	CYC_PILA_3.writeOperations(m4Op);
            }
            if ( CYC_DATOS_PB_2 != null ) 
            {
            	CYC_DATOS_PB_2.writeOperations(m4Op);
            }
            if ( CYC_BUSCA_FASEII_2 != null ) 
            {
            	CYC_BUSCA_FASEII_2.writeOperations(m4Op);
            }
            if ( CYC_OBTENER_ID_HR_3 != null ) 
            {
            	CYC_OBTENER_ID_HR_3.writeOperations(m4Op);
            }
            if ( CYC_MAYOR_FOCALIZADA != null ) 
            {
            	CYC_MAYOR_FOCALIZADA.writeOperations(m4Op);
            }
            if ( CYC_BUSCADOR_INICIO_3 != null ) 
            {
            	CYC_BUSCADOR_INICIO_3.writeOperations(m4Op);
            }
            if ( CYC_MAYOR_FEED_BACK_1 != null ) 
            {
            	CYC_MAYOR_FEED_BACK_1.writeOperations(m4Op);
            }
            if ( CYC_MAYOR_TITULACION_3 != null ) 
            {
            	CYC_MAYOR_TITULACION_3.writeOperations(m4Op);
            }
            if ( CYC_MAYOR_CERTIFICADO_3 != null ) 
            {
            	CYC_MAYOR_CERTIFICADO_3.writeOperations(m4Op);
            }
            if ( CYC_RESULTADO_BUSCADOR_3 != null ) 
            {
            	CYC_RESULTADO_BUSCADOR_3.writeOperations(m4Op);
            }
            if ( CYC_REALIZACION_FEEDBACK_2 != null ) 
            {
            	CYC_REALIZACION_FEEDBACK_2.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_PILA_3.
            m4Op.outputDef(Cyc_Pila_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Pila_3Block.NODE_NAME, true);

            // gets the values in CYC_DATOS_PB_2.
            m4Op.outputDef(Cyc_Datos_Pb_2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Datos_Pb_2Block.NODE_NAME, true);

            // gets the values in CYC_BUSCA_FASEII_2.
            m4Op.outputDef(Cyc_Busca_Faseii_2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Busca_Faseii_2Block.NODE_NAME, true);

            // gets the values in CYC_OBTENER_ID_HR_3.
            m4Op.outputDef(Cyc_Obtener_Id_Hr_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Obtener_Id_Hr_3Block.NODE_NAME, true);

            // gets the values in CYC_MAYOR_FOCALIZADA.
            m4Op.outputDef(Cyc_Mayor_FocalizadaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Mayor_FocalizadaBlock.NODE_NAME, true);

            // gets the values in CYC_BUSCADOR_INICIO_3.
            m4Op.outputDef(Cyc_Buscador_Inicio_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Buscador_Inicio_3Block.NODE_NAME, true);

            // gets the values in CYC_MAYOR_FEED_BACK_1.
            m4Op.outputDef(Cyc_Mayor_Feed_Back_1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Mayor_Feed_Back_1Block.NODE_NAME, true);

            // gets the values in CYC_MAYOR_TITULACION_3.
            m4Op.outputDef(Cyc_Mayor_Titulacion_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Mayor_Titulacion_3Block.NODE_NAME, true);

            // gets the values in CYC_MAYOR_CERTIFICADO_3.
            m4Op.outputDef(Cyc_Mayor_Certificado_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Mayor_Certificado_3Block.NODE_NAME, true);

            // gets the values in CYC_RESULTADO_BUSCADOR_3.
            m4Op.outputDef(Cyc_Resultado_Buscador_3Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Resultado_Buscador_3Block.NODE_NAME, true);

            // gets the values in CYC_REALIZACION_FEEDBACK_2.
            m4Op.outputDef(Cyc_Realizacion_Feedback_2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Realizacion_Feedback_2Block.NODE_NAME, true);

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

            // set node CYC_PILA_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Pila_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Pila_3Block.NODE_NAME);
            methodOutput.setCyc_Pila_3(m4Op, xml, nNode);
            // set node CYC_DATOS_PB_2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Datos_Pb_2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Datos_Pb_2Block.NODE_NAME);
            methodOutput.setCyc_Datos_Pb_2(m4Op, xml, nNode);
            // set node CYC_BUSCA_FASEII_2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Busca_Faseii_2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Busca_Faseii_2Block.NODE_NAME);
            methodOutput.setCyc_Busca_Faseii_2(m4Op, xml, nNode);
            // set node CYC_OBTENER_ID_HR_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Obtener_Id_Hr_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Obtener_Id_Hr_3Block.NODE_NAME);
            methodOutput.setCyc_Obtener_Id_Hr_3(m4Op, xml, nNode);
            // set node CYC_MAYOR_FOCALIZADA.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Mayor_FocalizadaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Mayor_FocalizadaBlock.NODE_NAME);
            methodOutput.setCyc_Mayor_Focalizada(m4Op, xml, nNode);
            // set node CYC_BUSCADOR_INICIO_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Buscador_Inicio_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Buscador_Inicio_3Block.NODE_NAME);
            methodOutput.setCyc_Buscador_Inicio_3(m4Op, xml, nNode);
            // set node CYC_MAYOR_FEED_BACK_1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Mayor_Feed_Back_1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Mayor_Feed_Back_1Block.NODE_NAME);
            methodOutput.setCyc_Mayor_Feed_Back_1(m4Op, xml, nNode);
            // set node CYC_MAYOR_TITULACION_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Mayor_Titulacion_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Mayor_Titulacion_3Block.NODE_NAME);
            methodOutput.setCyc_Mayor_Titulacion_3(m4Op, xml, nNode);
            // set node CYC_MAYOR_CERTIFICADO_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Mayor_Certificado_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Mayor_Certificado_3Block.NODE_NAME);
            methodOutput.setCyc_Mayor_Certificado_3(m4Op, xml, nNode);
            // set node CYC_RESULTADO_BUSCADOR_3.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Resultado_Buscador_3Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Resultado_Buscador_3Block.NODE_NAME);
            methodOutput.setCyc_Resultado_Buscador_3(m4Op, xml, nNode);
            // set node CYC_REALIZACION_FEEDBACK_2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Realizacion_Feedback_2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Realizacion_Feedback_2Block.NODE_NAME);
            methodOutput.setCyc_Realizacion_Feedback_2(m4Op, xml, nNode);

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


} /* end class Cyc_Buscador_Fase2Service */
