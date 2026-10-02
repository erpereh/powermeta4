/**
 * Cyc_Filt_Valores_F2Service.java
 * Self generated code for Business Object CYC_FILT_VALORES_F2.
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

package com.meta4.soapservices.services.rpc.cyc_filt_valores_f2;

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
 * SOAP Service for Bussines Object CYC_FILT_VALORES_F2.
 * @author Meta4
 */
public
class Cyc_Filt_Valores_F2Service
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filt_Valores_F2Service.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_FILT_VALORES_F2";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FILT_VALORES_F2
     * CYC_FILT_VALORES_F2
     * 
     */
    public
    Cyc_Filt_Valores_F2Output
    CYC_FILT_VALORES_F2
    (
        String ARG_ID_HR
    ) throws M4SoapException
    {
        m_log.debug("CYC_FILT_VALORES_F2(...)");

        // return object for this method.
        Cyc_Filt_Valores_F2Output methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILT_CARGA_F2";
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
            if (ARG_ID_HR != null) htArgs.put("ARG_ID_HR", M4BusinessMethodArg.toString(ARG_ID_HR));

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILT_COLECTIVO.
            m4Op.outputDef(Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_ENTREV.
            m4Op.outputDef(Cyc_Filt_EntrevBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_EntrevBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_FASE2.
            m4Op.outputDef(Cyc_Filt_Fase2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fase2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FASES_F2.
            m4Op.outputDef(Cyc_Filt_Fases_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fases_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FEEDBK_F2.
            m4Op.outputDef(Cyc_Filt_Feedbk_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_MEJORAS_F2.
            m4Op.outputDef(Cyc_Filt_Mejoras_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Mejoras_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_PTO_FUERTE_F2.
            m4Op.outputDef(Cyc_Filt_Pto_Fuerte_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Pto_Fuerte_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_ACCIONES.
            m4Op.outputDef(Cyc_Filt_AccionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_AccionesBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Filt_Valores_F2Output();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILT_COLECTIVO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_ColectivoBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Colectivo(m4Op, xml, nNode);
            // set node CYC_FILT_ENTREV.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_EntrevBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_EntrevBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Entrev(m4Op, xml, nNode);
            // set node CYC_FILT_FASE2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fase2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fase2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fase2(m4Op, xml, nNode);
            // set node CYC_FILT_FASES_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fases_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fases_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fases_F2(m4Op, xml, nNode);
            // set node CYC_FILT_FEEDBK_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Feedbk_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Feedbk_F2(m4Op, xml, nNode);
            // set node CYC_FILT_MEJORAS_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Mejoras_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Mejoras_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Mejoras_F2(m4Op, xml, nNode);
            // set node CYC_FILT_PTO_FUERTE_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Pto_Fuerte_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Pto_Fuerte_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Pto_Fuerte_F2(m4Op, xml, nNode);
            // set node CYC_FILT_ACCIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_AccionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_AccionesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Acciones(m4Op, xml, nNode);

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
    } /* end of method CYC_FILT_VALORES_F2 */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Filt_Fase2Block CYC_FILT_FASE2
,        Cyc_Filt_EntrevBlock CYC_FILT_ENTREV
,        Cyc_Filt_Val_F2Block CYC_FILT_VAL_F2
,        Cyc_Filt_AccionesBlock CYC_FILT_ACCIONES
,        Cyc_Filt_Carga_F2Block CYC_FILT_CARGA_F2
,        Cyc_Filt_Fases_F2Block CYC_FILT_FASES_F2
,        Cyc_Filt_ColectivoBlock CYC_FILT_COLECTIVO
,        Cyc_Filt_Feedbk_F2Block CYC_FILT_FEEDBK_F2
,        Cyc_Filt_Mejoras_F2Block CYC_FILT_MEJORAS_F2
,        Cyc_Filt_Pto_Fuerte_F2Block CYC_FILT_PTO_FUERTE_F2
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILT_CARGA_F2";
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
            if ( CYC_FILT_FASE2 != null ) 
            {
            	CYC_FILT_FASE2.writeOperations(m4Op);
            }
            if ( CYC_FILT_ENTREV != null ) 
            {
            	CYC_FILT_ENTREV.writeOperations(m4Op);
            }
            if ( CYC_FILT_VAL_F2 != null ) 
            {
            	CYC_FILT_VAL_F2.writeOperations(m4Op);
            }
            if ( CYC_FILT_ACCIONES != null ) 
            {
            	CYC_FILT_ACCIONES.writeOperations(m4Op);
            }
            if ( CYC_FILT_CARGA_F2 != null ) 
            {
            	CYC_FILT_CARGA_F2.writeOperations(m4Op);
            }
            if ( CYC_FILT_FASES_F2 != null ) 
            {
            	CYC_FILT_FASES_F2.writeOperations(m4Op);
            }
            if ( CYC_FILT_COLECTIVO != null ) 
            {
            	CYC_FILT_COLECTIVO.writeOperations(m4Op);
            }
            if ( CYC_FILT_FEEDBK_F2 != null ) 
            {
            	CYC_FILT_FEEDBK_F2.writeOperations(m4Op);
            }
            if ( CYC_FILT_MEJORAS_F2 != null ) 
            {
            	CYC_FILT_MEJORAS_F2.writeOperations(m4Op);
            }
            if ( CYC_FILT_PTO_FUERTE_F2 != null ) 
            {
            	CYC_FILT_PTO_FUERTE_F2.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILT_FASE2.
            m4Op.outputDef(Cyc_Filt_Fase2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fase2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_ENTREV.
            m4Op.outputDef(Cyc_Filt_EntrevBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_EntrevBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_VAL_F2.
            m4Op.outputDef(Cyc_Filt_Val_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Val_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_ACCIONES.
            m4Op.outputDef(Cyc_Filt_AccionesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_AccionesBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_CARGA_F2.
            m4Op.outputDef(Cyc_Filt_Carga_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Carga_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FASES_F2.
            m4Op.outputDef(Cyc_Filt_Fases_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fases_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_COLECTIVO.
            m4Op.outputDef(Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_FEEDBK_F2.
            m4Op.outputDef(Cyc_Filt_Feedbk_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_MEJORAS_F2.
            m4Op.outputDef(Cyc_Filt_Mejoras_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Mejoras_F2Block.NODE_NAME, true);

            // gets the values in CYC_FILT_PTO_FUERTE_F2.
            m4Op.outputDef(Cyc_Filt_Pto_Fuerte_F2Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Pto_Fuerte_F2Block.NODE_NAME, true);

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

            // set node CYC_FILT_FASE2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fase2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fase2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fase2(m4Op, xml, nNode);
            // set node CYC_FILT_ENTREV.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_EntrevBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_EntrevBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Entrev(m4Op, xml, nNode);
            // set node CYC_FILT_VAL_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Val_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Val_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Val_F2(m4Op, xml, nNode);
            // set node CYC_FILT_ACCIONES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_AccionesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_AccionesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Acciones(m4Op, xml, nNode);
            // set node CYC_FILT_CARGA_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Carga_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Carga_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Carga_F2(m4Op, xml, nNode);
            // set node CYC_FILT_FASES_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fases_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fases_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fases_F2(m4Op, xml, nNode);
            // set node CYC_FILT_COLECTIVO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_ColectivoBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Colectivo(m4Op, xml, nNode);
            // set node CYC_FILT_FEEDBK_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Feedbk_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Feedbk_F2(m4Op, xml, nNode);
            // set node CYC_FILT_MEJORAS_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Mejoras_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Mejoras_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Mejoras_F2(m4Op, xml, nNode);
            // set node CYC_FILT_PTO_FUERTE_F2.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Pto_Fuerte_F2Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Pto_Fuerte_F2Block.NODE_NAME);
            methodOutput.setCyc_Filt_Pto_Fuerte_F2(m4Op, xml, nNode);

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


} /* end class Cyc_Filt_Valores_F2Service */
