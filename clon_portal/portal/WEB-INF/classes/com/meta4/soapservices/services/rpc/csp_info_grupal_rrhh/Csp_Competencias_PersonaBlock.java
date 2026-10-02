/**
 * Csp_Competencias_PersonaBlock.java
 * Self generated code for Bussines Object CSP_INFO_GRUPAL_RRHH.
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
package com.meta4.soapservices.services.rpc.csp_info_grupal_rrhh;

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
 * Bean for node Csp_Competencias_Persona.
 * @author Meta4
 */
public 
class Csp_Competencias_PersonaBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_INFO_GRUPAL_RRHH";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_COMPETENCIAS_PERSONA";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Competencias_PersonaBlock.class.getName());

    /* item CSP_ID_HR */
    public String csp_Id_Hr = null;
    private void setcsp_Id_Hr(String ai_value)
    {
        csp_Id_Hr = ai_value;
    }
    private String getcsp_Id_Hr()
    {
        return csp_Id_Hr;
    }

    /* item CSP_DT_START_EVAL */
    public Calendar csp_Dt_Start_Eval = null;
    private void setcsp_Dt_Start_Eval(Calendar ai_value)
    {
        csp_Dt_Start_Eval = ai_value;
    }
    private Calendar getcsp_Dt_Start_Eval()
    {
        return csp_Dt_Start_Eval;
    }

    /* the recordset */
    public Csp_Competencias_PersonaRecord[] Csp_Competencias_PersonaRecordSet = null;
    private void setCsp_Competencias_PersonaRecordSet(Csp_Competencias_PersonaRecord[] ai_arg)
    {
        Csp_Competencias_PersonaRecordSet = ai_arg;
    }
    private Csp_Competencias_PersonaRecord[] getCsp_Competencias_PersonaRecordSet()
    {
        return Csp_Competencias_PersonaRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Competencias_PersonaBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // CSP_ID_HR.
        if (csp_Id_Hr != null)
        {
            htItems.put("CSP_ID_HR", M4BusinessMethodArg.toString(csp_Id_Hr));
        }
        // CSP_DT_START_EVAL.
        if (csp_Dt_Start_Eval != null)
        {
            htItems.put("CSP_DT_START_EVAL", M4BusinessMethodArg.toString(csp_Dt_Start_Eval));
        }

        // insert 'block scope' values in CSP_COMPETENCIAS_PERSONA.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_COMPETENCIAS_PERSONA.
        if (Csp_Competencias_PersonaRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Competencias_PersonaRecordSet.length; i++)
        {
            Csp_Competencias_PersonaRecord record = Csp_Competencias_PersonaRecordSet[i];
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
        // read 'block scope' values in CSP_COMPETENCIAS_PERSONA.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read CSP_ID_HR.
        sItemName = "CSP_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Id_Hr = sItemValue;
        // read CSP_DT_START_EVAL.
        sItemName = "CSP_DT_START_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Dt_Start_Eval = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Competencias_PersonaRecordSet = new Csp_Competencias_PersonaRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Competencias_PersonaRecord record = new Csp_Competencias_PersonaRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Competencias_PersonaRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Competencias_PersonaBlock */

