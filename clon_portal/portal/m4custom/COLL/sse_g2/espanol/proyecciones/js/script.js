// import {html, render} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/lit-html.min.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

/***************************
  JSON ENDPOINTs
***************************/
const aux00 = document.getElementById('tables').dataset.anio 
const aux01 = aux00 - 1
const aux02 = aux00 - 2
const aux03 = aux00 - 3
const aux04 = aux00 - 4

const JSON1 = '../proy_ret_json.jsp?ANIO='+aux00
const JSON2 = '../proy_ret_json.jsp?ANIO='+aux01
const JSON3 = '../proy_ret_json.jsp?ANIO='+aux02
const JSON4 = '../proy_ret_json.jsp?ANIO='+aux03
const JSON5 = '../proy_ret_json.jsp?ANIO='+aux04

function getindexfom(arr,seh){
  var ind = -1;
  arr.forEach( function(currentValue, index, arr){ 
      if(currentValue.concept == seh) ind = index;
  } );
  return ind;
}

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});
const buildRowColumns = (row) => {
  return row.map(r => {
    if (r.type === 'title') {
      return html`<th data-type="${r.type}" colspan="${r.colspan}">${r.format ? r.format(r.value) : r.value}</th>`
    }
    if (r.type === 'total') {
      return html`<th real="${r.real}" data-type="${r.type}" colspan="${r.colspan}">${r.format ? r.format(r.value) : r.value}</th>`
    }
    return html`<td real="${r.real}" data-type="${r.type}" colspan="${r.colspan}">${r.format ? r.format(r.value) : r.value}</td>`
  })
}
const buildTable = (table) => {
  return html`
  ${ ['COMPROMISO A LA JUBILACIÓN','PPSE','Lote Navidad','SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO','INVERSIÓN INDIVIDUAL EN FORMACIÓN'].indexOf(table.title) != -1 ? html`<div style="clear: both;"></div>` : ''}
  <div class="boxshadow col-xs-12 ${table.columns.length < 5 ? 'no-width' : ''} table-responsive">
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          ${table.columns.map(c => html`<th>${c}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${table.rows.map(row => html`<tr>${buildRowColumns(row)}</tr>`)}
      </tbody>
    </table>
  </div>
  `
}
const DexignTables = {
  _template: props => {
    return html`
      ${props.tables.map(table => {
        const aux = []
        // if (table.title) {
        //   aux.push(html`<h4>${table.title}</h4>`)
        // }
        aux.push(buildTable(table))
        return aux
      })}
    `
  }
}

const initRender = async (props, node) => {
  return render(DexignTables._template(props), node)
}

const getRows = (pays, projection_data) => {
  return Array(projection_data.n_cols_tot).fill()
  .map((_, i) => {
    return {
      type: 'value',
      real: (i + 1) <= projection_data.n_real_pays,
      value: (pays[i]<0) ? pays[i]*-1 : pays[i] || 0,
      format: (v) => formatter.format(v)
    }
  });
}

const getRowsTot = (pays, projection_data) => {
  return Array(projection_data.n_cols_tot).fill()
  .map((_, i) => {
    return {
      type: 'total',
      real: (i + 1) <= projection_data.n_real_pays,
      value: pays[i] || 0,
      format: (v) => formatter.format(v)
    }
  });
}

const getNmPay = (projection_data) => {
  const ncol = projection_data.n_cols_tot
  const items = Array.from({length: projection_data.n_cols_tot}, (_, i) => i)
  return items.map(i => {
    if (projection_data.nm_pay[i]) return projection_data.nm_pay[i]
    else return 'nm_pay_' + (i + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  })
}

const getTable = (res, tableRef, out) => {
  const nm_pay = getNmPay(res.projection_data)
  return {
    title: '',
    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        ...getRows(data.pays, res.projection_data),
        //{ type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
        { type: 'total', value: (data.tot_pays<0) ? data.tot_pays*-1 : data.tot_pays, format: (v) => formatter.format(v) }
      ].filter(() => !Array.isArray(out) ? true : !out.includes(data.concept))
    }),
    columns: [tableRef.title, ...nm_pay, 'Total']
  }
}
const getTableTotal = (res, tableRef, out) => {
  return {
    title: tableRef.title,
    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        { type: 'total', value: data.pay, format: (v) => formatter.format(v) }
      //].filter(Boolean)
      ].filter(() => data.pay>0)
    }),
    columns: [tableRef.title, '']
  }
}

const getTableTotalEx = (res, tableRef) => {
  return {
    title: tableRef.title,

    // rows: tableRef.dataex.map(data => {
    //   return [
    //     { type: 'label', value: data.concept },
    //     { type: 'total', value: data.pay, format: (v) => formatter.format(v) }
    //   ].filter(Boolean)
    // }),

    /*rows: [[
      { type: 'label', value: tableRef.dataex.concept },
      { type: 'total', value: tableRef.dataex.pay, format: (v) => formatter.format(v) }
    ].filter(Boolean)],
    columns: [tableRef.title, '']*/

    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        //{ type: 'total', value: data.pay, format: (v) => formatter.format(v) }
        { type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
      ].filter(() => data.concept=='Lote Navidad')
    }),

    columns: [tableRef.title, 'Importe anual']
  }
}

const getTableTotalEx2 = (res, tableRef) => {
  return {
    title: tableRef.title,

    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        { type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
      ].filter(() => data.concept=='Vehículo compañía')
    }),

    columns: [tableRef.title, 'Importe anual']
  }
}

const getTableTotalExx = (res, tableRef,out) => {
  return {
    title: tableRef.title,

    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        //{ type: 'total', value: data.pay, format: (v) => formatter.format(v) }
        { type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
      ].filter(() => !Array.isArray(out) ? true : !out.includes(data.concept))
    }),
    columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.']
  }
}

const pushRow = (table, tableRef, res) => {
  const nm_pay = getNmPay(res.projection_data)
  const n_cols_tot = res.projection_data.n_cols_tot
  tableRef.title && table.rows.push([
    { type: 'title', value: tableRef.title, colspan: n_cols_tot + 2 }
  ])

  tableRef.data.map(data => {
    table.rows.push([
      { type: 'label', value: data.concept },
      ...getRows(data.pays, res.projection_data),
      { type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
    ])
  })
}

const pushRowTot = (table, tableRef, res) => {
  const nm_pay = getNmPay(res.projection_data)
  const n_cols_tot = res.projection_data.n_cols_tot
  tableRef.title && table.rows.push([
    { type: 'total', value: tableRef.title, colspan: n_cols_tot + 2 }
  ])

  tableRef.data.map(data => {
    table.rows.push([
      { type: 'total', value: data.concept },
      ...getRowsTot(data.pays, res.projection_data),
      { type: 'total', value: data.tot_pays, format: (v) => formatter.format(v) }
    ])
  })
}

const getTablePayTot = (res, tableRef, out) => {
  const tableRefData = Object.keys(tableRef.data).includes('accumulated') ? Object.values(tableRef.data) : tableRef.data

  //const hasTotPay = tableRefData && tableRefData.length && tableRefData.find(i => i.hasOwnProperty('tot_pay') || i.hasOwnProperty('tot_pays'))
  const hasTotPay = tableRefData && tableRefData.length && tableRefData.find(i => i.hasOwnProperty('tot_pay'))
  if (tableRefData && tableRefData.length && hasTotPay){
    return {
      title: tableRef.title,
      rows: tableRefData.map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.pay, real: !!tableRef.real, format: (v) => formatter.format(v) },
          { type: 'total', value: data.tot_pay || data.tot_pays, real: !!tableRef.real, format: (v) => formatter.format(v) }
        ].filter(() => !Array.isArray(out) ? true : !out.includes(data.concept))
      }),
      columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.', 'Total']
    }
  }
  if (!hasTotPay && tableRefData && tableRefData.length) {
    return {
      title: tableRef.title,
      rows: tableRefData.map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'total', value: data.pay, real: !!tableRef.real, format: (v) => formatter.format(v) }
        ].filter(() => !Array.isArray(out) ? true : !out.includes(data.concept))
      }),
      columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.']
    }
  } else {
    return {
      title: tableRef.title,
      rows: [tableRefData].map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'total', value: data.pay, real: !!tableRef.real, format: (v) => formatter.format(v) }
        ].filter(() => !Array.isArray(out) ? true : !out.includes(data.concept))
      }),
      columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.']
    }
  }
}
const getTableOrdExtTot = (res, tableRef) => {
  if (tableRef.data && tableRef.data.length) {
    return {
      title: tableRef.title,
      rows: tableRef.data.map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => formatter.format(v) },
          { type: 'value', value: data.ext, format: (v) => formatter.format(v) },
          { type: 'total', value: data.tot, format: (v) => formatter.format(v) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  } else if (tableRef.data && tableRef.data.pay) {
    return {
      title: tableRef.title,
      rows: [tableRef.data].map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => formatter.format(v) },
          { type: 'value', value: data.ext, format: (v) => formatter.format(v) },
          { type: 'total', value: data.tot, format: (v) => formatter.format(v) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  } else {
    return {
      title: tableRef.title,
      rows: Object.values(tableRef.data).map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => formatter.format(v) },
          { type: 'value', value: data.ext, format: (v) => formatter.format(v) },
          { type: 'total', value: data.tot, format: (v) => formatter.format(v) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  }
}
const pushRowOrdExtTot = (table, tableRef, res) => {
  tableRef.data.map(data => {
    table.rows.push([
      { type: 'total', value: data.concept },
      { type: 'total', value: data.ord, format: (v) => formatter.format(v) },
      { type: 'total', value: data.ext, format: (v) => formatter.format(v) },
      { type: 'total', value: data.tot || data.pay, format: (v) => formatter.format(v) }
    ])
  })
}
const pushRowPayTot = (table, tableRef, res) => {
  const hasTotPay = tableRef.data && tableRef.data.length && tableRef.data.find(i => i.hasOwnProperty('tot_paysplan_prev_emp'))

  if (hasTotPay) {
    tableRef.data.map(data => {
      table.rows.push([
        { type: 'total', value: data.concept },
        { type: 'total', value: data.pay, real: !!tableRef.real, format: (v) => formatter.format(v) },
        { type: 'total', value: data.tot_pay, real: !!tableRef.real, format: (v) => formatter.format(v) }
      ])
    })
  } else {
    tableRef.data.map(data => {
      table.rows.push([
        { type: 'total', value: data.concept },
        { type: 'total', value: data.pay, real: !!tableRef.real, format: (v) => formatter.format(v) }
      ])
    })
  }
}

const processTable = (res, ref) => {
  const nm_pay = getNmPay(res.projection_data)

  const tables = []
  if (res.direct_remuneration) {
    if (res.direct_remuneration.fixed_remuneration) {
      const tableRef = res.direct_remuneration.fixed_remuneration.data
      const table = getTable(res, tableRef.salario_convenio)
      tableRef.comp_org && pushRow(table, tableRef.comp_org, res)
      tableRef.comp_funcional && pushRow(table, tableRef.comp_funcional, res)
      const totRef = res.direct_remuneration.fixed_remuneration.tot
      totRef && pushRowTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.direct_remuneration.variable_remuneration) {
      const tableRef = res.direct_remuneration.variable_remuneration
      const table = getTable(res, tableRef)
      const totRef = tableRef.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.direct_remuneration.base_ret_var) {
      const tableRef = res.direct_remuneration.base_ret_var
      tableRef.title = tableRef.title || ''
      const table = getTableTotal(res, tableRef, 1)
      tables.push(table)
    }
    if (res.direct_remuneration.seg_soc) {
      const tableRef = res.direct_remuneration.seg_soc
      const table = getTable(res, tableRef)
      const totRef = tableRef.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
  }
  if (res.indirect_retribution) {

    if (res.indirect_retribution.comidas) {
      const tableRef = res.indirect_retribution.comidas
      const table = getTable(res, tableRef)
      const totRef = res.indirect_retribution.comidas.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }

    if (res.indirect_retribution.contrato_seguros) {
      const tableRef = res.indirect_retribution.contrato_seguros
      const table = getTablePayTot(res, tableRef)
      const totRef = res.indirect_retribution.contrato_seguros.tot
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.val_especie) {
      res.indirect_retribution.val_especie.data.reverse();
      const tableRef = res.indirect_retribution.val_especie
      //const table = getTablePayTot(res, tableRef,['Lote Navidad', 'Seguro Salud Empresa'])
      const table = getTableTotalExx(res, tableRef,['Lote Navidad', 'Seguro Salud Empresa', 'Vehículo compañía'])
      //console.log(table);

      var totti = 0;
      $.each( table.rows, function( key, value ) {
        if(value.length>0){          
          $.each( value[1], function( key1, value1 ) {
            if(key1=='value'){
              totti = totti + value1;
            }            
          });
        }
      });
      //console.log( totti );
      //const totRef = res.indirect_retribution.val_especie.tot
      const totRef = {concept: 'Total', pay: totti, tot_pay: totti}
      //console.log(totRef);
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      //console.log(table);
      tables.push(table)
    }
    
    if (res.indirect_retribution.ayudas) {
      const tableRef = res.indirect_retribution.ayudas
      const table = getTablePayTot(res, tableRef)
      const totRef = res.indirect_retribution.ayudas.tot
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    
    if (res.indirect_retribution.diet_km) {
      const tableRef = res.indirect_retribution.diet_km
      const table = getTable(res, tableRef)
      const totRef = res.indirect_retribution.diet_km.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
    // if (res.indirect_retribution.ret_flex) {
    //   const tableRef = res.indirect_retribution.ret_flex
    //   const table = getTable(res, tableRef)
    //   const totRef = res.indirect_retribution.ret_flex.tot
    //   totRef && pushRow(table, { data: [totRef] }, res)
    //   tables.push(table)
    // }
  }
    

  if (res.other_retribution && res.other_retribution.compro_jub) {
    const tableRef = res.other_retribution.compro_jub
    //tableRef.title = 'COMPROMISO A LA JUBILACIÓN'
    const table = getTablePayTot(res, tableRef)
    tables.push(table)
  }

  if (res.other_retribution && res.other_retribution.plan_prev_emp) {
    const tableRef = res.other_retribution.plan_prev_emp
    //tableRef.title = 'PPSE'
    const table = getTableOrdExtTot(res, tableRef)
    const totRef = res.other_retribution.plan_prev_emp.tot
    totRef && pushRowOrdExtTot(table, { data: [totRef] }, res)
    tables.push(table)
  }

  if (res.other_retribution && res.other_retribution.rp_aportacion_definida) {
    const tableRef = res.other_retribution.rp_aportacion_definida
    //tableRef.title = 'SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO'
    const table = getTablePayTot(res, tableRef)
    const totRef = res.other_retribution.rp_aportacion_definida.tot
    totRef && pushRowPayTot(table, { data: [totRef] }, res)
    tables.push(table)
  }

  if (res.indirect_retribution && res.indirect_retribution.ret_flex) {
    const tableRef = res.indirect_retribution.ret_flex

    /*const pos = getindexfom(res.direct_remuneration.rflex_anual.data,'Acciones GCO');
    if (pos != -1) {
      tableRef.data.push({
        'concept':res.direct_remuneration.rflex_anual.data[pos].concept,
        'pays':res.direct_remuneration.rflex_anual.data[pos].pay,
        'tot_pays':res.direct_remuneration.rflex_anual.data[pos].tot
      })
    }

    console.log(tableRef)*/


    const table = getTable(res, tableRef, ['Manutención'])
    const totRef = res.indirect_retribution.ret_flex.tot
    totRef && pushRow(table, { data: [totRef] }, res)
    tables.push(table)
  }  

  /*if (res.indirect_retribution.val_especie && res.indirect_retribution.val_especie.dataex) {
    const tableRef = res.indirect_retribution.val_especie
    tableRef.title = 'Lote Navidad'
    const table = getTableTotalEx(res, tableRef, 1)
    console.log(table)
    tables.push(table)
  }*/

  if (res.indirect_retribution.val_especie && res.indirect_retribution.val_especie.data) {
    const tableRef = res.indirect_retribution.val_especie
    //tableRef.title = 'Lote Navidad'
    tableRef.title = ''
    const table = getTableTotalEx(res, tableRef, 1)
    //console.log(table)
    tables.push(table)
  }

  if (res.indirect_retribution.val_especie && res.indirect_retribution.val_especie.data && getindexfom(res.indirect_retribution.val_especie.data,'Vehículo compañía') != -1) {
    const tableRef = res.indirect_retribution.val_especie
    //tableRef.title = 'Vehículo compañía'
    tableRef.title = ''
    const table = getTableTotalEx2(res, tableRef, 1)
    //console.log(table)
    tables.push(table)
  }

  if (res.other_retribution && res.other_retribution.inv_formacion) {
    const tableRef = res.other_retribution.inv_formacion
    //tableRef.title = 'INVERSIÓN INDIVIDUAL EN FORMACIÓN'
    const table = getTablePayTot(res, tableRef)
    const totRef = res.other_retribution.inv_formacion.tot
    totRef && pushRowPayTot(table, { data: [totRef] }, res)
    tables.push(table)
  }
  
  return tables
}

// Charts
// const buildPie = ({series, labels, legends}, clazz) => {
//   return new window.Chartist.Pie(clazz, {
//     series, labels
//   }, {
//     donut: true,
//     donutWidth: 30,
//     donutSolid: true,
//     startAngle: 270,
//     showLabel: true,
//     labelOffset: 30,
//     // labelDirection: 'explode',
//     distributeSeries: true,
//     plugins: [
//       Chartist.plugins.legend({
//         legendNames: legends
//       })
//     ]
//   });
// }

// const buildBar = () => {
//   new Chartist.Bar('.ct-chart-4', {
//     labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre', 'Total'],
//     series: [20, 60, 120, 200, 180, 20, 100, 50, 130, 400, 90, 30]
//   }, {
//     distributeSeries: true
//   }).on('draw', (data) => {
//     if(data.type === 'bar') {
//       data.element.attr({
//         style: 'stroke-width: 30px'
//       });
//     }
//   });
// }

// const deep = (obj, path) => {
//   if (path) return path.split('.').reduce((prev, curr) => prev && prev[curr], obj) || ''
//   else return ''
// }
// const getPie1Vals = (data) => {
//   data.direct_remuneration.fixed_remuneration = data.direct_remuneration.fixed_remuneration || {}
//   data.direct_remuneration.variable_remuneration = data.direct_remuneration.variable_remuneration || {}
//   data.direct_remuneration.seg_soc = data.direct_remuneration.seg_soc || {}

//   const items = [
//     (data.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//     (data.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//     data.direct_remuneration.seg_soc.data[0].tot_pays || 0
//   ]
  
//   const total = items.reduce((a, b) => a + b, 0)

//   const val1 = Math.round(items[0] * 100 / total)
//   const val2 = Math.round(items[1] * 100 / total)
//   const val3 = Math.round(items[2] * 100 / total)

//   return {
//     series: [
//       {value: val1, className: 'color1'},
//       {value: val2, className: 'color2'},
//       {value: val3, className: 'color3'}
//     ],
//     labels: [`${val1}%`, `${val2}%`, `${val3}%`].map(i => i === '0%' ? '' : i)
//   }
// }

// const getPie2Vals = (data) => {
//   data.indirect_retribution.val_especie = data.indirect_retribution.val_especie || {}
//   data.indirect_retribution.contrato_seguros = data.indirect_retribution.contrato_seguros || {}
//   data.indirect_retribution.ayudas = data.indirect_retribution.ayudas || {}
//   data.indirect_retribution.comidas = data.indirect_retribution.comidas || {}
//   data.indirect_retribution.diet_km = data.indirect_retribution.diet_km || {}
//   data.indirect_retribution.ret_flex = data.indirect_retribution.ret_flex || {}

//   data.indirect_retribution.comidas.data = data.indirect_retribution.comidas.data || []
//   data.indirect_retribution.diet_km.data = data.indirect_retribution.diet_km.data || []
//   data.indirect_retribution.ret_flex.data = data.indirect_retribution.ret_flex.data || []

//   data.indirect_retribution.comidas.data[0] = data.indirect_retribution.comidas.data[0] || {}
//   data.indirect_retribution.diet_km.data[0] = data.indirect_retribution.diet_km.data[0] || {}
//   data.indirect_retribution.ret_flex.data[0] = data.indirect_retribution.ret_flex.data[0] || {}

//   data.indirect_retribution.val_especie.tot = data.indirect_retribution.val_especie.tot || {tot_pay: 0}
//   data.indirect_retribution.contrato_seguros.tot = data.indirect_retribution.contrato_seguros.tot || {tot_pay: 0}
//   data.indirect_retribution.ayudas.tot = data.indirect_retribution.ayudas.tot || {tot_pay: 0}

//   const items = [
//     data.indirect_retribution.val_especie.tot.tot_pay,
//     data.indirect_retribution.contrato_seguros.tot.tot_pay,
//     data.indirect_retribution.ayudas.tot.tot_pay,
//     data.indirect_retribution.comidas.data[0].tot_pays || 0,
//     data.indirect_retribution.diet_km.data[0].tot_pays || 0,
//     data.indirect_retribution.ret_flex.data[0].tot_pays || 0
//   ]

//   const total = items.reduce((a, b) => a + b, 0)
//   const val1 = Math.abs(Math.round(items[0] * 100 / total))
//   const val2 = Math.abs(Math.round(items[1] * 100 / total))
//   const val3 = Math.abs(Math.round(items[2] * 100 / total))
//   const val4 = Math.abs(Math.round(items[3] * 100 / total))
//   const val5 = Math.abs(Math.round(items[4] * 100 / total))
//   const val6 = Math.abs(Math.round(items[5] * 100 / total))
  
//   return {
//     series: [
//       {value: val1, className: 'color1'},
//       {value: val2, className: 'color2'},
//       {value: val3, className: 'color3'},
//       {value: val4, className: 'color4'},
//       {value: val5, className: 'color5'},
//       {value: val6, className: 'color6'}
//     ],
//     labels: [`${val1}%`, `${val2}%`, `${val3}%`, `${val4}%`, `${val5}%`, `${val6}%`].map(i => i === '0%' ? '' : i)
//   }
// }

// const getPie3Vals = ([data, data2, data3, data4, data5]) => {
//   [data, data2, data3, data4, data5].filter(Boolean).map(d => {
//     d.direct_remuneration.fixed_remuneration = d.direct_remuneration.fixed_remuneration || {}
//     d.direct_remuneration.variable_remuneration = d.direct_remuneration.variable_remuneration || {}
//     d.direct_remuneration.seg_soc = d.direct_remuneration.seg_soc || {}
//     d.direct_remuneration.seg_soc.d = d.direct_remuneration.seg_soc.d || []
//     d.direct_remuneration.seg_soc.d[0] = d.direct_remuneration.seg_soc.d[0] || {}
//   }) 

//   const items = [
//     data && [
//       (data.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//       (data.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//       (data.direct_remuneration.seg_soc.data[0] || {}).tot_pays || 0
//     ],
//     data2 && [
//       (data2.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//       (data2.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//       (data2.direct_remuneration.seg_soc.data[0] || {}).tot_pays || 0
//     ],
//     data3 && [
//       (data3.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//       (data3.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//       (data3.direct_remuneration.seg_soc.data[0] || {}).tot_pays || 0
//     ],
//     data4 && [
//       (data4.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//       (data4.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//       (data4.direct_remuneration.seg_soc.data[0] || {}).tot_pays || 0
//     ],
//     data5 && [
//       (data5.direct_remuneration.fixed_remuneration.tot || {}).tot_pays || 0,
//       (data5.direct_remuneration.variable_remuneration.tot || {}).tot_pays || 0,
//       (data5.direct_remuneration.seg_soc.data[0] || {}).tot_pays || 0
//     ]
//   ].filter(Boolean)

//   return {
//     labels: [
//       data && data.projection_data.year || '2021',
//       data2 && data2.projection_data.year || '2019',
//       data3 && data3.projection_data.year || '2018',
//       data4 && data4.projection_data.year || '2017',
//       data5 && data5.projection_data.year || '2016'].filter(Boolean),
//     series: [
//       {value: [data && items[0][0], data2 && items[1][0], data3 && items[2][0], data4 && items[3][0], data5 && items[4][0]], className: 'color1'},
//       {value: [data && items[0][1], data2 && items[1][1], data3 && items[2][1], data4 && items[3][1], data5 && items[4][1]], className: 'color2'},
//       {value: [data && items[0][2], data2 && items[1][2], data3 && items[2][2], data4 && items[3][2], data5 && items[4][2]], className: 'color3'}
//     ]
//   }
// }

// const buildChartGroups = ({series, labels, legends}, clazz) => {
//   new Chartist.Bar(clazz, {
//     series, labels
//   }, {
//     // Default mobile configuration
//     plugins: [
//       Chartist.plugins.legend({
//         legendNames: legends
//       })
//     ],
//     stackBars: true,
//     axisX: {
//       labelInterpolationFnc: function(value) {
//         return value.split(/\s+/).map(function(word) {
//           return word[0];
//         }).join('');
//       }
//     },
//     axisY: {
//       offset: 20
//     },
//     height: '250px'
//   }, [
//     // Options override for media > 400px
//     ['screen and (min-width: 400px)', {
//       reverseData: false,
//       stackBars: true,
//       horizontalBars: false,
//       seriesBarDistance: 4,
//       axisX: {
//         labelInterpolationFnc: Chartist.noop
//       },
//       axisY: {
//         offset: 60
//       }
//     }],
//     // Options override for media > 800px
//     ['screen and (min-width: 800px)', {
//       stackBars: true,
//       seriesBarDistance: 35
//     }],
//     // Options override for media > 1000px
//     ['screen and (min-width: 1000px)', {
//       reverseData: false,
//       horizontalBars: false,
//       seriesBarDistance: 35,
//       stackBars: true
//     }]
//   ])
//   .on('draw', (data) => {
//     if(data.type === 'bar') {
//       data.element.attr({
//         style: 'stroke-width: 30px'
//       });
//     }
//   });
// }

// const load5Charts = async (res) => {
//   const res2 = await fetch(JSON2).then(r => r.text()).then(r => r ? Hjson.parse(r) : null).catch(_ => null)
//   const res3 = await fetch(JSON3).then(r => r.text()).then(r => r ? Hjson.parse(r) : null).catch(_ => null)
//   const res4 = await fetch(JSON4).then(r => r.text()).then(r => r ? Hjson.parse(r) : null).catch(_ => null)
//   const res5 = await fetch(JSON5).then(r => r.text()).then(r => r ? Hjson.parse(r) : null).catch(_ => null)

//   buildChartGroups({
//     ...getPie3Vals([res, res2, res3, res4, res5]),
//     legends: [
//       'Retribución fija',
//       'Retribución variable',
//       'Seguridad social'
//     ]
//   }, '.ct-chart-5')
// }

const gramod00 = '<div class="col-md-6">'+
                    '<h4 class="titgra">Retribución Directa '+aux00+'</h4> '+
                    '<canvas id="graf00" width="416" height="416"></canvas>'+
                  '</div>'+
                  '<div class="col-md-6">'+
                    '<h4 class="titgra">Compensación Total</h4> '+
                    '<canvas id="graf01" width="416" height="416"></canvas>'+
                  '</div>';


const gramod01 = '<div class="col-md-4">'+
                    '<h4 class="titgra">Retribución Directa '+aux00+'</h4> '+
                    '<canvas id="graf00" width="416" height="416"></canvas>'+
                  '</div>    '+
                  '<div class="col-md-4">'+
                    '<h4 class="titgra">Compensación Total</h4> '+
                    '<canvas id="graf01" width="416" height="416"></canvas>'+
                  '</div>  '+
                  '<div class="col-md-4">'+
                    '<h4 class="titgra">Retribución Flexible</h4> '+
                    '<canvas id="graf02" width="416" height="416"></canvas>'+
                  '</div>';

const init = async () => {
  fetch(JSON1).then(r => r.text()).then(r => {
    const res = Hjson.parse(r)
    console.log(res)

    const graff = document.getElementById('graff')
    //graff.innerHTML = (!res.indirect_retribution.ret_flex) ? gramod00 : gramod01;
    graff.innerHTML = (!res.direct_remuneration.rflex_anual) ? gramod00 : gramod01;

    const tt = document.getElementById('tt')
    tt.innerHTML = 'Informe de compensación total ' + res.projection_data.year || new Date().getFullYear()
    const tn = document.getElementById('tn')
    tn.innerHTML = res.projection_data.id_hr + ' - ' + res.projection_data.nm_first_name + ' ' + res.projection_data.nm_family_name || 'Sin datos'
    const tg = document.getElementById('tg')
    tg.innerHTML = res.projection_data.nm_category || 'Sin datos'

    printGrafDoughnut(res)
    if(res.projection_data.year>=2018){
      printGrafBar(res,res.projection_data.year);
    }else{
      $('#grafvert').hide();
    }

    const ref = document.getElementById('tables')
    const tables = processTable(res, ref)

    const el = document.createElement('dexign-table')
    ref.appendChild(el)

    initRender({tables}, el)

    // Table2 Pie 1
    // const { series, labels } = getPie1Vals(res)
    // buildPie({
    //   series,
    //   labels,
    //   legends: [
    //     'Retribución fija',
    //     'Retribución variable',
    //     'Seguridad social'
    //   ]
    // }, '.ct-chart-1')
    // // Table2 Pie 1
    // buildPie({
    //   ...getPie2Vals(res),
    //   legends: [
    //     'Retribución en Especie',
    //     'Valoración R. Especie',
    //     'Ayudas',
    //     'Manutención por Jornada Partida',
    //     'Dietas y kilometrajes',
    //     'Retribución Flexible'
    //   ]
    // }, '.ct-chart-2')

    // load5Charts(res)
  })  
}
init()