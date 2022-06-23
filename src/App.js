import GetRequest from "./components/get-request/GetRequest";
import GetRequestProvider from "./components/get-request/GetRequestContext";
import Header from "./components/header/Header";
import LoaderProvider from "./components/Loader/LoaderContext";
import PostRequest from "./components/post-request/PostRequest";
import StartScreen from "./components/start_screen/StartScreen";

function App() {
  return (
    <>
      <LoaderProvider>
        <GetRequestProvider>
          <Header />
          <main>
            <div className="_container">
              <StartScreen />
              <GetRequest />
              <PostRequest />
            </div>
          </main>
        </GetRequestProvider>
      </LoaderProvider>
    </>
  );
}

export default App;
