/**
 * Cyc_Especialidad_3Block.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASE2.
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
package com.meta4.soapservices.services.rpc.cyc_buscador_fase2;

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
 * Bean for node Cyc_Especialidad_3.
 * @author Meta4
 */
public 
class Cyc_Especialidad_3Block 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_BUSCADOR_FASE2";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_ESPECIALIDAD_3";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Especialidad_3Block.class.getName());

    /* item STD_ID_EDU_SP */
    public String std_Id_Edu_Sp = null;
    private void setstd_Id_Edu_Sp(String ai_value)
    {
        std_Id_Edu_Sp = ai_value;
    }
    private String getstd_Id_Edu_Sp()
    {
        return std_Id_Edu_Sp;
    }

    /* item STD_ID_EDU_TYPE */
    public String std_Id_Edu_Type = null;
    private void setstd_Id_Edu_Type(String ai_value)
    {
        std_Id_Edu_Type = ai_value;
    }
    private String getstd_Id_Edu_Type()
    {
        return std_Id_Edu_Type;
    }

    /* the recordset */
    public Cyc_Especialidad_3Record[] Cyc_Especialidad_3RecordSet = null;
    private void setCyc_Especialidad_3RecordSet(Cyc_Especialidad_3Record[] ai_arg)
    {
        Cyc_Especialidad_3RecordSet = ai_arg;
    }
    private Cyc_Especialidad_3Record[] getCyc_Especialidad_3RecordSet()
    {
        return Cyc_Especialidad_3RecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Especialidad_3Block.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // STD_ID_EDU_SP.
        if (std_Id_Edu_Sp != null)
        {
            htItems.put("STD_ID_EDU_SP", M4BusinessMethodArg.toString(std_Id_Edu_Sp));
        }
        // STD_ID_EDU_TYPE.
        if (std_Id_Edu_Type != null)
        {
            htItems.put("STD_ID_EDU_TYPE", M4BusinessMethodArg.toString(std_Id_Edu_Type));
        }

        // insert 'block scope' values in CYC_ESPECIALIDAD_3.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_ESPECIALIDAD_3.
        if (Cyc_Especialidad_3RecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Especialidad_3RecordSet.length; i++)
        {
            Cyc_Especialidad_3Record record = Cyc_Especialidad_3RecordSet[i];
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
        // read 'block scope' values in CYC_ESPECIALIDAD_3.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read STD_ID_EDU_SP.
        sItemName = "STD_ID_EDU_SP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        std_Id_Edu_Sp = sItemValue;
        // read STD_ID_EDU_TYPE.
        sItemName = "STD_ID_EDU_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        std_Id_Edu_Type = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Especialidad_3RecordSet = new Cyc_Especialidad_3Record[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Especialidad_3Record record = new Cyc_Especialidad_3Record();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Especialidad_3RecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Especialidad_3Block */

