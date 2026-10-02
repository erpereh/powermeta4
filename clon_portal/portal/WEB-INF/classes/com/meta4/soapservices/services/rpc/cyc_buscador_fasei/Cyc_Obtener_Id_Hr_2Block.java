/**
 * Cyc_Obtener_Id_Hr_2Block.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASEI.
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
package com.meta4.soapservices.services.rpc.cyc_buscador_fasei;

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
 * Bean for node Cyc_Obtener_Id_Hr_2.
 * @author Meta4
 */
public 
class Cyc_Obtener_Id_Hr_2Block 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_BUSCADOR_FASEI";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_OBTENER_ID_HR_2";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Obtener_Id_Hr_2Block.class.getName());

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

    /* item P_NOMBREAPELLIDOS */
    public String p_Nombreapellidos = null;
    private void setp_Nombreapellidos(String ai_value)
    {
        p_Nombreapellidos = ai_value;
    }
    private String getp_Nombreapellidos()
    {
        return p_Nombreapellidos;
    }

    /* the recordset */
    public Cyc_Obtener_Id_Hr_2Record[] Cyc_Obtener_Id_Hr_2RecordSet = null;
    private void setCyc_Obtener_Id_Hr_2RecordSet(Cyc_Obtener_Id_Hr_2Record[] ai_arg)
    {
        Cyc_Obtener_Id_Hr_2RecordSet = ai_arg;
    }
    private Cyc_Obtener_Id_Hr_2Record[] getCyc_Obtener_Id_Hr_2RecordSet()
    {
        return Cyc_Obtener_Id_Hr_2RecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Obtener_Id_Hr_2Block.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // P_NOMBREAPELLIDOS.
        if (p_Nombreapellidos != null)
        {
            htItems.put("P_NOMBREAPELLIDOS", M4BusinessMethodArg.toString(p_Nombreapellidos));
        }

        // insert 'block scope' values in CYC_OBTENER_ID_HR_2.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_OBTENER_ID_HR_2.
        if (Cyc_Obtener_Id_Hr_2RecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Obtener_Id_Hr_2RecordSet.length; i++)
        {
            Cyc_Obtener_Id_Hr_2Record record = Cyc_Obtener_Id_Hr_2RecordSet[i];
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
        // read 'block scope' values in CYC_OBTENER_ID_HR_2.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read P_NOMBREAPELLIDOS.
        sItemName = "P_NOMBREAPELLIDOS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Nombreapellidos = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Obtener_Id_Hr_2RecordSet = new Cyc_Obtener_Id_Hr_2Record[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Obtener_Id_Hr_2Record record = new Cyc_Obtener_Id_Hr_2Record();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Obtener_Id_Hr_2RecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Obtener_Id_Hr_2Block */

