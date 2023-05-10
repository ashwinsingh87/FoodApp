import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import Context from './components/Context'
import { Provider } from "react-redux";
import store from "./components/Store";

const FoodApp = () => {
  const [user, setUser] = useState({
    name: "Ashwin Singh",
    gmail: "rajputashwin87@gmail.com",
  });


  return (
    <>
      <Provider store={store}>
        <Context.Provider value={{
          user: user,
          setUser: setUser,
        }}>
          <Header />
          <Outlet />
          <Footer />
        </Context.Provider>
      </Provider>
    </>
  );
};
const About = lazy(() => import("./components/About"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, 
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default FoodApp;
