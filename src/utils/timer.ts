import { TimerStatusTypes } from "../types";

type setRemindTimeState = (remindTime: number) => void;
type setTimerState = (state: string) => void;
class Timer {
  remaindTime: number;
  timerSeconds: number;
  setRemindTimeState: setRemindTimeState;
  setTimerState: setTimerState;
  timerState: TimerStatusTypes;
  currentTimer: ReturnType<typeof setTimeout>;
  constructor() {
    this.remaindTime = 0;
  }
  //setTimerState: is used to update the remaind time in app state
  //timerSeconds: is the total time to count down
  config(config: {
    seconds: number;
    setRemindTimeState: setRemindTimeState;
    setTimerState: setTimerState;
    timerState: TimerStatusTypes;
  }) {
    this.timerSeconds = config.seconds || 0;
    this.setRemindTimeState = config.setRemindTimeState || function() {};
    this.setTimerState = config.setTimerState || function() {};
    this.timerState = config.timerState;
    this.remaindTime = this.timerSeconds;
  }

  start() {
    const t = setInterval(() => {
      //each interval rest 1 second
      this.remaindTime -= 1;
      //sets the remaind time to global app state
      this.setRemindTimeState(this.remaindTime);
      if (this.remaindTime < 1) this.stop();
    }, 1000);
    this.currentTimer = t;
  }

  stop() {
    clearInterval(this.currentTimer);
    this.timerState !== "pause" && this.setTimerState("stop");
  }
}
export const timer = new Timer(); //To have a singleton and returns a unique instance

export function parseTimer(sec: number) {
  const total = sec;
  const seconds = Math.floor(sec % 60);
  const minutes = Math.floor((total / 60) % 60);
  const hours = Math.floor((total / (60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds
  };
}
