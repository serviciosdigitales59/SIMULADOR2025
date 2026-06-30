async function verificarSesion(){

    const { data } =
    await supabase.auth.getSession();

    if(!data.session){

        window.location="index.html";

    }

}

verificarSesion()
