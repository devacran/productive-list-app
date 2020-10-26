class Timer {
  constructor() {
    this.remaindTime = 0;
  }
  //setTimerState: is used to update the remaind time in app state
  //timerSeconds: is the total time to count down
  config(config) {
    this.timerSeconds = config.seconds || 0;
    this.setRemindTimeState = config.setRemindTimeState || function() {};
    this.setTimerState = config.setTimerState || function() {};
    this.timerState = config.timerState;
    this.remaindTime = this.timerSeconds;
  }

  start() {
    const t = setInterval(() => {
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
    this.timerState === "stop" && this.setTimerState("stop");
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
