import Description from "./Components/Description";
import Image from "./Components/Image";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Products from "./products";


function App() {
  const nom = "Lams"
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
      <Image image={Products.img} />
      <div className="card-body">
        <div className="d-flex justify-content-between"> <Name name={Products.nom} /> <Price price={Products.prix} /> </div>
        <Description description={Products.description} />
        <a href={"thing"} className="btn btn-primary">Go somewhere</a>
      </div>      
      </div>
      <div>
        { {nom} ? "Bonjour" : "Bonjour" } {nom}
      </div>
    </>
  );
}

export default App;
