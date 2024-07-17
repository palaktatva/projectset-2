document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: '',
        center: '',
        right:'',
      },

      // initialDate: '2023-01-16',
      // initialView: 'listMonth',
      selectable: true,
      dayMaxEvents: true,
      navLinks: true,
      droppable: true,
      events: [
      
        {
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-16',
          end: '2024-07-16',
          constraint: 'background-color', // defined below
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          color: '#b656ff1a',
          className: 'purple'
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-16',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below         
          color: '#ff62291a',
          className: 'orange'
          
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-16',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below
          color: '#ffb8611a',
          className: 'yellow'
          
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-16',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below
          color: '#ffb8611a',
          className: 'yellow'
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-16',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below
           color: '#0184fe1a',
          className: 'blue'
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-25',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below
          color: '#0184fe1a',
          className: 'blue'
        },
        {
         
          title: 'Anveshan 2023: Basic Science',
          start: '2024-07-31',
          end: '2024-07-16',
          description: 'We invite you to submit your groundbreaking research ideas in the field of Basic Science. Your innovative idea may encompass the theory or practice of Mathematics, Physics, Chemistry and Biology, and other related areas. ',
          constraint: 'background-color', // defined below
          color: '#ffb8611a',
          className: 'yellow'
        },
        {
          groupId: 'background-color',
          display: 'background'
        },
      ],   

      dayHeaderContent: function(args) {
        return args.date.toLocaleDateString('en-US', { weekday: 'long' });
      } , 
      eventDidMount: function(info) {
        // Customize event rendering here
        var eventEl = info.el;
        var description = info.event.extendedProps.description;

        if (description) {
          var descriptionEl = document.createElement('div');
          descriptionEl.className = 'event-description';
          descriptionEl.innerText = description;
          eventEl.appendChild(descriptionEl);
        }
       
      }
     
    });

    calendar.render();
    var listmonth =  document.querySelector('.event-notes-inner .list-menu');
    var daygridmonth = document.querySelector('.event-notes-inner .calendar-menu');
    listmonth.addEventListener('click' , function(){
       var currentview = calendar.view.type;
       if(currentview === 'dayGridMonth'){
          calendar.changeView('listMonth');
          listmonth.classList.add('active');
          daygridmonth.classList.remove('active');
       }
    });
    daygridmonth.addEventListener('click' , function(){
      var currentview = calendar.view.type;
      if(currentview === 'listMonth'){
         calendar.changeView('dayGridMonth');
         daygridmonth.classList.add('active');
         listmonth.classList.remove('active');
      }
   });
  });


  $(document).ready(function() {
    $('.dropdown , .monthdropdown').select2({
      minimumResultsForSearch: Infinity, 
      placeholder: function(){
        $(this).data('data-placeholder');
       }    
    });
    $('.monthdropdown').on('change', function(e) {      
      var selectedValue = e.target.value;
      var month = selectedValue;
      var year = '2023';
      var newDate = new Date(year, month - 1, 1); // JavaScript months are 0-based, so subtract 1 from the month value
      // alert(newDate);
      // $('#calendar').fullCalendar('gotoDate', newDate);
      // $('#calendar').fullCalendar('changeView', 'month', newDate);
      calendar.gotoDate( newDate);
    // calendar.gotoDate(newDate);
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