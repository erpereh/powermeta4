/* para el buscador, para poder desplegar los q no esten desplegados "organi.tree.nodeDB.db[2].toggleCollapse()" 
    tendermos q buscar los padres q se pueden desplegar y desplegarlos */

$(document).ready(function(){ 
    setTimeout(function(){ 
        $('body').css("position", "fixed"); 
        $('body').css("max-width", "100%"); 
    }, 1000); 
});

function recarorg(){
    $('body').css("position", ""); 
    $('body').css("max-width", ""); 

    $elecontent.animate({ left: 0, top: 0  }, 0 );

    setZoom(zvini,$elecontent[0]);

    minx = null;
    maxx = null;
    miny = null;
    maxy = null;

    objminx = null;
    objmaxx = null;
    objminy = null;
    objmaxy = null;

    mi_x = 0;
    mi_y = 0;
    clickado = false;

    mascer = null;

    clientX = 0;
    clientY = 0;

    auxtiempoclick = 0;
    numclicks = 0;

    organi.tree.reload();

    $elecontent = $('.chart');
    $loscontent = $('.chart .nodeExample1');

    arr = organi.tree.nodeDB.db;

    $('#inbusq')[0].dataset.cont = -1;

    setTimeout(function(){ 
        $('body').css("position", "fixed"); 
        $('body').css("max-width", "100%"); 
    }, 1000); 
}

var minx = null;
var maxx = null;
var miny = null;
var maxy = null;

var objminx = null;
var objmaxx = null;
var objminy = null;
var objmaxy = null;

var $elecontent = $('.chart');
var $loscontent = $('.chart .nodeExample1');

function buscarminmax(disx,disy){

    objminx = null;
    objmaxx = null;
    objminy = null;
    objmaxy = null;

    $loscontent.each(function(){
        if(this.style['visibility']=='visible'){

            objminx = (objminx==null || $(this).offset().left<objminx.offset().left ) ? $(this) : objminx ;
            objmaxx = (objmaxx==null || $(this).offset().left>objmaxx.offset().left) ? $(this) : objmaxx ;
            objminy = (objminy==null || $(this).offset().top<objminy.offset().top) ? $(this) : objminy ;
            objmaxy = (objmaxy==null || $(this).offset().top>objmaxy.offset().top) ? $(this) : objmaxy ;

        }
    });

    var zoomscale = getscale();

    minx = objminx.offset().left + disx + (objmaxx.width()*zoomscale) + 5;
    maxx = objmaxx.offset().left + disx ;
    miny = objminy.offset().top + disy + (objmaxy.height()*zoomscale) + 5; 
    maxy = objmaxy.offset().top + disy ; 

}

function getscale(){
    return parseFloat($elecontent.css('transform').split(',')[0].split('(')[1]);
}


var mi_x = 0;
var mi_y = 0;
var clickado = false;

function funmousemove(event) { //console.log("funmousemove");
    numclicks = 0;
    auxtiempoclick = 0;
    mi_x = event.pageX;
    mi_y = event.pageY;                
    if(clickado) eventfinal(event);
}

function funtouchmove(event) { //console.log("funTOUCHchmove");
    numclicks = 0;
    auxtiempoclick = 0;
    mi_x = event.originalEvent.touches[0].pageX;
    mi_y = event.originalEvent.touches[0].pageY;                
    if(clickado) eventfinal(event);
}

function funmouseclickmove(event,di) {
    var desplaza = 50;
    mi_x = event.pageX;
    mi_y = event.pageY;    
    if(di=='l'){
        clientX = mi_x + desplaza;
        clientY = mi_y;
    }else if(di=='r'){
        clientX = mi_x - desplaza;
        clientY = mi_y;
    }else if(di=='u'){
        clientX = mi_x;
        clientY = mi_y + desplaza;
    }else if(di=='d'){
        clientX = mi_x;
        clientY = mi_y - desplaza;
    }
    eventfinal(event);
}

$('.flecha-down').on("click", function(event){ funmouseclickmove(event,'d'); });
$('.flecha-right').on("click", function(event){ funmouseclickmove(event,'r'); });
$('.flecha-up').on("click", function(event){ funmouseclickmove(event,'u'); });
$('.flecha-left').on("click", function(event){ funmouseclickmove(event,'l'); });

$('.flecha-inicio').on("click", function(event){ recarorg(); /*location.reload();*/ });

$eleeventmov = $(window);
$eleeventmov.mousemove(funmousemove); 
$eleeventmov.on('touchmove', funtouchmove);


var mascer = null;

function buscarmascer(){
    $loscontent.each(function(){
        if(this.style['visibility']=='visible'){

            var zoomscale = getscale();

            var calc01x = (mascer!=null) ? Math.abs($(this).offset().left+($(this).width()*zoomscale/2)-mi_x) : null;
            var calc02x = (mascer!=null) ? Math.abs(mascer.offset().left+(mascer.width()*zoomscale/2)-mi_x) : null;
            var calc01y = (mascer!=null) ? Math.abs($(this).offset().top+($(this).height()*zoomscale/2)-mi_y) : null;
            var calc02y = (mascer!=null) ? Math.abs(mascer.offset().top+(mascer.height()*zoomscale/2)-mi_y) : null;

            if ( mascer==null || ( calc01x <= calc02x && calc01y <= calc02y ) ) {
                mascer = $(this); 
                //console.log(this);
                //console.log('mascercano new');
            }
        }
    });
}



function setZoom(zoom,el) {
    transformOrigin = [0,0];
    el = el || instance.getContainer();
    var p = ["webkit", "moz", "ms", "o"];
    var s = "scale(" + zoom + ")";
    var oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";
    for (var i = 0; i < p.length; i++) {
        el.style[p[i] + "Transform"] = s;
        el.style[p[i] + "TransformOrigin"] = oString;
    }
    el.style["transform"] = s;
    el.style["transformOrigin"] = oString;                  
}

function blockevdef(event){ 
    event.preventDefault(); 
}


var zvini = 1.0;
var zincdec = 0.1;
var zminv = 0.1;
var zmaxv = 1.5;
var zmargtop = $('#menu').height();

function zoomea(event,tipo) {

    var zoomscale = getscale();

    var fin = (event!=null) ? (event.originalEvent.wheelDelta >= 0) ? (zoomscale + zincdec).toFixed(1) : (zoomscale - zincdec).toFixed(1) : (tipo=='+') ? (zoomscale + zincdec).toFixed(1) : (zoomscale - zincdec).toFixed(1);
    
    if( fin>=zminv && fin<=zmaxv ) {

        buscarmascer();

        var posiantx = mascer.offset().left;
        var posianty = mascer.offset().top;

        setZoom(fin,$elecontent[0]);
        
        if( tipo!='+' && tipo!='-' && mi_x!=0 && mi_y!=0) {
            var desfx = posiantx - (mascer.offset().left);
            var desfy = posianty - (mascer.offset().top) - zmargtop;

            var pad_x = $elecontent.offset().left + desfx;
            var pad_y = $elecontent.offset().top + desfy;                   

            $elecontent.animate({ left: pad_x, top: pad_y  }, 0 );

            pad_x = pad_x-(mascer.offset().left-mi_x)-((mascer.width()*zoomscale/2));
            pad_y = pad_y-(mascer.offset().top-mi_y)-((mascer.height()*zoomscale/2));

            $elecontent.animate({ left: pad_x, top: pad_y  }, 0 ); //console.log(pad_x);
        }

    }
    
}

window.addEventListener('mousewheel', blockevdef, { passive: false });
$(window).bind('mousewheel', zoomea);


setZoom(zvini,$elecontent[0]);










var clientX = 0;
var clientY = 0;
        
function eventinicio( event ){   //console.log("eventinicio");
    if ( event.target.getAttribute("data-quitar") != "false" ){
        var elementos = document.getElementsByClassName("node-dependientes");
        Array.prototype.forEach.call(elementos, function(el) {
            el.style.display = "none";
        });
    }

    clickado = true;    
    clientX = mi_x;
    clientY = mi_y;
}

function eventiniciotouch( event ){  // console.log("eventinicioTOUCH");
    if ( event.target.getAttribute("data-quitar") != "false" ){
        var elementos = document.getElementsByClassName("node-dependientes");
        Array.prototype.forEach.call(elementos, function(el) {
            el.style.display = "none";
        });
    }

    clickado = true; 
    clientX = event.originalEvent.touches[0].pageX;
    clientY = event.originalEvent.touches[0].pageY;  
}

function eventfinal( event ){      

    blockevdef( event );      

    var disx = 0;
    var valleft = "";
    var disy = 0;
    var valtop = "";

    disx = (mi_x - clientX);
    valleft = "+="+disx+"px"; 
    clientX = clientX + disx;
  
    disy = (mi_y - clientY);
    valtop = "+="+disy+"px"; 
    clientY = clientY + disy;               

    buscarminmax(disx,disy);

    if(minx>$(window).width()) {
        valleft = $elecontent.offset().left;
    }
    if(maxx<0) {
        valleft = $elecontent.offset().left;
    }
    if(miny>$(window).height()) {
        valtop = $elecontent.offset().top - zmargtop;
    }
    if(maxy-zmargtop<0) {
        valtop = $elecontent.offset().top - zmargtop;
    }
    
    $elecontent.animate({ left: valleft, top: valtop }, 0 );

} 

var auxtiempoclick = 0;
var numclicks = 0;
function eventinicialclick( event ){ //console.log("inicio");  console.log( event.target.id ); 
    
    if( event.target.id != 'inbusq' ) { 

        $('#inbusq').blur();

        var actrime = new Date().getTime();
        var resta = actrime - auxtiempoclick;

        if(resta>500){
            numclicks = 0;
        }

        if( $(event.target)[0].className.toString().indexOf('gen-fle') != -1 ||
            $(event.target)[0].className.toString().indexOf('collapse-switch') != -1 ||
            $(event.target)[0].className.toString().indexOf('node-img') != -1 ||
            $(event.target)[0].className.toString().indexOf('node-btndependientes') != -1 ){ //collapse-switch //node-img //node-btndependientes
            numclicks = 0;
        }

        auxtiempoclick = new Date().getTime();

     }
}
function eventfinalclick( event ){ //console.log("final"); //console.log( $(event.target)[0].className.toString().indexOf('gen-fle') );// zoomea(null,'+');
    //console.log(event.target.dataset['quitar']);
    if( event.target.id != 'inbusq' ) {
        if( event.target.dataset['quitar'] != 'false' &&
            $(event.target)[0].className.toString().indexOf('gen-fle') == -1 &&
            $(event.target)[0].className.toString().indexOf('collapse-switch') == -1 &&
            $(event.target)[0].className.toString().indexOf('node-img') == -1 &&
            $(event.target)[0].className.toString().indexOf('node-btndependientes') == -1 ){ //collapse-switch //node-img //node-btndependientes
            blockevdef( event );

            if(auxtiempoclick>0){
                var actrime = new Date().getTime();
                var resta = actrime - auxtiempoclick;

                if(resta<500){
                    numclicks++;
                    if(numclicks==2){
                        numclicks = 0;
                        zoomea(null,'+');
                    }
                }else{
                    numclicks = 0;
                    zoomea(null,'-');
                }
            }else{
                numclicks = 0;
            }

        }
    }
    

}


$eleeventmov.on('mousedown', eventinicio );      
$eleeventmov.on('mouseup', function(){ clickado = false; } );
$eleeventmov.on('mousedown', eventinicialclick );
$eleeventmov.on('mouseup', eventfinalclick );
$eleeventmov.on('touchstart',function(e){ 
    $eleeventmov.off('mousedown'); 
    $eleeventmov.off('mousemove'); 
    $eleeventmov.off('mouseup');
    eventiniciotouch(e); 
});      
$eleeventmov.on('touchend', function(){ 
    clickado = false; 
    setTimeout(function(){ 
        $eleeventmov.on('mousedown', eventinicio ); 
        $eleeventmov.on('mousedown', eventinicialclick ); 
        $eleeventmov.on('mouseup', eventfinalclick );
        $eleeventmov.mousemove(funmousemove); 
    }, 1000); 
} );
$eleeventmov.on('touchstart', eventinicialclick );
$eleeventmov.on('touchend', eventfinalclick );

// $(window).on('touchstart',  function(event){ eventinicio(event); } ); // e.originalEvent.touches[0].pageX
// $(window).on('touchend', function(event){ blockevdef( event ); clickado = false; } ); // e.originalEvent.changedTouches[0].pageX











var arr = organi.tree.nodeDB.db;
function buscaennodo(textob,nodo){                
    for (var key in nodo.text) { 
        var re = nodo.text[key].toString().localeCompare(textob.toUpperCase(), 'en', {sensitivity: 'base'});
        if( re == 0 ){
            return nodo;
        } 
    }
} 
function buscaenorg(textob){      
    var auxarr = [];         
    arr.forEach(function(ele,indi){
        var resp = buscaennodo(textob,ele);
        if(resp!=null){
            auxarr.push(resp);
        }
    });
    return auxarr;
}
function centraNodo(nodo){
    var nodeEl = nodo.nodeDOM; //console.log($(nodeEl).offset());
    var difobx = ($(window).width()/2) - ($(nodeEl).offset().left + ($(nodeEl).width()/2) ); 
    var difoby = ($(window).height()/2) - ($(nodeEl).offset().top + ($(nodeEl).height()/2) ); 
    $elecontent.animate({ left: "+="+difobx, top: "+="+difoby }, 200);
}







var numpad = [];
function numpadres(padrecoll){
    if(padrecoll){
        numpad.push(padrecoll);
        numpadres(padrecoll.collapsedParent());                    
    }
}
function despli(ele){
    numpad = [];
    numpadres(ele);
    numpad.forEach(function(ele,indi){
        setTimeout(function(){ ele.toggleCollapse(); }, 1000*indi);
    });
}
function aplicazoombus(divcont){     
    var elemento = (divcont.nodeDOM!=undefined) ? divcont.nodeDOM : divcont ;         
    $(elemento).addClass('zoombus');
    setTimeout(function(){
        if( $(elemento).hasClass('zoombus') ) { 
            $(elemento).removeClass('zoombus'); 
        }
    }, 2000);
}
var divcarga = $('#divcarga');
function procesaBusq(resp){       
    divcarga.show();
    despli(resp.collapsedParent());
    var tiempo = (1000*numpad.length);
    setTimeout(function(){ 
        centraNodo(resp); 
        aplicazoombus(resp);
        divcarga.hide();
    }, tiempo );                          
}

/*var resp = buscaenorg('1348');
procesaBusq(resp[0]);*/
//procesaBusq('1348');

function aplibus(ele,dire){

    var item = ele.dataset.cont;
    if(ele.value!="" && ele.value!=undefined){
        var resp = buscaenorg(ele.value);

        if(dire=="+"){
            item++;
        }else if(dire=="-"){
            item--;
        }

        if(resp[item]==undefined){
            if(item<0){
                item = resp.length-1;
            }else{
                item = 0;
            }
        }
        
        if(resp[item]!=undefined){ procesaBusq(resp[item]); }

        ele.dataset.cont = item;
    }

}


$('#inbusq').on("keyup", function(e){ 
    if(e.keyCode==13){ 
        aplibus(this,"+"); 
    } else{
        this.dataset.cont = -1;
    }
});
$('#inbusqmenos').on("click", function(e){ aplibus($('#inbusq')[0],"-"); });
$('#inbusqmas').on("click", function(e){ aplibus($('#inbusq')[0],"+"); });





$(document).keydown(function(event) {

    //event.preventDefault();

    //console.log(event.target.id);

    if(event.target.id != 'inbusq') {

        event.preventDefault();

        if (event.which == '107') {
            zoomea(null,'+');
        }else if (event.which == '109') {
            zoomea(null,'-');
        }

        if (event.which == '37') {
            //funmouseclickmove(event,'l');
            $('.flecha-left')[0].click();
        }else if (event.which == '39') {
            //funmouseclickmove(event,'r');
            $('.flecha-right')[0].click();
        }else if (event.which == '38') {
            //funmouseclickmove(event,'u');
            $('.flecha-up')[0].click();
        }else if (event.which == '40') {
            //funmouseclickmove(event,'d');
            $('.flecha-down')[0].click();
        }

    }
    
});