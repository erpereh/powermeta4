/**
 * Cyc_Informe_Grupal_Fase_IiBlock.java
 * Self generated code for Bussines Object CYC_INFORME_GRUPAL.
 *
 * Copyright Meta4 Spain S.A.
 * Centro Europa Empresarial - Edf. Roma
 * C/ Rozabella, 8
 * 28230 Las Rozas - Madrid
 * Spain
 *
 * Private and Confidential
 * The information contained in this document is the property of Meta4 Spain S.A.
 * It is for the exclusive use of designated employees
 * and not for distribution without prior written authorization.
 */
package com.meta4.soapservices.services.rpc.cyc_informe_grupal;

import org.w3c.dom.Node;
import java.util.Hashtable;
import java.util.Calendar;
import javax.activation.DataHandler;

import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.types.M4FileDataSource;

import com.meta4.common.utils.logsystem.M4LogManager;
import com.meta4.common.utils.logsystem.M4ILogger;


/**
 * Bean for node Cyc_Informe_Grupal_Fase_Ii.
 * @author Meta4
 */
public 
class Cyc_Informe_Grupal_Fase_IiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORME_GRUPAL";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_INFORME_GRUPAL_FASE_II";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Informe_Grupal_Fase_IiBlock.class.getName());

    /* item SYS_SENTENCE */
    public String sys_Sentence = null;
    private void setsys_Sentence(String ai_value)
    {
        sys_Sentence = ai_value;
    }
    private String getsys_Sentence()
    {
        return sys_Sentence;
    }

    /* item P_FEC_FIN */
    public Calendar p_Fec_Fin = null;
    private void setp_Fec_Fin(Calendar ai_value)
    {
        p_Fec_Fin = ai_value;
    }
    private Calendar getp_Fec_Fin()
    {
        return p_Fec_Fin;
    }

    /* item P_SOCIEDAD */
    public String p_Sociedad = null;
    private void setp_Sociedad(String ai_value)
    {
        p_Sociedad = ai_value;
    }
    private String getp_Sociedad()
    {
        return p_Sociedad;
    }

    /* item P_FEC_INICIO */
    public Calendar p_Fec_Inicio = null;
    private void setp_Fec_Inicio(Calendar ai_value)
    {
        p_Fec_Inicio = ai_value;
    }
    private Calendar getp_Fec_Inicio()
    {
        return p_Fec_Inicio;
    }

    /* the recordset */
    public Cyc_Informe_Grupal_Fase_IiRecord[] Cyc_Informe_Grupal_Fase_IiRecordSet = null;
    private void setCyc_Informe_Grupal_Fase_IiRecordSet(Cyc_Informe_Grupal_Fase_IiRecord[] ai_arg)
    {
        Cyc_Informe_Grupal_Fase_IiRecordSet = ai_arg;
    }
    private Cyc_Informe_Grupal_Fase_IiRecord[] getCyc_Informe_Grupal_Fase_IiRecordSet()
    {
        return Cyc_Informe_Grupal_Fase_IiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Informe_Grupal_Fase_IiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // P_FEC_FIN.
        if (p_Fec_Fin != null)
        {
            htItems.put("P_FEC_FIN", M4BusinessMethodArg.toString(p_Fec_Fin));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_FEC_INICIO.
        if (p_Fec_Inicio != null)
        {
            htItems.put("P_FEC_INICIO", M4BusinessMethodArg.toString(p_Fec_Inicio));
        }

        // insert 'block scope' values in CYC_INFORME_GRUPAL_FASE_II.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_INFORME_GRUPAL_FASE_II.
        if (Cyc_Informe_Grupal_Fase_IiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Informe_Grupal_Fase_IiRecordSet.length; i++)
        {
            Cyc_Informe_Grupal_Fase_IiRecord record = Cyc_Informe_Grupal_Fase_IiRecordSet[i];
            if (record==null)
            {
                throw M4SoapException.makeException("NULL input value for record[" + i + "] in node \"" + NODE_NAME + "\".");
            }
                        
            record.writeOperations(ai_m4Op);
        }

    } /* end of method writeOperations */


    /**
     *
     */
    void 
    readOperations(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_node) 
    throws Exception
    {
        // read 'block scope' values in CYC_INFORME_GRUPAL_FASE_II.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read P_FEC_FIN.
        sItemName = "P_FEC_FIN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fec_Fin = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_FEC_INICIO.
        sItemName = "P_FEC_INICIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fec_Inicio = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Informe_Grupal_Fase_IiRecordSet = new Cyc_Informe_Grupal_Fase_IiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Informe_Grupal_Fase_IiRecord record = new Cyc_Informe_Grupal_Fase_IiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Informe_Grupal_Fase_IiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Informe_Grupal_Fase_IiBlock */

