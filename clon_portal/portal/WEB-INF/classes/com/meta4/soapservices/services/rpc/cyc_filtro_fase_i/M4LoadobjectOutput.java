/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_FILTRO_FASE_I.
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

package com.meta4.soapservices.services.rpc.cyc_filtro_fase_i;

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
    
    /* CYC_FILT_ORO */
    public Cyc_Filt_OroBlock Cyc_Filt_Oro = null;
    private void setCyc_Filt_Oro(Cyc_Filt_OroBlock ai_arg)
    {
        Cyc_Filt_Oro = ai_arg;
    }
    private Cyc_Filt_OroBlock getCyc_Filt_Oro()
    {
        return Cyc_Filt_Oro;
    }
    void setCyc_Filt_Oro(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Oro = new Cyc_Filt_OroBlock();
        Cyc_Filt_Oro.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FOTO */
    public Cyc_Filt_FotoBlock Cyc_Filt_Foto = null;
    private void setCyc_Filt_Foto(Cyc_Filt_FotoBlock ai_arg)
    {
        Cyc_Filt_Foto = ai_arg;
    }
    private Cyc_Filt_FotoBlock getCyc_Filt_Foto()
    {
        return Cyc_Filt_Foto;
    }
    void setCyc_Filt_Foto(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Foto = new Cyc_Filt_FotoBlock();
        Cyc_Filt_Foto.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILTRO_F_I */
    public Cyc_Filtro_F_IBlock Cyc_Filtro_F_I = null;
    private void setCyc_Filtro_F_I(Cyc_Filtro_F_IBlock ai_arg)
    {
        Cyc_Filtro_F_I = ai_arg;
    }
    private Cyc_Filtro_F_IBlock getCyc_Filtro_F_I()
    {
        return Cyc_Filtro_F_I;
    }
    void setCyc_Filtro_F_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_F_I = new Cyc_Filtro_F_IBlock();
        Cyc_Filtro_F_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FASES */
    public Cyc_Filt_FasesBlock Cyc_Filt_Fases = null;
    private void setCyc_Filt_Fases(Cyc_Filt_FasesBlock ai_arg)
    {
        Cyc_Filt_Fases = ai_arg;
    }
    private Cyc_Filt_FasesBlock getCyc_Filt_Fases()
    {
        return Cyc_Filt_Fases;
    }
    void setCyc_Filt_Fases(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fases = new Cyc_Filt_FasesBlock();
        Cyc_Filt_Fases.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_CERTIF */
    public Cyc_Filt_CertifBlock Cyc_Filt_Certif = null;
    private void setCyc_Filt_Certif(Cyc_Filt_CertifBlock ai_arg)
    {
        Cyc_Filt_Certif = ai_arg;
    }
    private Cyc_Filt_CertifBlock getCyc_Filt_Certif()
    {
        return Cyc_Filt_Certif;
    }
    void setCyc_Filt_Certif(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Certif = new Cyc_Filt_CertifBlock();
        Cyc_Filt_Certif.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_IDIOMA */
    public Cyc_Filt_IdiomaBlock Cyc_Filt_Idioma = null;
    private void setCyc_Filt_Idioma(Cyc_Filt_IdiomaBlock ai_arg)
    {
        Cyc_Filt_Idioma = ai_arg;
    }
    private Cyc_Filt_IdiomaBlock getCyc_Filt_Idioma()
    {
        return Cyc_Filt_Idioma;
    }
    void setCyc_Filt_Idioma(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Idioma = new Cyc_Filt_IdiomaBlock();
        Cyc_Filt_Idioma.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FAMILIA */
    public Cyc_Filt_FamiliaBlock Cyc_Filt_Familia = null;
    private void setCyc_Filt_Familia(Cyc_Filt_FamiliaBlock ai_arg)
    {
        Cyc_Filt_Familia = ai_arg;
    }
    private Cyc_Filt_FamiliaBlock getCyc_Filt_Familia()
    {
        return Cyc_Filt_Familia;
    }
    void setCyc_Filt_Familia(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Familia = new Cyc_Filt_FamiliaBlock();
        Cyc_Filt_Familia.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_TITULOS */
    public Cyc_Filt_TitulosBlock Cyc_Filt_Titulos = null;
    private void setCyc_Filt_Titulos(Cyc_Filt_TitulosBlock ai_arg)
    {
        Cyc_Filt_Titulos = ai_arg;
    }
    private Cyc_Filt_TitulosBlock getCyc_Filt_Titulos()
    {
        return Cyc_Filt_Titulos;
    }
    void setCyc_Filt_Titulos(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Titulos = new Cyc_Filt_TitulosBlock();
        Cyc_Filt_Titulos.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_COLECTIVO */
    public Cyc_Filt_ColectivoBlock Cyc_Filt_Colectivo = null;
    private void setCyc_Filt_Colectivo(Cyc_Filt_ColectivoBlock ai_arg)
    {
        Cyc_Filt_Colectivo = ai_arg;
    }
    private Cyc_Filt_ColectivoBlock getCyc_Filt_Colectivo()
    {
        return Cyc_Filt_Colectivo;
    }
    void setCyc_Filt_Colectivo(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Colectivo = new Cyc_Filt_ColectivoBlock();
        Cyc_Filt_Colectivo.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_ULTIM_ACT */
    public Cyc_Filt_Ultim_ActBlock Cyc_Filt_Ultim_Act = null;
    private void setCyc_Filt_Ultim_Act(Cyc_Filt_Ultim_ActBlock ai_arg)
    {
        Cyc_Filt_Ultim_Act = ai_arg;
    }
    private Cyc_Filt_Ultim_ActBlock getCyc_Filt_Ultim_Act()
    {
        return Cyc_Filt_Ultim_Act;
    }
    void setCyc_Filt_Ultim_Act(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Ultim_Act = new Cyc_Filt_Ultim_ActBlock();
        Cyc_Filt_Ultim_Act.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_GRUPONIVEL */
    public Cyc_Filt_GruponivelBlock Cyc_Filt_Gruponivel = null;
    private void setCyc_Filt_Gruponivel(Cyc_Filt_GruponivelBlock ai_arg)
    {
        Cyc_Filt_Gruponivel = ai_arg;
    }
    private Cyc_Filt_GruponivelBlock getCyc_Filt_Gruponivel()
    {
        return Cyc_Filt_Gruponivel;
    }
    void setCyc_Filt_Gruponivel(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Gruponivel = new Cyc_Filt_GruponivelBlock();
        Cyc_Filt_Gruponivel.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

