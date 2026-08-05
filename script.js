
let aktifAlarm = null;
let toplamSorgu = 0;
let alarmKayitlari = [];
 
const YONETICI_SIFRESI = "Aga123";
 
const varsayilanAlarmlar = {
 
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
 
"AW1 F078": {
 
uzunAdi: "No Motion Detected",
 
neden:
"AW1 tarafında uzun süre istekte olan feeder var.",
 
mudahale: [
"İstekte olan feederleri WMS 'Feeder Overview' sayfasından kontrol et",
"İstekte olan feederın buffer alanında tütün olduğundan emin ol.",
"Feader içini kameralardan kontrol edip en kısa zamanda beslenmesini sağla"
],
 
fotograf: "",
cozumler: []
}
 
};
 
let alarmlar =
JSON.parse(localStorage.getItem("alarmlar"))
||
JSON.parse(JSON.stringify(varsayilanAlarmlar));
 
function kaydet() {
 
localStorage.setItem(
"alarmlar",
JSON.stringify(alarmlar)
);
 
}
 
function tarihSaat() {
 
document.getElementById("saat").innerHTML =
"📅 " + new Date().toLocaleString("tr-TR");
 
}
 
setInterval(tarihSaat, 1000);
tarihSaat();
 
listeyiYukle();
 
function listeyiYukle() {
 
let html = "";
 
for (let kod in alarmlar) {
 
html += `<option value="${kod}">`;
 
}
 
document.getElementById("alarmlarListesi").innerHTML =
html;
}
 
function alarmAra() {
 
document.getElementById("not").value = "";
 
let alarmNo =
document.getElementById("alarmNo").value;
 
let alarm =
alarmlar[alarmNo];
 
let operator =
document.getElementById("operator").value;
 
let vardiya =
document.getElementById("vardiya").value;
 
if (!alarm) {
 
document.getElementById("sonuc").innerHTML =
"<h2>❌ Alarm Bulunamadı</h2>";
 
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
 
<p><b>Operatör:</b> ${operator}</p>
 
<p><b>Vardiya:</b> ${vardiya}</p>
 
<p><b>Alarm No:</b> ${alarmNo}</p>
 
<p><b>Uzun Adı:</b><br>${alarm.uzunAdi}</p>
 
<p><b>Neden:</b><br>${alarm.neden}</p>
 
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
 
<b>Tarih:</b> ${kayit.tarih}<br>
<b>Operatör:</b> ${kayit.operator}<br>
<b>Not:</b> ${kayit.not}
 
</div>
`;
 
});
 
document.getElementById("sonuc").innerHTML =
html;
 
document.getElementById("gecmis").innerHTML +=
`<li>${new Date().toLocaleString("tr-TR")} - ${alarmNo}</li>`;
}
 
function notKaydet() {
 
if (!aktifAlarm) {
 
alert("Önce alarm seçiniz.");
return;
}
 
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
document.getElementById("operator").value,
 
vardiya:
document.getElementById("vardiya").value,
 
not:
not
};
 
alarmlar[aktifAlarm].cozumler.push(kayit);
 
alarmKayitlari.push(kayit);
 
kaydet();
 
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
 
alarmlar[aktifAlarm].fotograf = url;
 
kaydet();
 
document.getElementById("alarmResmi").src = url;
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
 
function alarmEkle() {
 
const alarmNo =
document.getElementById("yeniAlarmNo").value.trim();
 
const uzunAdi =
document.getElementById("yeniAlarmAdi").value.trim();
 
const neden =
document.getElementById("yeniAlarmNeden").value.trim();
 
const mudahale =
document.getElementById("yeniAlarmMudahale")
.value
.split("\n")
.filter(x => x.trim() !== "");
 
if (alarmNo === "") {
 
alert("Alarm No giriniz.");
return;
}
 
if (uzunAdi === "") {
 
alert("Uzun Adı giriniz.");
return;
}
 
if (alarmlar[alarmNo]) {
 
alert("Bu alarm zaten kayıtlı.");
return;
}
 
alarmlar[alarmNo] = {
 
uzunAdi: uzunAdi,
neden: neden,
mudahale: mudahale,
fotograf: "",
cozumler: []
 
};
 
kaydet();
 
listeyiYukle();
 
alert(alarmNo + " başarıyla eklendi.");
 
document.getElementById("yeniAlarmNo").value = "";
document.getElementById("yeniAlarmAdi").value = "";
document.getElementById("yeniAlarmNeden").value = "";
document.getElementById("yeniAlarmMudahale").value = "";
}
 
function tumVerileriSil() {
 
if (!yoneticiKontrol()) {
 
alert("Hatalı şifre.");
return;
 
}
 
if (
!confirm(
"Sonradan eklenen alarmlar silinsin mi?"
)
) {
return;
}
 
let yeniListe = {};
 
for (let kod in varsayilanAlarmlar) {
 
yeniListe[kod] =
JSON.parse(
JSON.stringify(
varsayilanAlarmlar[kod]
)
);
 
}
 
alarmlar = yeniListe;
 
kaydet();
 
alert(
"Sonradan eklenen alarmlar silindi."
);
 
listeyiYukle();
 
location.reload();
}
function yoneticiKontrol() {
 
let sifre =
prompt("Yönetici şifresini giriniz");
 
if (sifre === null) {
return false;
}
 
return sifre === YONETICI_SIFRESI;
}
function kayitliAlarmlariGoster() {
 
alert("Buton çalıştı");
 
let html =
"<h3>Toplam Alarm Sayısı: " +
Object.keys(alarmlar).length +
"</h3>";
 
for (let kod in alarmlar) {
 
html += `
<div style="
background:white;
padding:10px;
margin:5px 0;
border-radius:8px;
border-left:5px solid #28a745;
">
<b>${kod}</b><br>
${alarmlar[kod].uzunAdi}
</div>
`;
}
 
