
const getData = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then( response => response.json())
    .then( response => {
        const user = response;
        const paragraf = document.createElement('p');

        paragraf.innerHTML = `
        <span>User ID: ${user.id}</span><br />
        <span>User NAME: ${user.name}</span><br />
        <span>User WEBSITE: ${user.website}</span>
        `;

        // metoda 2 dla całego obiektu
        // const userKeys = Object.keys(user);
        // userKeys.forEach(key => {
        //     const paragraf = document.createElement('p');

        //     if (typeof user[key === 'string']) {
        //         paragraf.innerHTML = `
        //         ${key.toUpperCase()} : ${user[key]}`
        //     }
        
        button.insertAdjacentElement('afterend', paragraf);
        console.log(user);})
};

const button = document.getElementById("button");
button.addEventListener('click', getData);


