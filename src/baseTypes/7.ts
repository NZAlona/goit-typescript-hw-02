/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfTheWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: DaysOfTheWeek): boolean {
  if (day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday) {
    return true;
  }
  return false;
}
