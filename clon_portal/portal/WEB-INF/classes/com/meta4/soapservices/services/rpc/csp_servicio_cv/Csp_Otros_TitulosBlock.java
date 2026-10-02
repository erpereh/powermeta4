/**
 * Csp_Otros_TitulosBlock.java
 * Self generated code for Bussines Object CSP_SERVICIO_CV.
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
package com.meta4.soapservices.services.rpc.csp_servicio_cv;

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
 * Bean for node Csp_Otros_Titulos.
 * @author Meta4
 */
public 
class Csp_Otros_TitulosBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_SERVICIO_CV";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_OTROS_TITULOS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Otros_TitulosBlock.class.getName());

    /* item STD_ID_HR */
    public String std_Id_Hr = null;
    private void setstd_Id_Hr(String ai_value)
    {
        std_Id_Hr = ai_value;
    }
    private String getstd_Id_Hr()
    {
        return std_Id_Hr;
    }

    /* item ID_ORGANIZATION */
    public String id_Organization = null;
    private void setid_Organization(String ai_value)
    {
        id_Organization = ai_value;
    }
    private String getid_Organization()
    {
        return id_Organization;
    }

    /* the recordset */
    public Csp_Otros_TitulosRecord[] Csp_Otros_TitulosRecordSet = null;
    private void setCsp_Otros_TitulosRecordSet(Csp_Otros_TitulosRecord[] ai_arg)
    {
        Csp_Otros_TitulosRecordSet = ai_arg;
    }
    private Csp_Otros_TitulosRecord[] getCsp_Otros_TitulosRecordSet()
    {
        return Csp_Otros_TitulosRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Otros_TitulosBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // STD_ID_HR.
        if (std_Id_Hr != null)
        {
            htItems.put("STD_ID_HR", M4BusinessMethodArg.toString(std_Id_Hr));
        }
        // ID_ORGANIZATION.
        if (id_Organization != null)
        {
            htItems.put("ID_ORGANIZATION", M4BusinessMethodArg.toString(id_Organization));
        }

        // insert 'block scope' values in CSP_OTROS_TITULOS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_OTROS_TITULOS.
        if (Csp_Otros_TitulosRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Otros_TitulosRecordSet.length; i++)
        {
            Csp_Otros_TitulosRecord record = Csp_Otros_TitulosRecordSet[i];
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
        // read 'block scope' values in CSP_OTROS_TITULOS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read STD_ID_HR.
        sItemName = "STD_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        std_Id_Hr = sItemValue;
        // read ID_ORGANIZATION.
        sItemName = "ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Organization = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Otros_TitulosRecordSet = new Csp_Otros_TitulosRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Otros_TitulosRecord record = new Csp_Otros_TitulosRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Otros_TitulosRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Otros_TitulosBlock */

