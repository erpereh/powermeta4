/**
 * Csp_Planificacion_DtBlock.java
 * Self generated code for Bussines Object CSP_GD_PLANIFICACION_DT.
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
package com.meta4.soapservices.services.rpc.csp_gd_planificacion_dt;

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
 * Bean for node Csp_Planificacion_Dt.
 * @author Meta4
 */
public 
class Csp_Planificacion_DtBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GD_PLANIFICACION_DT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_PLANIFICACION_DT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Planificacion_DtBlock.class.getName());

    /* item F_EVAL */
    public Calendar f_Eval = null;
    private void setf_Eval(Calendar ai_value)
    {
        f_Eval = ai_value;
    }
    private Calendar getf_Eval()
    {
        return f_Eval;
    }

    /* item EDITABLE */
    public String editable = null;
    private void seteditable(String ai_value)
    {
        editable = ai_value;
    }
    private String geteditable()
    {
        return editable;
    }

    /* item PERFIL_EMP */
    public String perfil_Emp = null;
    private void setperfil_Emp(String ai_value)
    {
        perfil_Emp = ai_value;
    }
    private String getperfil_Emp()
    {
        return perfil_Emp;
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

    /* item PRESUPUESTO */
    public String presupuesto = null;
    private void setpresupuesto(String ai_value)
    {
        presupuesto = ai_value;
    }
    private String getpresupuesto()
    {
        return presupuesto;
    }

    /* item ESTADO_PL_ACT */
    public Double estado_Pl_Act = null;
    private void setestado_Pl_Act(Double ai_value)
    {
        estado_Pl_Act = ai_value;
    }
    private Double getestado_Pl_Act()
    {
        return estado_Pl_Act;
    }

    /* item ESTADO_PL_ANT */
    public Double estado_Pl_Ant = null;
    private void setestado_Pl_Ant(Double ai_value)
    {
        estado_Pl_Ant = ai_value;
    }
    private Double getestado_Pl_Ant()
    {
        return estado_Pl_Ant;
    }

    /* item P_OR_EVALUATOR */
    public Double p_Or_Evaluator = null;
    private void setp_Or_Evaluator(Double ai_value)
    {
        p_Or_Evaluator = ai_value;
    }
    private Double getp_Or_Evaluator()
    {
        return p_Or_Evaluator;
    }

    /* item P_EVALUATION_DEF */
    public String p_Evaluation_Def = null;
    private void setp_Evaluation_Def(String ai_value)
    {
        p_Evaluation_Def = ai_value;
    }
    private String getp_Evaluation_Def()
    {
        return p_Evaluation_Def;
    }

    /* item P_OR_EVALUATOR_ANT */
    public Double p_Or_Evaluator_Ant = null;
    private void setp_Or_Evaluator_Ant(Double ai_value)
    {
        p_Or_Evaluator_Ant = ai_value;
    }
    private Double getp_Or_Evaluator_Ant()
    {
        return p_Or_Evaluator_Ant;
    }

    /* item P_EVALUATION_DEF_ANT */
    public String p_Evaluation_Def_Ant = null;
    private void setp_Evaluation_Def_Ant(String ai_value)
    {
        p_Evaluation_Def_Ant = ai_value;
    }
    private String getp_Evaluation_Def_Ant()
    {
        return p_Evaluation_Def_Ant;
    }

    /* the recordset */
    public Csp_Planificacion_DtRecord[] Csp_Planificacion_DtRecordSet = null;
    private void setCsp_Planificacion_DtRecordSet(Csp_Planificacion_DtRecord[] ai_arg)
    {
        Csp_Planificacion_DtRecordSet = ai_arg;
    }
    private Csp_Planificacion_DtRecord[] getCsp_Planificacion_DtRecordSet()
    {
        return Csp_Planificacion_DtRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Planificacion_DtBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // F_EVAL.
        if (f_Eval != null)
        {
            htItems.put("F_EVAL", M4BusinessMethodArg.toString(f_Eval));
        }
        // EDITABLE.
        if (editable != null)
        {
            htItems.put("EDITABLE", M4BusinessMethodArg.toString(editable));
        }
        // PERFIL_EMP.
        if (perfil_Emp != null)
        {
            htItems.put("PERFIL_EMP", M4BusinessMethodArg.toString(perfil_Emp));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // PRESUPUESTO.
        if (presupuesto != null)
        {
            htItems.put("PRESUPUESTO", M4BusinessMethodArg.toString(presupuesto));
        }
        // ESTADO_PL_ACT.
		if (estado_Pl_Act != null)
    	{
			htItems.put("ESTADO_PL_ACT", M4BusinessMethodArg.toString(estado_Pl_Act));
    	}

        // ESTADO_PL_ANT.
		if (estado_Pl_Ant != null)
    	{
			htItems.put("ESTADO_PL_ANT", M4BusinessMethodArg.toString(estado_Pl_Ant));
    	}

        // P_OR_EVALUATOR.
		if (p_Or_Evaluator != null)
    	{
			htItems.put("P_OR_EVALUATOR", M4BusinessMethodArg.toString(p_Or_Evaluator));
    	}

        // P_EVALUATION_DEF.
        if (p_Evaluation_Def != null)
        {
            htItems.put("P_EVALUATION_DEF", M4BusinessMethodArg.toString(p_Evaluation_Def));
        }
        // P_OR_EVALUATOR_ANT.
		if (p_Or_Evaluator_Ant != null)
    	{
			htItems.put("P_OR_EVALUATOR_ANT", M4BusinessMethodArg.toString(p_Or_Evaluator_Ant));
    	}

        // P_EVALUATION_DEF_ANT.
        if (p_Evaluation_Def_Ant != null)
        {
            htItems.put("P_EVALUATION_DEF_ANT", M4BusinessMethodArg.toString(p_Evaluation_Def_Ant));
        }

        // insert 'block scope' values in CSP_PLANIFICACION_DT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_PLANIFICACION_DT.
        if (Csp_Planificacion_DtRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Planificacion_DtRecordSet.length; i++)
        {
            Csp_Planificacion_DtRecord record = Csp_Planificacion_DtRecordSet[i];
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
        // read 'block scope' values in CSP_PLANIFICACION_DT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read F_EVAL.
        sItemName = "F_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        f_Eval = M4BusinessMethodArg.toCalendar(sItemValue);
        // read EDITABLE.
        sItemName = "EDITABLE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        editable = sItemValue;
        // read PERFIL_EMP.
        sItemName = "PERFIL_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        perfil_Emp = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read PRESUPUESTO.
        sItemName = "PRESUPUESTO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        presupuesto = sItemValue;
        // read ESTADO_PL_ACT.
        sItemName = "ESTADO_PL_ACT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        estado_Pl_Act = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ESTADO_PL_ANT.
        sItemName = "ESTADO_PL_ANT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        estado_Pl_Ant = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_OR_EVALUATOR.
        sItemName = "P_OR_EVALUATOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Or_Evaluator = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_EVALUATION_DEF.
        sItemName = "P_EVALUATION_DEF";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluation_Def = sItemValue;
        // read P_OR_EVALUATOR_ANT.
        sItemName = "P_OR_EVALUATOR_ANT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Or_Evaluator_Ant = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_EVALUATION_DEF_ANT.
        sItemName = "P_EVALUATION_DEF_ANT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluation_Def_Ant = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Planificacion_DtRecordSet = new Csp_Planificacion_DtRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Planificacion_DtRecord record = new Csp_Planificacion_DtRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Planificacion_DtRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Planificacion_DtBlock */

