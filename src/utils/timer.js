class Timer {
  constructor() {
    this.remaindTime = 0;
  }
  //config state: is used to update the remaind time in app state
  //config timerSeconds: is the total time to count down
  config(config) {
    this.timerSeconds = config.seconds || 0;
    this.setRemindTimeState = config.remindTimeState || function() {};
    this.setStatusState = config.statusState || function() {};
    this.remaindTime = this.timerSeconds;
  }

  start() {
    const t = setInterval(() => {
      console.log(this.timerSeconds);
      //each interval rest 1000ms
      this.remaindTime -= 1000;
      //sets the remaind time to global app state
      this.setRemindTimeState(this.remaindTime);
      if (this.remaindTime < 1) this.stop();
    }, 1000);
    this.currentTimer = t;
  }

  stop() {
    clearInterval(this.currentTimer);
    // this.setStatusState("stop");
  }
}
export const timer = new Timer();

export function parseTimer(time) {
  const total = time;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds
  };
}
