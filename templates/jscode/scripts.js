window.onload = function() {
    // open the default tab
    document.getElementById("tabHomeButton").click();
}

function fnSubmitRegistration() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const institution = document.getElementById("institution").value;

        const formData = {
            name: name,
            email: email,
            institution: institution
        };

        fetch("https://script.google.com/macros/s/AKfycbw5_bbCSp7Vzxjau5duBmtzoelCr_jwzsD0wP2UQbZmtQx1Mgiu95IcnSafBXMaVyvNxQ/exec", {
            method: "POST",
            mode: "no-cors",
            cache: "no-cache",
            contentType: "application/json",
            processData: false,
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("registrationStatus").innerHTML = "Registration successful!";
            })
            .catch((error) => {
                document.getElementById("registrationStatus").innerHTML = "Error: "+error;
            });
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("institution").value = "";
}

function fnOpenTab(tabName) {
    let tabContent = document.getElementsByClassName("tabcontent");
    for(let i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.getElementsByClassName("tabLinks");
    for (let i=0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}
