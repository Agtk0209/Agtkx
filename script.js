const alarmlar = {
"STC1 F041": {
uzunAdi: "Fault gap control right side",
neden: "Gap sensörleri görüyor.",
mudahale: [
"Sağ sensörü kontrol et",
"Sol sensörü kontrol et",
"Fork'u hizala"
]
}
};
 
function tarihSaat() {
document.getElementById("saat").innerHTML =
"📅 " + new Date().toLocaleString("tr-TR");
}
 
setInterval(tarihSaat, 1000);
tarihSaat();
 
document.getElementById("alarmlarListesi").innerHTML =
'<option value="STC1 F041">';
 
function alarmAra() {
 
let alarmNo =
document.getElementById("alarmNo").value;
 
let alarm =
alarmlar[alarmNo];
 
if (!alarm) {
 
document.getElementById("sonuc").innerHTML =
"<h2>❌ Alarm Bulunamadı</h2>";
 
return;
}
 
document.getElementById("sonuc").innerHTML =
`
<h2>✅ Alarm Bulundu</h2>
 
<p><b>Alarm No:</b> ${alarmNo}</p>
 
<p><b>Uzun Adı:</b>
${alarm.uzunAdi}</p>
 
<p><b>Neden:</b>
${alarm.neden}</p>
`;
}
