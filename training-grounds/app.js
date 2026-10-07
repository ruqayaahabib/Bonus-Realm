/* =========================================================
   BONUS MISSION I: THE ROYAL SUPPLY TRIAL

   The Royal Supply System contains THREE bugs.
   Repair them without rewriting the entire program.
   ========================================================= */

const royalSupplies = ['Sword', 'Shield', 'Potion']

function addSupply(supply) {
  royalSupplies.push(supply) //missing value 
}

function countSupplies() {
  return royalSupplies.length //sends back the length of the array
}

addSupply('Map')

console.log(
  `⚔️ The royal inventory contains ${countSupplies()} supplies.` //missing closing parenthesis + spelling error in "supplies"
)

/* ⭐ BONUS QUEST
   Use a loop to display every item with the 📦 icon.
*/
for (let oneItem of royalSupplies) {
  console.log(`📦 ${oneItem}`)
}