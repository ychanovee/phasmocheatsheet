class Rule {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cat = category;
        this.observed = false;
    }
}

class Ghost {
    constructor(name, rules, notRules) {
        this.name = name;
        this.rules = rules;
        this.notRules = notRules;
        this.points = 0;
        this.maxPoints = rules.length;
    }
}

function evaluateGhost(ghost) {
    ghost.points = 0;

    for (const rule of ghost.rules) {
        if (rule.observed) {
            ghost.points++;
        }
    }

    for (const rule of ghost.notRules) {
        if (rule.observed) {
            ghost.points--;
        }
    }

    if (ghost.maxPoints === 0) return 0;

    return Math.max(0, Math.min(100,
        (ghost.points / ghost.maxPoints) * 100
    ));
}

function observeRule(rule) {
    rule.observed = !rule.observed;
}