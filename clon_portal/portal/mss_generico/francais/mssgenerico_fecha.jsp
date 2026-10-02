<script type="text/javascript">
var Today = new Date();
var WeekDays = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
var Months = new Array("janvier", "f&eacute;vrier", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "septembre", "octobre", "novembre", "d&eacute;cembre");
var WeekDay = WeekDays[Today.getDay()];
var Month = Months[Today.getMonth()];
document.write(WeekDay + " " + Today.getDate() + " " + Month);
</script>
