import Plats from "./Plats.json";

function GetPlats(Method = "ByIDReceiving") {
  let ListPlats = [];
  if (Method == "ByIDReceiving") {
    Plats.forEach((Plat) => {
      Plat["Reserved"].forEach((Reserved) => {
        ListPlats.push(Plat);
        console.log("-------------------");
        console.log("ID PLAT : " + Plat["ID"]);
        console.log(ListPlats);
        console.log("-------------------");
        return ListPlats;
      });
    });
  }
}

export default GetPlats;
