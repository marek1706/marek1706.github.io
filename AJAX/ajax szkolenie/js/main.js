//1. AJAX - fetch

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then( response => response.json())
// .then( response => console.log(response));
// powstała baza danych z której możemy pobierać elementy (f12)

// 2.AJAX - $.getJSON()

// $.getJSON('https://jsonplaceholder.typicode.com/posts', response => {
    // console.log(response);
    // }
// )

// jeśli dane będą tylko w formacie json

// 3.AJAX - $.ajax()

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users/1",
//     dataType: "json",
//     success: function (resultJSON) { 
//         console. log(resultJSON);
//     },
//     onerror: function (msg) { 
//         console. log(msg);
//     } });


// 4. AJAX - czysta JS funkcja ajax()

const ajax = (method, url) => {
    // tworzymy obiekt
    let httpReq = new XMLHttpRequest();

    // otwieramy połączenie

    httpReq.open(method, url);

    

    // w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {

        // jeśli wszystko poszło pomyślnie i dane zostały zwrócone
        if (httpReq.readyState === 4 && httpReq.status === 200) {

            // wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;

            // parsujemy JSON stringa do tablicy z obiektami
            response = Json.parse(response);

            console.log(response);

            // rozłączamy się z serwerem
            httpReq = null;
        }
    
    } 
    // wywołujemy onreadystatechange()
    httpReq.send();
}

// ajax('GET', 'https://jsonplaceholder.typicode.com/users')


setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users');
}, 3000);
