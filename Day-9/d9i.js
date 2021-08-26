var Bleach = {
  firstname: "Ichigo",
  lastname: "Kurosaki",
  getFullname: function () {
    var full_name = this.firstname + " " + this.lastname;
    return full_name;
  },
};

var jobdescription = function (shikai, bankai) {
  console.log(this.getFullname() + ":- shinigami");
  console.log(this.getFullname() + " shikai " + shikai + " bankai " + bankai);
};

jobdescription.call(Bleach, "Zangetsu", "Tensa Zangetsu"); // Pika Chu  loves sushi and algorithms
jobdescription.call(Bleach, ["Zangetsu", "Tensa Zangetsu"]);

var logPokemon = getFullname.bind(Bleach);
logPokemon();
