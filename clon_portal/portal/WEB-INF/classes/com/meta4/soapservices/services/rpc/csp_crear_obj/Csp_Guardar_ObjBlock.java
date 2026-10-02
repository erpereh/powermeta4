/**
 * Csp_Guardar_ObjBlock.java
 * Self generated code for Bussines Object CSP_CREAR_OBJ.
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
package com.meta4.soapservices.services.rpc.csp_crear_obj;

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
 * Bean for node Csp_Guardar_Obj.
 * @author Meta4
 */
public 
class Csp_Guardar_ObjBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CREAR_OBJ";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_OBJ";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_ObjBlock.class.getName());

    /* item P_ANIO */
    public String p_Anio = null;
    private void setp_Anio(String ai_value)
    {
        p_Anio = ai_value;
    }
    private String getp_Anio()
    {
        return p_Anio;
    }

    /* item P_PESO */
    public Double p_Peso = null;
    private void setp_Peso(Double ai_value)
    {
        p_Peso = ai_value;
    }
    private Double getp_Peso()
    {
        return p_Peso;
    }

    /* item P_PLAN */
    public String p_Plan = null;
    private void setp_Plan(String ai_value)
    {
        p_Plan = ai_value;
    }
    private String getp_Plan()
    {
        return p_Plan;
    }

    /* item P_SCALE */
    public String p_Scale = null;
    private void setp_Scale(String ai_value)
    {
        p_Scale = ai_value;
    }
    private String getp_Scale()
    {
        return p_Scale;
    }

    /* item P_NM_OBJ */
    public String p_Nm_Obj = null;
    private void setp_Nm_Obj(String ai_value)
    {
        p_Nm_Obj = ai_value;
    }
    private String getp_Nm_Obj()
    {
        return p_Nm_Obj;
    }

    /* item P_ACUERDO */
    public Double p_Acuerdo = null;
    private void setp_Acuerdo(Double ai_value)
    {
        p_Acuerdo = ai_value;
    }
    private Double getp_Acuerdo()
    {
        return p_Acuerdo;
    }

    /* item P_COM_EMP */
    public String p_Com_Emp = null;
    private void setp_Com_Emp(String ai_value)
    {
        p_Com_Emp = ai_value;
    }
    private String getp_Com_Emp()
    {
        return p_Com_Emp;
    }

    /* item P_COM_EVAL */
    public String p_Com_Eval = null;
    private void setp_Com_Eval(String ai_value)
    {
        p_Com_Eval = ai_value;
    }
    private String getp_Com_Eval()
    {
        return p_Com_Eval;
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

    /* item P_ID_NIVEL */
    public String p_Id_Nivel = null;
    private void setp_Id_Nivel(String ai_value)
    {
        p_Id_Nivel = ai_value;
    }
    private String getp_Id_Nivel()
    {
        return p_Id_Nivel;
    }

    /* item P_DESCRIPTION */
    public String p_Description = null;
    private void setp_Description(String ai_value)
    {
        p_Description = ai_value;
    }
    private String getp_Description()
    {
        return p_Description;
    }

    /* the recordset */
    public Csp_Guardar_ObjRecord[] Csp_Guardar_ObjRecordSet = null;
    private void setCsp_Guardar_ObjRecordSet(Csp_Guardar_ObjRecord[] ai_arg)
    {
        Csp_Guardar_ObjRecordSet = ai_arg;
    }
    private Csp_Guardar_ObjRecord[] getCsp_Guardar_ObjRecordSet()
    {
        return Csp_Guardar_ObjRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_ObjBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANIO.
        if (p_Anio != null)
        {
            htItems.put("P_ANIO", M4BusinessMethodArg.toString(p_Anio));
        }
        // P_PESO.
		if (p_Peso != null)
    	{
			htItems.put("P_PESO", M4BusinessMethodArg.toString(p_Peso));
    	}

        // P_PLAN.
        if (p_Plan != null)
        {
            htItems.put("P_PLAN", M4BusinessMethodArg.toString(p_Plan));
        }
        // P_SCALE.
        if (p_Scale != null)
        {
            htItems.put("P_SCALE", M4BusinessMethodArg.toString(p_Scale));
        }
        // P_NM_OBJ.
        if (p_Nm_Obj != null)
        {
            htItems.put("P_NM_OBJ", M4BusinessMethodArg.toString(p_Nm_Obj));
        }
        // P_ACUERDO.
		if (p_Acuerdo != null)
    	{
			htItems.put("P_ACUERDO", M4BusinessMethodArg.toString(p_Acuerdo));
    	}

        // P_COM_EMP.
        if (p_Com_Emp != null)
        {
            htItems.put("P_COM_EMP", M4BusinessMethodArg.toString(p_Com_Emp));
        }
        // P_COM_EVAL.
        if (p_Com_Eval != null)
        {
            htItems.put("P_COM_EVAL", M4BusinessMethodArg.toString(p_Com_Eval));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // P_ID_NIVEL.
        if (p_Id_Nivel != null)
        {
            htItems.put("P_ID_NIVEL", M4BusinessMethodArg.toString(p_Id_Nivel));
        }
        // P_DESCRIPTION.
        if (p_Description != null)
        {
            htItems.put("P_DESCRIPTION", M4BusinessMethodArg.toString(p_Description));
        }

        // insert 'block scope' values in CSP_GUARDAR_OBJ.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_OBJ.
        if (Csp_Guardar_ObjRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_ObjRecordSet.length; i++)
        {
            Csp_Guardar_ObjRecord record = Csp_Guardar_ObjRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_OBJ.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = sItemValue;
        // read P_PESO.
        sItemName = "P_PESO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Peso = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_PLAN.
        sItemName = "P_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Plan = sItemValue;
        // read P_SCALE.
        sItemName = "P_SCALE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Scale = sItemValue;
        // read P_NM_OBJ.
        sItemName = "P_NM_OBJ";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Nm_Obj = sItemValue;
        // read P_ACUERDO.
        sItemName = "P_ACUERDO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Acuerdo = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_COM_EMP.
        sItemName = "P_COM_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Com_Emp = sItemValue;
        // read P_COM_EVAL.
        sItemName = "P_COM_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Com_Eval = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read P_ID_NIVEL.
        sItemName = "P_ID_NIVEL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Nivel = sItemValue;
        // read P_DESCRIPTION.
        sItemName = "P_DESCRIPTION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Description = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_ObjRecordSet = new Csp_Guardar_ObjRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_ObjRecord record = new Csp_Guardar_ObjRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_ObjRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_ObjBlock */

