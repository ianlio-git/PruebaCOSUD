// Función para enviar el formulario
function showFormData() {
    // Obtener los valores de los campos del formulario
    const companyName = document.getElementById('companyName').value;
    const cuit = document.getElementById('cuit').value;
    const enterprise = document.getElementById('enterprise').value;
    const contactName = document.getElementById('contactName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const subCategory = document.getElementById('subCategory').value;
    const references = document.getElementById('references').value;

    // Crear la URL con los parámetros de los datos del formulario
    const url = `mostrar_datos.html?companyName=${encodeURIComponent(companyName)}&cuit=${encodeURIComponent(cuit)}&enterprise=${encodeURIComponent(enterprise)}&contactName=${encodeURIComponent(contactName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(subCategory)}&references=${encodeURIComponent(references)}`;

    // Redirigir a la página de mostrar datos
    window.location.href = url;
}

// Código para el filtrado de categorías
const categories = [
    "Materiales",
    "Arquitectura",
    "Instalaciones",
    "Maquinaria y Equipamiento"
];

function filterCategories(input) {
    const filteredCategories = categories.filter(category => category.toLowerCase().includes(input.toLowerCase()));
    const filteredCategoriesContainer = document.getElementById('filteredCategoriesContainer');

    if (filteredCategories.length > 0) {
        filteredCategoriesContainer.innerHTML = '';
        filteredCategories.forEach(category => {
            const option = document.createElement('div');
            option.classList.add('filtered-category');
            option.textContent = category;
            option.addEventListener('click', () => {
                document.getElementById('category').value = category;
                filteredCategoriesContainer.style.display = 'none'; // Ocultar el contenedor al seleccionar una categoría
            });
            filteredCategoriesContainer.appendChild(option);
        });
        // Ajustar la posición y el ancho del contenedor de categorías filtradas
        const rect = document.getElementById('category').getBoundingClientRect();
        const containerWidth = rect.width - 10; // Ajuste de tamaño para coincidir con el campo de entrada
        filteredCategoriesContainer.style.top = rect.bottom + 'px';
        filteredCategoriesContainer.style.left = rect.left + 'px';
        filteredCategoriesContainer.style.width = containerWidth + 'px';
        filteredCategoriesContainer.style.display = 'block'; // Mostrar el contenedor si hay resultados filtrados
    } else {
        filteredCategoriesContainer.style.display = 'none'; // Ocultar el contenedor si no hay resultados filtrados
    }
}

// Código para el filtrado de subcategorías
const subCategories = [
    "Subcategoría 1",
    "Subcategoría 2",
    "Subcategoría 3",
    "Subcategoría 4"
];

function filterSubCategories(input) {
    const filteredSubCategories = subCategories.filter(subCategory => subCategory.toLowerCase().includes(input.toLowerCase()));
    const filteredSubCategoriesContainer = document.getElementById('filteredSubCategoriesContainer');

    if (filteredSubCategories.length > 0) {
        filteredSubCategoriesContainer.innerHTML = '';
        filteredSubCategories.forEach(subCategory => {
            const option = document.createElement('div');
            option.classList.add('filtered-sub-category');
            option.textContent = subCategory;
            option.addEventListener('click', () => {
                document.getElementById('subCategory').value = subCategory;
                filteredSubCategoriesContainer.style.display = 'none'; // Ocultar el contenedor al seleccionar una subcategoría
            });
            filteredSubCategoriesContainer.appendChild(option);
        });
        // Ajustar la posición y el ancho del contenedor de subcategorías filtradas
        const rect = document.getElementById('subCategory').getBoundingClientRect();
        const containerWidth = rect.width - 10; // Ajuste de tamaño para coincidir con el campo de entrada
        filteredSubCategoriesContainer.style.top = rect.bottom + 'px';
        filteredSubCategoriesContainer.style.left = rect.left + 'px';
        filteredSubCategoriesContainer.style.width = containerWidth + 'px';
        filteredSubCategoriesContainer.style.display = 'block'; // Mostrar el contenedor si hay resultados filtrados
    } else {
        filteredSubCategoriesContainer.style.display = 'none'; // Ocultar el contenedor si no hay resultados filtrados
    }
}

// Evento de carga del DOM
document.addEventListener("DOMContentLoaded", function() {
    const categoryInput = document.getElementById('category');
    const subCategoryInput = document.getElementById('subCategory');
    const filteredCategoriesContainer = document.getElementById('filteredCategoriesContainer');
    const filteredSubCategoriesContainer = document.getElementById('filteredSubCategoriesContainer');

    categoryInput.addEventListener('input', function() {
        filterCategories(categoryInput.value);
    });

    subCategoryInput.addEventListener('input', function() {
        filterSubCategories(subCategoryInput.value);
    });

    // Evento clic fuera del contenedor de categorías filtradas
    document.addEventListener('click', function(event) {
        if (!filteredCategoriesContainer.contains(event.target) && event.target !== categoryInput) {
            filteredCategoriesContainer.style.display = 'none';
        }
    });

    // Evento clic fuera del contenedor de subcategorías filtradas
    document.addEventListener('click', function(event) {
        if (!filteredSubCategoriesContainer.contains(event.target) && event.target !== subCategoryInput) {
            filteredSubCategoriesContainer.style.display = 'none';
        }
    });

    // Ajustar la posición vertical del contenedor de categorías filtradas
    function adjustCategoriesContainerPosition() {
        const rectInput = categoryInput.getBoundingClientRect();
        const containerWidth = rectInput.width - 10; // Ajuste de tamaño para coincidir con el campo de entrada
        filteredCategoriesContainer.style.top = rectInput.bottom + 'px';
        filteredCategoriesContainer.style.left = rectInput.left + 'px';
        filteredCategoriesContainer.style.width = containerWidth + 'px';
    }

    // Ajustar la posición vertical del contenedor de subcategorías filtradas
    function adjustSubCategoriesContainerPosition() {
        const rectInput = subCategoryInput.getBoundingClientRect();
        const containerWidth = rectInput.width - 10; // Ajuste de tamaño para coincidir con el campo de entrada
        filteredSubCategoriesContainer.style.top = rectInput.bottom + 'px';
        filteredSubCategoriesContainer.style.left = rectInput.left + 'px';
        filteredSubCategoriesContainer.style.width = containerWidth + 'px';
    }

    // Llamar a las funciones de ajuste de posición cuando se cargue la página y cuando se redimensione la ventana
    window.addEventListener('DOMContentLoaded', function() {
        adjustCategoriesContainerPosition();
        adjustSubCategoriesContainerPosition();
    });

    window.addEventListener('resize', function() {
        adjustCategoriesContainerPosition();
        adjustSubCategoriesContainerPosition();
    });

    // Ajustar la posición de los contenedores al hacer scroll
    window.addEventListener('scroll', function() {
        adjustCategoriesContainerPosition();
        adjustSubCategoriesContainerPosition();
    });
});
