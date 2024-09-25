var cities1 = document.getElementById("city1");
var districts1 = document.getElementById("district1");
var wards1 = document.getElementById("ward1");

var cities2 = document.getElementById("city2");
var districts2 = document.getElementById("district2");
var wards2 = document.getElementById("ward2");

var Parameter = {
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
    method: "GET",
    responseType: "application/json",
};

var promise = axios(Parameter);
promise.then(function (result) {
    renderCity(result.data, cities1, districts1, wards1);
    renderCity(result.data, cities2, districts2, wards2);
});

function renderCity(data, cities, districts, wards) {
    for (const x of data) {
        cities.options[cities.options.length] = new Option(x.Name, x.Id);
    }

    cities.onchange = function () {
        districts.length = 1;
        wards.length = 1;

        if (this.value != "") {
            const result = data.filter(n => n.Id === this.value);

            for (const k of result[0].Districts) {
                districts.options[districts.options.length] = new Option(k.Name, k.Id);
            }
        }
    };

    districts.onchange = function () {
        wards.length = 1;
        const dataCity = data.filter((n) => n.Id === cities.value);

        if (this.value != "") {
            const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

            for (const w of dataWards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
            }
        }
    };
}
