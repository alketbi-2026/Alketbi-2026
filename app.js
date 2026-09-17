
const rpmEl = document.getElementById('rpm');
const speedEl = document.getElementById('speed');

let rpm = 1750, speed = 70;
setInterval(() => {
  rpm += Math.round((Math.random() - 0.5) * 80);
  speed += Math.round((Math.random() - 0.5) * 2);
  rpm = Math.max(700, Math.min(4500, rpm));
  speed = Math.max(0, Math.min(140, speed));
  rpmEl.textContent = rpm;
  speedEl.textContent = speed;
}, 1200);

document.getElementById('resetOil').addEventListener('click', () => {
  alert('تم تسجيل تغيير الزيت — نموذج تجريبي');
});
document.getElementById('resetTires').addEventListener('click', () => {
  alert('تم تسجيل فحص الكفرات — نموذج تجريبي');
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
