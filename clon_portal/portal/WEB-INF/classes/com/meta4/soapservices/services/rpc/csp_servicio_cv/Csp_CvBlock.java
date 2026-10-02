/**
 * Csp_CvBlock.java
 * Self generated code for Bussines Object CSP_SERVICIO_CV.
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
package com.meta4.soapservices.services.rpc.csp_servicio_cv;

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
 * Bean for node Csp_Cv.
 * @author Meta4
 */
public 
class Csp_CvBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_SERVICIO_CV";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CV";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_CvBlock.class.getName());

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

    /* item RP_PATH */
    public DataHandler rp_Path = null;
    private void setrp_Path(DataHandler ai_value)
    {
        rp_Path = ai_value;
    }
    private DataHandler getrp_Path()
    {
        return rp_Path;
    }

    /* item CSP_PORTAL */
    public String csp_Portal = null;
    private void setcsp_Portal(String ai_value)
    {
        csp_Portal = ai_value;
    }
    private String getcsp_Portal()
    {
        return csp_Portal;
    }

    /* item P_EJECUTAR */
    public String p_Ejecutar = null;
    private void setp_Ejecutar(String ai_value)
    {
        p_Ejecutar = ai_value;
    }
    private String getp_Ejecutar()
    {
        return p_Ejecutar;
    }

    /* item CSP_LOGO_CYC */
    public DataHandler csp_Logo_Cyc = null;
    private void setcsp_Logo_Cyc(DataHandler ai_value)
    {
        csp_Logo_Cyc = ai_value;
    }
    private DataHandler getcsp_Logo_Cyc()
    {
        return csp_Logo_Cyc;
    }

    /* item CSP_RRHH_CYC */
    public DataHandler csp_Rrhh_Cyc = null;
    private void setcsp_Rrhh_Cyc(DataHandler ai_value)
    {
        csp_Rrhh_Cyc = ai_value;
    }
    private DataHandler getcsp_Rrhh_Cyc()
    {
        return csp_Rrhh_Cyc;
    }

    /* item CSP_CV_PORTAL */
    public String csp_Cv_Portal = null;
    private void setcsp_Cv_Portal(String ai_value)
    {
        csp_Cv_Portal = ai_value;
    }
    private String getcsp_Cv_Portal()
    {
        return csp_Cv_Portal;
    }

    /* item CSP_TITULO_HTML */
    public String csp_Titulo_Html = null;
    private void setcsp_Titulo_Html(String ai_value)
    {
        csp_Titulo_Html = ai_value;
    }
    private String getcsp_Titulo_Html()
    {
        return csp_Titulo_Html;
    }

    /* item CSP_INFORME_HTML */
    public DataHandler csp_Informe_Html = null;
    private void setcsp_Informe_Html(DataHandler ai_value)
    {
        csp_Informe_Html = ai_value;
    }
    private DataHandler getcsp_Informe_Html()
    {
        return csp_Informe_Html;
    }

    /* item CSP_FECHA_INFORME */
    public String csp_Fecha_Informe = null;
    private void setcsp_Fecha_Informe(String ai_value)
    {
        csp_Fecha_Informe = ai_value;
    }
    private String getcsp_Fecha_Informe()
    {
        return csp_Fecha_Informe;
    }

    /* the recordset */
    public Csp_CvRecord[] Csp_CvRecordSet = null;
    private void setCsp_CvRecordSet(Csp_CvRecord[] ai_arg)
    {
        Csp_CvRecordSet = ai_arg;
    }
    private Csp_CvRecord[] getCsp_CvRecordSet()
    {
        return Csp_CvRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_CvBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // RP_PATH.
        if ( rp_Path != null )
        {
            htBlobs.put("RP_PATH", rp_Path.getName());
        }
        // CSP_PORTAL.
        if (csp_Portal != null)
        {
            htItems.put("CSP_PORTAL", M4BusinessMethodArg.toString(csp_Portal));
        }
        // P_EJECUTAR.
        if (p_Ejecutar != null)
        {
            htItems.put("P_EJECUTAR", M4BusinessMethodArg.toString(p_Ejecutar));
        }
        // CSP_LOGO_CYC.
        if ( csp_Logo_Cyc != null )
        {
            htBlobs.put("CSP_LOGO_CYC", csp_Logo_Cyc.getName());
        }
        // CSP_RRHH_CYC.
        if ( csp_Rrhh_Cyc != null )
        {
            htBlobs.put("CSP_RRHH_CYC", csp_Rrhh_Cyc.getName());
        }
        // CSP_CV_PORTAL.
        if (csp_Cv_Portal != null)
        {
            htItems.put("CSP_CV_PORTAL", M4BusinessMethodArg.toString(csp_Cv_Portal));
        }
        // CSP_TITULO_HTML.
        if (csp_Titulo_Html != null)
        {
            htItems.put("CSP_TITULO_HTML", M4BusinessMethodArg.toString(csp_Titulo_Html));
        }
        // CSP_INFORME_HTML.
        if ( csp_Informe_Html != null )
        {
            htBlobs.put("CSP_INFORME_HTML", csp_Informe_Html.getName());
        }
        // CSP_FECHA_INFORME.
        if (csp_Fecha_Informe != null)
        {
            htItems.put("CSP_FECHA_INFORME", M4BusinessMethodArg.toString(csp_Fecha_Informe));
        }

        // insert 'block scope' values in CSP_CV.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CV.
        if (Csp_CvRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_CvRecordSet.length; i++)
        {
            Csp_CvRecord record = Csp_CvRecordSet[i];
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
        // read 'block scope' values in CSP_CV.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read RP_PATH.
        sItemName = "RP_PATH";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            rp_Path = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            rp_Path = null;
        }


        // read CSP_PORTAL.
        sItemName = "CSP_PORTAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Portal = sItemValue;
        // read P_EJECUTAR.
        sItemName = "P_EJECUTAR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Ejecutar = sItemValue;
        // read CSP_LOGO_CYC.
        sItemName = "CSP_LOGO_CYC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            csp_Logo_Cyc = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            csp_Logo_Cyc = null;
        }


        // read CSP_RRHH_CYC.
        sItemName = "CSP_RRHH_CYC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            csp_Rrhh_Cyc = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            csp_Rrhh_Cyc = null;
        }


        // read CSP_CV_PORTAL.
        sItemName = "CSP_CV_PORTAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Cv_Portal = sItemValue;
        // read CSP_TITULO_HTML.
        sItemName = "CSP_TITULO_HTML";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Titulo_Html = sItemValue;
        // read CSP_INFORME_HTML.
        sItemName = "CSP_INFORME_HTML";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            csp_Informe_Html = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            csp_Informe_Html = null;
        }


        // read CSP_FECHA_INFORME.
        sItemName = "CSP_FECHA_INFORME";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Fecha_Informe = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_CvRecordSet = new Csp_CvRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_CvRecord record = new Csp_CvRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_CvRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_CvBlock */

