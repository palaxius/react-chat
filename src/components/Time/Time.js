import React from "react";
import { formatDistanceToNow } from "date-fns";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
  return (
    <>{formatDistanceToNow(date, { locale: ruLocale, addSuffix: true })}</>
  );
};

export default Time;
