/**
 * Cyc_Filtro_CabeceraService.java
 * Self generated code for Business Object CYC_FILTRO_CABECERA.
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

package com.meta4.soapservices.services.rpc.cyc_filtro_cabecera;

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
 * SOAP Service for Bussines Object CYC_FILTRO_CABECERA.
 * @author Meta4
 */
public
class Cyc_Filtro_CabeceraService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filtro_CabeceraService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_FILTRO_CABECERA";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FILTRO_CABECERA
     * CYC_FILTRO_CABECERA
     * 
     */
    public
    Cyc_Filtro_CabeceraOutput
    CYC_FILTRO_CABECERA
    (
        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CYC_FILTRO_CABECERA(...)");

        // return object for this method.
        Cyc_Filtro_CabeceraOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_CABECERA_PCP";
        final String METHOD_NAME = "CYC_CARGA";
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
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILTRO_CERTIF.
            m4Op.outputDef(Cyc_Filtro_CertifBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_CertifBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_DIRECCION.
            m4Op.outputDef(Cyc_Filtro_DireccionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_DireccionBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_GRUPONIVEL.
            m4Op.outputDef(Cyc_Filtro_GruponivelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_GruponivelBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_TITULACION.
            m4Op.outputDef(Cyc_Filtro_TitulacionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_TitulacionBlock.NODE_NAME, true);

            // gets the values in CYC_FAMILA_PUESTO.
            m4Op.outputDef(Cyc_Famila_PuestoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Famila_PuestoBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Filtro_CabeceraOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILTRO_CERTIF.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_CertifBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_CertifBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Certif(m4Op, xml, nNode);
            // set node CYC_FILTRO_DIRECCION.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_DireccionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_DireccionBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Direccion(m4Op, xml, nNode);
            // set node CYC_FILTRO_GRUPONIVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_GruponivelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_GruponivelBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Gruponivel(m4Op, xml, nNode);
            // set node CYC_FILTRO_TITULACION.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_TitulacionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_TitulacionBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Titulacion(m4Op, xml, nNode);
            // set node CYC_FAMILA_PUESTO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Famila_PuestoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Famila_PuestoBlock.NODE_NAME);
            methodOutput.setCyc_Famila_Puesto(m4Op, xml, nNode);

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
    } /* end of method CYC_FILTRO_CABECERA */


    /**
     * FILTROS_SECUNDARIOS
     * FILTROS_SECUNDARIOS
     * 
     */
    public
    Filtros_SecundariosOutput
    FILTROS_SECUNDARIOS
    (
        String ARG_CONSULTA
,        String ARG_SOCIEDAD
,        String ARG_TIPO
    ) throws M4SoapException
    {
        m_log.debug("FILTROS_SECUNDARIOS(...)");

        // return object for this method.
        Filtros_SecundariosOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_CAB";
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
            if (ARG_CONSULTA != null) htArgs.put("ARG_CONSULTA", M4BusinessMethodArg.toString(ARG_CONSULTA));
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));
            if (ARG_TIPO != null) htArgs.put("ARG_TIPO", M4BusinessMethodArg.toString(ARG_TIPO));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILTRO_CAB.
            m4Op.outputDef(Cyc_Filtro_CabBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_CabBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Filtros_SecundariosOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILTRO_CAB.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_CabBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_CabBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Cab(m4Op, xml, nNode);

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
    } /* end of method FILTROS_SECUNDARIOS */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Filtro_CabBlock CYC_FILTRO_CAB
,        Cyc_Famila_PuestoBlock CYC_FAMILA_PUESTO
,        Cyc_Filtro_CertifBlock CYC_FILTRO_CERTIF
,        Cyc_Filtro_DireccionBlock CYC_FILTRO_DIRECCION
,        Cyc_Filtro_GruponivelBlock CYC_FILTRO_GRUPONIVEL
,        Cyc_Filtro_TitulacionBlock CYC_FILTRO_TITULACION
,        Cyc_Filtro_Cabecera_PcpBlock CYC_FILTRO_CABECERA_PCP
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_CABECERA_PCP";
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
            if ( CYC_FILTRO_CAB != null ) 
            {
            	CYC_FILTRO_CAB.writeOperations(m4Op);
            }
            if ( CYC_FAMILA_PUESTO != null ) 
            {
            	CYC_FAMILA_PUESTO.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_CERTIF != null ) 
            {
            	CYC_FILTRO_CERTIF.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_DIRECCION != null ) 
            {
            	CYC_FILTRO_DIRECCION.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_GRUPONIVEL != null ) 
            {
            	CYC_FILTRO_GRUPONIVEL.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_TITULACION != null ) 
            {
            	CYC_FILTRO_TITULACION.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_CABECERA_PCP != null ) 
            {
            	CYC_FILTRO_CABECERA_PCP.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILTRO_CAB.
            m4Op.outputDef(Cyc_Filtro_CabBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_CabBlock.NODE_NAME, true);

            // gets the values in CYC_FAMILA_PUESTO.
            m4Op.outputDef(Cyc_Famila_PuestoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Famila_PuestoBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_CERTIF.
            m4Op.outputDef(Cyc_Filtro_CertifBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_CertifBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_DIRECCION.
            m4Op.outputDef(Cyc_Filtro_DireccionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_DireccionBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_GRUPONIVEL.
            m4Op.outputDef(Cyc_Filtro_GruponivelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_GruponivelBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_TITULACION.
            m4Op.outputDef(Cyc_Filtro_TitulacionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_TitulacionBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_CABECERA_PCP.
            m4Op.outputDef(Cyc_Filtro_Cabecera_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_Cabecera_PcpBlock.NODE_NAME, true);

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

            // set node CYC_FILTRO_CAB.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_CabBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_CabBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Cab(m4Op, xml, nNode);
            // set node CYC_FAMILA_PUESTO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Famila_PuestoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Famila_PuestoBlock.NODE_NAME);
            methodOutput.setCyc_Famila_Puesto(m4Op, xml, nNode);
            // set node CYC_FILTRO_CERTIF.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_CertifBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_CertifBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Certif(m4Op, xml, nNode);
            // set node CYC_FILTRO_DIRECCION.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_DireccionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_DireccionBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Direccion(m4Op, xml, nNode);
            // set node CYC_FILTRO_GRUPONIVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_GruponivelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_GruponivelBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Gruponivel(m4Op, xml, nNode);
            // set node CYC_FILTRO_TITULACION.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_TitulacionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_TitulacionBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Titulacion(m4Op, xml, nNode);
            // set node CYC_FILTRO_CABECERA_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_Cabecera_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_Cabecera_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_Cabecera_Pcp(m4Op, xml, nNode);

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


} /* end class Cyc_Filtro_CabeceraService */
