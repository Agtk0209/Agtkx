let aktifAlarm = null;
let toplamSorgu = 0;
let alarmKayitlari = [];
 
const YONETICI_SIFRESI = "Aga123";
 
const varsayilanAlarmlar = {


"STC1 F001": {
uzunAdi: "Güç kaynağı 400V/24VDC arızası - G1",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Kabloları kısa devre açısından kontrol et",
"Modülleri ve bileşenleri aşırı yük açısından kontrol et",
"Powerrail sistemini kontrol et",
"Arızayı sıfırlama tuşu ile resetle"
],
fotograf: "",
cozumler: []
},

"STC1 F002": {
uzunAdi: "Akü modülü arızası - G2",
neden: "PLC akü modunda çalışıyor",
mudahale: [
"Ana şalteri kontrol et",
"Repair switch konumunu kontrol et",
"24V güç kaynağını kontrol et",
"PLC beslemesinin neden kaybolduğunu bul"
],
fotograf: "",
cozumler: []
},

"STC1 F003": {
uzunAdi: "Elektronik sigorta 24VDC F2 devrede",
neden: "Kısa devre veya aşırı yük",
mudahale: [
"Kabloları kontrol et",
"Bileşenleri aşırı yük açısından kontrol et",
"Arızayı gider",
"Sıfırlama tuşuna bas"
],
fotograf: "",
cozumler: []
},
 
"STC1 F004": {
uzunAdi: "Fren direnci aşırı yük",
neden: "Kısa devre veya aşırı yük",
mudahale: [
"Kabloları kontrol et",
"Direnci kontrol et",
"Aşırı yük sebebini gider",
"Sistemi resetle"
],
fotograf: "",
cozumler: []
},
 
"STC1 F005": {
uzunAdi: "X ve Y motor devre kesici Q11",
neden: "Kısa devre veya aşırı yük",
mudahale: [
"Motor kablolarını kontrol et",
"Devre kesiciyi kontrol et",
"Aşırı yük sebebini gider",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F006": {
uzunAdi: "Teleskopik tahrik motor devre kesici",
neden: "Kısa devre veya aşırı yük",
mudahale: [
"Q41 ve Q51 motorlarını kontrol et",
"Kabloları incele",
"Aşırı yük kaynağını bul",
"Arızayı resetle"
],
fotograf: "",
cozumler: []
},
 
"STC1 F007": {
uzunAdi: "X ekseni motor aşırı yük",
neden: "Motor aşırı yük altında",
mudahale: [
"X ekseni mekanik sıkışmalarını kontrol et",
"Motor akımını kontrol et",
"Sebebi gider",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F008": {
uzunAdi: "Fren motor devre kesici Q21",
neden: "Kısa devre veya aşırı yük",
mudahale: [
"Fren devresini kontrol et",
"Kabloları kontrol et",
"Aşırı yük nedenini bul",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F009": {
uzunAdi: "X ekseni başlangıç emniyet şalteri",
neden: "İstifleme aracı yanlış pozisyonda",
mudahale: [
"Manuel moda geç",
"Yan bağlantıyı aktif et",
"X ekseni manuel modunu aç",
"Aracı emniyet şalterinden uzaklaştır",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F010": {
uzunAdi: "X ekseni bitiş emniyet şalteri",
neden: "İstifleme aracı yanlış pozisyonda",
mudahale: [
"Manuel moda geç",
"X eksenine git",
"Aracı limit şalterinden uzaklaştır",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F011": {
uzunAdi: "Y ekseni üst limit emniyet şalteri",
neden: "Y ekseni yanlış pozisyonda",
mudahale: [
"Manuel moda geç",
"Y eksenini emniyet noktasından uzaklaştır",
"Limitleri kontrol et",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F012": {
uzunAdi: "Y ekseni alt limit emniyet şalteri",
neden: "Y ekseni yanlış pozisyonda",
mudahale: [
"Manuel moda geç",
"Y eksenini güvenli bölgeye taşı",
"Limit sensörlerini kontrol et",
"Reset at"
],
fotograf: "",
cozumler: []
},
 
"STC1 F013": {
uzunAdi: "Y ekseni kablo gerginliği emniyet şalteri",
neden: "Kablo gerginlik anahtarı devrede",
mudahale: [
"Hız sınırlayıcı kablosunu kontrol et",
"Kablo kırığı olup olmadığını kontrol et",
"Kablo gerginliğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F014": {
uzunAdi: "Y ekseni hız sınırı izleme",
neden: "Platform çok hızlı hareket ediyor",
mudahale: [
"Kabloyu kontrol et",
"Platformu kontrol et",
"Emniyet mandalını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F015": {
uzunAdi: "Fren kablosu emniyet şalteri",
neden: "Emniyet kablosu devreye girmiş",
mudahale: [
"Hız sınırlayıcı kablosunu kontrol et",
"Kablo kopuğu olup olmadığını kontrol et",
"Gerginlik seviyesini kontrol et"
],
fotograf: "",
cozumler: []
},

"STC1 F016": {
uzunAdi: "Devreye giren STC1'de Q31 motor devre kesici frenleri",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol et",
"Ortamdaki modülleri ve bileşenleri aşırı yük açısından kontrol et",
"Kontrol edip düzelt",
"Panel üzerindeki sıfırlama tuşundan arızayı sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F017": {
uzunAdi: "Dışarıdan acil durdurma (K2/K3) - STC1",
neden: "Acil durdurma için iletken ray voltaj altında değil",
mudahale: [
"İstifleme aracı alanının dışındaysanız istifleme aracını manuel moda getirin",
"İstifleme aracının dışındaki acil durdurmaları kontrol edin",
"Makaralı konveyör kabinindeki sinyalleri kontrol edin",
"Ana kabinden 230V kaybı olup olmadığını kontrol edin",
"L5-2 bölgesini kontrol edin",
"Koridordaki powerrail üzerinde sıra hatası olup olmadığını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F018": {
uzunAdi: "Acil durdurma - S6 dolap kapağı STC1",
neden: "Dolap kapağındaki acil durdurma itilmiş",
mudahale: [
"Acil durdurmayı çıkarın",
"İstifleme aracını sıfırlayın",
"Panel üzerindeki sıfırlama tuşunu kullanın",
"İstifleme aracı kabinindeki sıfırlama tuşunu kullanın"
],
fotograf: "",
cozumler: []
},

"STC1 F019": {
uzunAdi: "Acil durdurma mobil panel - STC1",
neden: "Mobil paneldeki acil durdurma itilmiş",
mudahale: [
"Acil durdurmayı çıkar",
"İstifleme aracını sıfırla",
"Panel veya istifleme aracı kabinindeki sıfırlama tuşunu kullan",
"Panel fişe takılı değilse manuel modda çalışmak için mobil paneli bağla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F020": {
uzunAdi: "Movisafe'ten STO G21A1, izleme hızı X ekseni - STC1",
neden: "Frekans dönüştürücüsünden gelen güvenlik sinyalleri tam değil veya PLC bağlantısı kaybolmuş",
mudahale: [
"Hız emniyet şalterinin doğru şekilde çalıştığını kontrol et",
"PLC bağlantılarını kontrol et",
"İstifleme aracını sıfırla",
"Panel veya kabindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},
 
"STC1 F021": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %70 M21B3",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılıyor",
mudahale: [
"%70 hız emniyet şalterinin çalıştığını kontrol et",
"Hız emniyet devresini kontrol et",
"Panel veya kabindeki sıfırlama tuşuyla arızayı sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F022": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %50 M21B3",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılıyor",
mudahale: [
"%50 hız emniyet şalterinin çalıştığını kontrol et",
"Hız emniyet devresini kontrol et",
"Panel veya kabindeki sıfırlama tuşuyla arızayı sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F023": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %30 M21B3",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılıyor",
mudahale: [
"%30 hız emniyet şalterinin çalıştığını kontrol et",
"Hız emniyet devresini kontrol et",
"Panel veya kabindeki sıfırlama tuşuyla arızayı sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F024": {
uzunAdi: "Sıralı otomatik harekette arıza - STC1",
neden: "İstifleme aracının bazı otomatik adımlarında arıza var",
mudahale: [
"Probleme neden olan diğer arıza sayılarını kontrol et",
"Önce ilgili aktif arızaları gider",
"Daha sonra sistemi sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F025": {
uzunAdi: "Arıza konum izleme teleskopik tahrik M41B1",
neden: "Çatal ortada değil ve X ekseni çalışıyor olacak",
mudahale: [
"Konumlandırma çatalı için sensörlerin orta konumda olduğunu kontrol et",
"İstifleme aracını sıfırla",
"Panel veya istifleme aracı kabinindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},
 
"STC1 F026": {
uzunAdi: "Arıza konum izleme teleskopik tahrik M41B2",
neden: "Çatal ortada değil ve X ekseni çalışıyor olacak",
mudahale: [
"Konumlandırma çatalı için sensörlerin orta konumda olduğunu kontrol et",
"İstifleme aracını sıfırla",
"Panel veya istifleme aracı kabinindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},
 
"STC1 F027": {
uzunAdi: "Arıza emniyet giriş modülü (Emniyet Noktası 1734-IB8S)",
neden: "Emniyet giriş modülünde bir arıza var",
mudahale: [
"PLC'nin giriş modüllerini kontrol et",
"Emniyet şeması STC1 Sayfa 189 ve sonraki sayfaları incele",
"Arızalı modülü tespit et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F028": {
uzunAdi: "Arızası emniyet çıkış modülü (Emniyet Noktası 1734-OB8S)",
neden: "Emniyet çıkış modülünde bir arıza var",
mudahale: [
"PLC'nin çıkış modüllerini kontrol et",
"Emniyet şeması STC1 Sayfa 189 ve sonraki sayfaları incele",
"Arızalı modülü tespit et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F029": {
uzunAdi: "Arıza teleskopik hareket senkronize değil",
neden: "Çatallar senkronize değil, bir taraf tam ortada değil",
mudahale: [
"Konumlandırma çatalı için sensörlerin orta konumda olduğunu kontrol et",
"Çatalların mekanik durumunu kontrol et",
"İstifleme aracını sıfırla",
"Panel veya kabindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},

"STC1 F030": {
uzunAdi: "Arıza teleskopik M41B1 anahtarlı değil",
neden: "Çatal yanlış pozisyonda",
mudahale: [
"Çatalın konumunu kontrol et",
"Çatal ortada olmasına rağmen sensör çalışmıyorsa sensörü kontrol et",
"Konumlandırma çatalı için sensörlerin orta konumda olduğunu doğrula",
"İstifleme aracını sıfırla",
"Panel veya istifleme aracı kabinindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},

JavaScript
"STC1 F031": {
uzunAdi: "Arızası teleskopik M41B2 anahtarlı değil",
neden: "Çatal yanlış pozisyonda",
mudahale: [
"Çatalın konumunu kontrol et",
"Konumlandırma çatalı sensörlerinin orta konumda olduğunu kontrol et",
"İstifleme aracını sıfırla",
"Panel veya kabindeki sıfırlama tuşunu kullan"
],
fotograf: "",
cozumler: []
},
 
"STC1 F032": {
uzunAdi: "Ayrılmış",
neden: "Rezerve edilmiş alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F033": {
uzunAdi: "Arıza G21 Movidrive dönüştürücü - X ekseni",
neden: "Frekans dönüştürücü arızası",
mudahale: [
"İstifleme aracını manuel modda çalıştır",
"Anahtarı aç",
"Kurulum moduna gir",
"Referans moduna gir",
"Paneldeki REF modunu aç",
"İstifleme aracını işaretli konuma getir",
"Referans X eksenine bas"
],
fotograf: "",
cozumler: []
},
 
"STC1 F034": {
uzunAdi: "Arıza G31 Movidrive dönüştürücü - Y ekseni",
neden: "Frekans dönüştürücü arızası",
mudahale: [
"İstifleme aracını manuel modda çalıştır",
"Kurulum moduna gir",
"Referans moduna gir",
"REF modunu aç",
"İstifleme aracını işaretli konuma getir",
"Referans Y eksenine bas"
],
fotograf: "",
cozumler: []
},
 
"STC1 F035": {
uzunAdi: "Arıza G41 Movidrive dönüştürücü - Z1 ekseni",
neden: "Frekans dönüştürücü arızası",
mudahale: [
"İstifleme aracını manuel modda çalıştır",
"Kurulum moduna gir",
"Referans moduna gir",
"REF modunu aç",
"İstifleme aracını işaretli konuma getir",
"Referans Z1 eksenine bas"
],
fotograf: "",
cozumler: []
},
 
"STC1 F036": {
uzunAdi: "Arıza G51 Movidrive dönüştürücü - Z2 ekseni",
neden: "Frekans dönüştürücü arızası",
mudahale: [
"İstifleme aracını manuel modda çalıştır",
"Kurulum moduna gir",
"Referans moduna gir",
"REF modunu aç",
"İstifleme aracını işaretli konuma getir",
"Referans Z2 eksenine bas'ref modunu'açın ve 
istifleme aracını işaretli konuma getirin belirtilen z2 aksına' basın "
],
fotograf: "",
cozumler: []
},

"STC1 F037": {
uzunAdi: "Arıza G21 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün hata numarasını kontrol et",
"Mobil panel veya dönüştürücü panelindeki hata kodunu oku",
"SEW kılavuzundaki ilgili hata numarasına bak",
"Arızayı gider ve sistemi sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F038": {
uzunAdi: "Arıza G31 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün hata numarasını kontrol et",
"Mobil panel veya dönüştürücü panelindeki hata kodunu oku",
"SEW kılavuzundaki ilgili hata numarasına bak",
"Arızayı gider ve sistemi sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F039": {
uzunAdi: "Arıza G41 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün hata numarasını kontrol et",
"Mobil panel veya dönüştürücü panelindeki hata kodunu oku",
"SEW kılavuzundaki ilgili hata numarasına bak",
"Arızayı gider ve sistemi sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F040": {
uzunAdi: "Arıza G51 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün hata numarasını kontrol et",
"Mobil panel veya dönüştürücü panelindeki hata kodunu oku",
"SEW kılavuzundaki ilgili hata numarasına bak",
"Arızayı gider ve sistemi sıfırla"
],
fotograf: "",
cozumler: []
},

"STC1 F041": {
 
uzunAdi:
"Fault gap control right side, check position of the bin - M41B7",
 
neden:
"Fork bini üzerine aldıktan sonra sağ sensör güvenli bölgede değil. Gap sensörleri görüyor.",
 
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

"STC1 F042": {
 
uzunAdi:
"Fault gap control left side, check position of the bin - M41B6",
 
neden:
"Fork bini üzerine aldıktan sonra sol sensör güvenli bölgede değil. Gap sensörleri görüyor.",
 
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

"STC1 F043": {
uzunAdi: "Arıza yer boş koordinatları kontrol et, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı toplama komutu alır ancak alan boştur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F044": {
uzunAdi: "Arıza yer derinlemesine boş koordinatları kontrol et, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı toplama komutu alır ancak alan boştur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F045": {
uzunAdi: "Arıza yer dolu koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı bırakma komutu alır ancak alan boştur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F046": {
uzunAdi: "Arıza yer derinlemesine dolu koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı bırakma komutu alır ancak alan doludur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F047": {
uzunAdi: "Arıza çatal, toplama komutu için doludur, boş olmalı",
neden: "İstifleme aracı toplama komutu alır ancak istifleme aracı doludur",
mudahale: [
"Çatal üzerindeki M41B3 kutusunu kontrol et",
"WMS yeni bir komut gönderene kadar sistemi gözlemle",
"Yeni komuttan sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F048": {
uzunAdi: "Arıza çatal, bırakma komutu için boştur, dolu olmalı",
neden: "İstifleme aracı bırakma komutu alır ancak istifleme aracı dolu değildir",
mudahale: [
"Çatal üzerindeki M41B3 kutusunu kontrol et",
"WMS yeni bir komut gönderene kadar sistemi gözlemle",
"Yeni komuttan sonra arızanın otomatik olarak giderildiğini kontrol et"
],
fotograf: "",
cozumler: []
},

"STC1 F049": {
uzunAdi: "Arızası otomatik veya yarı otomatik sıralama, zaman aşımı",
neden: "İstifleme aracı otomatik sıralama için çok uzun süreye ihtiyaç duyar",
mudahale: [
"Diğer aktif arıza numaralarını kontrol et",
"İstifleme aracının durumunu kontrol et",
"Aktif arızaları gider",
"Sistemi sıfırla"
],
fotograf: "",
cozumler: []
},
 
"STC1 F050": {
uzunAdi: "Arıza PLC konveyör tekniğine bağlanma",
neden: "WMS ile bağlantı kaybolur",
mudahale: [
"PLC'yi kontrol et",
"Veri sensörlerini kontrol et",
"Ethernet kablosunu kontrol et",
"İletişim sürecini incele",
"WMS bağlantısını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F051": {
uzunAdi: "Arıza ES için bağlantı PLC konveyör tekniği veriler",
neden: "Makaralı konveyörden ana PLC'ye bağlantı kaybolur",
mudahale: [
"PLC'yi kontrol et",
"Veri sensörlerini kontrol et",
"Ethernet kablosunu kontrol et",
"İletiş

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
document.getElementById("alarmNo")
.value
.trim()
.toUpperCase();
 
let alarm =
alarmlar[alarmNo];
 
console.log("Girilen Alarm:", alarmNo);
console.log("Bulunan:", alarm);
 
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
 
document.getElementById("alarmListesi").innerHTML =
html;
}
