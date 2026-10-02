/**
 * Cyc_Actualizar_EntrevistaBlock.java
 * Self generated code for Bussines Object CYC_MODIFICAR_NOTAS.
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
package com.meta4.soapservices.services.rpc.cyc_modificar_notas;

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
 * Bean for node Cyc_Actualizar_Entrevista.
 * @author Meta4
 */
public 
class Cyc_Actualizar_EntrevistaBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_MODIFICAR_NOTAS";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_ACTUALIZAR_ENTREVISTA";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Actualizar_EntrevistaBlock.class.getName());

    /* item P_DT_START */
    public Calendar p_Dt_Start = null;
    private void setp_Dt_Start(Calendar ai_value)
    {
        p_Dt_Start = ai_value;
    }
    private Calendar getp_Dt_Start()
    {
        return p_Dt_Start;
    }

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

    /* item P_ENTREVISTA */
    public Calendar p_Entrevista = null;
    private void setp_Entrevista(Calendar ai_value)
    {
        p_Entrevista = ai_value;
    }
    private Calendar getp_Entrevista()
    {
        return p_Entrevista;
    }

    /* the recordset */
    public Cyc_Actualizar_EntrevistaRecord[] Cyc_Actualizar_EntrevistaRecordSet = null;
    private void setCyc_Actualizar_EntrevistaRecordSet(Cyc_Actualizar_EntrevistaRecord[] ai_arg)
    {
        Cyc_Actualizar_EntrevistaRecordSet = ai_arg;
    }
    private Cyc_Actualizar_EntrevistaRecord[] getCyc_Actualizar_EntrevistaRecordSet()
    {
        return Cyc_Actualizar_EntrevistaRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Actualizar_EntrevistaBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }
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
        // P_ENTREVISTA.
        if (p_Entrevista != null)
        {
            htItems.put("P_ENTREVISTA", M4BusinessMethodArg.toString(p_Entrevista));
        }

        // insert 'block scope' values in CYC_ACTUALIZAR_ENTREVISTA.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_ACTUALIZAR_ENTREVISTA.
        if (Cyc_Actualizar_EntrevistaRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Actualizar_EntrevistaRecordSet.length; i++)
        {
            Cyc_Actualizar_EntrevistaRecord record = Cyc_Actualizar_EntrevistaRecordSet[i];
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
        // read 'block scope' values in CYC_ACTUALIZAR_ENTREVISTA.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
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
        // read P_ENTREVISTA.
        sItemName = "P_ENTREVISTA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Entrevista = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Actualizar_EntrevistaRecordSet = new Cyc_Actualizar_EntrevistaRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Actualizar_EntrevistaRecord record = new Cyc_Actualizar_EntrevistaRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Actualizar_EntrevistaRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Actualizar_EntrevistaBlock */

