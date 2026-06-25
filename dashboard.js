// 1. Las mismas credenciales de tu app.js
const SUPABASE_URL = "https://TU_PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_API_KEY_ANONIMA_AQUÍ";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const protectedBody = document.getElementById('protectedBody');
const logoutBtn = document.getElementById('logoutBtn');

// 2. Función para verificar si el usuario tiene una sesión activa
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        // Si NO hay sesión, redirige inmediatamente al login
        window.location.href = "index.html";
    } else {
        // Si SÍ hay sesión, quita la clase "d-none" de Bootstrap para mostrar la página
        protectedBody.classList.remove('d-none');
    }
}

// 3. Función para cerrar sesión de forma segura
logoutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = "index.html"; // Redirige al login tras salir
});

// Ejecutar la verificación nada más cargar la página
checkAuth();
