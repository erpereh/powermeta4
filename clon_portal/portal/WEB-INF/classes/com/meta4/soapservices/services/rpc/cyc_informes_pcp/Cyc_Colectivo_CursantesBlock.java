/**
 * Cyc_Colectivo_CursantesBlock.java
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
 * Bean for node Cyc_Colectivo_Cursantes.
 * @author Meta4
 */
public 
class Cyc_Colectivo_CursantesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_COLECTIVO_CURSANTES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Colectivo_CursantesBlock.class.getName());

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

    /* the recordset */
    public Cyc_Colectivo_CursantesRecord[] Cyc_Colectivo_CursantesRecordSet = null;
    private void setCyc_Colectivo_CursantesRecordSet(Cyc_Colectivo_CursantesRecord[] ai_arg)
    {
        Cyc_Colectivo_CursantesRecordSet = ai_arg;
    }
    private Cyc_Colectivo_CursantesRecord[] getCyc_Colectivo_CursantesRecordSet()
    {
        return Cyc_Colectivo_CursantesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Colectivo_CursantesBlock.writeOperations(...)");

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

        // insert 'block scope' values in CYC_COLECTIVO_CURSANTES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_COLECTIVO_CURSANTES.
        if (Cyc_Colectivo_CursantesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Colectivo_CursantesRecordSet.length; i++)
        {
            Cyc_Colectivo_CursantesRecord record = Cyc_Colectivo_CursantesRecordSet[i];
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
        // read 'block scope' values in CYC_COLECTIVO_CURSANTES.
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

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Colectivo_CursantesRecordSet = new Cyc_Colectivo_CursantesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Colectivo_CursantesRecord record = new Cyc_Colectivo_CursantesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Colectivo_CursantesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Colectivo_CursantesBlock */

