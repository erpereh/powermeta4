/**
 * Cyc_Competencias_FaseiBlock.java
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
 * Bean for node Cyc_Competencias_Fasei.
 * @author Meta4
 */
public 
class Cyc_Competencias_FaseiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_INFORMES_PCP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_COMPETENCIAS_FASEI";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Competencias_FaseiBlock.class.getName());

    /* item ESTUDIOS */
    public String estudios = null;
    private void setestudios(String ai_value)
    {
        estudios = ai_value;
    }
    private String getestudios()
    {
        return estudios;
    }

    /* item TEST16PF */
    public String test16Pf = null;
    private void settest16Pf(String ai_value)
    {
        test16Pf = ai_value;
    }
    private String gettest16Pf()
    {
        return test16Pf;
    }

    /* item LIDERAZGO */
    public String liderazgo = null;
    private void setliderazgo(String ai_value)
    {
        liderazgo = ai_value;
    }
    private String getliderazgo()
    {
        return liderazgo;
    }

    /* item ABSENTISMO */
    public String absentismo = null;
    private void setabsentismo(String ai_value)
    {
        absentismo = ai_value;
    }
    private String getabsentismo()
    {
        return absentismo;
    }

    /* item EVALUACION */
    public String evaluacion = null;
    private void setevaluacion(String ai_value)
    {
        evaluacion = ai_value;
    }
    private String getevaluacion()
    {
        return evaluacion;
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

    /* item PROMOCIONES */
    public String promociones = null;
    private void setpromociones(String ai_value)
    {
        promociones = ai_value;
    }
    private String getpromociones()
    {
        return promociones;
    }

    /* item POLIVALENCIA */
    public String polivalencia = null;
    private void setpolivalencia(String ai_value)
    {
        polivalencia = ai_value;
    }
    private String getpolivalencia()
    {
        return polivalencia;
    }

    /* item GESTION_ESTRES */
    public String gestion_Estres = null;
    private void setgestion_Estres(String ai_value)
    {
        gestion_Estres = ai_value;
    }
    private String getgestion_Estres()
    {
        return gestion_Estres;
    }

    /* item GESTION_TIEMPO */
    public String gestion_Tiempo = null;
    private void setgestion_Tiempo(String ai_value)
    {
        gestion_Tiempo = ai_value;
    }
    private String getgestion_Tiempo()
    {
        return gestion_Tiempo;
    }

    /* item GESTION_EQUIPOS */
    public String gestion_Equipos = null;
    private void setgestion_Equipos(String ai_value)
    {
        gestion_Equipos = ai_value;
    }
    private String getgestion_Equipos()
    {
        return gestion_Equipos;
    }

    /* item TOMA_DECISIONES */
    public String toma_Decisiones = null;
    private void settoma_Decisiones(String ai_value)
    {
        toma_Decisiones = ai_value;
    }
    private String gettoma_Decisiones()
    {
        return toma_Decisiones;
    }

    /* item INTERES_FORMACION */
    public String interes_Formacion = null;
    private void setinteres_Formacion(String ai_value)
    {
        interes_Formacion = ai_value;
    }
    private String getinteres_Formacion()
    {
        return interes_Formacion;
    }

    /* item ANALISIS_PROBLEMAS */
    public String analisis_Problemas = null;
    private void setanalisis_Problemas(String ai_value)
    {
        analisis_Problemas = ai_value;
    }
    private String getanalisis_Problemas()
    {
        return analisis_Problemas;
    }

    /* item CAPACIDAD_NEGOCIACION */
    public String capacidad_Negociacion = null;
    private void setcapacidad_Negociacion(String ai_value)
    {
        capacidad_Negociacion = ai_value;
    }
    private String getcapacidad_Negociacion()
    {
        return capacidad_Negociacion;
    }

    /* the recordset */
    public Cyc_Competencias_FaseiRecord[] Cyc_Competencias_FaseiRecordSet = null;
    private void setCyc_Competencias_FaseiRecordSet(Cyc_Competencias_FaseiRecord[] ai_arg)
    {
        Cyc_Competencias_FaseiRecordSet = ai_arg;
    }
    private Cyc_Competencias_FaseiRecord[] getCyc_Competencias_FaseiRecordSet()
    {
        return Cyc_Competencias_FaseiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Competencias_FaseiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // ESTUDIOS.
        if (estudios != null)
        {
            htItems.put("ESTUDIOS", M4BusinessMethodArg.toString(estudios));
        }
        // TEST16PF.
        if (test16Pf != null)
        {
            htItems.put("TEST16PF", M4BusinessMethodArg.toString(test16Pf));
        }
        // LIDERAZGO.
        if (liderazgo != null)
        {
            htItems.put("LIDERAZGO", M4BusinessMethodArg.toString(liderazgo));
        }
        // ABSENTISMO.
        if (absentismo != null)
        {
            htItems.put("ABSENTISMO", M4BusinessMethodArg.toString(absentismo));
        }
        // EVALUACION.
        if (evaluacion != null)
        {
            htItems.put("EVALUACION", M4BusinessMethodArg.toString(evaluacion));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // PROMOCIONES.
        if (promociones != null)
        {
            htItems.put("PROMOCIONES", M4BusinessMethodArg.toString(promociones));
        }
        // POLIVALENCIA.
        if (polivalencia != null)
        {
            htItems.put("POLIVALENCIA", M4BusinessMethodArg.toString(polivalencia));
        }
        // GESTION_ESTRES.
        if (gestion_Estres != null)
        {
            htItems.put("GESTION_ESTRES", M4BusinessMethodArg.toString(gestion_Estres));
        }
        // GESTION_TIEMPO.
        if (gestion_Tiempo != null)
        {
            htItems.put("GESTION_TIEMPO", M4BusinessMethodArg.toString(gestion_Tiempo));
        }
        // GESTION_EQUIPOS.
        if (gestion_Equipos != null)
        {
            htItems.put("GESTION_EQUIPOS", M4BusinessMethodArg.toString(gestion_Equipos));
        }
        // TOMA_DECISIONES.
        if (toma_Decisiones != null)
        {
            htItems.put("TOMA_DECISIONES", M4BusinessMethodArg.toString(toma_Decisiones));
        }
        // INTERES_FORMACION.
        if (interes_Formacion != null)
        {
            htItems.put("INTERES_FORMACION", M4BusinessMethodArg.toString(interes_Formacion));
        }
        // ANALISIS_PROBLEMAS.
        if (analisis_Problemas != null)
        {
            htItems.put("ANALISIS_PROBLEMAS", M4BusinessMethodArg.toString(analisis_Problemas));
        }
        // CAPACIDAD_NEGOCIACION.
        if (capacidad_Negociacion != null)
        {
            htItems.put("CAPACIDAD_NEGOCIACION", M4BusinessMethodArg.toString(capacidad_Negociacion));
        }

        // insert 'block scope' values in CYC_COMPETENCIAS_FASEI.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_COMPETENCIAS_FASEI.
        if (Cyc_Competencias_FaseiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Competencias_FaseiRecordSet.length; i++)
        {
            Cyc_Competencias_FaseiRecord record = Cyc_Competencias_FaseiRecordSet[i];
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
        // read 'block scope' values in CYC_COMPETENCIAS_FASEI.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read ESTUDIOS.
        sItemName = "ESTUDIOS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        estudios = sItemValue;
        // read TEST16PF.
        sItemName = "TEST16PF";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        test16Pf = sItemValue;
        // read LIDERAZGO.
        sItemName = "LIDERAZGO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        liderazgo = sItemValue;
        // read ABSENTISMO.
        sItemName = "ABSENTISMO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        absentismo = sItemValue;
        // read EVALUACION.
        sItemName = "EVALUACION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        evaluacion = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read PROMOCIONES.
        sItemName = "PROMOCIONES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        promociones = sItemValue;
        // read POLIVALENCIA.
        sItemName = "POLIVALENCIA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        polivalencia = sItemValue;
        // read GESTION_ESTRES.
        sItemName = "GESTION_ESTRES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        gestion_Estres = sItemValue;
        // read GESTION_TIEMPO.
        sItemName = "GESTION_TIEMPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        gestion_Tiempo = sItemValue;
        // read GESTION_EQUIPOS.
        sItemName = "GESTION_EQUIPOS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        gestion_Equipos = sItemValue;
        // read TOMA_DECISIONES.
        sItemName = "TOMA_DECISIONES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        toma_Decisiones = sItemValue;
        // read INTERES_FORMACION.
        sItemName = "INTERES_FORMACION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        interes_Formacion = sItemValue;
        // read ANALISIS_PROBLEMAS.
        sItemName = "ANALISIS_PROBLEMAS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        analisis_Problemas = sItemValue;
        // read CAPACIDAD_NEGOCIACION.
        sItemName = "CAPACIDAD_NEGOCIACION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        capacidad_Negociacion = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Competencias_FaseiRecordSet = new Cyc_Competencias_FaseiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Competencias_FaseiRecord record = new Cyc_Competencias_FaseiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Competencias_FaseiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Competencias_FaseiBlock */

