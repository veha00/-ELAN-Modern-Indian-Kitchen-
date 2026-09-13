/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   MENU DATA
========================================= */

const menuData = {

    starters: [

        {
            name: "Paneer Tikka",
            price: "₹280",
            description: "Smoky grilled paneer with aromatic Indian spices.",
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Veg Spring Rolls",
            price: "₹180",
            description: "Crispy rolls filled with fresh vegetables.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Chicken Wings",
            price: "₹260",
            description: "Crispy, spicy and full of flavour.",
            image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Hara Bhara Kebab",
            price: "₹220",
            description: "Healthy, tasty and aromatic vegetarian kebabs.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"
        }

    ],


    mains: [

        {
            name: "Butter Chicken",
            price: "₹320",
            description: "Creamy tomato gravy with tender chicken.",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Dal Makhani",
            price: "₹240",
            description: "Slow-cooked black lentils with rich cream.",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Paneer Butter Masala",
            price: "₹290",
            description: "Soft paneer in a rich buttery tomato sauce.",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Biryani",
            price: "₹300",
            description: "Fragrant basmati rice layered with aromatic spices.",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=700&q=85"
        }

    ],


    tandoor: [

        {
            name: "Tandoori Chicken",
            price: "₹360",
            description: "Classic chicken marinated in aromatic spices.",
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Tandoori Paneer",
            price: "₹290",
            description: "Charred paneer with peppers and onions.",
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Garlic Naan",
            price: "₹80",
            description: "Soft naan topped with garlic and butter.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Malai Tikka",
            price: "₹310",
            description: "Creamy marinated tikka grilled to perfection.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85"
        }

    ],


    desserts: [

        {
            name: "Gulab Jamun",
            price: "₹120",
            description: "Warm, soft and perfectly sweet.",
            image: "https://images.unsplash.com/photo-1605196560546-712617b4b9a1?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Rasmalai",
            price: "₹150",
            description: "Soft cheese dumplings in chilled saffron milk.",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Kesar Kulfi",
            price: "₹140",
            description: "Traditional creamy saffron ice cream.",
            image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Chocolate Brownie",
            price: "₹180",
            description: "Warm chocolate brownie with a rich centre.",
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=85"
        }

    ],


    drinks: [

        {
            name: "Mango Lassi",
            price: "₹130",
            description: "Creamy mango yoghurt drink.",
            image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Masala Chai",
            price: "₹90",
            description: "Traditional Indian tea with aromatic spices.",
            image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Fresh Lime Soda",
            price: "₹100",
            description: "Refreshing sweet and salty lime soda.",
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85"
        },

        {
            name: "Berry Mocktail",
            price: "₹180",
            description: "Fruity, refreshing and beautifully balanced.",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85"
        }

    ]

};


/* =========================================
   DISPLAY MENU
========================================= */

const menuGrid = document.getElementById("menuGrid");

function displayMenu(category) {

    menuGrid.innerHTML = "";

    menuData[category].forEach(item => {

        const menuItem = document.createElement("article");

        menuItem.className = "menu-item";

        menuItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="menu-item-info">

                <div class="menu-item-title">

                    <h3>${item.name}</h3>

                    <span class="menu-item-price">
                        ${item.price}
                    </span>

                </div>

                <p>
                    ${item.description}
                </p>

            </div>

        `;

        menuGrid.appendChild(menuItem);

    });

}


/* Initial menu */

displayMenu("starters");


/* =========================================
   MENU TABS
========================================= */

document.querySelectorAll(".menu-tab").forEach(tab => {

    tab.addEventListener("click", () => {

        document
            .querySelectorAll(".menu-tab")
            .forEach(btn => btn.classList.remove("active"));

        tab.classList.add("active");

        displayMenu(tab.dataset.category);

    });

});


/* =========================================
   RESERVATION
========================================= */

const reservationForm =
    document.getElementById("reservationForm");

const bookingMessage =
    document.getElementById("bookingMessage");

const dateInput =
    document.getElementById("date");


/* Disable past dates */

const today = new Date()
    .toISOString()
    .split("T")[0];

dateInput.min = today;


reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const guests =
        document.getElementById("guests").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    if (!name || !date) {

        bookingMessage.textContent =
            "Please fill in all required details.";

        return;

    }


    bookingMessage.innerHTML = `
        ✓ Thank you, <strong>${name}</strong>!
        Your table request for
        <strong>${guests}</strong>
        on <strong>${date}</strong>
        at <strong>${time}</strong> has been received.
    `;


    reservationForm.reset();

    dateInput.min = today;

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();