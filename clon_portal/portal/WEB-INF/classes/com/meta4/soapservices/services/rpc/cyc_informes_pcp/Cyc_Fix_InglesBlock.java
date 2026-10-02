/**
 * Cyc_Fix_InglesBlock.java
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
 * Bean for node Cyc_Fix_Ingles.
 * @author Meta4
 */
public 
class Cyc_Fix_InglesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FIX_INGLES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Fix_InglesBlock.class.getName());

    /* item P_INGLES */
    public Double p_Ingles = null;
    private void setp_Ingles(Double ai_value)
    {
        p_Ingles = ai_value;
    }
    private Double getp_Ingles()
    {
        return p_Ingles;
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

    /* item P_FASE */
    public String p_Fase = null;
    private void setp_Fase(String ai_value)
    {
        p_Fase = ai_value;
    }
    private String getp_Fase()
    {
        return p_Fase;
    }

    /* item P_POTENCIAL_DES_ING */
    public Double p_Potencial_Des_Ing = null;
    private void setp_Potencial_Des_Ing(Double ai_value)
    {
        p_Potencial_Des_Ing = ai_value;
    }
    private Double getp_Potencial_Des_Ing()
    {
        return p_Potencial_Des_Ing;
    }

    /* item P_CONTRIBUYENTES_ING */
    public Double p_Contribuyentes_Ing = null;
    private void setp_Contribuyentes_Ing(Double ai_value)
    {
        p_Contribuyentes_Ing = ai_value;
    }
    private Double getp_Contribuyentes_Ing()
    {
        return p_Contribuyentes_Ing;
    }

    /* item P_CAP_GESTION_DES_ING */
    public Double p_Cap_Gestion_Des_Ing = null;
    private void setp_Cap_Gestion_Des_Ing(Double ai_value)
    {
        p_Cap_Gestion_Des_Ing = ai_value;
    }
    private Double getp_Cap_Gestion_Des_Ing()
    {
        return p_Cap_Gestion_Des_Ing;
    }

    /* item P_CAP_GESTION_BAJO_ING */
    public Double p_Cap_Gestion_Bajo_Ing = null;
    private void setp_Cap_Gestion_Bajo_Ing(Double ai_value)
    {
        p_Cap_Gestion_Bajo_Ing = ai_value;
    }
    private Double getp_Cap_Gestion_Bajo_Ing()
    {
        return p_Cap_Gestion_Bajo_Ing;
    }

    /* the recordset */
    public Cyc_Fix_InglesRecord[] Cyc_Fix_InglesRecordSet = null;
    private void setCyc_Fix_InglesRecordSet(Cyc_Fix_InglesRecord[] ai_arg)
    {
        Cyc_Fix_InglesRecordSet = ai_arg;
    }
    private Cyc_Fix_InglesRecord[] getCyc_Fix_InglesRecordSet()
    {
        return Cyc_Fix_InglesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Fix_InglesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_INGLES.
		if (p_Ingles != null)
    	{
			htItems.put("P_INGLES", M4BusinessMethodArg.toString(p_Ingles));
    	}

        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_FASE.
        if (p_Fase != null)
        {
            htItems.put("P_FASE", M4BusinessMethodArg.toString(p_Fase));
        }
        // P_POTENCIAL_DES_ING.
		if (p_Potencial_Des_Ing != null)
    	{
			htItems.put("P_POTENCIAL_DES_ING", M4BusinessMethodArg.toString(p_Potencial_Des_Ing));
    	}

        // P_CONTRIBUYENTES_ING.
		if (p_Contribuyentes_Ing != null)
    	{
			htItems.put("P_CONTRIBUYENTES_ING", M4BusinessMethodArg.toString(p_Contribuyentes_Ing));
    	}

        // P_CAP_GESTION_DES_ING.
		if (p_Cap_Gestion_Des_Ing != null)
    	{
			htItems.put("P_CAP_GESTION_DES_ING", M4BusinessMethodArg.toString(p_Cap_Gestion_Des_Ing));
    	}

        // P_CAP_GESTION_BAJO_ING.
		if (p_Cap_Gestion_Bajo_Ing != null)
    	{
			htItems.put("P_CAP_GESTION_BAJO_ING", M4BusinessMethodArg.toString(p_Cap_Gestion_Bajo_Ing));
    	}


        // insert 'block scope' values in CYC_FIX_INGLES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FIX_INGLES.
        if (Cyc_Fix_InglesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Fix_InglesRecordSet.length; i++)
        {
            Cyc_Fix_InglesRecord record = Cyc_Fix_InglesRecordSet[i];
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
        // read 'block scope' values in CYC_FIX_INGLES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_INGLES.
        sItemName = "P_INGLES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Ingles = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_FASE.
        sItemName = "P_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fase = sItemValue;
        // read P_POTENCIAL_DES_ING.
        sItemName = "P_POTENCIAL_DES_ING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Potencial_Des_Ing = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_CONTRIBUYENTES_ING.
        sItemName = "P_CONTRIBUYENTES_ING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Contribuyentes_Ing = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_CAP_GESTION_DES_ING.
        sItemName = "P_CAP_GESTION_DES_ING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cap_Gestion_Des_Ing = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_CAP_GESTION_BAJO_ING.
        sItemName = "P_CAP_GESTION_BAJO_ING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cap_Gestion_Bajo_Ing = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Fix_InglesRecordSet = new Cyc_Fix_InglesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Fix_InglesRecord record = new Cyc_Fix_InglesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Fix_InglesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Fix_InglesBlock */

