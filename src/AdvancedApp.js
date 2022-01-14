import "./App.css";
import summonedSkullPic from "./SummonedSkull.png";
import darkMagicianPic from "./DarkMagician.png";

const cardAttributes = { dark: "DARK" };
const cardTypes = { monster: "Monster" };
const types = { fiend: "FIEND", normal: "NORMAL", spellCaster: "SPELLCASTER" };

const SUMMONED_SKULL = {
  picture: summonedSkullPic,
  name: "Summoned Skull",
  cardType: cardTypes.monster,
  attributes: [cardAttributes.dark],
  types: [types.fiend, types.normal],
  level: 6,
  attack: 2500,
  defense: 1200,
  flavorText: [
    "A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force",
    '(This card is always treated as an "Archfiend" card.)',
  ],
};
const DARK_MAGICIAN = {
  picture: darkMagicianPic,
  name: "Dark Magician",
  cardType: cardTypes.monster,
  attributes: [cardAttributes.dark],
  types: [types.spellCaster, types.normal],
  level: 7,
  attack: 2500,
  defense: 2100,
  flavorText: ["The ultimate wizard in terms of attack and defense."],
};
const cards = [SUMMONED_SKULL, DARK_MAGICIAN];

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Card Type</th>
            <th>Attributes</th>
            <th>Types</th>
            <th>Level</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Flavor Text</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.name}>
              {Object.entries(card).map(([key, value]) => {
                switch (key) {
                  case "picture":
                    return (
                      <td key={`${key},${value}`}>
                        <img src={value} alt={`${card.name}`} />
                      </td>
                    );
                  case "attributes":
                  case "types":
                    return <td key={`${key},${value}`}>{value.join("/")}</td>;
                  case "flavorText":
                    return (
                      <td key={`${key},${value}`}>
                        {value.map((lineOfText) => (
                          <p>{lineOfText}</p>
                        ))}
                      </td>
                    );
                  default:
                    return <td key={`${key},${value}`}>{value}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
