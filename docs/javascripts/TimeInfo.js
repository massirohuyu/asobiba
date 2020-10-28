// TimeInfo定義

class TimeInfo {
  constructor (date) {
    this.date = date ? date : new Date("2000-01-01T00:00:00");
  }

  get display () {
    return this.date ? this.date.toLocaleTimeString() : null;
  }
  
  get hours () {
    return this.date ? this.date.getHours() : null;
  }

  get seconds () {
    return this.date ? this.date.getSeconds() : null;
  }
  
  get minutes () {
    return this.date ? this.date.getMinutes() : null;
  }
  set minutes (minutes) {
    this.date.setMinutes(minutes)
  }
  
  get milliseconds () {
    return this.date ? this.date.getMilliseconds() : null;
  }

  add (date) {
    this.date.setTime(this.date.getTime() + date.getTime())
  }

  subtract (date) {
    this.date.setTime(this.date.getTime() - date.getTime())
  }

  getDiff (date) {
    const diff = date.getTime() - this.date.getTime();
    const diffDate = new Date();
    diffDate.setTime(diff);

    return diffDate;
  }
}
