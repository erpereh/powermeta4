/**
 * Cyc_AssesmentBlock.java
 * Self generated code for Bussines Object CYC_FICHA_EMPLEADO.
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
package com.meta4.soapservices.services.rpc.cyc_ficha_empleado;

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
 * Bean for node Cyc_Assesment.
 * @author Meta4
 */
public 
class Cyc_AssesmentBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_FICHA_EMPLEADO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_ASSESMENT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_AssesmentBlock.class.getName());

    /* item CII */
    public Double cii = null;
    private void setcii(Double ai_value)
    {
        cii = ai_value;
    }
    private Double getcii()
    {
        return cii;
    }

    /* item LDP */
    public Double ldp = null;
    private void setldp(Double ai_value)
    {
        ldp = ai_value;
    }
    private Double getldp()
    {
        return ldp;
    }

    /* item VGN */
    public Double vgn = null;
    private void setvgn(Double ai_value)
    {
        vgn = ai_value;
    }
    private Double getvgn()
    {
        return vgn;
    }

    /* item CATD */
    public Double catd = null;
    private void setcatd(Double ai_value)
    {
        catd = ai_value;
    }
    private Double getcatd()
    {
        return catd;
    }

    /* item ID_HR */
    public String id_Hr = null;
    private void setid_Hr(String ai_value)
    {
        id_Hr = ai_value;
    }
    private String getid_Hr()
    {
        return id_Hr;
    }

    /* item DT_END */
    public Calendar dt_End = null;
    private void setdt_End(Calendar ai_value)
    {
        dt_End = ai_value;
    }
    private Calendar getdt_End()
    {
        return dt_End;
    }

    /* item OR_MAX */
    public Double or_Max = null;
    private void setor_Max(Double ai_value)
    {
        or_Max = ai_value;
    }
    private Double getor_Max()
    {
        return or_Max;
    }

    /* item CII_MAX */
    public Double cii_Max = null;
    private void setcii_Max(Double ai_value)
    {
        cii_Max = ai_value;
    }
    private Double getcii_Max()
    {
        return cii_Max;
    }

    /* item LDP_MAX */
    public Double ldp_Max = null;
    private void setldp_Max(Double ai_value)
    {
        ldp_Max = ai_value;
    }
    private Double getldp_Max()
    {
        return ldp_Max;
    }

    /* item P_TOTAL */
    public Double p_Total = null;
    private void setp_Total(Double ai_value)
    {
        p_Total = ai_value;
    }
    private Double getp_Total()
    {
        return p_Total;
    }

    /* item VGN_MAX */
    public Double vgn_Max = null;
    private void setvgn_Max(Double ai_value)
    {
        vgn_Max = ai_value;
    }
    private Double getvgn_Max()
    {
        return vgn_Max;
    }

    /* item CATD_MAX */
    public Double catd_Max = null;
    private void setcatd_Max(Double ai_value)
    {
        catd_Max = ai_value;
    }
    private Double getcatd_Max()
    {
        return catd_Max;
    }

    /* item DT_START */
    public Calendar dt_Start = null;
    private void setdt_Start(Calendar ai_value)
    {
        dt_Start = ai_value;
    }
    private Calendar getdt_Start()
    {
        return dt_Start;
    }

    /* item OR_PUNTUACION */
    public Double or_Puntuacion = null;
    private void setor_Puntuacion(Double ai_value)
    {
        or_Puntuacion = ai_value;
    }
    private Double getor_Puntuacion()
    {
        return or_Puntuacion;
    }

    /* the recordset */
    public Cyc_AssesmentRecord[] Cyc_AssesmentRecordSet = null;
    private void setCyc_AssesmentRecordSet(Cyc_AssesmentRecord[] ai_arg)
    {
        Cyc_AssesmentRecordSet = ai_arg;
    }
    private Cyc_AssesmentRecord[] getCyc_AssesmentRecordSet()
    {
        return Cyc_AssesmentRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_AssesmentBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // CII.
		if (cii != null)
    	{
			htItems.put("CII", M4BusinessMethodArg.toString(cii));
    	}

        // LDP.
		if (ldp != null)
    	{
			htItems.put("LDP", M4BusinessMethodArg.toString(ldp));
    	}

        // VGN.
		if (vgn != null)
    	{
			htItems.put("VGN", M4BusinessMethodArg.toString(vgn));
    	}

        // CATD.
		if (catd != null)
    	{
			htItems.put("CATD", M4BusinessMethodArg.toString(catd));
    	}

        // ID_HR.
        if (id_Hr != null)
        {
            htItems.put("ID_HR", M4BusinessMethodArg.toString(id_Hr));
        }
        // DT_END.
        if (dt_End != null)
        {
            htItems.put("DT_END", M4BusinessMethodArg.toString(dt_End));
        }
        // OR_MAX.
		if (or_Max != null)
    	{
			htItems.put("OR_MAX", M4BusinessMethodArg.toString(or_Max));
    	}

        // CII_MAX.
		if (cii_Max != null)
    	{
			htItems.put("CII_MAX", M4BusinessMethodArg.toString(cii_Max));
    	}

        // LDP_MAX.
		if (ldp_Max != null)
    	{
			htItems.put("LDP_MAX", M4BusinessMethodArg.toString(ldp_Max));
    	}

        // P_TOTAL.
		if (p_Total != null)
    	{
			htItems.put("P_TOTAL", M4BusinessMethodArg.toString(p_Total));
    	}

        // VGN_MAX.
		if (vgn_Max != null)
    	{
			htItems.put("VGN_MAX", M4BusinessMethodArg.toString(vgn_Max));
    	}

        // CATD_MAX.
		if (catd_Max != null)
    	{
			htItems.put("CATD_MAX", M4BusinessMethodArg.toString(catd_Max));
    	}

        // DT_START.
        if (dt_Start != null)
        {
            htItems.put("DT_START", M4BusinessMethodArg.toString(dt_Start));
        }
        // OR_PUNTUACION.
		if (or_Puntuacion != null)
    	{
			htItems.put("OR_PUNTUACION", M4BusinessMethodArg.toString(or_Puntuacion));
    	}


        // insert 'block scope' values in CYC_ASSESMENT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_ASSESMENT.
        if (Cyc_AssesmentRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_AssesmentRecordSet.length; i++)
        {
            Cyc_AssesmentRecord record = Cyc_AssesmentRecordSet[i];
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
        // read 'block scope' values in CYC_ASSESMENT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read CII.
        sItemName = "CII";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cii = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LDP.
        sItemName = "LDP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        ldp = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read VGN.
        sItemName = "VGN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        vgn = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read CATD.
        sItemName = "CATD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        catd = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ID_HR.
        sItemName = "ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Hr = sItemValue;
        // read DT_END.
        sItemName = "DT_END";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        dt_End = M4BusinessMethodArg.toCalendar(sItemValue);
        // read OR_MAX.
        sItemName = "OR_MAX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        or_Max = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read CII_MAX.
        sItemName = "CII_MAX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cii_Max = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LDP_MAX.
        sItemName = "LDP_MAX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        ldp_Max = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_TOTAL.
        sItemName = "P_TOTAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Total = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read VGN_MAX.
        sItemName = "VGN_MAX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        vgn_Max = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read CATD_MAX.
        sItemName = "CATD_MAX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        catd_Max = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read DT_START.
        sItemName = "DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read OR_PUNTUACION.
        sItemName = "OR_PUNTUACION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        or_Puntuacion = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_AssesmentRecordSet = new Cyc_AssesmentRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_AssesmentRecord record = new Cyc_AssesmentRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_AssesmentRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_AssesmentBlock */

