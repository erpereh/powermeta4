/**
 * Cyc_Resultado_BuscadorBlock.java
 * Self generated code for Bussines Object CYC_BUSCADOR_INICIO.
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
package com.meta4.soapservices.services.rpc.cyc_buscador_inicio;

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
 * Bean for node Cyc_Resultado_Buscador.
 * @author Meta4
 */
public 
class Cyc_Resultado_BuscadorBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_BUSCADOR_INICIO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_RESULTADO_BUSCADOR";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Resultado_BuscadorBlock.class.getName());

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

    /* item EXECUTEREALSQL */
    public String executerealsql = null;
    private void setexecuterealsql(String ai_value)
    {
        executerealsql = ai_value;
    }
    private String getexecuterealsql()
    {
        return executerealsql;
    }

    /* the recordset */
    public Cyc_Resultado_BuscadorRecord[] Cyc_Resultado_BuscadorRecordSet = null;
    private void setCyc_Resultado_BuscadorRecordSet(Cyc_Resultado_BuscadorRecord[] ai_arg)
    {
        Cyc_Resultado_BuscadorRecordSet = ai_arg;
    }
    private Cyc_Resultado_BuscadorRecord[] getCyc_Resultado_BuscadorRecordSet()
    {
        return Cyc_Resultado_BuscadorRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Resultado_BuscadorBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // EXECUTEREALSQL.
        if (executerealsql != null)
        {
            htItems.put("EXECUTEREALSQL", M4BusinessMethodArg.toString(executerealsql));
        }

        // insert 'block scope' values in CYC_RESULTADO_BUSCADOR.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_RESULTADO_BUSCADOR.
        if (Cyc_Resultado_BuscadorRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Resultado_BuscadorRecordSet.length; i++)
        {
            Cyc_Resultado_BuscadorRecord record = Cyc_Resultado_BuscadorRecordSet[i];
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
        // read 'block scope' values in CYC_RESULTADO_BUSCADOR.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read EXECUTEREALSQL.
        sItemName = "EXECUTEREALSQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executerealsql = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Resultado_BuscadorRecordSet = new Cyc_Resultado_BuscadorRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Resultado_BuscadorRecord record = new Cyc_Resultado_BuscadorRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Resultado_BuscadorRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Resultado_BuscadorBlock */

