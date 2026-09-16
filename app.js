const data={
battery:{title:"البطارية",value:"12.6 V",status:"الحالة: جيدة",rows:[["جهد البطارية","12.6 V"],["حالة الشحن","85%"],["حرارة البطارية","32 °C"]]},
alternator:{title:"الدينمو",value:"14.2 V",status:"الشحن طبيعي",rows:[["جهد الشحن","14.2 V"],["تيار الشحن (تجريبي)","35 A"],["حالة الدينمو","جيد"]]},
temp:{title:"حرارة المحرك",value:"92 °C",status:"ضمن النطاق التجريبي",rows:[["سائل التبريد","92 °C"],["المروحة","مفعلة"],["حالة النظام","جيدة"]]},
obd:{title:"أعطال OBD-II",value:"2",status:"أكواد تجريبية",rows:[["P0420","Catalyst efficiency"],["P0133","O2 sensor slow response"],["ملاحظة","لا تمسح الأكواد قبل معرفة سبب العطل"]]},
live:{title:"البيانات الحية",value:"750 RPM",status:"Demo Live Data",rows:[["سرعة السيارة","0 km/h"],["حرارة سائل التبريد","92 °C"],["MAP","35 kPa"],["TPS","12%"],["جهد النظام","14.2 V"]]},
reports:{title:"التقارير",value:"4",status:"تقارير تجريبية",rows:[["تقرير اليوم","جاهز"],["تقرير البطارية","جاهز"],["تقرير الأعطال","جاهز"],["تقرير كامل","جاهز"]]}
};
function showPage(k){const d=data[k];document.getElementById("panelContent").innerHTML=`<h1>${d.title}</h1><div class="metric"><div class="value">${d.value}</div><p class="ok">${d.status}</p></div><div class="rows">${d.rows.map(r=>`<div class="row"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}</div>`;document.getElementById("panel").classList.remove("hidden")}
function closePage(){document.getElementById("panel").classList.add("hidden")}
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js")}