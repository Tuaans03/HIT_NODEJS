fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));


    async function User(){
        try{
            const res =await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await res.json();
            console.log(result);
        }
        catch(err){
            console.log(err);
        }
    }