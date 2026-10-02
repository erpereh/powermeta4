/**
 * Csp_Filtro_Mtr_RrhhService.java
 * Self generated code for Business Object CSP_FILTRO_MTR_RRHH.
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

package com.meta4.soapservices.services.rpc.csp_filtro_mtr_rrhh;

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
 * SOAP Service for Bussines Object CSP_FILTRO_MTR_RRHH.
 * @author Meta4
 */
public
class Csp_Filtro_Mtr_RrhhService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Filtro_Mtr_RrhhService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CSP_FILTRO_MTR_RRHH";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CSP_FILTRO_MTR_RRHH
     * CSP_FILTRO_MTR_RRHH
     * 
     */
    public
    Csp_Filtro_Mtr_RrhhOutput
    CSP_FILTRO_MTR_RRHH
    (
        String ARG_DIRECCION
,        String ARG_AREA
,        String ARG_UNIDAD
,        String ARG_SERVICIO
,        String ARG_SOCIEDAD
    ) throws M4SoapException
    {
        m_log.debug("CSP_FILTRO_MTR_RRHH(...)");

        // return object for this method.
        Csp_Filtro_Mtr_RrhhOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_RP_ORO_MSS";
        final String METHOD_NAME = "CSP_CARGA";
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
            if (ARG_DIRECCION != null) htArgs.put("ARG_DIRECCION", M4BusinessMethodArg.toString(ARG_DIRECCION));
            if (ARG_AREA != null) htArgs.put("ARG_AREA", M4BusinessMethodArg.toString(ARG_AREA));
            if (ARG_UNIDAD != null) htArgs.put("ARG_UNIDAD", M4BusinessMethodArg.toString(ARG_UNIDAD));
            if (ARG_SERVICIO != null) htArgs.put("ARG_SERVICIO", M4BusinessMethodArg.toString(ARG_SERVICIO));
            if (ARG_SOCIEDAD != null) htArgs.put("ARG_SOCIEDAD", M4BusinessMethodArg.toString(ARG_SOCIEDAD));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_RP_ORO_MSS.
            m4Op.outputDef(Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Csp_Filtro_Mtr_RrhhOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CSP_RP_ORO_MSS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Rp_Oro_MssBlock.NODE_NAME);
            methodOutput.setCsp_Rp_Oro_Mss(m4Op, xml, nNode);

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
    } /* end of method CSP_FILTRO_MTR_RRHH */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Csp_Rp_Oro_MssBlock CSP_RP_ORO_MSS
,        Csp_Unidad_PadreBlock CSP_UNIDAD_PADRE
,        Csp_Almacen_HijosBlock CSP_ALMACEN_HIJOS
,        Csp_Consulta_HijaBlock CSP_CONSULTA_HIJA
,        Csp_Consulta_AreasBlock CSP_CONSULTA_AREAS
,        Csp_Consulta_PuestoBlock CSP_CONSULTA_PUESTO
,        Csp_Consulta_UnidadBlock CSP_CONSULTA_UNIDAD
,        Csp_Consulta_CentrosBlock CSP_CONSULTA_CENTROS
,        Csp_Consulta_DireccionBlock CSP_CONSULTA_DIRECCION
,        Csp_Consulta_ServiciosBlock CSP_CONSULTA_SERVICIOS
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CSP_RP_ORO_MSS";
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
            if ( CSP_RP_ORO_MSS != null ) 
            {
            	CSP_RP_ORO_MSS.writeOperations(m4Op);
            }
            if ( CSP_UNIDAD_PADRE != null ) 
            {
            	CSP_UNIDAD_PADRE.writeOperations(m4Op);
            }
            if ( CSP_ALMACEN_HIJOS != null ) 
            {
            	CSP_ALMACEN_HIJOS.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_HIJA != null ) 
            {
            	CSP_CONSULTA_HIJA.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_AREAS != null ) 
            {
            	CSP_CONSULTA_AREAS.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_PUESTO != null ) 
            {
            	CSP_CONSULTA_PUESTO.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_UNIDAD != null ) 
            {
            	CSP_CONSULTA_UNIDAD.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_CENTROS != null ) 
            {
            	CSP_CONSULTA_CENTROS.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_DIRECCION != null ) 
            {
            	CSP_CONSULTA_DIRECCION.writeOperations(m4Op);
            }
            if ( CSP_CONSULTA_SERVICIOS != null ) 
            {
            	CSP_CONSULTA_SERVICIOS.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CSP_RP_ORO_MSS.
            m4Op.outputDef(Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_NAME, true);

            // gets the values in CSP_UNIDAD_PADRE.
            m4Op.outputDef(Csp_Unidad_PadreBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Unidad_PadreBlock.NODE_NAME, true);

            // gets the values in CSP_ALMACEN_HIJOS.
            m4Op.outputDef(Csp_Almacen_HijosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Almacen_HijosBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_HIJA.
            m4Op.outputDef(Csp_Consulta_HijaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_HijaBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_AREAS.
            m4Op.outputDef(Csp_Consulta_AreasBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_AreasBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_PUESTO.
            m4Op.outputDef(Csp_Consulta_PuestoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_PuestoBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_UNIDAD.
            m4Op.outputDef(Csp_Consulta_UnidadBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_UnidadBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_CENTROS.
            m4Op.outputDef(Csp_Consulta_CentrosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_CentrosBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_DIRECCION.
            m4Op.outputDef(Csp_Consulta_DireccionBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_DireccionBlock.NODE_NAME, true);

            // gets the values in CSP_CONSULTA_SERVICIOS.
            m4Op.outputDef(Csp_Consulta_ServiciosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Csp_Consulta_ServiciosBlock.NODE_NAME, true);

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

            // set node CSP_RP_ORO_MSS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Rp_Oro_MssBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Rp_Oro_MssBlock.NODE_NAME);
            methodOutput.setCsp_Rp_Oro_Mss(m4Op, xml, nNode);
            // set node CSP_UNIDAD_PADRE.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Unidad_PadreBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Unidad_PadreBlock.NODE_NAME);
            methodOutput.setCsp_Unidad_Padre(m4Op, xml, nNode);
            // set node CSP_ALMACEN_HIJOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Almacen_HijosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Almacen_HijosBlock.NODE_NAME);
            methodOutput.setCsp_Almacen_Hijos(m4Op, xml, nNode);
            // set node CSP_CONSULTA_HIJA.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_HijaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_HijaBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Hija(m4Op, xml, nNode);
            // set node CSP_CONSULTA_AREAS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_AreasBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_AreasBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Areas(m4Op, xml, nNode);
            // set node CSP_CONSULTA_PUESTO.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_PuestoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_PuestoBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Puesto(m4Op, xml, nNode);
            // set node CSP_CONSULTA_UNIDAD.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_UnidadBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_UnidadBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Unidad(m4Op, xml, nNode);
            // set node CSP_CONSULTA_CENTROS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_CentrosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_CentrosBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Centros(m4Op, xml, nNode);
            // set node CSP_CONSULTA_DIRECCION.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_DireccionBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_DireccionBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Direccion(m4Op, xml, nNode);
            // set node CSP_CONSULTA_SERVICIOS.
            nData = xml.findData(M4OBJECT_ALIAS, Csp_Consulta_ServiciosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Csp_Consulta_ServiciosBlock.NODE_NAME);
            methodOutput.setCsp_Consulta_Servicios(m4Op, xml, nNode);

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


} /* end class Csp_Filtro_Mtr_RrhhService */
