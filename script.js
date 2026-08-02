const alarmlar = {
 
"STC1 F041": {
uzunAdi: "Fault gap control right side",
neden: "Gap sensörleri görüyor.",
mudahale: [
"Sağ sensörü kontrol et",
"Sol sensörü kontrol et",
"Fork'u hizala"
]
},
 
"F127": {
uzunAdi: "Konveyör Motoru Aşırı Akım Alarmı",
neden: "Motor sıkışması veya aşırı yük.",
mudahale: [
"Motoru durdur",
"Mekanik sıkışmayı kontrol et",
"Reset uygula"
]
}
 
};
 
function tarihSaat() {
 
document.getElementById("saat").innerHTML =
"📅 " + new Date().toLocaleString("tr-TR");
 
}
 
setInterval(tarihSaat, 1000);
tarihSaat();
 
let liste = "";
 
for (let kod in alarmlar) {
liste += `<option value="${kod}">`;
}
 
document.getElementById("alarmlarListesi").innerHTML =
liste;
 
function alarmAra() {
 
const alarmNo =
document.getElementById("alarmNo").value;
 
const alarm =
alarmlar[alarmNo];
 
if (!alarm) {
 
document.getElementById("sonuc").innerHTML =
"<h2>❌ Alarm Bulunamadı</h2>";
 
return;
}
 
let html = `
<h2>✅ Alarm Bulundu</h2>
 
<p><b>Alarm No:</b> ${alarmNo}</p>
 
<p><b>Uzun Adı:</b> ${alarm.uzunAdi}</p>
 
<p><b>Neden:</b> ${alarm.neden}</p>
 
<b>Müdahale Adımları</b>
 
<ul>
`;
 
alarm.mudahale.forEach(adim => {
html += `<li>${adim}</li>`;
});
 
html += "</ul>";
 
document.getElementById("sonuc").innerHTML =
html;
}
