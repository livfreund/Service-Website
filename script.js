//why use a seperate script? 
//- easier to update without messing with the html structure everytime 
//- better performace
//- more organized code 
//- good idea to put aditional trasitions you want in the websites that aren't necessarily part of the og structure in a seperate script 

let subtotal = 0;
let total_hours = 0;

//different services for each dropdown w titles 
//const is used to declare variables that cannot be reassigned after their initial assignment 
const serviceCategories = [
    
    {title: "GreenMolding Sanding Tests:", 
    services: [
        { name: "A", price: 100, hours: 1.00 },
        { name: "B", price: 75, hours: 1.00 },
        { name: "C", price: 80, hours: 1.00 },
        { name: "D", price: 120, hours: 1.00 },
        { name: "E", price: 120, hours: 1.00 }
    ]},
    {title: "Green Sand Sample Prep:", 
    services: [
        { name: "F", price: 150, hours: 1.00 }, 
        { name: "G", price: 50, hours: 1.00 },
        { name: "H", price: 90, hours: 1.00 },
        { name: "I", price: 120, hours: 1.00 },
        { name: "J", price: 120, hours: 1.00 }
    ]},
    {title: "Green Sand Elevated Temperature Tests (Dilatometer):", 
    services: [
        { name: "K", price: 130, hours: 1.00 },
        { name: "L", price: 60, hours: 1.00 },
        { name: "M", price: 80, hours: 1.00 },
        { name: "N", price: 75, hours: 1.00 },
        { name: "O", price: 120, hours: 1.00 }
    ]},
    {title: "Base Sand Tests:", 
    services: [
        { name: "P", price: 110, hours: 1.00 },
        { name: "Q", price: 95, hours: 1.00 },
        { name: "R", price: 85, hours: 1.00 },
        { name: "S", price: 120, hours: 1.00 },
        { name: "T", price: 50, hours: 1.00 }
    ]},
    {title: "Base Sand Prep & Treatments:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Shell Sands:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Core Sand:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Core Specimen Preparation:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Base Sand Prep for Core Sand Mix Profiles:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Miscellaneous Core Tests:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Elevated Temperature tests (Cold/Hot Box, No Bake, Oil Sand, Shell):", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Miscellaneous Sand Treatments:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Environmental Testing:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Standard Test Castings:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Standard Laboratory Hourly Rate:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
    {title: "Rush Charges:", 
    services: [
        { name: "U", price: 200, hours: 1.00 },
        { name: "V", price: 175, hours: 1.00 },
        { name: "W", price: 140, hours: 1.00 },
        { name: "X", price: 110, hours: 1.00 },
        { name: "Y", price: 60, hours: 1.00 }
    ]},
];

//document object represents the webpage (DOM - Document Object Model) and provides methods to interact with it..
//allows js to manipulate html and css dynamically 
const container = document.getElementById('category-container'); 

serviceCategories.forEach((category, index) => {
    //create a container for the title and dropdown
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    //create the title
    let title = document.createElement("h3");
    title.textContent = category.title;
    title.classList.add("category-title");
    
    //append the title to the category container
    categoryContainer.appendChild(title);

    //create container for select and button
    let dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown-button-container");

    //create select dropdown
    let select = document.createElement("select");
    select.id = `services${index + 1}`;

    //default option
    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.textContent = "Choose a Service";
    select.appendChild(defaultOption);

    //add service options
    category.services.forEach(service => {
        let option = document.createElement("option");
        option.value = service.price;
        option.textContent = `${service.name} - $${service.price}`;
        select.appendChild(option);
    });

    //create add service button
    let button = document.createElement("button");
    button.textContent = "Add Service";
    button.onclick = () => addService(select.id);

    //append select and button to dropdown container
    dropdownContainer.appendChild(select);
    dropdownContainer.appendChild(button);

    //append the dropdown container to the category container
    categoryContainer.appendChild(dropdownContainer);

    //append the entire category container to the main container
    container.appendChild(categoryContainer);
});


//below code allows the selected services top appear with a fade-in effect
function addService(selectId) {
    let select = document.getElementById(selectId);
    let price = parseFloat(select.value);
    let text = select.options[select.selectedIndex].text;

    //extracting the selected service’s hours from serviceCategories
    let selectedService = null;
    serviceCategories.forEach(category => {
        category.services.forEach(service => {
            if (text.includes(service.name)) {
                selectedService = service;
            }
        });
    });

    if (selectedService && price > 0) {
        let listItem = document.createElement("li");
        listItem.textContent = `${text}    `;

        //adding a remove button per added service
        let removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.classList.add("remove-button"); //adding the custom class to the button
        removeButton.onclick = function() {
            listItem.remove();
            subtotal -= price;
            total_hours -= selectedService.hours;
            document.getElementById("subtotal").textContent = subtotal;
            //document.getElementById("total-hours").textContent = total_hours; //uncomment if want hours displayed on the screen
        };    

        listItem.appendChild(removeButton);
        document.getElementById("service-list").appendChild(listItem);

        listItem.style.opacity = "0";
        document.getElementById("service-list").appendChild(listItem);
        
        //fade in / out
        setTimeout(() => {
            listItem.style.opacity = "1";
            listItem.style.transition = "opacity 0.5s ease-in-out";
        }, 100);
        
        //add to subtotal and total_hours 
        subtotal += price;
        total_hours += selectedService.hours; 
        document.getElementById("subtotal").textContent = subtotal;
        //document.getElementById("total-hours").textContent = total_hours; //uncomment if want hours displayed on the screen 
    }
}
 

