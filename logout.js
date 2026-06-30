async function salir(){

    await supabase.auth.signOut();

    window.location="index.html";

}
