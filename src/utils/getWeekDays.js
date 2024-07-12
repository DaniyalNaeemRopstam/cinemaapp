export default function getWeekDates(locale = 'default') {
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'short' };
    const weekDates = [];
  
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      const formattedDate = date.toLocaleDateString(locale, options);
      const [month, day] = formattedDate.split(' ');
      weekDates.push({id: i, title:`${day} ${month}`});
    }
  
    return weekDates;
  }