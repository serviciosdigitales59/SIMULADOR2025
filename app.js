const SUPABASE_URL = "https://TU_PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_API_KEY_ANONIMA_AQUÍ";

// 2. Inicializar el cliente de Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. Capturar elementos del DOM (HTML)
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginBtn = document.getElementById('loginBtn');
const btnText = document.getElementById('btnText');
const btnSpinner = document.getElementById('btnSpinner');

// 4. Escuchar el evento de envío del formulario
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Mostrar estado de carga en el botón de Bootstrap
    btnText.textContent = "Verificando...";
    btnSpinner.classList.remove('d-none');
    loginBtn.disabled = true;
    errorMessage.classList.add('d-none');

    try {
        // Petición de autenticación a Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            // Si las credenciales están mal, Supabase devuelve un error
            throw error;
        }

        // ¡Éxito! El usuario es correcto
        // Aquí pones el nombre de tu página protegida (ej: 'dashboard.html' o 'contenido.html')
        window.location.href = "dashboard.html"; 

    } catch (err) {
        // Manejo de errores visuales con Bootstrap
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
        errorMessage.classList.remove('d-none');
        
        // Restablecer el botón
        btnText.textContent = "Ingresar";
        btnSpinner.classList.add('d-none');
        loginBtn.disabled = false;
    }
});
