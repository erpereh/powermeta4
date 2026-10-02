import {html, render} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/lit-html.min.js';

/***************************
  JSON ENDPOINTs
***************************/
const JSON1 = './tabla2.json'
const JSON2 = './tabla2.json'
const JSON3 = './tabla2.json'
const JSON4 = './tabla2.json'
const JSON5 = './tabla2.json'

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
});
const buildRowColumns = (row) => {
  return row.map(r => {
    if (r.type === 'title') {
      return html`<th colspan="${r.colspan}">${r.format ? r.format(r.value) : r.value}</th>`
    }
    return html`<td real="${r.real}" colspan="${r.colspan}">${r.format ? r.format(r.value) : r.value}</td>`
  })
}
const buildTable = (table) => {
  return html`
  <div class="boxshadow col-xs-12 ${table.columns.length < 5 ? 'no-width' : ''} table-responsive">
    <table class="table table-striped">
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
        if (table.title) {
          aux.push(html`<h4>${table.title}</h4>`)
        }
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
      value: pays[i] || 0,
      format: (v) => v ? formatter.format(v) : (v || 0)
    }
  });
}

const getTable = (res, tableRef) => {
  const nm_pay = res.projection_data.nm_pay
  return {
    title: '',
    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        ...getRows(data.pays, res.projection_data),
        { type: 'total', value: data.tot_pays, format: (v) => v ? formatter.format(v) : (v || 0) }
      ].filter(Boolean)
    }),
    columns: [tableRef.title, ...nm_pay, 'Total']
  }
}
const getTableTotal = (res, tableRef) => {
  return {
    title: '',
    rows: tableRef.data.map(data => {
      return [
        { type: 'label', value: data.concept },
        { type: 'total', value: data.pay, format: (v) => v ? formatter.format(v) : (v || 0) }
      ].filter(Boolean)
    }),
    columns: [tableRef.title, '']
  }
}
const pushRow = (table, tableRef, res) => {
  const nm_pay = res.projection_data.nm_pay
  const n_cols_tot = res.projection_data.n_cols_tot
  tableRef.title && table.rows.push([
    { type: 'title', value: tableRef.title, colspan: n_cols_tot + 2 }
  ])

  tableRef.data.map(data => {
    table.rows.push([
      { type: 'label', value: data.concept },
      ...getRows(data.pays, res.projection_data),
      { type: 'total', value: data.tot_pays, format: (v) => v ? formatter.format(v) : (v || 0) }
    ])
  })
}
const getTablePayTot = (res, tableRef) => {
  if (tableRef.data && tableRef.data.length) {
    return {
      title: '',
      rows: tableRef.data.map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.pay, real: !!tableRef.real, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'total', value: data.tot_pay, real: !!tableRef.real, format: (v) => v ? formatter.format(v) : (v || 0) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.', 'Total']
    }
  } else {
    return {
      title: '',
      rows: [tableRef.data].map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.pay, real: !!tableRef.real, format: (v) => v ? formatter.format(v) : (v || 0) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, tableRef.real ? 'Real' : 'Valoracíon Proyectado/Acum.']
    }
  }
}
const getTableOrdExtTot = (res, tableRef) => {
  if (tableRef.data && tableRef.data.length) {
    return {
      title: '',
      rows: tableRef.data.map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'value', value: data.ext, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'total', value: data.tot, format: (v) => v ? formatter.format(v) : (v || 0) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  } else if (tableRef.data && tableRef.data.pay) {
    return {
      title: '',
      rows: [tableRef.data].map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'value', value: data.ext, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'total', value: data.tot, format: (v) => v ? formatter.format(v) : (v || 0) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  } else {
    return {
      title: '',
      rows: Object.values(tableRef.data).map(data => {
        return [
          { type: 'label', value: data.concept },
          { type: 'value', value: data.ord, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'value', value: data.ext, format: (v) => v ? formatter.format(v) : (v || 0) },
          { type: 'total', value: data.tot, format: (v) => v ? formatter.format(v) : (v || 0) }
        ].filter(Boolean)
      }),
      columns: [tableRef.title, 'Ord', 'Ext', 'Total']
    }
  }
}
const pushRowOrdExtTot = (table, tableRef, res) => {
  tableRef.data.map(data => {
    table.rows.push([
      { type: 'label', value: data.concept },
      { type: 'value', value: data.ord, format: (v) => v ? formatter.format(v) : (v || 0) },
      { type: 'value', value: data.ext, format: (v) => v ? formatter.format(v) : (v || 0) },
      { type: 'total', value: data.tot || data.pay, format: (v) => v ? formatter.format(v) : (v || 0) }
    ])
  })
}
const pushRowPayTot = (table, tableRef, res) => {
  tableRef.data.map(data => {
    table.rows.push([
      { type: 'label', value: data.concept },
      { type: 'value', value: data.pay, real: !!tableRef.real, format: (v) => v ? formatter.format(v) : (v || 0) },
      { type: 'total', value: data.tot_pay, real: !!tableRef.real, format: (v) => v ? formatter.format(v) : (v || 0) }
    ])
  })
}

const processTable = (res, ref) => {
  const nm_pay = res.projection_data.nm_pay

  const tables = []
  if (res.direct_remuneration) {
    if (res.direct_remuneration.fixed_remuneration) {
      const tableRef = res.direct_remuneration.fixed_remuneration.data
      const table = getTable(res, tableRef.salario_convenio)
      tableRef.comp_org && pushRow(table, tableRef.comp_org, res)
      tableRef.comp_funcional && pushRow(table, tableRef.comp_funcional, res)
      const totRef = res.direct_remuneration.fixed_remuneration.tot
      totRef && pushRow(table, { data: [totRef] }, res)
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
      tableRef.title = tableRef.title || 'Base_ret_var'
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
    if (res.indirect_retribution.val_especie) {
      const tableRef = res.indirect_retribution.val_especie
      const table = getTablePayTot(res, tableRef)
      const totRef = res.indirect_retribution.val_especie.tot
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.contrato_seguros) {
      const tableRef = res.indirect_retribution.contrato_seguros
      const table = getTablePayTot(res, tableRef)
      const totRef = res.indirect_retribution.contrato_seguros.tot
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.ayudas) {
      const tableRef = res.indirect_retribution.ayudas
      const table = getTablePayTot(res, tableRef)
      const totRef = res.indirect_retribution.ayudas.tot
      totRef && pushRowPayTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.comidas) {
      const tableRef = res.indirect_retribution.comidas
      const table = getTable(res, tableRef)
      const totRef = res.indirect_retribution.comidas.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.diet_km) {
      const tableRef = res.indirect_retribution.diet_km
      const table = getTable(res, tableRef)
      const totRef = res.indirect_retribution.diet_km.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.indirect_retribution.ret_flex) {
      const tableRef = res.indirect_retribution.ret_flex
      const table = getTable(res, tableRef)
      const totRef = res.indirect_retribution.ret_flex.tot
      totRef && pushRow(table, { data: [totRef] }, res)
      tables.push(table)
    }
  }
  if (res.other_retribution) {
    if (res.other_retribution.compro_jub) {
      const tableRef = res.other_retribution.compro_jub
      const table = getTablePayTot(res, tableRef)
      tables.push(table)
    }
    if (res.other_retribution.plan_prev_emp) {
      const tableRef = res.other_retribution.plan_prev_emp
      const table = getTableOrdExtTot(res, tableRef)
      const totRef = res.other_retribution.plan_prev_emp.tot
      totRef && pushRowOrdExtTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.other_retribution.rp_aportacion_definida) {
      const tableRef = res.other_retribution.rp_aportacion_definida
      const table = getTableOrdExtTot(res, tableRef)
      const totRef = res.other_retribution.rp_aportacion_definida.tot
      totRef && pushRowOrdExtTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
    if (res.other_retribution.inv_formacion) {
      const tableRef = res.other_retribution.inv_formacion
      const table = getTableOrdExtTot(res, tableRef)
      const totRef = res.other_retribution.inv_formacion.tot
      totRef && pushRowOrdExtTot(table, { data: [totRef] }, res)
      tables.push(table)
    }
  }
  return tables
}

// Charts
const buildPie = ({series, labels, legends}, clazz) => {
  return new window.Chartist.Pie(clazz, {
    series, labels
  }, {
    donut: true,
    donutWidth: 30,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
    labelOffset: 30,
    // labelDirection: 'explode',
    distributeSeries: true,
    plugins: [
      Chartist.plugins.legend({
        legendNames: legends
      })
    ]
  });
}

const buildBar = () => {
  new Chartist.Bar('.ct-chart-4', {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre', 'Total'],
    series: [20, 60, 120, 200, 180, 20, 100, 50, 130, 400, 90, 30]
  }, {
    distributeSeries: true
  }).on('draw', (data) => {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
}

const deep = (obj, path) => {
  if (path) return path.split('.').reduce((prev, curr) => prev && prev[curr], obj) || ''
  else return ''
}
const getPie1Vals = (data) => {
  const items = [
    deep(data, 'direct_remuneration.fixed_remuneration.tot.tot_pays'),
    deep(data, 'direct_remuneration.variable_remuneration.tot.tot_pays'),
    data.direct_remuneration.seg_soc.data[0].tot_pays
  ]
  
  const total = items.reduce((a, b) => a + b, 0)

  const val1 = Math.round(items[0] * 100 / total)
  const val2 = Math.round(items[1] * 100 / total)
  const val3 = Math.round(items[2] * 100 / total)

  return {
    series: [
      {value: val1, className: 'color1'},
      {value: val2, className: 'color2'},
      {value: val3, className: 'color3'}
    ],
    labels: [`${val1}%`, `${val2}%`, `${val3}%`]
  }
}

const getPie2Vals = (data) => {
  const items = [
    data.indirect_retribution.val_especie.tot.tot_pay,
    data.indirect_retribution.contrato_seguros.tot.tot_pay,
    data.indirect_retribution.ayudas.tot.tot_pay,
    data.indirect_retribution.comidas.data[0].tot_pays,
    data.indirect_retribution.diet_km.data[0].tot_pays,
    data.indirect_retribution.ret_flex.data[0].tot_pays
  ]

  const total = items.reduce((a, b) => a + b, 0)
  const val1 = Math.round(items[0] * 100 / total)
  const val2 = Math.round(items[1] * 100 / total)
  const val3 = Math.round(items[2] * 100 / total)
  const val4 = Math.round(items[3] * 100 / total)
  const val5 = Math.round(items[4] * 100 / total)
  const val6 = Math.round(items[5] * 100 / total)
  
  return {
    series: [
      {value: val1, className: 'color1'},
      {value: val2, className: 'color2'},
      {value: val3, className: 'color3'},
      {value: val4, className: 'color4'},
      {value: val5, className: 'color5'},
      {value: val6, className: 'color6'}
    ],
    labels: [`${val1}%`, `${val2}%`, `${val3}%`, `${val4}%`, `${val5}%`, `${val6}%`]
  }
}

const getPie3Vals = ([data, data2, data3, data4, data5]) => {
  const items = [
    [
      data.direct_remuneration.fixed_remuneration.tot.tot_pays,
      data.direct_remuneration.variable_remuneration.tot.tot_pays,
      data.direct_remuneration.seg_soc.data[0].tot_pays
    ],
    [
      data2.direct_remuneration.fixed_remuneration.tot.tot_pays,
      data2.direct_remuneration.variable_remuneration.tot.tot_pays,
      data2.direct_remuneration.seg_soc.data[0].tot_pays
    ],
    [
      data3.direct_remuneration.fixed_remuneration.tot.tot_pays,
      data3.direct_remuneration.variable_remuneration.tot.tot_pays,
      data3.direct_remuneration.seg_soc.data[0].tot_pays
    ],
    [
      data4.direct_remuneration.fixed_remuneration.tot.tot_pays,
      data4.direct_remuneration.variable_remuneration.tot.tot_pays,
      data4.direct_remuneration.seg_soc.data[0].tot_pays
    ],
    [
      data5.direct_remuneration.fixed_remuneration.tot.tot_pays,
      data5.direct_remuneration.variable_remuneration.tot.tot_pays,
      data5.direct_remuneration.seg_soc.data[0].tot_pays
    ]
  ]
  return {
    labels: ['2021', '2020', '2019', '2018', '2017'],
    series: [
      {value: [items[0][0], items[1][0], items[2][0], items[3][0], items[4][0]], className: 'color1'},
      {value: [items[0][1], items[1][1], items[2][1], items[3][1], items[4][1]], className: 'color2'},
      {value: [items[0][2], items[1][2], items[2][2], items[3][2], items[4][2]], className: 'color3'}
    ]
  }
}

const buildChartGroups = ({series, labels, legends}, clazz) => {
  new Chartist.Bar(clazz, {
    series, labels
  }, {
    // Default mobile configuration
    plugins: [
      Chartist.plugins.legend({
        legendNames: legends
      })
    ],
    stackBars: true,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value.split(/\s+/).map(function(word) {
          return word[0];
        }).join('');
      }
    },
    axisY: {
      offset: 20
    },
    height: '250px'
  }, [
    // Options override for media > 400px
    ['screen and (min-width: 400px)', {
      reverseData: false,
      stackBars: true,
      horizontalBars: false,
      seriesBarDistance: 4,
      axisX: {
        labelInterpolationFnc: Chartist.noop
      },
      axisY: {
        offset: 60
      }
    }],
    // Options override for media > 800px
    ['screen and (min-width: 800px)', {
      stackBars: true,
      seriesBarDistance: 35
    }],
    // Options override for media > 1000px
    ['screen and (min-width: 1000px)', {
      reverseData: false,
      horizontalBars: false,
      seriesBarDistance: 35,
      stackBars: true
    }]
  ])
  .on('draw', (data) => {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
}

const load5Charts = async (res) => {
  const res2 = await fetch(JSON2).then(r => r.text()).then(r => Hjson.parse(r))
  const res3 = await fetch(JSON3).then(r => r.text()).then(r => Hjson.parse(r))
  const res4 = await fetch(JSON4).then(r => r.text()).then(r => Hjson.parse(r))
  const res5 = await fetch(JSON5).then(r => r.text()).then(r => Hjson.parse(r))

  buildChartGroups({
    ...getPie3Vals([res, res2, res3, res4, res5]),
    legends: [
      'Retribución fija',
      'Retribución variable',
      'Seguridad social'
    ]
  }, '.ct-chart-5')
}

const init = async () => {
  fetch(JSON1).then(r => r.text()).then(r => {
    const res = Hjson.parse(r)
    console.log('projection_data', res.projection_data)
    const ref = document.getElementById('tables')
    const tables = processTable(res, ref)

    const el = document.createElement('dexign-table')
    ref.appendChild(el)

    initRender({tables}, el)

    // Table2 Pie 1
    const { series, labels } = getPie1Vals(res)
    buildPie({
      series,
      labels,
      legends: [
        'Retribución fija',
        'Retribución variable',
        'Seguridad social'
      ]
    }, '.ct-chart-1')
    // Table2 Pie 1
    buildPie({
      ...getPie2Vals(res),
      legends: [
        'Retribución en Especie',
        'Valoración R. Especie',
        'Ayudas',
        'Manutención por Jornada Partida',
        'Dietas y kilometrajes',
        'Retribución Flexible'
      ]
    }, '.ct-chart-2')

    load5Charts(res)
  })  
}
init()