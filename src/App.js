import GetRequest from "./components/get-request/GetRequest";
import Header from "./components/header/Header";
import LoaderProvider from "./components/Loader/LoaderContext";
import PostRequest from "./components/post-request/PostRequest";
import StartScreen from "./components/start_screen/StartScreen";

function App() {
  return (
    <>
      <LoaderProvider>
        <Header />
        <main>
          <div className="_container">
            <StartScreen />
            <GetRequest />
            <PostRequest />
          </div>
        </main>
      </LoaderProvider>
    </>
  );
}

export default App;
