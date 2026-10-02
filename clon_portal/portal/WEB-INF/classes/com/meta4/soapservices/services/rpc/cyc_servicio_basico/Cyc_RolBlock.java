/**
 * Cyc_RolBlock.java
 * Self generated code for Bussines Object CYC_SERVICIO_BASICO.
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
package com.meta4.soapservices.services.rpc.cyc_servicio_basico;

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
 * Bean for node Cyc_Rol.
 * @author Meta4
 */
public 
class Cyc_RolBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_BASICO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_ROL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_RolBlock.class.getName());

    /* item P_USUARIO */
    public String p_Usuario = null;
    private void setp_Usuario(String ai_value)
    {
        p_Usuario = ai_value;
    }
    private String getp_Usuario()
    {
        return p_Usuario;
    }

    /* item P_ROL_CONSULTAR */
    public String p_Rol_Consultar = null;
    private void setp_Rol_Consultar(String ai_value)
    {
        p_Rol_Consultar = ai_value;
    }
    private String getp_Rol_Consultar()
    {
        return p_Rol_Consultar;
    }

    /* the recordset */
    public Cyc_RolRecord[] Cyc_RolRecordSet = null;
    private void setCyc_RolRecordSet(Cyc_RolRecord[] ai_arg)
    {
        Cyc_RolRecordSet = ai_arg;
    }
    private Cyc_RolRecord[] getCyc_RolRecordSet()
    {
        return Cyc_RolRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_RolBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_USUARIO.
        if (p_Usuario != null)
        {
            htItems.put("P_USUARIO", M4BusinessMethodArg.toString(p_Usuario));
        }
        // P_ROL_CONSULTAR.
        if (p_Rol_Consultar != null)
        {
            htItems.put("P_ROL_CONSULTAR", M4BusinessMethodArg.toString(p_Rol_Consultar));
        }

        // insert 'block scope' values in CYC_ROL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_ROL.
        if (Cyc_RolRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_RolRecordSet.length; i++)
        {
            Cyc_RolRecord record = Cyc_RolRecordSet[i];
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
        // read 'block scope' values in CYC_ROL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_USUARIO.
        sItemName = "P_USUARIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Usuario = sItemValue;
        // read P_ROL_CONSULTAR.
        sItemName = "P_ROL_CONSULTAR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Rol_Consultar = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_RolRecordSet = new Cyc_RolRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_RolRecord record = new Cyc_RolRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_RolRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_RolBlock */

