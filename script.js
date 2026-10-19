// May 28, 2028 at 00:00 in Europe/Vilnius (UTC+03:00 in May).
const targetDate = new Date('2028-05-28T00:00:00+03:00').getTime();
const ids = ['days', 'hours', 'minutes', 'seconds'];
const elements = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
const status = document.getElementById('status');

function updateCountdown() {
  const remaining = Math.max(0, targetDate - Date.now());
  const secondsTotal = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(secondsTotal / 86400),
    hours: Math.floor((secondsTotal % 86400) / 3600),
    minutes: Math.floor((secondsTotal % 3600) / 60),
    seconds: secondsTotal % 60,
  };

  for (const id of ids) {
    elements[id].textContent = id === 'days' ? String(values[id]) : String(values[id]).padStart(2, '0');
  }
  if (remaining === 0) {
    status.textContent = 'The day has arrived! Jagoda, your wedding to Pavel is officially scheduled! 💍😂';
    clearInterval(ticker);
  }
}

const ticker = setInterval(updateCountdown, 1000);
updateCountdown();
