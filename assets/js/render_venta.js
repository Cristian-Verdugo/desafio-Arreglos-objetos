document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-propiedades");
  propiedades_venta.forEach((propiedad) => {
    contenedor.innerHTML += generarTemplate(propiedad);
  });
});

function generarTemplate(p) {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${p.src}" class="card-img-top" alt="${p.nombre}" />
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${p.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${p.habitaciones} Habitaciones</p>
        <p><i class="fas fa-dollar-sign"></i> ${p.costo}</p>
        <p class="${p.smoke ? 'text-success' : 'text-danger'}">
          <i class="fas ${p.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
          ${p.smoke ? 'Permitido fumar' : 'No se permite fumar'}
        </p>
        <p class="${p.pets ? 'text-success' : 'text-danger'}">
          <i class="fas ${p.pets ? 'fa-paw' : 'fa-ban'}"></i> 
          ${p.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </p>
      </div>
    </div>
  </div>`;
}
