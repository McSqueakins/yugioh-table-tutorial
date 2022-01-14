import "./App.css";
import summonedSkullPic from "./SummonedSkull.png";
import darkMagicianPic from "./DarkMagician.png";

const SUMMONED_SKULL = {
  picture: summonedSkullPic,
  name: "Summoned Skull",
  cardType: "Monster",
  attributes: "DARK",
  types: "Fiend/Normal",
  level: 6,
  attack: 2500,
  defense: 1200,
  flavorText:
    'A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force. (This card is always treated as an "Archfiend" card.)',
};
const DARK_MAGICIAN = {
  picture: darkMagicianPic,
  name: "Dark Magician",
  cardType: "Monster",
  attributes: "DARK",
  types: "Spellcaster/Normal",
  level: 7,
  attack: 2500,
  defense: 2100,
  flavorText: "The ultimate wizard in terms of attack and defense.",
};

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
          <tr>
            <td>
              <img src={SUMMONED_SKULL.picture} alt={SUMMONED_SKULL.name} />
            </td>
            <td>{SUMMONED_SKULL.name}</td>
            <td>{SUMMONED_SKULL.cardType}</td>
            <td>{SUMMONED_SKULL.attributes}</td>
            <td>{SUMMONED_SKULL.types}</td>
            <td>{SUMMONED_SKULL.level}</td>
            <td>{SUMMONED_SKULL.attack}</td>
            <td>{SUMMONED_SKULL.defense}</td>
            <td>{SUMMONED_SKULL.flavorText}</td>
          </tr>
          <tr>
            <td>
              <img src={DARK_MAGICIAN.picture} alt={SUMMONED_SKULL.name} />
            </td>
            <td>{DARK_MAGICIAN.name}</td>
            <td>{DARK_MAGICIAN.cardType}</td>
            <td>{DARK_MAGICIAN.attributes}</td>
            <td>{DARK_MAGICIAN.types}</td>
            <td>{DARK_MAGICIAN.level}</td>
            <td>{DARK_MAGICIAN.attack}</td>
            <td>{DARK_MAGICIAN.defense}</td>
            <td>{DARK_MAGICIAN.flavorText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
