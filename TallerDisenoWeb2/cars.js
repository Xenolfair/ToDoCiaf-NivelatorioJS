// Model
class Vehicle {
    constructor(make, model, year, reference) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
   // View                                                                                                                  
class VehicleView {
    constructor() {
        this.vehicleForm = document.getElementById('vehicle-form');
        this.makeInput = document.getElementById('make');
        this.modelInput = document.getElementById('model');
        this.yearInput = document.getElementById('year');
        this.vehicleList = document.getElementById('vehicle-list');
    }
    renderVehicleList(vehicles) {
        this.vehicleList.innerHTML = ''; // Limpiar la lista antes de renderizar
        vehicles.forEach(vehicle => {
            const li = document.createElement('li');
            li.textContent = `${vehicle.make} ${vehicle.model} (${vehicle.year})`;
            this.vehicleList.appendChild(li);
        });
    }

    clearForm() {
        this.makeInput.value = '';
        this.modelInput.value = '';
        this.yearInput.value = '';
    }
}
   // Controller
class VehicleController {
    constructor() {
        this.vehicles = [];
        this.view = new VehicleView();

        // Manejar el evento de envío del formulario
        this.view.vehicleForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
        // Recoger valores del formulario
        const make = this.view.makeInput.value;
        const model = this.view.modelInput.value;
        const year = this.view.yearInput.value;

        // Crear nuevo vehículo y añadirlo al array
        const vehicle = new Vehicle(make, model, year);
        this.vehicles.push(vehicle);

        // Renderizar lista actualizada de vehículos
        this.view.renderVehicleList(this.vehicles);

        // Limpiar los campos del formulario
        this.view.clearForm();
    }
}

   // Initialize the application
   const vehicleController = new VehicleController();
   const array2 = [];
   const array3 = new Array();
   array3.push();
   array2.push();