/**
 * Cyc_Cursantes_ColectivosBlock.java
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
 * Bean for node Cyc_Cursantes_Colectivos.
 * @author Meta4
 */
public 
class Cyc_Cursantes_ColectivosBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_CURSANTES_COLECTIVOS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Cursantes_ColectivosBlock.class.getName());

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

    /* item P_COLECTIVO */
    public String p_Colectivo = null;
    private void setp_Colectivo(String ai_value)
    {
        p_Colectivo = ai_value;
    }
    private String getp_Colectivo()
    {
        return p_Colectivo;
    }

    /* the recordset */
    public Cyc_Cursantes_ColectivosRecord[] Cyc_Cursantes_ColectivosRecordSet = null;
    private void setCyc_Cursantes_ColectivosRecordSet(Cyc_Cursantes_ColectivosRecord[] ai_arg)
    {
        Cyc_Cursantes_ColectivosRecordSet = ai_arg;
    }
    private Cyc_Cursantes_ColectivosRecord[] getCyc_Cursantes_ColectivosRecordSet()
    {
        return Cyc_Cursantes_ColectivosRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Cursantes_ColectivosBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_COLECTIVO.
        if (p_Colectivo != null)
        {
            htItems.put("P_COLECTIVO", M4BusinessMethodArg.toString(p_Colectivo));
        }

        // insert 'block scope' values in CYC_CURSANTES_COLECTIVOS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_CURSANTES_COLECTIVOS.
        if (Cyc_Cursantes_ColectivosRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Cursantes_ColectivosRecordSet.length; i++)
        {
            Cyc_Cursantes_ColectivosRecord record = Cyc_Cursantes_ColectivosRecordSet[i];
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
        // read 'block scope' values in CYC_CURSANTES_COLECTIVOS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_COLECTIVO.
        sItemName = "P_COLECTIVO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Colectivo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Cursantes_ColectivosRecordSet = new Cyc_Cursantes_ColectivosRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Cursantes_ColectivosRecord record = new Cyc_Cursantes_ColectivosRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Cursantes_ColectivosRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Cursantes_ColectivosBlock */

