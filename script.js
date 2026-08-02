const alarmlar = {
 
"STC1 F041":{
 
uzunAdi:
"Fault gap control right side, check position of the bin - M41B7",
 
neden:
"Fork bini üzerine aldıktan sonra güvenli bölgede değil. Gap sensörleri görüyor.",
 
mudahale:[
 
"Sağ sensörü kontrol et",
 
"Sol sensörü kontrol et",
 
"Reflektörleri temizle",
 
"Fork'u middle pozisyonuna getir",
 
"Robotu otomatiğe al",
 
"Start ver ve kontrol et"
]
},
 
"F127":{
 
uzunAdi:
"Konveyör Motoru Aşırı Akım Alarmı",
 
neden:
"Motor sıkışması veya aşırı yük.",
 
mudahale:[
 
"Motoru durdur",
 
"Mekanik sıkışmayı kontrol et",
 
"Motor sıcaklığını kontrol et",
 
"Reset uygula"
]
}
};
 
function tarihSaat(){
 
document.getElementById("saat").innerHTML =
"📅 " +
new Date().toLocaleString("tr-TR");
 
}
 
setInterval(tarihSaat,1000);
 
tarihSaat();
 
for(let kod in alarmlar){
 
document.getElementById("alarmlarListesi")
.innerHTML +=
`<option value="${kod}">`;
 
}
 
function alarmAra(){
 
let alarmNo =
document.getElementById("alarmNo").value;
 
let alarm =
alarmlar[alarmNo];
 
if(!alarm){
 
document.getElementById("sonuc").innerHTML =
"<h2>❌ Alarm Bulunamadı</h2>";
 
return;
}
 
let html = `
 
<h2>✅ Alarm Bulundu</h2>
 
<p><b>Alarm No:</b> ${alarmNo}</p>
 
<p><b>Uzun Adı:</b><br>
${alarm.uzunAdi}</p>
 
<p><b>Neden:</b><br>
${alarm.neden}</p>
 
<b>Müdahale Adımları</b>
 
<ul>
`;
 
alarm.mudahale.forEach(adim=>{
 
html += `<li>${adim}</li>`;
 
});
 
html += "</ul>";
 
document.getElementById("sonuc").innerHTML =
html;
}
