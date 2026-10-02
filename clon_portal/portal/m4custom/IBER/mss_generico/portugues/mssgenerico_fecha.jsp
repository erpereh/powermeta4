<script type="text/javascript">
var Today = new Date();
var WeekDays = new Array("domingo", "segunda-feira", "ter&ccedil;a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s&aacute;bado");
var Months = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
var WeekDay = WeekDays[Today.getDay()];
var Month = Months[Today.getMonth()];
document.write(WeekDay + ", " + Today.getDate() + " de " + Month);
</script>
