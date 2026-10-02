/**
 * Csp_Actualizar_ComentarioBlock.java
 * Self generated code for Bussines Object CSP_ACTUALIZAR_ESTADO.
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
package com.meta4.soapservices.services.rpc.csp_actualizar_estado;

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
 * Bean for node Csp_Actualizar_Comentario.
 * @author Meta4
 */
public 
class Csp_Actualizar_ComentarioBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_ACTUALIZAR_ESTADO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_ACTUALIZAR_COMENTARIO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Actualizar_ComentarioBlock.class.getName());

    /* item P_TIPO */
    public String p_Tipo = null;
    private void setp_Tipo(String ai_value)
    {
        p_Tipo = ai_value;
    }
    private String getp_Tipo()
    {
        return p_Tipo;
    }

    /* item P_ID_HR */
    public String p_Id_Hr = null;
    private void setp_Id_Hr(String ai_value)
    {
        p_Id_Hr = ai_value;
    }
    private String getp_Id_Hr()
    {
        return p_Id_Hr;
    }

    /* item P_ID_ROL_EVAL */
    public Double p_Id_Rol_Eval = null;
    private void setp_Id_Rol_Eval(Double ai_value)
    {
        p_Id_Rol_Eval = ai_value;
    }
    private Double getp_Id_Rol_Eval()
    {
        return p_Id_Rol_Eval;
    }

    /* item P_DT_STAR_EVAL */
    public Calendar p_Dt_Star_Eval = null;
    private void setp_Dt_Star_Eval(Calendar ai_value)
    {
        p_Dt_Star_Eval = ai_value;
    }
    private Calendar getp_Dt_Star_Eval()
    {
        return p_Dt_Star_Eval;
    }

    /* the recordset */
    public Csp_Actualizar_ComentarioRecord[] Csp_Actualizar_ComentarioRecordSet = null;
    private void setCsp_Actualizar_ComentarioRecordSet(Csp_Actualizar_ComentarioRecord[] ai_arg)
    {
        Csp_Actualizar_ComentarioRecordSet = ai_arg;
    }
    private Csp_Actualizar_ComentarioRecord[] getCsp_Actualizar_ComentarioRecordSet()
    {
        return Csp_Actualizar_ComentarioRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Actualizar_ComentarioBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_TIPO.
        if (p_Tipo != null)
        {
            htItems.put("P_TIPO", M4BusinessMethodArg.toString(p_Tipo));
        }
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_ID_ROL_EVAL.
		if (p_Id_Rol_Eval != null)
    	{
			htItems.put("P_ID_ROL_EVAL", M4BusinessMethodArg.toString(p_Id_Rol_Eval));
    	}

        // P_DT_STAR_EVAL.
        if (p_Dt_Star_Eval != null)
        {
            htItems.put("P_DT_STAR_EVAL", M4BusinessMethodArg.toString(p_Dt_Star_Eval));
        }

        // insert 'block scope' values in CSP_ACTUALIZAR_COMENTARIO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_ACTUALIZAR_COMENTARIO.
        if (Csp_Actualizar_ComentarioRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Actualizar_ComentarioRecordSet.length; i++)
        {
            Csp_Actualizar_ComentarioRecord record = Csp_Actualizar_ComentarioRecordSet[i];
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
        // read 'block scope' values in CSP_ACTUALIZAR_COMENTARIO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_TIPO.
        sItemName = "P_TIPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Tipo = sItemValue;
        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_ID_ROL_EVAL.
        sItemName = "P_ID_ROL_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Rol_Eval = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_DT_STAR_EVAL.
        sItemName = "P_DT_STAR_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Star_Eval = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Actualizar_ComentarioRecordSet = new Csp_Actualizar_ComentarioRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Actualizar_ComentarioRecord record = new Csp_Actualizar_ComentarioRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Actualizar_ComentarioRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Actualizar_ComentarioBlock */

