/**
 * Cyc_Ficha_Datos_PersonalesBlock.java
 * Self generated code for Bussines Object CYC_FICHA_EMPLEADO.
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
package com.meta4.soapservices.services.rpc.cyc_ficha_empleado;

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
 * Bean for node Cyc_Ficha_Datos_Personales.
 * @author Meta4
 */
public 
class Cyc_Ficha_Datos_PersonalesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_FICHA_EMPLEADO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FICHA_DATOS_PERSONALES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Ficha_Datos_PersonalesBlock.class.getName());

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

    /* the recordset */
    public Cyc_Ficha_Datos_PersonalesRecord[] Cyc_Ficha_Datos_PersonalesRecordSet = null;
    private void setCyc_Ficha_Datos_PersonalesRecordSet(Cyc_Ficha_Datos_PersonalesRecord[] ai_arg)
    {
        Cyc_Ficha_Datos_PersonalesRecordSet = ai_arg;
    }
    private Cyc_Ficha_Datos_PersonalesRecord[] getCyc_Ficha_Datos_PersonalesRecordSet()
    {
        return Cyc_Ficha_Datos_PersonalesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Ficha_Datos_PersonalesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }

        // insert 'block scope' values in CYC_FICHA_DATOS_PERSONALES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FICHA_DATOS_PERSONALES.
        if (Cyc_Ficha_Datos_PersonalesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Ficha_Datos_PersonalesRecordSet.length; i++)
        {
            Cyc_Ficha_Datos_PersonalesRecord record = Cyc_Ficha_Datos_PersonalesRecordSet[i];
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
        // read 'block scope' values in CYC_FICHA_DATOS_PERSONALES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Ficha_Datos_PersonalesRecordSet = new Cyc_Ficha_Datos_PersonalesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Ficha_Datos_PersonalesRecord record = new Cyc_Ficha_Datos_PersonalesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Ficha_Datos_PersonalesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Ficha_Datos_PersonalesBlock */

