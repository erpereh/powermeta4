/**
 * M4LoadobjectOutput.java
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

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method M4LoadObject.
 * @author Meta4
 */
public
class M4LoadobjectOutput
{
    
    /* return value from a LN4 method */
    private double m_return = 0.0;
    public void setReturn(double ai_arg)
    {
        m_return = ai_arg;
    }
    public double getReturn()
    {
        return m_return;
    }
    void setReturn(String ai_arg) throws Exception
    {
        m_return = M4BusinessMethodArg.toDouble(ai_arg);
    }

    /* LogMessage */   
    public LogMessage[] logMessage = null;
    private void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    private LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    
    /* CYC_GRUPO_FII */
    public Cyc_Grupo_FiiBlock Cyc_Grupo_Fii = null;
    private void setCyc_Grupo_Fii(Cyc_Grupo_FiiBlock ai_arg)
    {
        Cyc_Grupo_Fii = ai_arg;
    }
    private Cyc_Grupo_FiiBlock getCyc_Grupo_Fii()
    {
        return Cyc_Grupo_Fii;
    }
    void setCyc_Grupo_Fii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Grupo_Fii = new Cyc_Grupo_FiiBlock();
        Cyc_Grupo_Fii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FIX_INGLES */
    public Cyc_Fix_InglesBlock Cyc_Fix_Ingles = null;
    private void setCyc_Fix_Ingles(Cyc_Fix_InglesBlock ai_arg)
    {
        Cyc_Fix_Ingles = ai_arg;
    }
    private Cyc_Fix_InglesBlock getCyc_Fix_Ingles()
    {
        return Cyc_Fix_Ingles;
    }
    void setCyc_Fix_Ingles(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fix_Ingles = new Cyc_Fix_InglesBlock();
        Cyc_Fix_Ingles.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_GRUPO_FIII */
    public Cyc_Grupo_FiiiBlock Cyc_Grupo_Fiii = null;
    private void setCyc_Grupo_Fiii(Cyc_Grupo_FiiiBlock ai_arg)
    {
        Cyc_Grupo_Fiii = ai_arg;
    }
    private Cyc_Grupo_FiiiBlock getCyc_Grupo_Fiii()
    {
        return Cyc_Grupo_Fiii;
    }
    void setCyc_Grupo_Fiii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Grupo_Fiii = new Cyc_Grupo_FiiiBlock();
        Cyc_Grupo_Fiii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_INFORMES_PCP */
    public Cyc_Informes_PcpBlock Cyc_Informes_Pcp = null;
    private void setCyc_Informes_Pcp(Cyc_Informes_PcpBlock ai_arg)
    {
        Cyc_Informes_Pcp = ai_arg;
    }
    private Cyc_Informes_PcpBlock getCyc_Informes_Pcp()
    {
        return Cyc_Informes_Pcp;
    }
    void setCyc_Informes_Pcp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informes_Pcp = new Cyc_Informes_PcpBlock();
        Cyc_Informes_Pcp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FIX_COLECTIVO */
    public Cyc_Fix_ColectivoBlock Cyc_Fix_Colectivo = null;
    private void setCyc_Fix_Colectivo(Cyc_Fix_ColectivoBlock ai_arg)
    {
        Cyc_Fix_Colectivo = ai_arg;
    }
    private Cyc_Fix_ColectivoBlock getCyc_Fix_Colectivo()
    {
        return Cyc_Fix_Colectivo;
    }
    void setCyc_Fix_Colectivo(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Fix_Colectivo = new Cyc_Fix_ColectivoBlock();
        Cyc_Fix_Colectivo.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_INFORME_TOTALES */
    public Cyc_Informe_TotalesBlock Cyc_Informe_Totales = null;
    private void setCyc_Informe_Totales(Cyc_Informe_TotalesBlock ai_arg)
    {
        Cyc_Informe_Totales = ai_arg;
    }
    private Cyc_Informe_TotalesBlock getCyc_Informe_Totales()
    {
        return Cyc_Informe_Totales;
    }
    void setCyc_Informe_Totales(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Totales = new Cyc_Informe_TotalesBlock();
        Cyc_Informe_Totales.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_COMPETENCIAS_FII */
    public Cyc_Competencias_FiiBlock Cyc_Competencias_Fii = null;
    private void setCyc_Competencias_Fii(Cyc_Competencias_FiiBlock ai_arg)
    {
        Cyc_Competencias_Fii = ai_arg;
    }
    private Cyc_Competencias_FiiBlock getCyc_Competencias_Fii()
    {
        return Cyc_Competencias_Fii;
    }
    void setCyc_Competencias_Fii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Competencias_Fii = new Cyc_Competencias_FiiBlock();
        Cyc_Competencias_Fii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_COMPETENCIAS_FIII */
    public Cyc_Competencias_FiiiBlock Cyc_Competencias_Fiii = null;
    private void setCyc_Competencias_Fiii(Cyc_Competencias_FiiiBlock ai_arg)
    {
        Cyc_Competencias_Fiii = ai_arg;
    }
    private Cyc_Competencias_FiiiBlock getCyc_Competencias_Fiii()
    {
        return Cyc_Competencias_Fiii;
    }
    void setCyc_Competencias_Fiii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Competencias_Fiii = new Cyc_Competencias_FiiiBlock();
        Cyc_Competencias_Fiii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_COMPETENCIAS_FASEI */
    public Cyc_Competencias_FaseiBlock Cyc_Competencias_Fasei = null;
    private void setCyc_Competencias_Fasei(Cyc_Competencias_FaseiBlock ai_arg)
    {
        Cyc_Competencias_Fasei = ai_arg;
    }
    private Cyc_Competencias_FaseiBlock getCyc_Competencias_Fasei()
    {
        return Cyc_Competencias_Fasei;
    }
    void setCyc_Competencias_Fasei(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Competencias_Fasei = new Cyc_Competencias_FaseiBlock();
        Cyc_Competencias_Fasei.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

