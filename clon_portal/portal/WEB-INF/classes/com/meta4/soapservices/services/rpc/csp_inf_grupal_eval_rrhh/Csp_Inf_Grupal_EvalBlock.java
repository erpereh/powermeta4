/**
 * Csp_Inf_Grupal_EvalBlock.java
 * Self generated code for Bussines Object CSP_INF_GRUPAL_EVAL_RRHH.
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
package com.meta4.soapservices.services.rpc.csp_inf_grupal_eval_rrhh;

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
 * Bean for node Csp_Inf_Grupal_Eval.
 * @author Meta4
 */
public 
class Csp_Inf_Grupal_EvalBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_INF_GRUPAL_EVAL_RRHH";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_INF_GRUPAL_EVAL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Inf_Grupal_EvalBlock.class.getName());

    /* item P_AREA */
    public String p_Area = null;
    private void setp_Area(String ai_value)
    {
        p_Area = ai_value;
    }
    private String getp_Area()
    {
        return p_Area;
    }

    /* item P_NOMBRE */
    public String p_Nombre = null;
    private void setp_Nombre(String ai_value)
    {
        p_Nombre = ai_value;
    }
    private String getp_Nombre()
    {
        return p_Nombre;
    }

    /* item P_DIRECCION */
    public String p_Direccion = null;
    private void setp_Direccion(String ai_value)
    {
        p_Direccion = ai_value;
    }
    private String getp_Direccion()
    {
        return p_Direccion;
    }

    /* item P_EVALUADOR */
    public String p_Evaluador = null;
    private void setp_Evaluador(String ai_value)
    {
        p_Evaluador = ai_value;
    }
    private String getp_Evaluador()
    {
        return p_Evaluador;
    }

    /* item P_APELLIDO_1 */
    public String p_Apellido_1 = null;
    private void setp_Apellido_1(String ai_value)
    {
        p_Apellido_1 = ai_value;
    }
    private String getp_Apellido_1()
    {
        return p_Apellido_1;
    }

    /* item P_APELLIDO_2 */
    public String p_Apellido_2 = null;
    private void setp_Apellido_2(String ai_value)
    {
        p_Apellido_2 = ai_value;
    }
    private String getp_Apellido_2()
    {
        return p_Apellido_2;
    }

    /* item P_ID_EMPLEADO */
    public String p_Id_Empleado = null;
    private void setp_Id_Empleado(String ai_value)
    {
        p_Id_Empleado = ai_value;
    }
    private String getp_Id_Empleado()
    {
        return p_Id_Empleado;
    }

    /* item P_ID_EVAL_PLAN */
    public String p_Id_Eval_Plan = null;
    private void setp_Id_Eval_Plan(String ai_value)
    {
        p_Id_Eval_Plan = ai_value;
    }
    private String getp_Id_Eval_Plan()
    {
        return p_Id_Eval_Plan;
    }

    /* item P_DT_START_PROC */
    public Calendar p_Dt_Start_Proc = null;
    private void setp_Dt_Start_Proc(Calendar ai_value)
    {
        p_Dt_Start_Proc = ai_value;
    }
    private Calendar getp_Dt_Start_Proc()
    {
        return p_Dt_Start_Proc;
    }

    /* item P_ANNO */
    public Double p_Anno = null;
    private void setp_Anno(Double ai_value)
    {
        p_Anno = ai_value;
    }
    private Double getp_Anno()
    {
        return p_Anno;
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
    public Csp_Inf_Grupal_EvalRecord[] Csp_Inf_Grupal_EvalRecordSet = null;
    private void setCsp_Inf_Grupal_EvalRecordSet(Csp_Inf_Grupal_EvalRecord[] ai_arg)
    {
        Csp_Inf_Grupal_EvalRecordSet = ai_arg;
    }
    private Csp_Inf_Grupal_EvalRecord[] getCsp_Inf_Grupal_EvalRecordSet()
    {
        return Csp_Inf_Grupal_EvalRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Inf_Grupal_EvalBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_AREA.
        if (p_Area != null)
        {
            htItems.put("P_AREA", M4BusinessMethodArg.toString(p_Area));
        }
        // P_NOMBRE.
        if (p_Nombre != null)
        {
            htItems.put("P_NOMBRE", M4BusinessMethodArg.toString(p_Nombre));
        }
        // P_DIRECCION.
        if (p_Direccion != null)
        {
            htItems.put("P_DIRECCION", M4BusinessMethodArg.toString(p_Direccion));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }
        // P_APELLIDO_1.
        if (p_Apellido_1 != null)
        {
            htItems.put("P_APELLIDO_1", M4BusinessMethodArg.toString(p_Apellido_1));
        }
        // P_APELLIDO_2.
        if (p_Apellido_2 != null)
        {
            htItems.put("P_APELLIDO_2", M4BusinessMethodArg.toString(p_Apellido_2));
        }
        // P_ID_EMPLEADO.
        if (p_Id_Empleado != null)
        {
            htItems.put("P_ID_EMPLEADO", M4BusinessMethodArg.toString(p_Id_Empleado));
        }
        // P_ID_EVAL_PLAN.
        if (p_Id_Eval_Plan != null)
        {
            htItems.put("P_ID_EVAL_PLAN", M4BusinessMethodArg.toString(p_Id_Eval_Plan));
        }
        // P_DT_START_PROC.
        if (p_Dt_Start_Proc != null)
        {
            htItems.put("P_DT_START_PROC", M4BusinessMethodArg.toString(p_Dt_Start_Proc));
        }
        // P_ANNO.
		if (p_Anno != null)
    	{
			htItems.put("P_ANNO", M4BusinessMethodArg.toString(p_Anno));
    	}

        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }

        // insert 'block scope' values in CSP_INF_GRUPAL_EVAL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_INF_GRUPAL_EVAL.
        if (Csp_Inf_Grupal_EvalRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Inf_Grupal_EvalRecordSet.length; i++)
        {
            Csp_Inf_Grupal_EvalRecord record = Csp_Inf_Grupal_EvalRecordSet[i];
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
        // read 'block scope' values in CSP_INF_GRUPAL_EVAL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_AREA.
        sItemName = "P_AREA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Area = sItemValue;
        // read P_NOMBRE.
        sItemName = "P_NOMBRE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Nombre = sItemValue;
        // read P_DIRECCION.
        sItemName = "P_DIRECCION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Direccion = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;
        // read P_APELLIDO_1.
        sItemName = "P_APELLIDO_1";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Apellido_1 = sItemValue;
        // read P_APELLIDO_2.
        sItemName = "P_APELLIDO_2";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Apellido_2 = sItemValue;
        // read P_ID_EMPLEADO.
        sItemName = "P_ID_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Empleado = sItemValue;
        // read P_ID_EVAL_PLAN.
        sItemName = "P_ID_EVAL_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Eval_Plan = sItemValue;
        // read P_DT_START_PROC.
        sItemName = "P_DT_START_PROC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start_Proc = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ANNO.
        sItemName = "P_ANNO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anno = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Inf_Grupal_EvalRecordSet = new Csp_Inf_Grupal_EvalRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Inf_Grupal_EvalRecord record = new Csp_Inf_Grupal_EvalRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Inf_Grupal_EvalRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Inf_Grupal_EvalBlock */

