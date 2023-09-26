import React, { useState, useEffect } from 'react';

function getNextFridayAndSaturday() {
  const today = new Date();
  const todayDay = today.getDay();
  const daysUntilFriday = (5 - todayDay + 7) % 7 || 7;

  const friday = new Date(today);
  friday.setDate(today.getDate() + daysUntilFriday);

  const saturday = new Date(friday);
  saturday.setDate(friday.getDate() + 1);

  return { friday, saturday };
}

export default function WeekendDates() {
  const [friday, setFriday] = useState(null);
  const [saturday, setSaturday] = useState(null);

  useEffect(() => {
    const nextDays = getNextFridayAndSaturday();
    setFriday(nextDays.friday);
    setSaturday(nextDays.saturday);
  }, []);

  if (!friday || !saturday) return null;

  return (
    <strong>Weekend of {friday.toLocaleDateString()} & {saturday.toLocaleDateString()}</strong>
  );
}
