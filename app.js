const pages = {
  connect: {
    title: 'اتصال OBD-II',
    subtitle: 'إعداد الاتصال بقطعة الفحص وربطها لاحقًا بالسيارة',
    value: 'Ready',
    status: 'الواجهة جاهزة لإضافة الاتصال الحقيقي عند وصول القطعة',
    rows: [
      ['نوع الاتصال', 'Bluetooth / BLE'],
      ['الحالة الحالية', 'Demo Mode'],
      ['السيارات المتوقعة', 'Nissan / Lexus / Toyota'],
      ['المطلوب لاحقًا', 'جهاز OBD-II متوافق']
    ],
    extras: [
      ['قطعة مقترحة', 'Vgate iCar Pro BLE'],
      ['المنفذ', 'OBD-II'],
      ['الخطوة التالية', 'تركيب القطعة ثم الربط']
    ]
  },
  battery: {
    title: 'البطارية',
    subtitle: 'عرض جهد البطارية وحالة الشحن',
    value: '12.6 V',
    status: 'الحالة: جيدة',
    rows: [
      ['جهد البطارية', '12.6 V'],
      ['حالة الشحن', '85%'],
      ['حرارة البطارية', '32 °C'],
      ['ملاحظة', 'القراءات تجريبية حالياً']
    ],
    extras: [
      ['تنبيه منخفض', '11.9 V'],
      ['تنبيه مرتفع', '14.8 V'],
      ['صحة البطارية', 'Good']
    ]
  },
  alternator: {
    title: 'الدينمو',
    subtitle: 'مراقبة جهد وتيار الشحن',
    value: '14.2 V',
    status: 'خارج الشحن طبيعي',
    rows: [
      ['جهد الشحن', '14.2 V'],
      ['تيار الشحن', '35 A'],
      ['الحالة', 'جيد'],
      ['حرارة تقريبية', '—']
    ],
    extras: [
      ['حد طبيعي', '13.7 - 14.7 V'],
      ['تنبيه', 'منخفض أو مرتفع'],
      ['نوع القراءة', 'Demo']
    ]
  },
  temp: {
    title: 'حرارة المحرك',
    subtitle: 'سائل التبريد ومؤشر التشغيل',
    value: '92 °C',
    status: 'ضمن النطاق الطبيعي',
    rows: [
      ['سائل التبريد', '92 °C'],
      ['المروحة', 'مفعلة'],
      ['الحالة', 'جيدة'],
      ['نطاق طبيعي تقريبي', '85 - 105 °C']
    ],
    extras: [
      ['تنبيه', 'أعلى من 110 °C'],
      ['إجراء', 'افحص مستوى الماء والمراوح'],
      ['حالة القيادة', 'عادية']
    ]
  },
  gearbox: {
    title: 'حرارة القير',
    subtitle: 'مراقبة تقريبية لحرارة ناقل الحركة',
    value: '84 °C',
    status: 'مناسبة للقيادة الحالية',
    rows: [
      ['حرارة القير', '84 °C'],
      ['الحالة', 'جيدة'],
      ['مستوى التنبيه', '110 °C'],
      ['ملاحظة', 'توفر القراءة يعتمد على السيارة']
    ],
    extras: [
      ['قيادة ثقيلة', 'قد ترتفع الحرارة'],
      ['فحص إضافي', 'زيت القير'],
      ['نوع البيانات', 'Demo']
    ]
  },
  fuel: {
    title: 'نظام الوقود',
    subtitle: 'عرض بيانات تقريبية عن حالة الوقود',
    value: 'Stable',
    status: 'Fuel Trim ضمن المستوى الطبيعي',
    rows: [
      ['مستوى الوقود', '68%'],
      ['Short Fuel Trim', '+2.3%'],
      ['Long Fuel Trim', '+1.1%'],
      ['الحالة', 'مستقرة']
    ],
    extras: [
      ['التحكم المباشر', 'غير مفعل'],
      ['الوظيفة الحالية', 'مراقبة فقط'],
      ['نصيحة', 'افحص إذا زاد الاستهلاك']
    ]
  },
  obd: {
    title: 'أعطال OBD-II',
    subtitle: 'قراءة أكواد الأعطال الأساسية',
    value: '2',
    status: 'أكواد تجريبية للواجهة',
    rows: [
      ['P0420', 'Catalyst Efficiency'],
      ['P0133', 'O2 Sensor Slow Response'],
      ['نوع الفحص', 'Engine Codes'],
      ['تنبيه', 'لا تمسح الكود قبل التشخيص']
    ],
    extras: [
      ['فحص سريع', 'جاهز'],
      ['شرح الأكواد', 'مدعوم'],
      ['تقرير الأعطال', 'جاهز']
    ]
  },
  live: {
    title: 'البيانات الحية',
    subtitle: 'عرض مباشر لأهم القيم أثناء التشغيل',
    value: '750 RPM',
    status: 'Live Demo Data',
    rows: [
      ['RPM', '750'],
      ['سرعة السيارة', '0 km/h'],
      ['حرارة سائل التبريد', '92 °C'],
      ['MAP', '35 kPa'],
      ['TPS', '12%'],
      ['جهد النظام', '14.2 V']
    ],
    extras: [
      ['تحديث الشاشة', 'مباشر'],
      ['حالة المحرك', 'Idle'],
      ['نوع العرض', 'تجريبي']
    ]
  },
  reports: {
    title: 'التقارير',
    subtitle: 'حفظ نتائج الفحص وتلخيصها',
    value: '4',
    status: 'تقارير تجريبية جاهزة',
    rows: [
      ['تقرير اليوم', 'جاهز'],
      ['تقرير البطارية', 'جاهز'],
      ['تقرير الأعطال', 'جاهز'],
      ['التقرير الكامل', 'جاهز']
    ],
    extras: [
      ['PDF', 'لاحقاً'],
      ['مشاركة', 'لاحقاً'],
      ['أرشفة', 'مدعوم']
    ]
  },
  scan: {
    title: 'فحص شامل',
    subtitle: 'تصور لعملية فحص شامل للسيارة',
    value: 'Ready',
    status: 'جاهز لإضافة فحص حقيقي عند الربط',
    rows: [
      ['المحرك', 'قيد الفحص'],
      ['الجهد الكهربائي', 'قيد الفحص'],
      ['الحرارة', 'قيد الفحص'],
      ['الأعطال', 'قيد الفحص']
    ],
    extras: [
      ['مدة الفحص', '30 - 60 ثانية'],
      ['نتيجة أولية', 'سليمة'],
      ['وضع التشغيل', 'Demo']
    ]
  },
  service: {
    title: 'التذكير بالصيانة',
    subtitle: 'تنبيهات للصيانة الدورية',
    value: '3',
    status: 'تنبيهات صيانة مجدولة',
    rows: [
      ['تغيير الزيت', 'بعد 1200 كم'],
      ['فلتر الهواء', 'بعد 3000 كم'],
      ['فحص البطارية', 'هذا الأسبوع'],
      ['فحص القير', 'الشهر القادم']
    ],
    extras: [
      ['حالة الجدول', 'نشط'],
      ['آخر صيانة', 'مسجلة'],
      ['المتابعة', 'يدوية حالياً']
    ]
  },
  sensors: {
    title: 'الحساسات',
    subtitle: 'قائمة بأهم الحساسات الممكن عرضها',
    value: '6',
    status: 'قائمة حساسات تجريبية',
    rows: [
      ['O2 Sensor', 'Active'],
      ['Throttle Position', '12%'],
      ['MAP Sensor', '35 kPa'],
      ['Coolant Temp', '92 °C'],
      ['Battery Voltage', '12.6 V'],
      ['Fuel Trim', '+2.3%']
    ],
    extras: [
      ['أنواع إضافية', 'حسب السيارة'],
      ['مصدر البيانات', 'OBD-II لاحقاً'],
      ['الحالة', 'تجريبي']
    ]
  },
  history: {
    title: 'سجل الفحوصات',
    subtitle: 'متابعة الفحوصات السابقة',
    value: '5',
    status: 'السجل محفوظ داخل النسخة التجريبية',
    rows: [
      ['فحص اليوم', 'مكتمل'],
      ['فحص البطارية', 'مكتمل'],
      ['فحص الدينمو', 'مكتمل'],
      ['فحص الحرارة', 'مكتمل'],
      ['فحص الأعطال', 'مكتمل']
    ],
    extras: [
      ['أحدث سجل', 'اليوم'],
      ['نوع الحفظ', 'محلي'],
      ['إمكانية التصدير', 'لاحقاً']
    ]
  }
};

function renderPage(key) {
  const d = pages[key];
  if (!d) return;
  const extras = (d.extras || []).map(item => `
    <div class="mini-panel-card glass">
      <span>${item[0]}</span>
      <strong>${item[1]}</strong>
    </div>
  `).join('');

  document.getElementById('panelContent').innerHTML = `
    <h1 class="panel-title">${d.title}</h1>
    <p class="panel-sub">${d.subtitle}</p>
    <div class="panel-hero glass">
      <div class="value">${d.value}</div>
      <div class="status-line">${d.status}</div>
    </div>
    <div class="rows">
      ${d.rows.map(r => `
        <div class="row">
          <span>${r[0]}</span>
          <b>${r[1]}</b>
        </div>
      `).join('')}
    </div>
    <div class="dual-grid">${extras}</div>
  `;
  document.getElementById('panel').classList.remove('hidden');
}

function showPage(key){ renderPage(key); }
function closePage(){ document.getElementById('panel').classList.add('hidden'); }
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }


/* ===== alketbi additions ===== */
pages.streetSpeed = {
  title: 'سرعة الشارع',
  subtitle: 'عرض حد السرعة للطريق عند توفر بيانات الخرائط',
  value: '80 km/h',
  status: 'القيمة الحالية تجريبية حتى ربط خدمة خرائط تدعم حدود السرعة',
  rows: [
    ['سرعة السيارة', '70 km/h'],
    ['حد الطريق', '80 km/h'],
    ['التنبيه', 'عند تجاوز الحد'],
    ['المصدر', 'Maps / GPS لاحقاً']
  ],
  extras: [
    ['هامش التنبيه', '+5 أو +10 km/h'],
    ['الوضع', 'Demo'],
    ['التوفر', 'حسب بيانات الطريق']
  ]
};

pages.vehicles = {
  title: 'جميع المركبات',
  subtitle: 'اختيار الشركة ونوع المركبة',
  value: 'Vehicles',
  status: 'قائمة مبدئية قابلة للتوسعة',
  rows: [
    ['ياباني', 'Toyota • Lexus • Nissan • Honda • Mazda • Mitsubishi • Suzuki • Isuzu'],
    ['ألماني', 'Mercedes • BMW • Audi • Volkswagen • Porsche'],
    ['أمريكي', 'GMC • Chevrolet • Ford • Jeep • Cadillac • Dodge'],
    ['كوري', 'Hyundai • Kia • Genesis'],
    ['أوروبي', 'Land Rover • Volvo • Peugeot • Renault'],
    ['أخرى', 'إضافة أي شركة وموديل لاحقاً']
  ],
  extras: [
    ['SUV', 'مدعوم'],
    ['Pickup', 'مدعوم'],
    ['Sedan / Van / Truck', 'مدعوم']
  ]
};

let batteryAlertLimit = 11.0;

function adjustBattery(delta){
  batteryAlertLimit = Math.max(8.0, Math.min(15.0, +(batteryAlertLimit + delta).toFixed(1)));
  const el = document.getElementById('batteryLimit');
  if (el) el.textContent = batteryAlertLimit.toFixed(1) + ' V';
  localStorage.setItem('alketbiBatteryLimit', batteryAlertLimit.toFixed(1));
}

function resetOil(){
  localStorage.setItem('alketbiOilResetDate', new Date().toISOString());
  alert('تم تسجيل تغيير الزيت في النسخة التجريبية');
}

function resetTires(){
  localStorage.setItem('alketbiTireResetDate', new Date().toISOString());
  alert('تم تسجيل فحص الكفرات في النسخة التجريبية');
}

function demoControl(action){
  alert(action + ': هذه الوظيفة تجريبية حالياً. ستعمل لاحقاً فقط بعد ربط وحدة تحكم معتمدة وآمنة للسيارة.');
}

document.querySelectorAll('.brand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active-brand'));
    btn.classList.add('active-brand');
  });
});

const savedLimit = parseFloat(localStorage.getItem('alketbiBatteryLimit'));
if (!Number.isNaN(savedLimit)) {
  batteryAlertLimit = savedLimit;
  const el = document.getElementById('batteryLimit');
  if (el) el.textContent = batteryAlertLimit.toFixed(1) + ' V';
}

// حركة تجريبية للأرقام إلى أن يتم ربط OBD-II الحقيقي.
let demoRpm = 1750, demoSpeed = 70;
setInterval(() => {
  demoRpm = Math.max(700, Math.min(3800, demoRpm + Math.round((Math.random() - 0.5) * 50)));
  demoSpeed = Math.max(0, Math.min(140, demoSpeed + Math.round((Math.random() - 0.5) * 2)));
  const rpmEl = document.getElementById('rpmValue');
  const speedEl = document.getElementById('speedValue');
  if (rpmEl) rpmEl.textContent = demoRpm;
  if (speedEl) speedEl.textContent = demoSpeed;
}, 1500);
