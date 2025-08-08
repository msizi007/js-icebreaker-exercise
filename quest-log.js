// step 1
let questLog = [
  "Collect 10 Firefly Wings",
  "Defeat the Goblin King",
  "Find the Lost Sword of Oakhaven",
];

console.log(questLog);

// step 2
console.log(`The hero has ${questLog.length} quests`);

// step3
let firstQuest = questLog[0];
console.log(firstQuest);

// step 4
questLog.push("Deliver the Royal Scroll");
console.log(questLog);

// step 5
let lastQuest = questLog.pop();
console.log(lastQuest);
console.log(questLog);

// step 6
questLog.unshift("Rescue the Blacksmith's Cat");
console.log(questLog);

// step 7
let delegatedQuest = questLog.shift();
console.log(delegatedQuest);
console.log(questLog);

// step 8
questLog.splice(1, 1);
console.log(questLog);

// step 9
questLog.splice(1, 0, "Slay the Dragon of Mount Doom");
console.log(questLog);

// step 10
let finalString = questLog.join(" | ");
console.log(finalString);
