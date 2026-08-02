let aktifAlarm = null;
let toplamSorgu = 0;
 
let alarmKayitlari = [];
 
const alarmlar = {
 
"STC1 F041": {
 
uzunAdi:
"Fault gap control right side, check position of the bin - M41B7",
 
neden:
"Fork bini üzerine aldıktan sonra güvenli bölgede değil. Gap sensörleri görüyor.",
 
mudahale: [
"Sağ sensörü kontrol et",
"Sol sensörü kontrol et",
"Reflektörleri temizle",
"Fork'u middle pozisyonuna getir",
"Jog modunda hizala",
"Robotu otomatiğe al",
"Start ver ve kontrol et"
],
 
fotograf: "",
cozumler: []
},
 
"F127": {
 
uzunAdi:
"Konveyör Motoru Aşırı Akım Alarmı",
 
neden:
"Motor sıkışması veya aşırı yük.",
 
mudahale: [
"Motoru durdur",
"Mekanik sıkışmayı kontrol et",
"Motor sıcaklığını kontrol et",
"Kablo bağlantılarını kontrol et",
"Reset uygula"
],
 
fotograf: "",
cozumler: []
}
 
};
 
function tarihSaat() {
 
document.getElementById("saat").innerHTML =
"📅 " + new Date().toLocaleString("tr-TR");
 
}
 
setInterval(tarihSaat, 1000);
tarihSaat();
 
for (let kod in alarmlar) {
 
document.getElementById("alarmlarListesi").innerHTML +=
`<option value="${kod}">`;
 
}
 
function alarmAra() {
 
document.getElementById("not").value = "";
 
let alarmNo =
document.getElementById("alarmNo").value;
 
let operator =
document.getElementById("operator").value;
 
let vardiya =
document.getElementById("vardiya").value;
 
let alarm =
alarmlar[alarmNo];
 
if (!alarm) {
 
document.getElementById("sonuc").innerHTML =
"<h2>❌ Alarm Bulunamadı</h2>";
 
document.getElementById("alarmResmi").src = "";
 
return;
}
 
aktifAlarm = alarmNo;
 
toplamSorgu++;
 
document.getElementById("istatistik").innerHTML =
"Toplam Sorgu : " + toplamSorgu;
 
if (alarm.fotograf) {
 
document.getElementById("alarmResmi").src =
alarm.fotograf;
 
} else {
 
document.getElementById("alarmResmi").src = "";
}
 
let html = `
 
<h2>✅ Alarm Bulundu</h2>
 
<p>
<b>Operatör:</b>
${operator}
</p>
 
<p>
<b>Vardiya:</b>
${vardiya}
</p>
 
<p>
<b>Alarm No:</b>
${alarmNo}
</p>
 
<p>
<b>Uzun Adı:</b><br>
${alarm.uzunAdi}
</p>
 
<p>
<b>Neden:</b><br>
${alarm.neden}
</p>
 
<b>Müdahale Adımları</b>
 
<ul>
`;
 
alarm.mudahale.forEach(adim => {
 
html += `<li>${adim}</li>`;
 
});
 
html += "</ul>";
 
html += "<h3>📚 Çözüm Geçmişi</h3>";
 
if (alarm.cozumler.length === 0) {
 
html += "Kayıt yok.";
}
 
alarm.cozumler.forEach(kayit => {
 
html += `
 
<div style="
background:#efefef;
padding:10px;
margin:5px;
border-radius:10px;">
 
<b>Tarih:</b>
${kayit.tarih}
<br>
 
<b>Operatör:</b>
${kayit.operator}
<br>
 
<b>Not:</b>
${kayit.not}
 
</div>
`;
 
});
 
document.getElementById("sonuc").innerHTML =
html;
 
document.getElementById("gecmis").innerHTML +=
 
`<li>
${new Date().toLocaleString("tr-TR")}
- ${alarmNo}
</li>`;
}
 
function notKaydet() {
 
if (!aktifAlarm) {
 
alert("Önce alarm seçiniz.");
return;
}
 
let operator =
document.getElementById("operator").value;
 
let vardiya =
document.getElementById("vardiya").value;
 
let not =
document.getElementById("not").value;
 
if (not.trim() === "") {
 
alert("Not giriniz.");
return;
}
 
let kayit = {
 
tarih:
new Date().toLocaleString("tr-TR"),
 
alarmNo:
aktifAlarm,
 
operator:
operator,
 
vardiya:
vardiya,
 
not:
not
};
 
alarmlar[aktifAlarm].cozumler.push(kayit);
 
alarmKayitlari.push(kayit);
 
alarmAra();
}
 
document
.getElementById("fotoSec")
.addEventListener("change", function (e) {
 
if (!aktifAlarm) {
 
alert("Önce alarm seçiniz.");
return;
}
 
let dosya = e.target.files[0];
 
if (dosya) {
 
let url =
URL.createObjectURL(dosya);
 
alarmlar[aktifAlarm].fotograf =
url;
 
document.getElementById("alarmResmi").src =
url;
}
 
});
 
function csvIndir() {
 
if (alarmKayitlari.length === 0) {
 
alert("Kayıt bulunamadı.");
return;
}
 
let csv =
"Tarih;AlarmNo;Operatör;Vardiya;Not\n";
 
alarmKayitlari.forEach(k => {
 
csv +=
`"${k.tarih}";"${k.alarmNo}";"${k.operator}";"${k.vardiya}";"${k.not}"\n`;
 
});
 
let blob =
new Blob(
["\ufeff" + csv],
{ type: "text/csv;charset=utf-8;" }
);
 
let link =
document.createElement("a");
 
link.href =
URL.createObjectURL(blob);
 
link.download =
"alarm_gecmisi.csv";
 
link.click();
}
