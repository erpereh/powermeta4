async function printGrafBar(dataact,anio){

  var lim = 5;
  var aniolim = 2015;
  var data = [dataact];

  for(var i=anio-1; i>=aniolim; i--){

    var urlJSON = '../proy_ret_json.jsp?ANIO='+i;
    var auxJSON = await fetch(urlJSON).then(r => r.json()).then(r => r ? r : null).catch(_ => null);
    if(typeof auxJSON !== 'undefined' && auxJSON != '' && auxJSON != null){
      data.push(auxJSON);
    }
    if(data.length==lim) break;

  }

  console.log(data);

  var varsetup00 = getSetupBar00(data);
  var varcondif00 = getConfigBar(varsetup00);
  loadGrafBar('graf02',varcondif00);

}

function getSetupBar00(datos){

  var labels = [];
  var dataset00 = [];
  var dataset01 = [];
  var dataset02 = [];
  $.each(datos, function( key, value ) {
    labels.push(value.projection_data.year);

    var auxdataset00 = ((value.direct_remuneration.fixed_remuneration || {}).tot || {}).tot_pays || 0;
    dataset00.push(auxdataset00);
    var auxdataset01 = ((value.direct_remuneration.variable_remuneration || {}).tot || {}).tot_pays || 0;
    dataset01.push(auxdataset01);
    var auxdataset02 = (((value.direct_remuneration.seg_soc || {}).data || {})[0] || {}).tot_pays || 0;
    dataset02.push(auxdataset02);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Retribución fija',
        data: dataset00,
        backgroundColor: 'rgb(255, 99, 132)',
        barPercentage: 0.3
      },
      {
        label: 'Retribución variable',
        data: dataset01,
        backgroundColor: 'rgb(54, 162, 235)',
        barPercentage: 0.3
      },
      {
        label: 'Seguridad social',
        data: dataset02,
        backgroundColor: 'rgb(255, 205, 86)',
        barPercentage: 0.3
      },
    ]
  };

  return data;

}

function getConfigBar(datos){
  const config = {
    type: 'bar',
    data: datos,
    options: {
      plugins: {
        title: {
          display: false,
          text: ''
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
                    var pay = context.formattedValue+'€';
                    var ret = context.dataset.label + ' : ' + pay;
                    return ret;
                }
            }
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };
  return config;
}

function loadGrafBar(idtag,varcondif){ 
  var graf = new Chart(
      document.getElementById(idtag),
      varcondif
  );
}


/*const labels = ['2021','2020','2019','2018','2017'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Retribución fija',
      data: [20,30,40,50,60],
      backgroundColor: 'rgb(255, 99, 132)',
      barPercentage: 0.3
    },
    {
      label: 'Retribución variable',
      data: [20,30,40,50,60],
      backgroundColor: 'rgb(54, 162, 235)',
      barPercentage: 0.3
    },
    {
      label: 'Seguridad social',
      data: [20,30,40,50,60],
      backgroundColor: 'rgb(255, 205, 86)',
      barPercentage: 0.3
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: false,
        text: ''
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};

var graff = new Chart(
    document.getElementById('graf02'),
    config
);*/