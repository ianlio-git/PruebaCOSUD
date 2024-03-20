function showFormData() {
    // Obtener los valores de los campos del formulario
    const companyName = document.getElementById('companyName').value;
    const contactName = document.getElementById('contactName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const comments = document.getElementById('comments').value;

    // Crear la URL con los parámetros de los datos del formulario
    const url = `mostrar_datos.html?companyName=${encodeURIComponent(companyName)}&contactName=${encodeURIComponent(contactName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&category=${encodeURIComponent(category)}&comments=${encodeURIComponent(comments)}`;

    // Redirigir a la página de mostrar datos
    window.location.href = url;
}

const categories = [
    "Hormigón Elaborado",
    "Acabados Interiores",
    "Acabados Exteriores",
    "Instalaciones Eléctricas",
    "Instalaciones Sanitarias",
    "Estructuras Metálicas",
    "Excavación y Movimiento de Tierras",
    "Paisajismo y Jardinería",
    "Instalaciones contra Incendios",
    "Señalización - Demarcación",
    "Instalaciones de Telecomunicaciones",
    "Estructuras Prefabricadas",
    "Gestión de Residuos y Reciclaje",
    "Seguridad y Salud",
    "Ascensores y Montacargas",
    "Automatización y Control",
    "Instalaciones Termomecánica",
    "Instalaciones de Gas",
    "Materiales de Construcción",
    "Materiales Eléctricos",
    "Materiales Sanitarios",
    "Materiales de Proteccion Personal",
    "Materiales de Impermeabilización",
    "Carpintería de Aluminio y Vidrio",
    "Maquinarias y Equipos electicos",
    "Materiales de Ferreteria"
];

function filterCategories(input) {
    const filteredCategories = categories.filter(category => category.toLowerCase().includes(input.toLowerCase()));
    const filteredCategoriesContainer = document.getElementById('filteredCategoriesContainer');
    
    if (filteredCategories.length > 0) {
        filteredCategoriesContainer.style.display = 'block'; // Mostrar el contenedor si hay resultados filtrados
        filteredCategoriesContainer.innerHTML = '';
        filteredCategories.forEach(category => {
            const option = document.createElement('div');
            option.classList.add('form-group');
            option.classList.add('filtered-category');
            option.addEventListener('click', () => {
                document.getElementById('category').value = category;
                document.getElementById('category').focus(); // Asegurarse de que el campo de búsqueda obtenga el foco
                filteredCategoriesContainer.style.display = 'none'; // Ocultar el contenedor al seleccionar una categoría
            });
            const boldText = document.createElement('strong');
            boldText.textContent = category.substring(0, input.length);
            option.appendChild(boldText);
            option.innerHTML += category.substring(input.length);
            filteredCategoriesContainer.appendChild(option);
        });
    } else {
        filteredCategoriesContainer.style.display = 'none'; // Ocultar el contenedor si no hay resultados filtrados
    }
}
