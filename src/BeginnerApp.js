import summonedSkullPic from "./SummonedSkull.png";
import darkMagicianPic from "./DarkMagician.png";

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
              <img src={summonedSkullPic} alt="Summoned Skull" />
            </td>
            <td>Summoned Skull</td>
            <td>Monster</td>
            <td>DARK</td>
            <td>Fiend/Normal</td>
            <td>6</td>
            <td>2500</td>
            <td>1200</td>
            <td>
              A fiend with dark powers for confusing the enemy. Among the
              Fiend-Type monsters, this monster boasts considerable force. (This
              card is always treated as an "Archfiend" card.)
            </td>
          </tr>
          <tr>
            <td>
              <img src={darkMagicianPic} alt="Dark Magician" />
            </td>
            <td>Dark Magician</td>
            <td>Monster</td>
            <td>DARK</td>
            <td>Spellcaster/Normal</td>
            <td>7</td>
            <td>2500</td>
            <td>2100</td>
            <td>The ultimate wizard in terms of attack and defense.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
