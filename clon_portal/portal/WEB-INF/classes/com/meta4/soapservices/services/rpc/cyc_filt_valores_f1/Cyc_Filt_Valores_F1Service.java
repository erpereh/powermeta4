/**
 * Cyc_Filt_Valores_F1Service.java
 * Self generated code for Business Object CYC_FILT_VALORES_F1.
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

package com.meta4.soapservices.services.rpc.cyc_filt_valores_f1;

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
 * SOAP Service for Bussines Object CYC_FILT_VALORES_F1.
 * @author Meta4
 */
public
class Cyc_Filt_Valores_F1Service
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filt_Valores_F1Service.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_FILT_VALORES_F1";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FILT_VALORES_F1
     * CYC_FILT_VALORES_F1
     * 
     */
    public
    Cyc_Filt_Valores_F1Output
    CYC_FILT_VALORES_F1
    (
        String ARG_ID_HR
    ) throws M4SoapException
    {
        m_log.debug("CYC_FILT_VALORES_F1(...)");

        // return object for this method.
        Cyc_Filt_Valores_F1Output methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILT_CARGA_F1";
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
  
            // gets the values in CYC_FILT_FASE1.
            m4Op.outputDef(Cyc_Filt_Fase1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fase1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FASES_F1.
            m4Op.outputDef(Cyc_Filt_Fases_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fases_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FEEDBK_F1.
            m4Op.outputDef(Cyc_Filt_Feedbk_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_MEJORAS.
            m4Op.outputDef(Cyc_Filt_MejorasBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_MejorasBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_PTOS_FUERTES.
            m4Op.outputDef(Cyc_Filt_Ptos_FuertesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Ptos_FuertesBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_VAL_F1.
            m4Op.outputDef(Cyc_Filt_Val_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Val_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_ACC_FORM.
            m4Op.outputDef(Cyc_Filt_Acc_FormBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Acc_FormBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Filt_Valores_F1Output();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILT_FASE1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fase1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fase1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fase1(m4Op, xml, nNode);
            // set node CYC_FILT_FASES_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fases_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fases_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fases_F1(m4Op, xml, nNode);
            // set node CYC_FILT_FEEDBK_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Feedbk_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Feedbk_F1(m4Op, xml, nNode);
            // set node CYC_FILT_MEJORAS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_MejorasBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_MejorasBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Mejoras(m4Op, xml, nNode);
            // set node CYC_FILT_PTOS_FUERTES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Ptos_FuertesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Ptos_FuertesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Ptos_Fuertes(m4Op, xml, nNode);
            // set node CYC_FILT_VAL_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Val_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Val_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Val_F1(m4Op, xml, nNode);
            // set node CYC_FILT_ACC_FORM.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Acc_FormBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Acc_FormBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Acc_Form(m4Op, xml, nNode);

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
    } /* end of method CYC_FILT_VALORES_F1 */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Filt_Fase1Block CYC_FILT_FASE1
,        Cyc_Filt_Val_F1Block CYC_FILT_VAL_F1
,        Cyc_Configur_PcpBlock CYC_CONFIGUR_PCP
,        Cyc_Filt_MejorasBlock CYC_FILT_MEJORAS
,        Cyc_Filt_Acc_FormBlock CYC_FILT_ACC_FORM
,        Cyc_Filt_Carga_F1Block CYC_FILT_CARGA_F1
,        Cyc_Filt_Fases_F1Block CYC_FILT_FASES_F1
,        Cyc_Filt_Feedbk_F1Block CYC_FILT_FEEDBK_F1
,        Cyc_Filt_Ptos_FuertesBlock CYC_FILT_PTOS_FUERTES
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILT_CARGA_F1";
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
            if ( CYC_FILT_FASE1 != null ) 
            {
            	CYC_FILT_FASE1.writeOperations(m4Op);
            }
            if ( CYC_FILT_VAL_F1 != null ) 
            {
            	CYC_FILT_VAL_F1.writeOperations(m4Op);
            }
            if ( CYC_CONFIGUR_PCP != null ) 
            {
            	CYC_CONFIGUR_PCP.writeOperations(m4Op);
            }
            if ( CYC_FILT_MEJORAS != null ) 
            {
            	CYC_FILT_MEJORAS.writeOperations(m4Op);
            }
            if ( CYC_FILT_ACC_FORM != null ) 
            {
            	CYC_FILT_ACC_FORM.writeOperations(m4Op);
            }
            if ( CYC_FILT_CARGA_F1 != null ) 
            {
            	CYC_FILT_CARGA_F1.writeOperations(m4Op);
            }
            if ( CYC_FILT_FASES_F1 != null ) 
            {
            	CYC_FILT_FASES_F1.writeOperations(m4Op);
            }
            if ( CYC_FILT_FEEDBK_F1 != null ) 
            {
            	CYC_FILT_FEEDBK_F1.writeOperations(m4Op);
            }
            if ( CYC_FILT_PTOS_FUERTES != null ) 
            {
            	CYC_FILT_PTOS_FUERTES.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILT_FASE1.
            m4Op.outputDef(Cyc_Filt_Fase1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fase1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_VAL_F1.
            m4Op.outputDef(Cyc_Filt_Val_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Val_F1Block.NODE_NAME, true);

            // gets the values in CYC_CONFIGUR_PCP.
            m4Op.outputDef(Cyc_Configur_PcpBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Configur_PcpBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_MEJORAS.
            m4Op.outputDef(Cyc_Filt_MejorasBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_MejorasBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_ACC_FORM.
            m4Op.outputDef(Cyc_Filt_Acc_FormBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Acc_FormBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_CARGA_F1.
            m4Op.outputDef(Cyc_Filt_Carga_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Carga_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FASES_F1.
            m4Op.outputDef(Cyc_Filt_Fases_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Fases_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_FEEDBK_F1.
            m4Op.outputDef(Cyc_Filt_Feedbk_F1Block.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F1Block.NODE_NAME, true);

            // gets the values in CYC_FILT_PTOS_FUERTES.
            m4Op.outputDef(Cyc_Filt_Ptos_FuertesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Ptos_FuertesBlock.NODE_NAME, true);

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

            // set node CYC_FILT_FASE1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fase1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fase1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fase1(m4Op, xml, nNode);
            // set node CYC_FILT_VAL_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Val_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Val_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Val_F1(m4Op, xml, nNode);
            // set node CYC_CONFIGUR_PCP.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Configur_PcpBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Configur_PcpBlock.NODE_NAME);
            methodOutput.setCyc_Configur_Pcp(m4Op, xml, nNode);
            // set node CYC_FILT_MEJORAS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_MejorasBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_MejorasBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Mejoras(m4Op, xml, nNode);
            // set node CYC_FILT_ACC_FORM.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Acc_FormBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Acc_FormBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Acc_Form(m4Op, xml, nNode);
            // set node CYC_FILT_CARGA_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Carga_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Carga_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Carga_F1(m4Op, xml, nNode);
            // set node CYC_FILT_FASES_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Fases_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Fases_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Fases_F1(m4Op, xml, nNode);
            // set node CYC_FILT_FEEDBK_F1.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Feedbk_F1Block.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Feedbk_F1Block.NODE_NAME);
            methodOutput.setCyc_Filt_Feedbk_F1(m4Op, xml, nNode);
            // set node CYC_FILT_PTOS_FUERTES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Ptos_FuertesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Ptos_FuertesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Ptos_Fuertes(m4Op, xml, nNode);

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


} /* end class Cyc_Filt_Valores_F1Service */
