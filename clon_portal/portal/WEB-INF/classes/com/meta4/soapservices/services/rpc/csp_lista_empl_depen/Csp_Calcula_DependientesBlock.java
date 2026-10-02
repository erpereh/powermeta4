/**
 * Csp_Calcula_DependientesBlock.java
 * Self generated code for Bussines Object CSP_LISTA_EMPL_DEPEN.
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
package com.meta4.soapservices.services.rpc.csp_lista_empl_depen;

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
 * Bean for node Csp_Calcula_Dependientes.
 * @author Meta4
 */
public 
class Csp_Calcula_DependientesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_LISTA_EMPL_DEPEN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CALCULA_DEPENDIENTES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Calcula_DependientesBlock.class.getName());

    /* item P_ANNIO */
    public String p_Annio = null;
    private void setp_Annio(String ai_value)
    {
        p_Annio = ai_value;
    }
    private String getp_Annio()
    {
        return p_Annio;
    }

    /* item P_RESPONSABLE */
    public String p_Responsable = null;
    private void setp_Responsable(String ai_value)
    {
        p_Responsable = ai_value;
    }
    private String getp_Responsable()
    {
        return p_Responsable;
    }

    /* the recordset */
    public Csp_Calcula_DependientesRecord[] Csp_Calcula_DependientesRecordSet = null;
    private void setCsp_Calcula_DependientesRecordSet(Csp_Calcula_DependientesRecord[] ai_arg)
    {
        Csp_Calcula_DependientesRecordSet = ai_arg;
    }
    private Csp_Calcula_DependientesRecord[] getCsp_Calcula_DependientesRecordSet()
    {
        return Csp_Calcula_DependientesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Calcula_DependientesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANNIO.
        if (p_Annio != null)
        {
            htItems.put("P_ANNIO", M4BusinessMethodArg.toString(p_Annio));
        }
        // P_RESPONSABLE.
        if (p_Responsable != null)
        {
            htItems.put("P_RESPONSABLE", M4BusinessMethodArg.toString(p_Responsable));
        }

        // insert 'block scope' values in CSP_CALCULA_DEPENDIENTES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CALCULA_DEPENDIENTES.
        if (Csp_Calcula_DependientesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Calcula_DependientesRecordSet.length; i++)
        {
            Csp_Calcula_DependientesRecord record = Csp_Calcula_DependientesRecordSet[i];
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
        // read 'block scope' values in CSP_CALCULA_DEPENDIENTES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANNIO.
        sItemName = "P_ANNIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Annio = sItemValue;
        // read P_RESPONSABLE.
        sItemName = "P_RESPONSABLE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Responsable = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Calcula_DependientesRecordSet = new Csp_Calcula_DependientesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Calcula_DependientesRecord record = new Csp_Calcula_DependientesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Calcula_DependientesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Calcula_DependientesBlock */

