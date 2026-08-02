const alarmlar = {
 
"STC1 F041": {
 
uzunAdi:
"Fault gap control right side",
 
neden:
"Gap sensörleri görüyor.",
 
mudahale: [
 
"Sağ sensörü kontrol et",
 
"Sol sensörü kontrol et",
 
"Fork'u middle pozisyonuna getir"
]
}
 
};
 
function tarihSaat(){
 
document.getElementById("saat").innerHTML =
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
 
if(alarm){
 
document.getElementById("sonuc").innerHTML =
 
`
<h2>${alarmNo}</h2>
 
<b>Uzun Adı</b>
 
<p>${alarm.uzunAdi}</p>
 
<b>Neden</b>
 
<p>${alarm.neden}</p>
`;
 
}
}
