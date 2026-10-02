<script type="text/javascript">
var Today = new Date();	
var WeekDays = new Array("domingo", "lunes", "martes", "mi&eacute;rcoles", "jueves", "viernes", "s&aacute;bado");
var Months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var WeekDay = WeekDays[Today.getDay()];			
var Month = Months[Today.getMonth()];
document.write(WeekDay + ", " + Today.getDate() + " de " + Month);
</script>