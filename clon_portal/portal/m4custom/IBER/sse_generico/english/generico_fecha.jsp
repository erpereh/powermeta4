<script type="text/javascript">
var Today = new Date();	
var WeekDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var Months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var WeekDay = WeekDays[Today.getDay()];			
var Month = Months[Today.getMonth()];
document.write(WeekDay + ", " + Today.getDate() + " " + Month);
</script>
