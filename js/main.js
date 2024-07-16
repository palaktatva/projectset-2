document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: '',
        center: '',
        right:'',
        right: 'dayGridMonth listMonth'
      },
      initialView: 'listMonth' ,
      initialDate: '2023-01-16',
      selectable: true,
      dayMaxEvents: true,
      navLinks: true,
      droppable: true,
      events: [
      
        {
          title: 'Meeting',
          start: '2023-01-12T10:30:00',
          end: '2023-01-12T12:30:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Meeting',
          start: '2023-01-12',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          groupId: 'availableForMeeting',
          start: '2023-01-12T10:00:00',
          end: '2023-01-12T16:00:00',
          display: 'background'
        },
        {
          title: 'Lunch',
          constraint:'demo',
          start: '2023-01-12',
          color: 'red'
         
        },
        {
          groupId: 'demo',
          display: 'background'
        },
        {
          title: 'Meeting',
          start: '2023-01-12T14:30:00',
          constraint: 'availableForMeeting'
          
        },
        {
          title: 'Happy Hour',
          start: '2023-01-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2023-01-12T20:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2023-01-28'
        }
      ],
    

      dayHeaderContent: function(args) {
        return args.date.toLocaleDateString('en-US', { weekday: 'long' });
      }   
     
    });

    calendar.render();

    var dropdown = document.getElementById("month-dropdown")
    console.log(dropdown);
    dropdown.addEventListener('change', function() {
      const selectedMonth = monthDropdown.value;
      console.log(selectedMonth);
    });
  });


  $(document).ready(function() {
    $('.dropdown').select2({
      minimumResultsForSearch: Infinity, 
      placeholder: function(){
        $(this).data('data-placeholder');
    } 
    });
  });

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,


  navigation: {
    nextEl: '.prev-arrow',
    prevEl: '.next-arrow',
  },
 
});