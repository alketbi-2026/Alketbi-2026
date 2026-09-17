
const DESIGN_W = 1536, DESIGN_H = 864;
const stage = document.getElementById('stage');
const toast = document.getElementById('toast');

function fitStage(){
  const s = Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H);
  const scaledW = DESIGN_W * s;
  const scaledH = DESIGN_H * s;
  stage.style.transform = `scale(${s})`;
  stage.style.marginLeft = Math.max(0, (window.innerWidth - scaledW)/2) + 'px';
  stage.style.marginTop = Math.max(0, (window.innerHeight - scaledH)/2) + 'px';
}
window.addEventListener('resize', fitStage);
window.addEventListener('orientationchange', ()=>setTimeout(fitStage,150));
fitStage();

let toastTimer;
function showToast(msg){
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(()=>toast.classList.remove('show'),1800);
}
document.querySelectorAll('.hotspot[data-msg]').forEach(btn=>{
  btn.addEventListener('click',()=>showToast(btn.dataset.msg));
});

/* Demo live readings — later these values will come from the real OBD-II device */
let rpm = 1750;
let speed = 70;
const rpmEl = document.getElementById('rpmValue');
const speedEl = document.getElementById('speedValue');

setInterval(()=>{
  rpm += Math.round((Math.random() - .5) * 90);
  rpm = Math.max(700, Math.min(4200, rpm));
  speed += Math.round((Math.random() - .5) * 3);
  speed = Math.max(0, Math.min(140, speed));
  rpmEl.textContent = rpm;
  speedEl.textContent = speed;
}, 1200);

/* Battery alert threshold */
let batteryLimit = +(localStorage.getItem('alketbiBatteryLimit') || 11.0);
const batteryLimitEl = document.getElementById('batteryLimit');
function renderBattery(){
  batteryLimitEl.textContent = batteryLimit.toFixed(1) + ' V';
}
renderBattery();

document.getElementById('batteryMinus').addEventListener('click',()=>{
  batteryLimit = Math.max(8.0, +(batteryLimit - .1).toFixed(1));
  localStorage.setItem('alketbiBatteryLimit', batteryLimit);
  renderBattery();
  showToast('حد البطارية: ' + batteryLimit.toFixed(1) + ' V');
});
document.getElementById('batteryPlus').addEventListener('click',()=>{
  batteryLimit = Math.min(15.0, +(batteryLimit + .1).toFixed(1));
  localStorage.setItem('alketbiBatteryLimit', batteryLimit);
  renderBattery();
  showToast('حد البطارية: ' + batteryLimit.toFixed(1) + ' V');
});
