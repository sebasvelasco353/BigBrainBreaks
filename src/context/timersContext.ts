import { TIME } from "@/utils/constants";
import { createContext } from "react";

interface timer {
  title: string;
  time: number;
}

interface timerContextInterface {
  finishedTimers: timer[];
  timerQueue: timer[];
  shortTimer: number;
  longTimer: number;
  breakTimer: number;
}

export const timerContext = createContext<timerContextInterface | null>({
  finishedTimers: [],
  timerQueue: [],
  shortTimer: 15 * TIME.MINUTE,
  longTimer: 30 * TIME.MINUTE,
  breakTimer: 5 * TIME.MINUTE,
})
