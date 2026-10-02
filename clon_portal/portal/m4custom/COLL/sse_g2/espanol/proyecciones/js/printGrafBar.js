async function printGrafBar(dataact,anio){

  var lim = 5;
  var aniolim = 2018;
  var data = [dataact];

  for(var i=anio-1; i>=aniolim; i--){

    var urlJSON = '../proy_ret_json.jsp?ANIO='+i;
    var auxJSON = await fetch(urlJSON).then(r => r.json()).then(r => r ? r : null).catch(_ => null);
    if(typeof auxJSON !== 'undefined' && auxJSON != '' && auxJSON != null){
      data.push(auxJSON);
    }   

    if(data.length==lim) break;

  }

  /*var data = dataact;

  var i = (anio>=2022) ? anio : 2022;
  if(dataact.projection_data.year!=i){
    var urlJSON = '../proy_ret_json.jsp?ANIO='+i;
    var auxJSON = await fetch(urlJSON).then(r => r.json()).then(r => r ? r : null).catch(_ => null);
    if(typeof auxJSON !== 'undefined' && auxJSON != '' && auxJSON != null) data = auxJSON;
  }*/

  console.log(data);
  data.reverse();
  var varsetup00 = getSetupBar00(data,anio);
  var varcondif00 = getConfigBar(varsetup00);
  loadGrafBar('graf03',varcondif00);

}

function getindexfom(arr,seh){
  var ind = -1;
  arr.forEach( function(currentValue, index, arr){ 
      if(currentValue.concept == seh) ind = index;
  } );
  return ind;
}

function getSetupBar00(datos,anio){

  var labels = [];
  var dataset00 = [];
  var dataset01 = [];
  //var dataset02 = [];

//  if(anio>=2022){
//
//    labels.push('Año '+(anio-4));
//    labels.push('Año '+(anio-3));
//    labels.push('Año '+(anio-2));
//    labels.push('Año '+(anio-1));
//    labels.push('Año '+anio);
    //
//    /*dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[6] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[4] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[2] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[0] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[9] || {}).tot || 0 );*/
//
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 4 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 3 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 2 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 1 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual año actual')] || {}).tot || 0 );
    //
//    /*dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[7] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[5] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[3] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[1] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[8] || {}).tot || 0 );*/
//
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 4 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 3 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 2 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 1 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable año actual')] || {}).tot || 0 );
//
//  }else if(anio==2021){
//
//    labels.push('Año '+(anio-3));
//    labels.push('Año '+(anio-2));
//    labels.push('Año '+(anio-1));
//    labels.push('Año '+anio);
    //
//    /*dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[6] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[4] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[2] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[0] || {}).tot || 0 );*/
//
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 4 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 3 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 2 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 1 año atrás')] || {}).tot || 0 );
    //
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[7] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[5] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[3] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[1] || {}).tot || 0 );
//
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 4 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 3 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 2 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 1 años atrás')] || {}).tot || 0 );
//
//  }else if(anio==2020){
//
//    labels.push('Año '+(anio-2));
//    labels.push('Año '+(anio-1));
//    labels.push('Año '+anio);
    //
//    /*dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[6] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[4] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[2] || {}).tot || 0 );*/
//
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 4 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 3 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 2 año atrás')] || {}).tot || 0 );
    //
//    /*dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[7] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[5] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[3] || {}).tot || 0 );*/
//
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 4 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 3 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 2 años atrás')] || {}).tot || 0 );
//
//  }else if(anio==2019){
//
//    labels.push('Año '+(anio-1));
//    labels.push('Año '+anio);
    //
//    /*dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[6] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[4] || {}).tot || 0 );*/
//
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 4 año atrás')] || {}).tot || 0 );
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 3 año atrás')] || {}).tot || 0 );
    //
//    /*dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[7] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[5] || {}).tot || 0 );*/
//
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 4 años atrás')] || {}).tot || 0 );
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 3 años atrás')] || {}).tot || 0 );
//
//  }else if(anio==2018){
//
//    labels.push('Año '+anio);
    //
//    /*dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[6] || {}).tot || 0 );*/
//
//    dataset00.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib anual 4 año atrás')] || {}).tot || 0 );
    //
//    /*dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[7] || {}).tot || 0 );*/
//
//    dataset01.push( (((datos.direct_remuneration.datos_quinquenal || {}).data || {})[getindexfom(datos.direct_remuneration.datos_quinquenal.data,'Retrib variable 4 años atrás')] || {}).tot || 0 );
//
//  }
  
  
  $.each(datos, function( key, value ) {
    labels.push('Año '+value.projection_data.year);

    /*var auxdataset00 = ((value.direct_remuneration.fixed_remuneration || {}).tot || {}).tot_pays || 0;
    dataset00.push(auxdataset00);
    var auxdataset01 = ((value.direct_remuneration.variable_remuneration || {}).tot || {}).tot_pays || 0;
    dataset01.push(auxdataset01);
    var auxdataset02 = (((value.direct_remuneration.seg_soc || {}).data || {})[0] || {}).tot_pays || 0;
    dataset02.push(auxdataset02);*/

    var pos1 = getindexfom(value.direct_remuneration.datos_quinquenal.data,'Retrib anual año actual')
    var pos2 = getindexfom(value.direct_remuneration.datos_quinquenal.data,'Retrib variable año actual')
    if(value.projection_data.year<new Date().getFullYear()){
      var auxdataset00 = (((value.direct_remuneration.datos_quinquenal || {}).data || {})[pos1] || {}).tot || 0;
      dataset00.push(auxdataset00);
      var auxdataset01 = (((value.direct_remuneration.datos_quinquenal || {}).data || {})[pos2] || {}).tot || 0;
      dataset01.push(auxdataset01);
    }else{
      var auxdataset00 = (((value.direct_remuneration.datos_quinquenal || {}).data || {})[pos1] || {}).pay || 0;
      dataset00.push(auxdataset00);
      var auxdataset01 = (((value.direct_remuneration.datos_quinquenal || {}).data || {})[pos2] || {}).pay || 0;
      dataset01.push(auxdataset01);
    }

  });




  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Retribución fija',
        data: dataset00,
        backgroundColor: 'rgb(222, 0, 30)',
        barPercentage: 0.3
      },
      {
        label: 'Retribución variable',
        data: dataset01,
        backgroundColor: 'rgb(54, 162, 235)',
        barPercentage: 0.3
      },
      /*{
        label: 'Seguridad social',
        data: dataset02,
        backgroundColor: 'rgb(255, 205, 86)',
        barPercentage: 0.3
      },*/
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
                    //var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
                    var pay = context.formattedValue+' €';
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
          stacked: true,
          ticks: {
            callback: function(value, index, values) {
                //return value + ' €';
                return formatter.format(value)
            }
          }
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
  graf.setDatasetVisibility(2, false);
  graf.update();
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