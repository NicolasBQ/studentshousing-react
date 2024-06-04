import { Header } from "./Header";
import { HouseList } from "./HouseList";
import { SearchBar } from "./SearchBar";
// import { ResidencyProvider } from "./Context/ResidencyContext";
// import { RequestProvider } from "./Context/RequestContext";

function App() {
  return (
    // <ResidencyProvider>
    //   <RequestProvider>
    <>
      <Header />
      <main className="w-full flex flex-col items-center">
        <SearchBar />
        <HouseList />
      </main>
    </>
    //   </RequestProvider>
    // </ResidencyProvider>
  )
}

export default App
