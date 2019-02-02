class Jayesh {
  getValue(params) {
    console.log(params,"-----.")
    const url = `https://rest.coinapi.io/v1/exchangerate/BTC?apikey=20E9EFAC-2D10-4307-BF4E-EC5B6C605341`;
    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        return data["asset_id_base"];
      });
  }

  translate(params) {
    return fetch(
      `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDV3nONSsyotA2t67H6S-Jo963SQx8HGms&q=${params}&target=es`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        try{
          return data.data.translations[0].translatedText;
        }catch(err){
          return 'Oops something happened'
        }
        
      });
  }
}

var jayesh = new Jayesh();
window.jayesh = jayesh;
