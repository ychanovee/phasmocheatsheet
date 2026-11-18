const rule = new Rule(

)
const ghost = new Ghost(
    "Phantom",

    [
        new Rule("1", "Freezing Temperatures", "The room becomes cold."),
        new Rule("2", "Ghost Orbs", "Floating balls of light appear."),
        new Rule("3", "Spirit Box", "The ghost communicates through a spirit box.")
    ],

    [
        new Rule("4", "Writing", "The ghost writes in a journal."),
        new Rule("5", "Fingerprints", "Fingerprints appear on surfaces.")
    ]
);

const event_rules= [
    new Rule("E1", "Airball event", "Witness and airball event.")
    ];

const hunt_rules = [
    new Rule("H1", "Freezing breath", "Ghost has freezing breath during hunt.")
    ];

const behaviour_rules = [
    new Rule("B1", "Shut exit doors", "Witness the ghost shut exit doors outside an event.")
    ];


// Main function
function main() {


    // Display rules
    displayRules(behaviour_rules, "behaviour-rules")
    displayRules(event_rules, "event-rules");
    displayRules(hunt_rules, "hunt-rules");

    // Display initial score
    updateScore();
}

function createRules() {
    // Testing
    event_rules= [
    new Rule("E1", "Airball event", "Witness and airball event.")
    ]

    hunt_rules = [
    new Rule("H1", "Freezing breath", "Ghost has freezing breath during hunt.")
    ];

    behaviour_rules = [
    new Rule("B1", "Shut exit doors", "Witness the ghost shut exit doors outside an event.")
    ];
}
// Display rules
function displayRules(rules, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = "";

    for (const rule of rules) {

        const button = document.createElement("button");

        button.textContent = rule.name;
        button.classList.add("rule-button");

        button.addEventListener("click", () => {

            observeRule(rule);

            button.classList.toggle("observed", rule.observed);

            updateScore();

        });

        container.appendChild(button);
    }
}


// Update score
function updateScore() {

    const percentage = evaluateGhost(ghost);

    document.getElementById("percentage").textContent =
        percentage.toFixed(1) + "%";
}


// Run application when page loads
document.addEventListener("DOMContentLoaded", main);