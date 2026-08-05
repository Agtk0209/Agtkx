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
"Referans Z2 eksenine bas"
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
"İletişim bağlantısını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F052": {
uzunAdi: "Arızası bağlantı WMS, komut yok, ana ekran STC'de sıfırlama",
neden: "Depodan gelen komutta ters giden bir şeyler var",
mudahale: [
"İstifleme aracının ana ekranındaki yumuşak tuş ile sıfırlayın",
"İletişim sürecinin işlediğini kontrol edin",
"WMS bağlantısını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F053": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F054": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F055": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F056": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F057": {
uzunAdi: "Arıza STC1 içindeki K4 veya K5'i tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlıştır",
mudahale: [
"Kontaktörün başlama komutu var ancak geri bildirim çalışmıyor",
"Geri bildirim sinyalini kontrol et",
"Kontaktörü kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F058": {
uzunAdi: "Arıza STC1 içindeki K6'yı tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlıştır",
mudahale: [
"Kontaktörün başlama komutu var ancak geri bildirim çalışmıyor",
"Geri bildirim sinyalini kontrol et",
"Kontaktörü kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F059": {
uzunAdi: "Arızası STC1 içinde K7'yi tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlıştır",
mudahale: [
"Kontaktörün başlama komutu var ancak geri bildirim çalışmıyor",
"Geri bildirim sinyalini kontrol et",
"Kontaktörü kontrol et"
],
fotograf: "",
cozumler: []
},

"STC1 F060": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F061": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F062": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F063": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F064": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F065": {
uzunAdi: "Arıza iletişim X-aksı G21",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol et",
"Kabloyu kontrol et",
"Dönüştürücünün güç kaynağını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F066": {
uzunAdi: "Arıza haberleşme Y-aksı G31",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol et",
"Kabloyu kontrol et",
"Dönüştürücünün güç kaynağını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F067": {
uzunAdi: "Arıza haberleşme Z1-aksı G41",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol et",
"Kabloyu kontrol et",
"Dönüştürücünün güç kaynağını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F068": {
uzunAdi: "Arıza iletişim Z2-aksı G51",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol et",
"Kabloyu kontrol et",
"Dönüştürücünün güç kaynağını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F069": {
uzunAdi: "Arıza iletişim I/O A5003",
neden: "Allen Bradley I/O modülü ile iletişim arızalı",
mudahale: [
"I/O modülünü kontrol et",
"Kabloyu kontrol et",
"Dönüştürücünün güç kaynağını kontrol et"
],
fotograf: "",
cozumler: []
},
 
"STC1 F070": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F071": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F072": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F073": {
uzunAdi: "Arıza veya uyarı akü modülü C2 aküsü",
neden: "Akü modülünde bir arıza var",
mudahale: [
"Modülün voltajını ölç",
"Voltaj yoksa modülü değiştir"
],
fotograf: "",
cozumler: []
},

"STC1 F074": {
uzunAdi: "Arıza veya uyarı akü modülü C2 sıcaklığı 75°C'nin üzerinde",
neden: "Akü modülü çok sıcak",
mudahale: [
"Akü modülünü kontrol edin",
"Arızalıysa değiştirin"
],
fotograf: "",
cozumler: []
},

"STC1 F075": {
uzunAdi: "Arıza X-aksı konumu maksimum konumun üzerinde",
neden: "İstifleme aracı için X konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F076": {
uzunAdi: "Arıza X-aksı konumu minimum konumun altında",
neden: "İstifleme aracı için X konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F077": {
uzunAdi: "Arıza Y-aksı konumu maksimum konumun üzerinde",
neden: "İstifleme aracı için Y konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F078": {
uzunAdi: "Arıza Y-aksı konumu minimum konumun altında",
neden: "İstifleme aracı için Y konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F079": {
uzunAdi: "Arızası Z1-aksı konumu maksimum konum üzerinde, normal derinlik",
neden: "İstifleme aracı için çatal Z1 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F080": {
uzunAdi: "Arıza Z1-aksı konumu minimum konumun altında, normal derin",
neden: "İstifleme aracı için çatal Z1 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F081": {
uzunAdi: "Arıza Z2-aksı konumu maksimum konum üzerinde, çift derin",
neden: "İstifleme aracı için çatal Z2 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},

"STC1 F082": {
uzunAdi: "Arızası Z2-aksı konumu minimum konumun altında, normal derin",
neden: "İstifleme aracı için çatal Z2 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşı komutunu kontrol edin",
"Belki de komut araç üzerinden silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC1 F083": {
uzunAdi: "Dikkat anahtarlı şalter bypass modunda",
neden: "Anahtarlı şalter bypass konumunda",
mudahale: [
"Bypass moduna ihtiyacınız olmadığında anahtarlı şalteri diğer yöne çevirin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F084": {
uzunAdi: "Autostep'te arıza, çatal orta konumda değil",
neden: "Autostep'te bir arıza var ve çatal orta konumda değil",
mudahale: [
"Çatalı manuel modda geriye doğru çalıştırın",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC1 F085": {
uzunAdi: "Arıza bir komut başladığında çatal ortada değildir",
neden: "Yeni bir komut başladığında çatal ortada değildir",
mudahale: [
"Çatalı manuel modda geriye doğru çalıştırın",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC1 F086": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F087": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F088": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F089": {
uzunAdi: "Uyarı her iki mobil panel de aynı resim alanında",
neden: "Her iki mobil panel de aynı resim alanında. Böylece panel manuel modlar için kullanılamaz",
mudahale: [
"STC1'e ait olmayan mobil paneldeki resmi değiştirin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F090": {
uzunAdi: "Arıza RC02 alanı boş, sensör M41B9'un sağ tarafını kontrol edin ve komutu WMS'den tekrar gönderin",
neden: "İstifleme aracı toplama komutu alır ancak alan boştur",
mudahale: [
"Kaldıraç platformundaki sensörü kontrol edin",
"Komutu WMS'den tekrar gönderin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F091": {
uzunAdi: "Arıza RC03 alanı doludur, M41B8 sensörünü kontrol edin ve komutu WMS'den tekrar gönderin",
neden: "İstifleme aracı bırakma komutu alır ancak alan doludur",
mudahale: [
"Kaldıraç platformundaki sensörü kontrol edin",
"Komutu WMS'den tekrar gönderin"
],
fotograf: "",
cozumler: []
},
 
"STC1 F092": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F093": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F094": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},

"STC1 F095": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC1 F096": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},

"STC2 F001": {
uzunAdi: "Arıza güç kaynağı 400V/24VDC - STC2'de G1",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol edin",
"Modülleri ve bileşenleri aşırı yük için kontrol edin",
"Powerrail sistemini kontrol edin",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F002": {
uzunAdi: "Arıza STC2'de G2 akü modülü",
neden: "PLC pil modunda çalışır",
mudahale: [
"PLC'nin güç kaybını kontrol edin",
"Ana anahtarı kontrol edin",
"Repair switch konumunu kontrol edin",
"24V beslemeyi kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F003": {
uzunAdi: "Arıza devreye giren STC2'de elektronik sigorta 24VDC F2",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol edin",
"Modülleri ve bileşenleri aşırı yük açısından kontrol edin",
"Sorunu giderin",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F004": {
uzunAdi: "Arıza aşırı yük F21A F21B veya M31R2'de fren rezistörü",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Kabloları kontrol edin",
"Modülleri ve bileşenleri aşırı yük açısından kontrol edin",
"Sorunu giderin",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F005": {
uzunAdi: "X ve Y için motor devre kesici - STC2'de Q11",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Sebebini bulun",
"Kabloları kontrol edin",
"Aşırı yük için motorları kontrol edin",
"Kontrol alanındaki tüm modülleri ve bileşenleri inceleyin",
"Arızayı giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F006": {
uzunAdi: "Devreye giren STC2'de motor devre kesici teleskopik tahrikler Q41 veya Q51",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol edin",
"Mevcut ortamdaki tüm modülleri ve bileşenleri aşırı güç yüklemesi için kontrol edin",
"Sorunu giderin",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşundan arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F007": {
uzunAdi: "Arıza devreye giren STC2'de aşırı yüklü motor X-aksı F21A veya F21B",
neden: "Aşırı güç yüklemesi",
mudahale: [
"Nedeni bulun",
"Aşırı yüklenme için mevcut ortamdaki tüm modülleri ve bileşenleri kontrol edin",
"Sorunu giderin",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşundan arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F008": {
uzunAdi: "Devreye giren STC2'de Q21 motor devre kesici frenleri",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol edin",
"Mevcut ortamdaki tüm modülleri ve bileşenleri aşırı güç yüklemesi için kontrol edin",
"Sorunu giderin",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşundan arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F009": {
uzunAdi: "Devreye giren STC2 içinde emniyet şalteri X-aksı başlama pozisyonu M21B1",
neden: "Devreye giren emniyet şalteri X-aksı (istifleme aracı tahrikleri yanlış pozisyonda)",
mudahale: [
"İstifleme aracını manuel moda çalıştırın",
"Ana şalteri açın",
"Yan bağlantı için şalteri etkinleştirin",
"Manuel mod X-aksına gidin",
"Paneldeki manuel modu açın",
"İstifleme aracını emniyet şalterinden uzaklaştırın",
"Manuel modda sürüş yalnızca mobil panelin arka tarafındaki 3 konumlu tuşla çalışır"
],
fotograf: "",
cozumler: []
},

"STC2 F010": {
uzunAdi: "Devreye giren STC2 içinde emniyet şalteri X-aksı bitiş pozisyonu M21B1",
neden: "Devreye giren emniyet şalteri X-aksı (istifleme aracı tahrikleri yanlış pozisyonda)",
mudahale: [
"İstifleme aracını manuel moda çalıştırın",
"Ana şalteri açın",
"Yan bağlantıyı etkinleştirin",
"Manuel mod X-aksına gidin",
"Paneldeki manuel modu açın",
"İstifleme aracını emniyet şalterinden uzaklaştırın",
"Manuel modda sürüş yalnızca mobil panelin arka tarafındaki 3 konumlu tuşla yapılır"
],
fotograf: "",
cozumler: []
},
 
"STC2 F011": {
uzunAdi: "Devreye giren STC1'de emniyet şalteri Y-aksı konumu yukarı M31B2",
neden: "Devreye giren emniyet şalteri Y-aksı (istifleme aracı tahrikleri yanlış pozisyonda)",
mudahale: [
"İstifleme aracını manuel moda çalıştırın",
"Ana şalteri açın",
"Yan bağlantıyı etkinleştirin",
"Manuel mod Y-aksına gidin",
"Paneldeki manuel modu açın",
"İstifleme aracını emniyet şalterinden uzaklaştırın",
"Manuel modda sürüş yalnızca mobil panelin arka tarafındaki 3 konumlu tuşla çalışır"
],
fotograf: "",
cozumler: []
},
 
"STC2 F012": {
uzunAdi: "Devreye giren STC2'de emniyet şalteri Y-aksı konumu yukarı M31B3",
neden: "Devreye giren emniyet şalteri Y-aksı (istifleme aracı tahrikleri yanlış pozisyonda)",
mudahale: [
"İstifleme aracını manuel moda çalıştırın",
"Ana şalteri açın",
"Yan bağlantıyı etkinleştirin",
"Manuel mod Y-aksına gidin",
"Paneldeki manuel modu açın",
"İstifleme aracını emniyet şalterinden uzaklaştırın",
"Manuel modda çalışma yalnızca mobil panelin arka tarafındaki 3 konumlu tuşla yapılır"
],
fotograf: "",
cozumler: []
},
 
"STC2 F013": {
uzunAdi: "Devreye giren STC2'de emniyet şalteri Y-aksı kablo gerginliği M31B5",
neden: "Kablo gerginliğinin emniyet şalteri devreye girdi",
mudahale: [
"Yukarı kaldırmak için hız sınırlayıcısından gelen kabloyu kontrol edin",
"Kablo kırılabilir veya gerilim kaybolmuş olabilir",
"Kablo gerginliğini kontrol edin"
],
fotograf: "",
cozumler: []
},

"STC2 F014": {
uzunAdi: "Hız sınırı izleme M31B4 Y-aksı STC2",
neden: "Hız emniyet şalteri Y-aksı devreye giriyor, kaldırma platformu çok hızlı çalışıyor",
mudahale: [
"Kabloyu ve platformu çatallarla kontrol edin",
"Emniyet mandalı tetiklenebilir",
"Lütfen bunun için istifleme aracı kılavuzuna bakın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F015": {
uzunAdi: "STC2 içindeki tel kablonun emniyet şalteri freni M31B1",
neden: "Emniyet şalteri kablosu devreye girer",
mudahale: [
"Yukarı kaldırmak için hız sınırlayıcısından gelen kabloyu kontrol edin",
"Kablo kırılabilir veya gerilim yükü düşüktür"
],
fotograf: "",
cozumler: []
},
 
"STC2 F016": {
uzunAdi: "Devreye giren STC2'de Q31 motor devre kesici frenleri",
neden: "Kısa devre veya aşırı güç yükü",
mudahale: [
"Nedeni bulun",
"Kabloları kontrol edin",
"Mevcut ortamdaki tüm modülleri ve bileşenleri aşırı güç yüklemesi için kontrol edin",
"Sorunu giderin",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşundan arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F017": {
uzunAdi: "Acil durdurma dıştan (K2/K3) - STC2",
neden: "Acil durdurma için iletken ray, voltaj altında değil",
mudahale: [
"İstifleme aracı alanının içindeyseniz istifleme aracını manuel moda getirin",
"İstifleme aracının dışındaysanız ve araç otomatikteyse makaralı konveyör kabininin sinyallerini kontrol edin",
"Ana kabinde 230V kaybı olup olmadığını kontrol edin",
"L5-2 bölgesini kontrol edin",
"Koridordaki powerrail üzerindeki sıra hatalarını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F018": {
uzunAdi: "Acil durdurma - S6 dolap kapağı STC2",
neden: "Dolabın kapağındaki acil durdurma itilmiş",
mudahale: [
"Acil durdurmayı çekin ve çıkarın",
"İstifleme aracını sıfırlayın",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşunu kullanın"
],
fotograf: "",
cozumler: []
},

"STC2 F019": {
uzunAdi: "Acil durdurma mobil paneli - STC2",
neden: "Mobil paneldeki acil durdurma itilmiş",
mudahale: [
"Acil durdurmayı çekin ve çıkarın",
"İstifleme aracını sıfırlayın",
"Paneldeki veya istifleme aracı kabinindeki sıfırlama tuşunu kullanın",
"Panel fişe takılı değilse bu arızayı da alırsınız",
"İstifleme aracını manuel modda kullanmak için mobil panel gereklidir"
],
fotograf: "",
cozumler: []
},

"STC2 F020": {
uzunAdi: "Movisafe'ten STO G21A1, izleme hızı X-aksı - STC2",
neden: "Frekans dönüştürücüsünden gelen güvenlik sinyalleri eksik. Movisafe modülü tamam değil. İstifleme aracı çok hızlı çalışır veya ana PLC ile bağlantısını kaybetmiştir.",
mudahale: [
"Tüm hız emniyet şalterlerinin doğru şekilde çalışıp çalışmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F021": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %70 M21B3",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılır",
mudahale: [
"Hız emniyet şalterinin %70 doğru şekilde çalışıp çalışmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F022": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %50 M21B4",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılır",
mudahale: [
"Hız emniyet şalterinin %50 doğru şekilde çalışıp çalışmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F023": {
uzunAdi: "Kontrol hız sınırı manyetik anahtar hızı %30 M21B5",
neden: "İstifleme aracı hızlandırmak için ön ve arka alanda çalıştırılır",
mudahale: [
"Hız emniyet şalterinin %30 doğru şekilde çalışıp çalışmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F024": {
uzunAdi: "Seri otomatik hareket STC2'de arıza",
neden: "İstifleme aracının bazı otomatik adımlarında bir arıza var",
mudahale: [
"Bu soruna neden olan diğer arıza numaralarını kontrol edin",
"Aracı ve aktif alarmları kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F025": {
uzunAdi: "Arıza konum izleme teleskopik tahrik M41B1",
neden: "Çatal ortada değil ve X ekseni çalışıyor olacak",
mudahale: [
"Konumlandırma çatalı sensörlerinin orta konumda olduğunu kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F026": {
uzunAdi: "Arıza konum izleme teleskopik tahrik M41B2",
neden: "Çatal ortada değil ve X-aksı çalışıyor olacak",
mudahale: [
"Konumlandırma çatalı için sensörlerin orta konumda olup olmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F027": {
uzunAdi: "Arıza emniyet giriş modülü (Emniyet Noktası 1734-IB8S)",
neden: "Emniyet giriş modülünde bir arıza var",
mudahale: [
"PLC'nin giriş modüllerini kontrol edin",
"Emniyet devresini kontrol edin",
"Arızalı modülü tespit edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F028": {
uzunAdi: "Arıza emniyet çıkış modülü (Emniyet Noktası 1734-OB8S)",
neden: "Emniyet çıkış modülünde bir arıza var",
mudahale: [
"PLC'nin çıkış modüllerini kontrol edin",
"Emniyet devresini kontrol edin",
"Arızalı modülü tespit edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F029": {
uzunAdi: "Arızası teleskopik hareket senkronize değil",
neden: "Çatallar senkronize değil, bir taraf tam ortada değil",
mudahale: [
"Konumlandırma çatalı için sensörlerin orta konumda olup olmadığını kontrol edin",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F030": {
uzunAdi: "Arızası teleskopik M41B1 anahtarlı değil",
neden: "Çatal yanlış pozisyonda",
mudahale: [
"Çatalın konumunu kontrol edin",
"Çatal ortada ancak sensör çalışmıyorsa sensörü kontrol edin",
"Konumlandırma çatalı sensörlerinin orta konumda olduğunu doğrulayın",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F031": {
uzunAdi: "Arızası teleskopik M41B2 anahtarlı değil",
neden: "Çatal yanlış pozisyonda",
mudahale: [
"Çatalın konumunu kontrol edin",
"Çatal ortada ancak sensör çalışmıyorsa sensörü kontrol edin",
"Konumlandırma çatalı sensörlerinin orta konumda olduğunu doğrulayın",
"İstifleme aracını sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F032": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F033": {
uzunAdi: "Arıza G21 Movidrive dönüştürücü, belgede yoktur, X-aksı",
neden: "Frekans dönüştürücü belgede yoktur",
mudahale: [
"İstifleme aracını manuel modda çalıştırın",
"Ana anahtarı açın",
"Kurulum moduna girin",
"Referans moduna girin",
"Paneldeki REF modunu açın",
"İstifleme aracını işaretli konuma getirin",
"Belirtilen X-aksına basın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F034": {
uzunAdi: "Arıza G31 Movidrive dönüştürücü, belgede yoktur, Y-aksı",
neden: "Frekans dönüştürücü belgede yoktur",
mudahale: [
"İstifleme aracını manuel modda çalıştırın",
"Ana anahtarı açın",
"Kurulum moduna girin",
"Referans moduna girin",
"Paneldeki REF modunu açın",
"İstifleme aracını işaretli konuma getirin",
"Belirtilen Y-aksına basın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F035": {
uzunAdi: "Arıza G41 Movidrive dönüştürücü, belgede yoktur, Z1-aksı normal",
neden: "Frekans dönüştürücü belgede yoktur",
mudahale: [
"İstifleme aracını manuel modda çalıştırın",
"Ana anahtarı açın",
"Kurulum moduna girin",
"Referans moduna girin",
"Paneldeki REF modunu açın",
"İstifleme aracını işaretli konuma getirin",
"Belirtilen Z1-aksına basın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F036": {
uzunAdi: "Arıza G51 Movidrive dönüştürücü, belgede yoktur, Z2-aksı çift",
neden: "Frekans dönüştürücü belgede yoktur",
mudahale: [
"İstifleme aracını manuel modda çalıştırın",
"Ana anahtarı açın",
"Kurulum moduna girin",
"Referans moduna girin",
"Paneldeki REF modunu açın",
"İstifleme aracını işaretli konuma getirin",
"Belirtilen Z2-aksına basın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F037": {
uzunAdi: "Arıza G21 Movidrive dönüştürücüsü, dönüştürücü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün arıza numarasını kontrol edin",
"Mobil panel veya dönüştürücü panelindeki hata kodunu inceleyin",
"SEW kılavuzundaki ilgili arıza koduna bakın",
"Arızayı giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F038": {
uzunAdi: "Arıza G31 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün arıza numarasını kontrol edin",
"Mobil panel veya dönüştürücü panelindeki hata kodunu inceleyin",
"SEW kılavuzundaki ilgili arıza koduna bakın",
"Arızayı giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F039": {
uzunAdi: "Arıza G41 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün arıza numarasını kontrol edin",
"Mobil panel veya dönüştürücü panelindeki hata kodunu inceleyin",
"SEW kılavuzundaki ilgili arıza koduna bakın",
"Arızayı giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F040": {
uzunAdi: "Arıza G51 Movidrive dönüştürücüsü arızası",
neden: "Frekans dönüştürücü bağlantıyı kaybetti veya bir arızası var",
mudahale: [
"Dönüştürücünün arıza numarasını kontrol edin",
"Mobil panel veya dönüştürücü panelindeki hata kodunu inceleyin",
"SEW kılavuzundaki ilgili arıza koduna bakın",
"Arızayı giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F041": {
uzunAdi: "Arıza boşluk kontrolü sağ taraf, selenin konumunu kontrol edin - M41B7",
neden: "Boşluk kontrolü için sensör meşguldür ve istifleme aracı X yönünde hareket eder",
mudahale: [
"Boşluk kontrolü sensörlerini kontrol edin",
"Sensör meşgul değilse istifleme aracını sıfırlayın",
"İstifleme aracını manuel moda alın",
"Ana anahtarı açın",
"Manuel moda girin",
"Paneldeki manuel modu açın",
"Seleyi boş bir yere götürün",
"Manuel modda sele seçimini yapın",
"Arızayı sıfırlayın",
"İstifleme aracını tekrar otomatik moda alın"
],
fotograf: "",
cozumler: []
},

"STC2 F042": {
uzunAdi: "Arıza boşluk kontrolü sol taraf, sele konumunu kontrol edin - M41B6",
neden: "Boşluk kontrolü için sensör meşguldür ve istifleme aracı X yönünde hareket eder",
mudahale: [
"Boşluk kontrolü sensörlerini kontrol edin",
"Sensör meşgul değilse istifleme aracını sıfırlayın",
"İstifleme aracını manuel moda alın",
"Ana anahtarı açın",
"Manuel moda girin",
"Paneldeki manuel modu açın",
"Seleyi boş bir yere götürün",
"Manuel modda sele seçimini yapın",
"Arızayı sıfırlayın",
"İstifleme aracını tekrar otomatik moda alın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F043": {
uzunAdi: "Arıza yer boş, koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı toplama komutu alır, ancak alan boştur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F044": {
uzunAdi: "Arıza derinlemesine boş yer, koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı toplama komutu alır, ancak alan boştur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F045": {
uzunAdi: "Arıza dolu yer, koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı bırakma komutu alır, ancak alan doludur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},

"STC2 F046": {
uzunAdi: "Arızası derinlemesine dolu yer, koordinatları kontrol edin, M41B8 sol taraf, M41B9 sağ taraf",
neden: "İstifleme aracı bırakma komutu alır, ancak alan doludur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F047": {
uzunAdi: "Arıza çatal, toplama komutu için doludur, boş olmalı, kontrol edin - çatal üzerindeki M41B3 kutusu",
neden: "İstifleme aracı toplama komutu alır, ancak istifleme aracı doludur",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F048": {
uzunAdi: "Arıza çatal, toplama komutu için boştur, dolu olmalı, kontrol edin - çatal üzerindeki M41B3 kutusu",
neden: "İstifleme aracı bırakma komutu alır, ancak istifleme aracı dolu değildir",
mudahale: [
"WMS alanı kilitler ve otomatik olarak yeni bir komut gönderir",
"Yeni komut geldikten sonra arızanın otomatik olarak giderildiğini kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F049": {
uzunAdi: "Arızası otomatik veya yarı otomatik sıralama, zaman aşımı",
neden: "İstifleme aracı otomatik sıralama için çok uzun süreye ihtiyaç duyar",
mudahale: [
"Diğer aktif arıza numaralarını kontrol edin",
"İstifleme aracının durumunu kontrol edin",
"Aktif arızaları giderin",
"Sistemi sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F050": {
uzunAdi: "Arıza PLC konveyör tekniğine bağlanma",
neden: "WMS ile bağlantı kaybolur",
mudahale: [
"PLC'yi kontrol edin",
"Veri sensörlerini kontrol edin",
"Ethernet kablosunu kontrol edin",
"İletişim sürecini kontrol edin",
"WMS bağlantısını kontrol edin"
],
fotograf: "",
cozumler: []
},

"STC2 F051": {
uzunAdi: "Arıza ES için bağlantı PLC konveyör tekniği veriler",
neden: "Makaralı konveyörden ana PLC'ye bağlantı kaybolur",
mudahale: [
"PLC'yi kontrol edin",
"Veri sensörlerini kontrol edin",
"Ethernet kablosunu kontrol edin",
"İletişim bağlantısını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F052": {
uzunAdi: "Arıza bağlantı WMS, komut yok, ana ekran STC'de sıfırlama",
neden: "Depodan gelen komutta ters giden bir şeyler var",
mudahale: [
"İstifleme aracının ana ekranındaki yumuşak tuş ile sıfırlayın",
"İletişim sürecinin çalıştığını kontrol edin",
"WMS bağlantısını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F053": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F054": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F055": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F056": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F057": {
uzunAdi: "Arıza STC2 içindeki K4 veya K5'i tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlış",
mudahale: [
"Kontaktörün başlama komutu vardır ancak geri bildirim çalışmıyor",
"Geri bildirim sinyali çalışıyor ancak kontaktörde bir komut yok"
],
fotograf: "",
cozumler: []
},
 
"STC2 F058": {
uzunAdi: "Arıza STC2 içindeki K6'yı tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlış",
mudahale: [
"Kontaktörün başlama komutu vardır ancak geri bildirim çalışmıyor",
"Geri bildirim sinyali çalışıyor ancak kontaktörde bir komut yok"
],
fotograf: "",
cozumler: []
},
 
"STC2 F059": {
uzunAdi: "Arıza STC2 içinde K7'yi tekrar kontrol edin",
neden: "Kontaktörler için bir durum yanlış",
mudahale: [
"Kontaktörün başlama komutu vardır ancak geri bildirim çalışmıyor",
"Geri bildirim sinyali çalışıyor ancak kontaktörde bir komut yok"
],
fotograf: "",
cozumler: []
},
 
"STC2 F060": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F061": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F062": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},

"STC2 F063": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F064": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},

"STC2 F065": {
uzunAdi: "Arıza iletişim X-aksı G21",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol edin",
"Kabloyu kontrol edin",
"Dönüştürücünün güç kaynağını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F066": {
uzunAdi: "Arıza haberleşme Y-aksı G31",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol edin",
"Kabloyu kontrol edin",
"Dönüştürücünün güç kaynağını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F067": {
uzunAdi: "Arıza haberleşme Z1-aksı G41",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol edin",
"Kabloyu kontrol edin",
"Dönüştürücünün güç kaynağını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F068": {
uzunAdi: "Arıza iletişim Z2-aksı G51",
neden: "Dönüştürücü ile iletişim arızalı",
mudahale: [
"Dönüştürücüyü kontrol edin",
"Kabloyu kontrol edin",
"Dönüştürücünün güç kaynağını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F069": {
uzunAdi: "Arıza iletişim I/O A5003",
neden: "Allen Bradley I/O modülü ile iletişim arızalı",
mudahale: [
"I/O modülünü kontrol edin",
"Kabloyu kontrol edin",
"Dönüştürücünün güç kaynağını kontrol edin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F070": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F071": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F072": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F073": {
uzunAdi: "Arıza veya uyarı akü modülü C2 aküsü",
neden: "Pil modülünde bir arıza var",
mudahale: [
"Modülün voltajını ölçün",
"Modül voltajı düşükse modülü değiştirin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F074": {
uzunAdi: "Arıza veya uyarı akü modülü C2 sıcaklığı 75°C'nin üzerinde",
neden: "Akü modülü çok sıcak",
mudahale: [
"Akü modülünü kontrol edin",
"Kusurlu olduğunda değiştirin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F075": {
uzunAdi: "Arıza pozisyon X-aksı maksimum konumun üzerinde",
neden: "İstifleme aracı için X konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F076": {
uzunAdi: "Arıza X-aksı konumu minimum konumun altında",
neden: "İstifleme aracı için X konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},

"STC2 F077": {
uzunAdi: "Arıza Y-aksı konumu maksimum konumun üzerinde",
neden: "İstifleme aracı için Y konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F078": {
uzunAdi: "Arıza Y-aksı konumu minimum konumun altında",
neden: "İstifleme aracı için Y konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F079": {
uzunAdi: "Arıza Z1-aksı konumu maksimum konumun üzerinde, normal derinlik",
neden: "İstifleme aracı için çatal Z1 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F080": {
uzunAdi: "Arıza Z1-aksı konumu minimum konumun altında, normal derinlik",
neden: "İstifleme aracı için çatal Z1 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F081": {
uzunAdi: "Arıza Z2-aksı konumu maksimum konumun üzerinde, normal derinlik",
neden: "İstifleme aracı için çatal Z2 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F082": {
uzunAdi: "Arıza Z2-aksı konumu minimum konumun altında, çift derinlik",
neden: "İstifleme aracı için çatal Z2 konumu yanlış",
mudahale: [
"Araç için WMS'den gelen taşıma komutunu kontrol edin",
"Belki de komut araç üzerinde silinmelidir"
],
fotograf: "",
cozumler: []
},
 
"STC2 F083": {
uzunAdi: "Dikkat anahtarlı şalter bypass modunda",
neden: "Anahtarlı şalter bypass konumunda",
mudahale: [
"Bypass moduna ihtiyacınız olmadığında anahtarlı şalteri diğer yöne çevirin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F084": {
uzunAdi: "Autostep'te arıza, çatal orta konumda değil",
neden: "Autostep'teki bir arıza nedeniyle çatal orta konumda değildir",
mudahale: [
"Çatalı manuel modda geriye doğru çalıştırın",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},

"STC2 F085": {
uzunAdi: "Arıza bir komut başladığında çatal ortada değil",
neden: "Yeni bir komut başladığında çatal ortada değil",
mudahale: [
"Çatalı manuel modda geriye doğru çalıştırın",
"Arızayı sıfırlayın"
],
fotograf: "",
cozumler: []
},
 
"STC2 F086": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F087": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F088": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F089": {
uzunAdi: "Uyarı her iki mobil panel de aynı resim alanında",
neden: "Her iki mobil panel de aynı resim alanında. Böylece panel manuel modlar için kullanılamaz",
mudahale: [
"STC2'ye ait olmayan mobil paneldeki resmi değiştirin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F090": {
uzunAdi: "Arıza RC02 alanı boş, sensör M41B9'un sağ tarafını kontrol edin ve komutu WMS'den tekrar gönderin",
neden: "İstifleme aracı toplama komutu alır, ancak alan boştur",
mudahale: [
"Kaldıraç platformundaki sensörü kontrol edin",
"Hareket sırasında WMS'den komutu tekrar gönderin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F091": {
uzunAdi: "Arıza RC02 alanı doludur, M41B8 sensörünü kontrol edin ve komutu WMS'den tekrar gönderin",
neden: "İstifleme aracı bırakma komutu alır, ancak alan doludur",
mudahale: [
"Kaldıraç platformundaki sensörü kontrol edin",
"Hareket sırasında WMS'den komutu tekrar gönderin"
],
fotograf: "",
cozumler: []
},
 
"STC2 F092": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F093": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F094": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F095": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
],
fotograf: "",
cozumler: []
},
 
"STC2 F096": {
uzunAdi: "Ayrılmış",
neden: "Rezerve alarm",
mudahale: [
"Kullanılmayan alarm kodu"
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
