import { templates,select } from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';
class Booking {
  constructor(element){
    const thisBooking = this; 
    thisBooking.render(element);
    thisBooking.initWidgets();
  } 
  render(element){
    const thisBooking = this;
    /*generate HTML based on template*/
    const generatedHTML = templates.bookingWidget(element);
    /*create an empty object*/
    thisBooking.dom = {};
    /*add wrapper to the object*/
    thisBooking.dom.wrapper = element;
    /*change innerHTML to generatedHTML*/ 
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    
    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = element.querySelector(select.select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = element.querySelector(select.widgets.hourPicker.wrapper);

  }
  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated',function(){

    });
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated',function(){
    });
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.dom.datePicker.addEventListener('updated', function(){

    });
    thisBooking.dom.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    thisBooking.dom.hourPicker.addEventListener('updated',function(){

    });
  }
}
export default Booking;