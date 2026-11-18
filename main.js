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
    new Rule("E1", "Airball event", "Witness and airball event."),
    new Rule("E2", "Photo of ghost appears blank",
        "Photo taken of ghost during even appears blank but still counts as evidence."),
    new Rule("E3", "Several objects flung at once",
        "Witness event where several objects are flung at once, like an explosion of objects.")
    ];

const hunt_rules = [
    new Rule("H1", "Freezing breath", "Ghost has freezing breath during hunt."),
    new Rule("H2", "Quiet ghost", "Ghost is difficult to hear unless nearby."),
    new Rule("H3", "Highly visibe ghost", "Ghost does not 'blink' as much as usual")
    ];

const behaviour_rules = [
    new Rule("B1", "Shut exit doors", "Witness the ghost shut exit doors outside an event."),
    new Rule("B2", "Turned off breaker", "Ghost turned off breaker."),
    new Rule("B3", "Wandering ghost", "Ghost leaves its favourite room.")
    ];

const ghosts = [
    new Ghost("Phantom", [event_rules.at(2)], [hunt_rules.at(2)]),
    new Ghost("Jinn", [behaviour_rules.at(1)]),
    new Ghost("Random ghost", [event_rules.at(0), behaviour_rules.at(2)], [hunt_rules.at(1)])
]

// Main function
function main() {


    // Display rules
    displayRules(behaviour_rules, "behaviour-rules")
    displayRules(event_rules, "event-rules");
    displayRules(hunt_rules, "hunt-rules");

    displayGhosts(ghosts, "ghosts")
    // Display initial score
    updateScore();
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
function displayGhosts(ghost_list, containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    for (const ghost of ghost_list) {

        const button = document.createElement("button");

        button.textContent = ghost.name + ghost.points;
        button.classList.add("ghost-button");

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