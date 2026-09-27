import { useEffect, useState } from "react";

const fmt = () =>
  new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });

export const useIstClock = () => {
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};
