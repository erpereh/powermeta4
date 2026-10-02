/**
 * Csp_Consulta_List_EmplBlock.java
 * Self generated code for Bussines Object CSP_CONSULTA_LIST_EMPL.
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
package com.meta4.soapservices.services.rpc.csp_consulta_list_empl;

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
 * Bean for node Csp_Consulta_List_Empl.
 * @author Meta4
 */
public 
class Csp_Consulta_List_EmplBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CONSULTA_LIST_EMPL";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_LIST_EMPL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_List_EmplBlock.class.getName());

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

    /* item SYSSENTENCE */
    public String syssentence = null;
    private void setsyssentence(String ai_value)
    {
        syssentence = ai_value;
    }
    private String getsyssentence()
    {
        return syssentence;
    }

    /* item P_LISTA_UNIDAD */
    public String p_Lista_Unidad = null;
    private void setp_Lista_Unidad(String ai_value)
    {
        p_Lista_Unidad = ai_value;
    }
    private String getp_Lista_Unidad()
    {
        return p_Lista_Unidad;
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
    public Csp_Consulta_List_EmplRecord[] Csp_Consulta_List_EmplRecordSet = null;
    private void setCsp_Consulta_List_EmplRecordSet(Csp_Consulta_List_EmplRecord[] ai_arg)
    {
        Csp_Consulta_List_EmplRecordSet = ai_arg;
    }
    private Csp_Consulta_List_EmplRecord[] getCsp_Consulta_List_EmplRecordSet()
    {
        return Csp_Consulta_List_EmplRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_List_EmplBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // SYSSENTENCE.
        if (syssentence != null)
        {
            htItems.put("SYSSENTENCE", M4BusinessMethodArg.toString(syssentence));
        }
        // P_LISTA_UNIDAD.
        if (p_Lista_Unidad != null)
        {
            htItems.put("P_LISTA_UNIDAD", M4BusinessMethodArg.toString(p_Lista_Unidad));
        }
        // EXECUTE_REAL_SQL.
        if (execute_Real_Sql != null)
        {
            htItems.put("EXECUTE_REAL_SQL", M4BusinessMethodArg.toString(execute_Real_Sql));
        }

        // insert 'block scope' values in CSP_CONSULTA_LIST_EMPL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_LIST_EMPL.
        if (Csp_Consulta_List_EmplRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_List_EmplRecordSet.length; i++)
        {
            Csp_Consulta_List_EmplRecord record = Csp_Consulta_List_EmplRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_LIST_EMPL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read SYSSENTENCE.
        sItemName = "SYSSENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        syssentence = sItemValue;
        // read P_LISTA_UNIDAD.
        sItemName = "P_LISTA_UNIDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Lista_Unidad = sItemValue;
        // read EXECUTE_REAL_SQL.
        sItemName = "EXECUTE_REAL_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        execute_Real_Sql = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_List_EmplRecordSet = new Csp_Consulta_List_EmplRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_List_EmplRecord record = new Csp_Consulta_List_EmplRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_List_EmplRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_List_EmplBlock */

