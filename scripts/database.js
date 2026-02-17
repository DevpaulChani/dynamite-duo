export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villans: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        },
        {
            id: 3,
            name: "DrDoom",
            power: "Magic"
        },
        {
            id: 4,
            name: "Loki",
            power: "Magic"
        }
    ]
}

export const getVillains = () => {
    return structuredClone(database.villans);
}