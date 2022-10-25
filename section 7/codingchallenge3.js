const gameEvents = new Map ([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'goal'],
    [61, 'substituion'],
    [64, 'yellow card'],
    [69, 'red card'],
    [70, 'substitution'],
    [72, 'substitution'],
    [76, 'goal'],
    [80, 'goal'],
    [92, 'yellow card'],
]);

// 1 

const events = [...new Set (gameEvents.values())];
console.log(events);

// 2 

gameEvents.delete(64);
console.log(gameEvents);

// 3 
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend, on an average, every ${time/ gameEvents.size}  minutes`)

// 4 

for (const [key , value] of gameEvents) {
    const half = key <= 45 ? 'First half' : 'Second';
    console.log(`[${half}] ${key} `)
}
