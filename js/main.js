document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: '',
        center: '',
        right: ''
      },
    

      dayHeaderContent: function(args) {
        return args.date.toLocaleDateString('en-US', { weekday: 'long' });
      }   
     
    });

    calendar.render();
  });


  $(document).ready(function() {
    $('.dropdown').select2({
      minimumResultsForSearch: Infinity, 
    });

});

var swiper = new Swiper(".slider-block", {
  pagination: {
    el: ".swiper-pagination",
  },
});