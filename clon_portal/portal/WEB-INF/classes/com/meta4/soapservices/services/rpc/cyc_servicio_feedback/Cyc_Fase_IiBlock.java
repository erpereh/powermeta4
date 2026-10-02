/**
 * Cyc_Fase_IiBlock.java
 * Self generated code for Bussines Object CYC_SERVICIO_FEEDBACK.
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
package com.meta4.soapservices.services.rpc.cyc_servicio_feedback;

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
 * Bean for node Cyc_Fase_Ii.
 * @author Meta4
 */
public 
class Cyc_Fase_IiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FASE_II";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Fase_IiBlock.class.getName());

    /* item P_ID_HR */
    public String p_Id_Hr = null;
    private void setp_Id_Hr(String ai_value)
    {
        p_Id_Hr = ai_value;
    }
    private String getp_Id_Hr()
    {
        return p_Id_Hr;
    }

    /* item P_CYC_FASE */
    public String p_Cyc_Fase = null;
    private void setp_Cyc_Fase(String ai_value)
    {
        p_Cyc_Fase = ai_value;
    }
    private String getp_Cyc_Fase()
    {
        return p_Cyc_Fase;
    }

    /* item SQL_SENTENCE */
    public String sql_Sentence = null;
    private void setsql_Sentence(String ai_value)
    {
        sql_Sentence = ai_value;
    }
    private String getsql_Sentence()
    {
        return sql_Sentence;
    }

    /* item P_AREAS_MEJORA */
    public String p_Areas_Mejora = null;
    private void setp_Areas_Mejora(String ai_value)
    {
        p_Areas_Mejora = ai_value;
    }
    private String getp_Areas_Mejora()
    {
        return p_Areas_Mejora;
    }

    /* item CYC_EXECUTE_SQL */
    public String cyc_Execute_Sql = null;
    private void setcyc_Execute_Sql(String ai_value)
    {
        cyc_Execute_Sql = ai_value;
    }
    private String getcyc_Execute_Sql()
    {
        return cyc_Execute_Sql;
    }

    /* item P_PUNTOS_FUERTES */
    public String p_Puntos_Fuertes = null;
    private void setp_Puntos_Fuertes(String ai_value)
    {
        p_Puntos_Fuertes = ai_value;
    }
    private String getp_Puntos_Fuertes()
    {
        return p_Puntos_Fuertes;
    }

    /* item P_ID_ORGANIZATION */
    public String p_Id_Organization = null;
    private void setp_Id_Organization(String ai_value)
    {
        p_Id_Organization = ai_value;
    }
    private String getp_Id_Organization()
    {
        return p_Id_Organization;
    }

    /* the recordset */
    public Cyc_Fase_IiRecord[] Cyc_Fase_IiRecordSet = null;
    private void setCyc_Fase_IiRecordSet(Cyc_Fase_IiRecord[] ai_arg)
    {
        Cyc_Fase_IiRecordSet = ai_arg;
    }
    private Cyc_Fase_IiRecord[] getCyc_Fase_IiRecordSet()
    {
        return Cyc_Fase_IiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Fase_IiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_CYC_FASE.
        if (p_Cyc_Fase != null)
        {
            htItems.put("P_CYC_FASE", M4BusinessMethodArg.toString(p_Cyc_Fase));
        }
        // SQL_SENTENCE.
        if (sql_Sentence != null)
        {
            htItems.put("SQL_SENTENCE", M4BusinessMethodArg.toString(sql_Sentence));
        }
        // P_AREAS_MEJORA.
        if (p_Areas_Mejora != null)
        {
            htItems.put("P_AREAS_MEJORA", M4BusinessMethodArg.toString(p_Areas_Mejora));
        }
        // CYC_EXECUTE_SQL.
        if (cyc_Execute_Sql != null)
        {
            htItems.put("CYC_EXECUTE_SQL", M4BusinessMethodArg.toString(cyc_Execute_Sql));
        }
        // P_PUNTOS_FUERTES.
        if (p_Puntos_Fuertes != null)
        {
            htItems.put("P_PUNTOS_FUERTES", M4BusinessMethodArg.toString(p_Puntos_Fuertes));
        }
        // P_ID_ORGANIZATION.
        if (p_Id_Organization != null)
        {
            htItems.put("P_ID_ORGANIZATION", M4BusinessMethodArg.toString(p_Id_Organization));
        }

        // insert 'block scope' values in CYC_FASE_II.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FASE_II.
        if (Cyc_Fase_IiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Fase_IiRecordSet.length; i++)
        {
            Cyc_Fase_IiRecord record = Cyc_Fase_IiRecordSet[i];
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
        // read 'block scope' values in CYC_FASE_II.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_CYC_FASE.
        sItemName = "P_CYC_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cyc_Fase = sItemValue;
        // read SQL_SENTENCE.
        sItemName = "SQL_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sql_Sentence = sItemValue;
        // read P_AREAS_MEJORA.
        sItemName = "P_AREAS_MEJORA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Areas_Mejora = sItemValue;
        // read CYC_EXECUTE_SQL.
        sItemName = "CYC_EXECUTE_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Execute_Sql = sItemValue;
        // read P_PUNTOS_FUERTES.
        sItemName = "P_PUNTOS_FUERTES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Puntos_Fuertes = sItemValue;
        // read P_ID_ORGANIZATION.
        sItemName = "P_ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Organization = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Fase_IiRecordSet = new Cyc_Fase_IiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Fase_IiRecord record = new Cyc_Fase_IiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Fase_IiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Fase_IiBlock */

