/**
 * Csp_Guardar_Coment_EvalBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_COMENT_EVAL.
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
package com.meta4.soapservices.services.rpc.csp_guardar_coment_eval;

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
 * Bean for node Csp_Guardar_Coment_Eval.
 * @author Meta4
 */
public 
class Csp_Guardar_Coment_EvalBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_COMENT_EVAL";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_COMENT_EVAL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_Coment_EvalBlock.class.getName());

    /* item PAR_TIPO */
    public String par_Tipo = null;
    private void setpar_Tipo(String ai_value)
    {
        par_Tipo = ai_value;
    }
    private String getpar_Tipo()
    {
        return par_Tipo;
    }

    /* item PAR_ID_HR */
    public String par_Id_Hr = null;
    private void setpar_Id_Hr(String ai_value)
    {
        par_Id_Hr = ai_value;
    }
    private String getpar_Id_Hr()
    {
        return par_Id_Hr;
    }

    /* item PAR_ID_ROL */
    public String par_Id_Rol = null;
    private void setpar_Id_Rol(String ai_value)
    {
        par_Id_Rol = ai_value;
    }
    private String getpar_Id_Rol()
    {
        return par_Id_Rol;
    }

    /* item PAR_CONFORME */
    public Double par_Conforme = null;
    private void setpar_Conforme(Double ai_value)
    {
        par_Conforme = ai_value;
    }
    private Double getpar_Conforme()
    {
        return par_Conforme;
    }

    /* item EXECUTE_REAL_SQL */
    public String execute_Real_Sql = null;
    private void setexecute_Real_Sql(String ai_value)
    {
        execute_Real_Sql = ai_value;
    }
    private String getexecute_Real_Sql()
    {
        return execute_Real_Sql;
    }

    /* item PAR_DT_START_EVAL */
    public Calendar par_Dt_Start_Eval = null;
    private void setpar_Dt_Start_Eval(Calendar ai_value)
    {
        par_Dt_Start_Eval = ai_value;
    }
    private Calendar getpar_Dt_Start_Eval()
    {
        return par_Dt_Start_Eval;
    }

    /* the recordset */
    public Csp_Guardar_Coment_EvalRecord[] Csp_Guardar_Coment_EvalRecordSet = null;
    private void setCsp_Guardar_Coment_EvalRecordSet(Csp_Guardar_Coment_EvalRecord[] ai_arg)
    {
        Csp_Guardar_Coment_EvalRecordSet = ai_arg;
    }
    private Csp_Guardar_Coment_EvalRecord[] getCsp_Guardar_Coment_EvalRecordSet()
    {
        return Csp_Guardar_Coment_EvalRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_Coment_EvalBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PAR_TIPO.
        if (par_Tipo != null)
        {
            htItems.put("PAR_TIPO", M4BusinessMethodArg.toString(par_Tipo));
        }
        // PAR_ID_HR.
        if (par_Id_Hr != null)
        {
            htItems.put("PAR_ID_HR", M4BusinessMethodArg.toString(par_Id_Hr));
        }
        // PAR_ID_ROL.
        if (par_Id_Rol != null)
        {
            htItems.put("PAR_ID_ROL", M4BusinessMethodArg.toString(par_Id_Rol));
        }
        // PAR_CONFORME.
		if (par_Conforme != null)
    	{
			htItems.put("PAR_CONFORME", M4BusinessMethodArg.toString(par_Conforme));
    	}

        // EXECUTE_REAL_SQL.
        if (execute_Real_Sql != null)
        {
            htItems.put("EXECUTE_REAL_SQL", M4BusinessMethodArg.toString(execute_Real_Sql));
        }
        // PAR_DT_START_EVAL.
        if (par_Dt_Start_Eval != null)
        {
            htItems.put("PAR_DT_START_EVAL", M4BusinessMethodArg.toString(par_Dt_Start_Eval));
        }

        // insert 'block scope' values in CSP_GUARDAR_COMENT_EVAL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_COMENT_EVAL.
        if (Csp_Guardar_Coment_EvalRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_Coment_EvalRecordSet.length; i++)
        {
            Csp_Guardar_Coment_EvalRecord record = Csp_Guardar_Coment_EvalRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_COMENT_EVAL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PAR_TIPO.
        sItemName = "PAR_TIPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        par_Tipo = sItemValue;
        // read PAR_ID_HR.
        sItemName = "PAR_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        par_Id_Hr = sItemValue;
        // read PAR_ID_ROL.
        sItemName = "PAR_ID_ROL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        par_Id_Rol = sItemValue;
        // read PAR_CONFORME.
        sItemName = "PAR_CONFORME";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        par_Conforme = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read EXECUTE_REAL_SQL.
        sItemName = "EXECUTE_REAL_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        execute_Real_Sql = sItemValue;
        // read PAR_DT_START_EVAL.
        sItemName = "PAR_DT_START_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        par_Dt_Start_Eval = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_Coment_EvalRecordSet = new Csp_Guardar_Coment_EvalRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_Coment_EvalRecord record = new Csp_Guardar_Coment_EvalRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_Coment_EvalRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_Coment_EvalBlock */

