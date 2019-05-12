const getData = () => {

    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const container = document.getElementById('container');
                container.innerHTML +=`
                <p> User ID: ${user.id}</p>
                <p>User NAME: ${user.name}</p>
                <p>User WEBSITE: ${user.website}</p>
                <p>..................................</p>
                    `;
            });
            

            
            

           
    })
}
}

window.addEventListener('scroll', getData);