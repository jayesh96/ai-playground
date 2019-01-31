class Jayesh {
  getValue(params) {
    const url = `https://rest.coinapi.io/v1/exchangerate/BTC?apikey=20E9EFAC-2D10-4307-BF4E-EC5B6C605341`;
    console.log(url, '-->');
    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        return url;
      })
  }
}

var jayesh = new Jayesh();
window.jayesh = jayesh;
