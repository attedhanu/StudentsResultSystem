document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();


    // Get student details

    let rollNo = document.getElementById("rollNo").value;

    let name = document.getElementById("name").value;

    let department = document.getElementById("department").value;


    // Get marks

    let cpp = Number(document.getElementById("cpp").value);

    let dbms = Number(document.getElementById("dbms").value);

    let agile = Number(document.getElementById("agile").value);

    let maths = Number(document.getElementById("maths").value);

    let adsaa = Number(document.getElementById("adsaa").value);

    let dae = Number(document.getElementById("dae").value);


    // Calculate total

    let total =
        cpp +
        dbms +
        agile +
        maths +
        adsaa +
        dae;


    // Calculate average

    let average = total / 6;


    // Calculate grade

    let grade;

    if (average >= 90) {

        grade = "A+";

    } else if (average >= 80) {

        grade = "A";

    } else if (average >= 70) {

        grade = "B";

    } else if (average >= 60) {

        grade = "C";

    } else if (average >= 50) {

        grade = "D";

    } else if (average >= 40) {

        grade = "E";

    } else {

        grade = "F";

    }


    // Calculate PASS / FAIL

    let result;

    if (
        cpp >= 35 &&
        dbms >= 35 &&
        agile >= 35 &&
        maths >= 35 &&
        adsaa >= 35 &&
        dae >= 35
    ) {

        result = "PASS";

    } else {

        result = "FAIL";

    }


    // Display student details

    document.getElementById("displayRoll").textContent = rollNo;

    document.getElementById("displayName").textContent = name;

    document.getElementById("displayDepartment").textContent = department;


    // Display subject marks

    document.getElementById("displayCpp").textContent = cpp;

    document.getElementById("displayDbms").textContent = dbms;

    document.getElementById("displayAgile").textContent = agile;

    document.getElementById("displayMaths").textContent = maths;

    document.getElementById("displayAdsaa").textContent = adsaa;

    document.getElementById("displayDae").textContent = dae;


    // Display total

    document.getElementById("displayTotal").textContent =
        total + " / 600";


    // Display average

    document.getElementById("displayAverage").textContent =
        average.toFixed(2);


    // Display grade

    document.getElementById("displayGrade").textContent =
        grade;


    // Display result

    document.getElementById("displayResult").textContent =
        result;

});