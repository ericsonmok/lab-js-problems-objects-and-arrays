// Customer Object
var Customer = function (customerInfo) {
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPrice = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;
  
  this.quotePrice = function (rentalDuration) {
    this.rentalDuration = rentalDuration;
    return this.rentalPrice * this.rentalDuration
  };

  this.reserve = function (customer, rentalDuration) {
    if (this.available) {
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    } else {
      return false;
    }
    
  };

  this.return = function () {
    if (this.available) {
      return "Sorry, this car has already been returned";
    } else {
      this.available = true;
      this.customer = null;
      this.rentalDuration = null;
    }
  };

};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.addCar = function (carObj) {
    if (this.getCar(carObj.id)){
    console.log("ID already exists");
  } else {
    this.cars.push(carObj.id);
    console.log("Car added to warehouse");
  }
  };

  this.addCustomer = function (customerObj) {
    if (this.getCar(customerObj.id)) {
    console.log("ID already exists");
  } else {
    this.customers.push(customerObj.id);
    console.log("Customer added to warehouse");
  }
  };

  this.removeCar = function (carID) {
    if (this.findCarIndex(carID) >= 0) {
      this.cars.splice(this.findCarIndex(carID),1)
      console.log("Car deleted"); 
  } else {
    console.log("Car not found");
  }
  };

  this.availableCars = function () {
    var filtered = this.cars.available.filter(true);
    console.log(filtered);
  };

  this.rentCar = function (customerID, rentalDuration) {
    if (this.availableCars().length !== 0) {
    console.log ("All our cars have been rented.");
    } else if {(this.getCustomer (customerID) === true) {
    customerID.carRented = availableCars[0];
    availableCars[0].reserve(customers[this.getCustomer(customerID)], this.rentalDuration);
    console.log ("The car has been reserved.");
    } else {
    console.log ("Please provide a valid customerID".);
    }
    }
  };

  this.returnCar = function (customerID) {
    if (this.getCustomer (customerID) === true) {
    this.customers[this.getCustomer(customerID)].return();
    this.customers[this.getCustomer(customerID)].carRented = null;
    console.log ("Thank you for using our service");
    } else {
    console.log ("Please provide a valid customer ID");
    }
  };

  this.totalRevenue = function () {
    return this.cars.reduce(function (a,b){
      return a+b } , 0);
  }


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited ');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
