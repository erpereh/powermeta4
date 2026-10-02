/**
 * Cyc_Competencias_FiiiBlock.java
 * Self generated code for Bussines Object CYC_INFORMES_PCP.
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
package com.meta4.soapservices.services.rpc.cyc_informes_pcp;

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
 * Bean for node Cyc_Competencias_Fiii.
 * @author Meta4
 */
public 
class Cyc_Competencias_FiiiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_COMPETENCIAS_FIII";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Competencias_FiiiBlock.class.getName());

    /* item SQL */
    public String sql = null;
    private void setsql(String ai_value)
    {
        sql = ai_value;
    }
    private String getsql()
    {
        return sql;
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

    /* item P_CURSANTES */
    public String p_Cursantes = null;
    private void setp_Cursantes(String ai_value)
    {
        p_Cursantes = ai_value;
    }
    private String getp_Cursantes()
    {
        return p_Cursantes;
    }

    /* the recordset */
    public Cyc_Competencias_FiiiRecord[] Cyc_Competencias_FiiiRecordSet = null;
    private void setCyc_Competencias_FiiiRecordSet(Cyc_Competencias_FiiiRecord[] ai_arg)
    {
        Cyc_Competencias_FiiiRecordSet = ai_arg;
    }
    private Cyc_Competencias_FiiiRecord[] getCyc_Competencias_FiiiRecordSet()
    {
        return Cyc_Competencias_FiiiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Competencias_FiiiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SQL.
        if (sql != null)
        {
            htItems.put("SQL", M4BusinessMethodArg.toString(sql));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_CURSANTES.
        if (p_Cursantes != null)
        {
            htItems.put("P_CURSANTES", M4BusinessMethodArg.toString(p_Cursantes));
        }

        // insert 'block scope' values in CYC_COMPETENCIAS_FIII.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_COMPETENCIAS_FIII.
        if (Cyc_Competencias_FiiiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Competencias_FiiiRecordSet.length; i++)
        {
            Cyc_Competencias_FiiiRecord record = Cyc_Competencias_FiiiRecordSet[i];
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
        // read 'block scope' values in CYC_COMPETENCIAS_FIII.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SQL.
        sItemName = "SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sql = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_CURSANTES.
        sItemName = "P_CURSANTES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cursantes = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Competencias_FiiiRecordSet = new Cyc_Competencias_FiiiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Competencias_FiiiRecord record = new Cyc_Competencias_FiiiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Competencias_FiiiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Competencias_FiiiBlock */

