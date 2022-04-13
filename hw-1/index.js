let cardNumberDOM = document.getElementById("cardNumber");
let errorMessageDOM = document.getElementById("errorMessage");
let cardTitleDOM = document.getElementById("cardTitle");
let crediCardContainerDOM = document.getElementById("creditCardContainer");

// Kullanıcı tarafından girilen kart numarası alınır.
cardNumberDOM.addEventListener("change", (event) => {
  errorMessage("");
  crediCardContainerDOM.style.height = "300px";
  resultMessage("");
  let cardNumber = event.target.value;
  let cardNumberArray = cardNumber.replaceAll(" ", "").split("");
  cardNumberArray.length && numberDigitCheck(cardNumberArray);
});

/*
 * Kart kontrolü fonksiyonları
 * Aşağıdan yukarı doğru fonksiyonlar çalışır
 */

// luhm kontrol
const luhmCheck = (cardNumber) => {
  let checkDigit = cardNumber.map((num, index) => {
    if (index % 2 === 0) {
      return num * 2 > 9 ? num * 2 - 9 : num * 2;
    } else {
      return num;
    }
  });

  checkDigit.reduce((a, b) => a + b) % 10 === 0
    ? resultMessage("VALID")
    : resultMessage("INVALID");
};

// Kart numarasında en az iki rakam farklı mı?
const checkForTwoDifferentDigits = (cardNumberArray) => {
  cardNumberArray.some((num, index) => {
    return num !== cardNumberArray[0];
  })
    ? luhmCheck(cardNumberArray)
    : errorMessage("En az iki rakam farklı olmalıdır.");
};

// Kart numarasının son rakımı çift mi?
const lastDigitCheck = (cardNumberArray) => {
  cardNumberArray[cardNumberArray.length - 1] % 2 === 0
    ? checkForTwoDifferentDigits(cardNumberArray)
    : errorMessage("Son hane çift olması gerekmektedir.");
};

// Kart numarasının toplamı 16'dan büyük mü?
const sumCheck = (cardNumberArray) => {
  cardNumberArray.reduce((a, b) => {
    return a + b;
  }, 0) > 16
    ? lastDigitCheck(cardNumberArray)
    : errorMessage("Lütfen toplamın 16'dan büyük olan bir sayı giriniz.");
};

// Kart numarısı 16 haneli mi?
const lengthCheck = (cardNumberArray) => {
  cardNumberArray.length === 16
    ? sumCheck(cardNumberArray)
    : errorMessage("Lütfen 16 haneli bir kredi kartı numarası giriniz.");
};

// Kart numarası integer'a dönüştürülür.
const convertToNumber = (cardNumberArray) => {
  let newCardNumberArray = [];
  for (let num of cardNumberArray) {
    if (num !== "-") newCardNumberArray.push(parseInt(num));
  }
  lengthCheck(newCardNumberArray);
};

// Kart numarasının tamamı rakamlardan veya orta çizgiden mi oluşuyor?
const numberDigitCheck = (cardNumberArray) => {
  cardNumberArray.every((num) => {
    return (num >= 0 && num <= 9) || num === "-";
  })
    ? convertToNumber(cardNumberArray)
    : errorMessage("Lütfen sadece rakam ve orta çizgi giriniz.");
};

/*
 * Çıktı fonksiyonları
 */

// Hata mesajının gösterilmesi için kullanılan fonksiyon.
const errorMessage = (message) => {
  errorMessageDOM.innerText = message;
  crediCardContainerDOM.style.height = "320px";
};

// Sonucun gösterilmesi için kullanılan fonksiyon.
const resultMessage = (message) => {
  cardTitleDOM.innerText = message;
};
