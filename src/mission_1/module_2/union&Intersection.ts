// union
type NoobDeveloper = {
    name: string;
};

type JuniorDeveloper = NoobDeveloper & {// intersection
    experties: string;
    experience: number;
};


type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level:"junior" | "mid" | "senior";
}
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "mojn mia",
    experties: "javascript",
    experience: 3,
}

const developer: NextLevelDeveloper = {
    name: "rakib mia",
    experties: "typescript",
    experience: 5,
    leadershipExperience: 3,
    level: "senior"
}