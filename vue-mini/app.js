function car(brand, model, diler, year, phone, image) {
    return{
        brand, model, diler, phone, image, year
    }
}
const log = (text, type, date = new Date()) => {
    return ({ text, type, date });
}

const cars = [
    car('Toyota', 'Camry', 'Sib Auto', '2019', '+7(929)-444-44-44', 'images/Toyota.jpg'),
    car('Mercedes-Benz', 'Brabus', 'Auto-Germany', '2019', '+7(929)-555-44-55', 'images/MercedesBenzBrabus.jpg'),
    car('Peugeot', '508', 'Automir', '2019', '+7(913)-558-43-88', 'images/peugeot508.jpg'),
    car('BMW', '750L', 'Auto-Germany', '2019', '+7(929)-555-44-55', 'images/BMW750.jpg'),
    car('Honda', 'FCV', 'Automir', '2019', '+7(913)-558-43-88', 'images/HondaFCV.jpg'),
    car('Honda', 'Vezel', 'Sib Auto', '2019', '+7(929)-444-44-44', 'images/HondaVezelModulo.jpg')
]

new Vue({
    el:'#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Sucess order: ${this.car.brand} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.brand} - ${this.car.model}`, 'cnl')
            )
            }
        },
    computed:{
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.brand.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters:{
        date(value) {
            return value.toLocaleString()
        }
    }
})