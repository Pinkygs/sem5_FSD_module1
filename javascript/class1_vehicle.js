const vehicle = {
    vname: "car",
    tyres: 4,
    print_tyres() {
        console.log("No of tyres are", this.tyres);
    }
};

vehicle.print_tyres(); // Output: No of tyres are 4