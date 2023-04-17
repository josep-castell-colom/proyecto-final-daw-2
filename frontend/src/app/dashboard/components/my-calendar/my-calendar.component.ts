import { Component } from '@angular/core';

import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'my-calendar',
  styleUrls: ['my-calendar.component.scss'],
  template: ` <div>
    <div class="pane">
      <div class="calendar">
        <full-calendar [options]="calendarOptions"></full-calendar>
        <footer>
          Powered by <a href="https://fullcalendar.io/">Full Calendar</a>
        </footer>
      </div>
    </div>
  </div>`,
})
export class MyCalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
    },
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: [{ title: 'Meeting', start: new Date() }],
    // locale: esLocale,
  };

  handleDateSelect(selectInfo: DateSelectArg) {
    console.log(selectInfo);
  }

  handleEventClick(clickInfo: EventClickArg) {
    clickInfo.el.style.backgroundColor = '#f00';
  }
}
