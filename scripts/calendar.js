today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = domLibrary.getElement("year");
selectMonth = domLibrary.getElement("month");

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

createCalendar(currentMonth, currentYear);

function createCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();

    table = domLibrary.getElement("calendar-body");
    table.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = domLibrary.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = domLibrary.createElement("td");
                cellText = domLibrary.createTextNode("");
                row.append(cellText, cell);

            } 
            else if (date > daysInMonth(month, year)) 
            {
                break;
            } 
            else 
            {
                cell = domLibrary.createElement("td");
                cellText = domLibrary.createTextNodeForDates(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        table.appendChild(row); 
    }
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function nextMonth() {
    if(currentMonth == 11) {
        currentYear = currentYear+1;
    }
    else {
        currentYear = currentYear;
    }
    currentMonth = (currentMonth + 1) % 12;
    createCalendar(currentMonth, currentYear);
}

function previousMonth() {
    currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
    if(currentMonth == 0) {
        currentMonth = 11;
    }
    else {
        currentMonth = currentMonth - 1;
    }
    createCalendar(currentMonth, currentYear);
}

function jumpToTime() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    createCalendar(currentMonth, currentYear);
}