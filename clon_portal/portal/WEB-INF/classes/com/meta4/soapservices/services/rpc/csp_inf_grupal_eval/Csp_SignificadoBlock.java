/**
 * Csp_SignificadoBlock.java
 * Self generated code for Bussines Object CSP_INF_GRUPAL_EVAL.
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
package com.meta4.soapservices.services.rpc.csp_inf_grupal_eval;

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
 * Bean for node Csp_Significado.
 * @author Meta4
 */
public 
class Csp_SignificadoBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_INF_GRUPAL_EVAL";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_SIGNIFICADO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_SignificadoBlock.class.getName());

    /* item CSP_P_NIVEL */
    public String csp_P_Nivel = null;
    private void setcsp_P_Nivel(String ai_value)
    {
        csp_P_Nivel = ai_value;
    }
    private String getcsp_P_Nivel()
    {
        return csp_P_Nivel;
    }

    /* item CSP_P_COMPETENCIA */
    public String csp_P_Competencia = null;
    private void setcsp_P_Competencia(String ai_value)
    {
        csp_P_Competencia = ai_value;
    }
    private String getcsp_P_Competencia()
    {
        return csp_P_Competencia;
    }

    /* the recordset */
    public Csp_SignificadoRecord[] Csp_SignificadoRecordSet = null;
    private void setCsp_SignificadoRecordSet(Csp_SignificadoRecord[] ai_arg)
    {
        Csp_SignificadoRecordSet = ai_arg;
    }
    private Csp_SignificadoRecord[] getCsp_SignificadoRecordSet()
    {
        return Csp_SignificadoRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_SignificadoBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // CSP_P_NIVEL.
        if (csp_P_Nivel != null)
        {
            htItems.put("CSP_P_NIVEL", M4BusinessMethodArg.toString(csp_P_Nivel));
        }
        // CSP_P_COMPETENCIA.
        if (csp_P_Competencia != null)
        {
            htItems.put("CSP_P_COMPETENCIA", M4BusinessMethodArg.toString(csp_P_Competencia));
        }

        // insert 'block scope' values in CSP_SIGNIFICADO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_SIGNIFICADO.
        if (Csp_SignificadoRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_SignificadoRecordSet.length; i++)
        {
            Csp_SignificadoRecord record = Csp_SignificadoRecordSet[i];
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
        // read 'block scope' values in CSP_SIGNIFICADO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read CSP_P_NIVEL.
        sItemName = "CSP_P_NIVEL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_P_Nivel = sItemValue;
        // read CSP_P_COMPETENCIA.
        sItemName = "CSP_P_COMPETENCIA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_P_Competencia = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_SignificadoRecordSet = new Csp_SignificadoRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_SignificadoRecord record = new Csp_SignificadoRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_SignificadoRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_SignificadoBlock */

