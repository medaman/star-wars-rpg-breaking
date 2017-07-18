var character = [
createChar("Obi-Wan Kanobi", 120, 6, "blue", "obi-wan-kenobi.jpg"),
createChar("Luke Skywalker", 180, 10, "green", "luke-skywalker.jpg"),
createChar("Darth Vader", 150, 8, "red", "darth-vader.jpg"),
createChar("Mace Windu", 100, 5, "purple", "mace-windu.jpg")];

function createChar(name, hp, ap, color, pic) {
  var character = {
    name: name,
    hp: hp,
    ap: ap,
    color: color,
    pic: pic
  };
  return character;
}
