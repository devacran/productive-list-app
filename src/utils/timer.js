class Timer {
  constructor() {
    this.remaindTime = 0;
  }
  //config state: is used to update the remaind time in app state
  //config timerSeconds: is the total time to count down
  config(config) {
    this.timerSeconds = config.seconds || 0;
    this.setState = config.state || function() {};
    this.remaindTime = this.timerSeconds;
  }

  start() {
    const t = setInterval(() => {
      console.log(this.timerSeconds);
      this.remaindTime--;
      //sets the remaind time to global app state
      this.setState(this.remaindTime);
    }, 1000);
    this.currentTimer = t;
  }

  stop() {
    clearInterval(this.currentTimer);
  }
}
export const timer = new Timer();

export function taimer(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
