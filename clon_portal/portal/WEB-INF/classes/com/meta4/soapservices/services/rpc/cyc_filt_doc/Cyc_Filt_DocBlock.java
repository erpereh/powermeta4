/**
 * Cyc_Filt_DocBlock.java
 * Self generated code for Bussines Object CYC_FILT_DOC.
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
package com.meta4.soapservices.services.rpc.cyc_filt_doc;

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
 * Bean for node Cyc_Filt_Doc.
 * @author Meta4
 */
public 
class Cyc_Filt_DocBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_FILT_DOC";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FILT_DOC";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filt_DocBlock.class.getName());

    /* item PROP_BLOB_FILE */
    public DataHandler prop_Blob_File = null;
    private void setprop_Blob_File(DataHandler ai_value)
    {
        prop_Blob_File = ai_value;
    }
    private DataHandler getprop_Blob_File()
    {
        return prop_Blob_File;
    }

    /* item P_EMPLEADO */
    public String p_Empleado = null;
    private void setp_Empleado(String ai_value)
    {
        p_Empleado = ai_value;
    }
    private String getp_Empleado()
    {
        return p_Empleado;
    }

    /* the recordset */
    public Cyc_Filt_DocRecord[] Cyc_Filt_DocRecordSet = null;
    private void setCyc_Filt_DocRecordSet(Cyc_Filt_DocRecord[] ai_arg)
    {
        Cyc_Filt_DocRecordSet = ai_arg;
    }
    private Cyc_Filt_DocRecord[] getCyc_Filt_DocRecordSet()
    {
        return Cyc_Filt_DocRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Filt_DocBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PROP_BLOB_FILE.
        if ( prop_Blob_File != null )
        {
            htBlobs.put("PROP_BLOB_FILE", prop_Blob_File.getName());
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }

        // insert 'block scope' values in CYC_FILT_DOC.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FILT_DOC.
        if (Cyc_Filt_DocRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Filt_DocRecordSet.length; i++)
        {
            Cyc_Filt_DocRecord record = Cyc_Filt_DocRecordSet[i];
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
        // read 'block scope' values in CYC_FILT_DOC.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PROP_BLOB_FILE.
        sItemName = "PROP_BLOB_FILE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            prop_Blob_File = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            prop_Blob_File = null;
        }


        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Filt_DocRecordSet = new Cyc_Filt_DocRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Filt_DocRecord record = new Cyc_Filt_DocRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Filt_DocRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Filt_DocBlock */

