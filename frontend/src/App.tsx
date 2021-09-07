import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h2 className="text-primary"> MarioJavaDev </h2>

      <DataTable />
    </div>
    <Footer />
    </>
  );
}
export default App;
