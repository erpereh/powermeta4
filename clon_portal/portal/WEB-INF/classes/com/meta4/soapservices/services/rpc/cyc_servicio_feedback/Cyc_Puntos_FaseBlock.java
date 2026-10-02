/**
 * Cyc_Puntos_FaseBlock.java
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
 * Bean for node Cyc_Puntos_Fase.
 * @author Meta4
 */
public 
class Cyc_Puntos_FaseBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_PUNTOS_FASE";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Puntos_FaseBlock.class.getName());

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

    /* item P_DT_START */
    public Calendar p_Dt_Start = null;
    private void setp_Dt_Start(Calendar ai_value)
    {
        p_Dt_Start = ai_value;
    }
    private Calendar getp_Dt_Start()
    {
        return p_Dt_Start;
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

    /* the recordset */
    public Cyc_Puntos_FaseRecord[] Cyc_Puntos_FaseRecordSet = null;
    private void setCyc_Puntos_FaseRecordSet(Cyc_Puntos_FaseRecord[] ai_arg)
    {
        Cyc_Puntos_FaseRecordSet = ai_arg;
    }
    private Cyc_Puntos_FaseRecord[] getCyc_Puntos_FaseRecordSet()
    {
        return Cyc_Puntos_FaseRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Puntos_FaseBlock.writeOperations(...)");

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
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }
        // SQL_SENTENCE.
        if (sql_Sentence != null)
        {
            htItems.put("SQL_SENTENCE", M4BusinessMethodArg.toString(sql_Sentence));
        }
        // CYC_EXECUTE_SQL.
        if (cyc_Execute_Sql != null)
        {
            htItems.put("CYC_EXECUTE_SQL", M4BusinessMethodArg.toString(cyc_Execute_Sql));
        }

        // insert 'block scope' values in CYC_PUNTOS_FASE.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_PUNTOS_FASE.
        if (Cyc_Puntos_FaseRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Puntos_FaseRecordSet.length; i++)
        {
            Cyc_Puntos_FaseRecord record = Cyc_Puntos_FaseRecordSet[i];
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
        // read 'block scope' values in CYC_PUNTOS_FASE.
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
        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read SQL_SENTENCE.
        sItemName = "SQL_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sql_Sentence = sItemValue;
        // read CYC_EXECUTE_SQL.
        sItemName = "CYC_EXECUTE_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Execute_Sql = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Puntos_FaseRecordSet = new Cyc_Puntos_FaseRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Puntos_FaseRecord record = new Cyc_Puntos_FaseRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Puntos_FaseRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Puntos_FaseBlock */

