let mesaj = 
`
Migros'a hoşgeldiniz.
Money kartınız varmı?
1- Evet
2- Hayır
`


const urunler = [
    {  
        urunIsmi : "Süt",
        fiyat: 15
    },
    {
        urunIsmi : "Bebek bezi",
        fiyat: 100
    }, 
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 200
    }

]

let sonuc= confirm(mesaj)
let odenecekTutar;

if(sonuc) {
    // money card var
    let isim = prompt("Adınızı giriniz")
    let soyisim = prompt("Soyisminizi giriniz")
    
    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `
        Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar : ${odenecekTutar}
        `);

} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek tutar: ${odenecekTutar}`)
}