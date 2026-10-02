/**
 * Csp_Consulta_CentrosBlock.java
 * Self generated code for Bussines Object CSP_FILTRO_MTR.
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
package com.meta4.soapservices.services.rpc.csp_filtro_mtr;

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
 * Bean for node Csp_Consulta_Centros.
 * @author Meta4
 */
public 
class Csp_Consulta_CentrosBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_FILTRO_MTR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_CENTROS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_CentrosBlock.class.getName());

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

    /* item SQL_SENTENCIA */
    public String sql_Sentencia = null;
    private void setsql_Sentencia(String ai_value)
    {
        sql_Sentencia = ai_value;
    }
    private String getsql_Sentencia()
    {
        return sql_Sentencia;
    }

    /* the recordset */
    public Csp_Consulta_CentrosRecord[] Csp_Consulta_CentrosRecordSet = null;
    private void setCsp_Consulta_CentrosRecordSet(Csp_Consulta_CentrosRecord[] ai_arg)
    {
        Csp_Consulta_CentrosRecordSet = ai_arg;
    }
    private Csp_Consulta_CentrosRecord[] getCsp_Consulta_CentrosRecordSet()
    {
        return Csp_Consulta_CentrosRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_CentrosBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // SQL_SENTENCIA.
        if (sql_Sentencia != null)
        {
            htItems.put("SQL_SENTENCIA", M4BusinessMethodArg.toString(sql_Sentencia));
        }

        // insert 'block scope' values in CSP_CONSULTA_CENTROS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_CENTROS.
        if (Csp_Consulta_CentrosRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_CentrosRecordSet.length; i++)
        {
            Csp_Consulta_CentrosRecord record = Csp_Consulta_CentrosRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_CENTROS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read SQL_SENTENCIA.
        sItemName = "SQL_SENTENCIA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sql_Sentencia = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_CentrosRecordSet = new Csp_Consulta_CentrosRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_CentrosRecord record = new Csp_Consulta_CentrosRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_CentrosRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_CentrosBlock */

