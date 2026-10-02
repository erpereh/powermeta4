/**
 * Cyc_Filtro_Fb_BorradorBlock.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FEED_BORRADOR.
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
package com.meta4.soapservices.services.rpc.cyc_buscador_feed_borrador;

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
 * Bean for node Cyc_Filtro_Fb_Borrador.
 * @author Meta4
 */
public 
class Cyc_Filtro_Fb_BorradorBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_BUSCADOR_FEED_BORRADOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FILTRO_FB_BORRADOR";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Filtro_Fb_BorradorBlock.class.getName());

    /* item SENTENCIA */
    public String sentencia = null;
    private void setsentencia(String ai_value)
    {
        sentencia = ai_value;
    }
    private String getsentencia()
    {
        return sentencia;
    }

    /* item EXECUTE_REAL_SQL */
    public String execute_Real_Sql = null;
    private void setexecute_Real_Sql(String ai_value)
    {
        execute_Real_Sql = ai_value;
    }
    private String getexecute_Real_Sql()
    {
        return execute_Real_Sql;
    }

    /* the recordset */
    public Cyc_Filtro_Fb_BorradorRecord[] Cyc_Filtro_Fb_BorradorRecordSet = null;
    private void setCyc_Filtro_Fb_BorradorRecordSet(Cyc_Filtro_Fb_BorradorRecord[] ai_arg)
    {
        Cyc_Filtro_Fb_BorradorRecordSet = ai_arg;
    }
    private Cyc_Filtro_Fb_BorradorRecord[] getCyc_Filtro_Fb_BorradorRecordSet()
    {
        return Cyc_Filtro_Fb_BorradorRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Filtro_Fb_BorradorBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SENTENCIA.
        if (sentencia != null)
        {
            htItems.put("SENTENCIA", M4BusinessMethodArg.toString(sentencia));
        }
        // EXECUTE_REAL_SQL.
        if (execute_Real_Sql != null)
        {
            htItems.put("EXECUTE_REAL_SQL", M4BusinessMethodArg.toString(execute_Real_Sql));
        }

        // insert 'block scope' values in CYC_FILTRO_FB_BORRADOR.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FILTRO_FB_BORRADOR.
        if (Cyc_Filtro_Fb_BorradorRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Filtro_Fb_BorradorRecordSet.length; i++)
        {
            Cyc_Filtro_Fb_BorradorRecord record = Cyc_Filtro_Fb_BorradorRecordSet[i];
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
        // read 'block scope' values in CYC_FILTRO_FB_BORRADOR.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SENTENCIA.
        sItemName = "SENTENCIA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sentencia = sItemValue;
        // read EXECUTE_REAL_SQL.
        sItemName = "EXECUTE_REAL_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        execute_Real_Sql = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Filtro_Fb_BorradorRecordSet = new Cyc_Filtro_Fb_BorradorRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Filtro_Fb_BorradorRecord record = new Cyc_Filtro_Fb_BorradorRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Filtro_Fb_BorradorRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Filtro_Fb_BorradorBlock */

