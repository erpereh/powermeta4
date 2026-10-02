/**
 * Cyc_Filtro_Fase_IService.java
 * Self generated code for Business Object CYC_FILTRO_FASE_I.
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

package com.meta4.soapservices.services.rpc.cyc_filtro_fase_i;

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
 * SOAP Service for Bussines Object CYC_FILTRO_FASE_I.
 * @author Meta4
 */
public
class Cyc_Filtro_Fase_IService
extends com.meta4.soapservices.services.M4BaseService
{
    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filtro_Fase_IService.class.getName());

    /* M4Object definitions. */
    public final String M4OBJECT_NAME = "CYC_FILTRO_FASE_I";
    public final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /**
     * CYC_FILTRO_FASE_I
     * CYC_FILTRO_FASE_I
     * 
     */
    public
    Cyc_Filtro_Fase_IOutput
    CYC_FILTRO_FASE_I
    (
        String ARG_ID_HR
    ) throws M4SoapException
    {
        m_log.debug("CYC_FILTRO_FASE_I(...)");

        // return object for this method.
        Cyc_Filtro_Fase_IOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_F_I";
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
  
            // gets the values in CYC_FILT_FASES.
            m4Op.outputDef(Cyc_Filt_FasesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_FasesBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_IDIOMA.
            m4Op.outputDef(Cyc_Filt_IdiomaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_IdiomaBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_ORO.
            m4Op.outputDef(Cyc_Filt_OroBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_OroBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_TITULOS.
            m4Op.outputDef(Cyc_Filt_TitulosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_TitulosBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_CERTIF.
            m4Op.outputDef(Cyc_Filt_CertifBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_CertifBlock.NODE_NAME, true);

            // transaction end.
            m4Op.endJob();
            
            // parse M4XML.
            M4XML xml = m4Op.getM4XML();
            Node nData = null;
            Node nNode = null;

            // set output values.
            methodOutput = new Cyc_Filtro_Fase_IOutput();
            methodOutput.setReturn(xml.getReturnCode(M4OBJECT_ALIAS, METHOD_ALIAS));
            methodOutput.logMessage = xml.getLog(M4OBJECT_ALIAS);

            // set node CYC_FILT_FASES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_FasesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_FasesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Fases(m4Op, xml, nNode);
            // set node CYC_FILT_IDIOMA.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_IdiomaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_IdiomaBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Idioma(m4Op, xml, nNode);
            // set node CYC_FILT_ORO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_OroBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_OroBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Oro(m4Op, xml, nNode);
            // set node CYC_FILT_TITULOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_TitulosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_TitulosBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Titulos(m4Op, xml, nNode);
            // set node CYC_FILT_CERTIF.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_CertifBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_CertifBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Certif(m4Op, xml, nNode);

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
    } /* end of method CYC_FILTRO_FASE_I */


    /**
     * M4LoadObject
     * M4LoadObject
     * M4LoadObject
     */
    public
    M4LoadobjectOutput
    M4LoadObject
    (
        Cyc_Filt_OroBlock CYC_FILT_ORO
,        Cyc_Filt_FotoBlock CYC_FILT_FOTO
,        Cyc_Filtro_F_IBlock CYC_FILTRO_F_I
,        Cyc_Filt_FasesBlock CYC_FILT_FASES
,        Cyc_Filt_CertifBlock CYC_FILT_CERTIF
,        Cyc_Filt_IdiomaBlock CYC_FILT_IDIOMA
,        Cyc_Filt_FamiliaBlock CYC_FILT_FAMILIA
,        Cyc_Filt_TitulosBlock CYC_FILT_TITULOS
,        Cyc_Filt_ColectivoBlock CYC_FILT_COLECTIVO
,        Cyc_Filt_Ultim_ActBlock CYC_FILT_ULTIM_ACT
,        Cyc_Filt_GruponivelBlock CYC_FILT_GRUPONIVEL
    ) throws M4SoapException
    {
        m_log.debug("M4LoadObject(...)");

        // return object for this method.
        M4LoadobjectOutput methodOutput = null;
        
        // M4SoapOperations object.
        M4SoapOperations m4Op = null;

        // business method definition.
        final String METHOD_NODE = "CYC_FILTRO_F_I";
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
            if ( CYC_FILT_ORO != null ) 
            {
            	CYC_FILT_ORO.writeOperations(m4Op);
            }
            if ( CYC_FILT_FOTO != null ) 
            {
            	CYC_FILT_FOTO.writeOperations(m4Op);
            }
            if ( CYC_FILTRO_F_I != null ) 
            {
            	CYC_FILTRO_F_I.writeOperations(m4Op);
            }
            if ( CYC_FILT_FASES != null ) 
            {
            	CYC_FILT_FASES.writeOperations(m4Op);
            }
            if ( CYC_FILT_CERTIF != null ) 
            {
            	CYC_FILT_CERTIF.writeOperations(m4Op);
            }
            if ( CYC_FILT_IDIOMA != null ) 
            {
            	CYC_FILT_IDIOMA.writeOperations(m4Op);
            }
            if ( CYC_FILT_FAMILIA != null ) 
            {
            	CYC_FILT_FAMILIA.writeOperations(m4Op);
            }
            if ( CYC_FILT_TITULOS != null ) 
            {
            	CYC_FILT_TITULOS.writeOperations(m4Op);
            }
            if ( CYC_FILT_COLECTIVO != null ) 
            {
            	CYC_FILT_COLECTIVO.writeOperations(m4Op);
            }
            if ( CYC_FILT_ULTIM_ACT != null ) 
            {
            	CYC_FILT_ULTIM_ACT.writeOperations(m4Op);
            }
            if ( CYC_FILT_GRUPONIVEL != null ) 
            {
            	CYC_FILT_GRUPONIVEL.writeOperations(m4Op);
            }

            // execute method.
            m4Op.method(METHOD_ALIAS, M4OBJECT_ALIAS, METHOD_NODE, METHOD_NAME, htArgs);
  
            // gets the values in CYC_FILT_ORO.
            m4Op.outputDef(Cyc_Filt_OroBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_OroBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_FOTO.
            m4Op.outputDef(Cyc_Filt_FotoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_FotoBlock.NODE_NAME, true);

            // gets the values in CYC_FILTRO_F_I.
            m4Op.outputDef(Cyc_Filtro_F_IBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filtro_F_IBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_FASES.
            m4Op.outputDef(Cyc_Filt_FasesBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_FasesBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_CERTIF.
            m4Op.outputDef(Cyc_Filt_CertifBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_CertifBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_IDIOMA.
            m4Op.outputDef(Cyc_Filt_IdiomaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_IdiomaBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_FAMILIA.
            m4Op.outputDef(Cyc_Filt_FamiliaBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_FamiliaBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_TITULOS.
            m4Op.outputDef(Cyc_Filt_TitulosBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_TitulosBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_COLECTIVO.
            m4Op.outputDef(Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_ULTIM_ACT.
            m4Op.outputDef(Cyc_Filt_Ultim_ActBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_Ultim_ActBlock.NODE_NAME, true);

            // gets the values in CYC_FILT_GRUPONIVEL.
            m4Op.outputDef(Cyc_Filt_GruponivelBlock.NODE_OUTPUTDEF, M4OBJECT_ALIAS, Cyc_Filt_GruponivelBlock.NODE_NAME, true);

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

            // set node CYC_FILT_ORO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_OroBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_OroBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Oro(m4Op, xml, nNode);
            // set node CYC_FILT_FOTO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_FotoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_FotoBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Foto(m4Op, xml, nNode);
            // set node CYC_FILTRO_F_I.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filtro_F_IBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filtro_F_IBlock.NODE_NAME);
            methodOutput.setCyc_Filtro_F_I(m4Op, xml, nNode);
            // set node CYC_FILT_FASES.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_FasesBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_FasesBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Fases(m4Op, xml, nNode);
            // set node CYC_FILT_CERTIF.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_CertifBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_CertifBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Certif(m4Op, xml, nNode);
            // set node CYC_FILT_IDIOMA.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_IdiomaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_IdiomaBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Idioma(m4Op, xml, nNode);
            // set node CYC_FILT_FAMILIA.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_FamiliaBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_FamiliaBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Familia(m4Op, xml, nNode);
            // set node CYC_FILT_TITULOS.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_TitulosBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_TitulosBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Titulos(m4Op, xml, nNode);
            // set node CYC_FILT_COLECTIVO.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_ColectivoBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_ColectivoBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Colectivo(m4Op, xml, nNode);
            // set node CYC_FILT_ULTIM_ACT.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_Ultim_ActBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_Ultim_ActBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Ultim_Act(m4Op, xml, nNode);
            // set node CYC_FILT_GRUPONIVEL.
            nData = xml.findData(M4OBJECT_ALIAS, Cyc_Filt_GruponivelBlock.NODE_OUTPUTDEF);
            nNode = xml.findDataNode(nData, M4OBJECT_ALIAS + "!" + Cyc_Filt_GruponivelBlock.NODE_NAME);
            methodOutput.setCyc_Filt_Gruponivel(m4Op, xml, nNode);

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


} /* end class Cyc_Filtro_Fase_IService */
