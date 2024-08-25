const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const URL = 'https://cat-fact.herokuapp.com/facts';
btn.addEventListener('click', () => {
    const getdata = async () => {
        console.log('Getting data......');
        let response = await fetch(URL); //using a GET request (can only recieves data from a server)
        let data = await response.json();
        text.innerText = (data[(Math.floor(Math.random() * data.length))]).text;
    }
    getdata();
});
// json = fetchJSON(`/currencies/{fromCurrency}`)
// rate = json[fromCurrency][toCurrency]