document
.getElementById("btnIngresar")
.addEventListener("click", login);

async function login(){

    const email =
    document.getElementById("usuario").value;

    const password =
    document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });

    if(error){

        alert(error.message);

        return;

    }

    
}

