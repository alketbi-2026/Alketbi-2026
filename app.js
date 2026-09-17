
const DESIGN_W = 1536, DESIGN_H = 864;
const stage = document.getElementById('stage');
const viewport = document.getElementById('viewport');
const toast = document.getElementById('toast');

function fit(){
  const w = window.innerWidth, h = window.innerHeight;
  const scale = Math.min(w / DESIGN_W, h / DESIGN_H);
  stage.style.transform = `scale(${scale})`;
  viewport.style.width = w + 'px';
  viewport.style.height = h + 'px';
}
addEventListener('resize', fit);
addEventListener('orientationchange', () => setTimeout(fit, 150));
fit();

let toastTimer;
function showToast(msg){
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 1800);
}

document.querySelectorAll('.hotspot[data-msg]').forEach(btn=>{
  btn.addEventListener('click', ()=>showToast(btn.dataset.msg));
});

let batteryLimit = +(localStorage.getItem('alketbiBatteryLimit') || 11.0);
const batteryOverlay = document.getElementById('batteryOverlay');
function renderBattery(){ batteryOverlay.textContent = batteryLimit.toFixed(1) + ' V'; }
renderBattery();

document.getElementById('minus').addEventListener('click', ()=>{
  batteryLimit = Math.max(8.0, +(batteryLimit - 0.1).toFixed(1));
  localStorage.setItem('alketbiBatteryLimit', batteryLimit);
  renderBattery(); showToast('تم ضبط إنذار البطارية: ' + batteryLimit.toFixed(1) + ' V');
});
document.getElementById('plus').addEventListener('click', ()=>{
  batteryLimit = Math.min(15.0, +(batteryLimit + 0.1).toFixed(1));
  localStorage.setItem('alketbiBatteryLimit', batteryLimit);
  renderBattery(); showToast('تم ضبط إنذار البطارية: ' + batteryLimit.toFixed(1) + ' V');
});
