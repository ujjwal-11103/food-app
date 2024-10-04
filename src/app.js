import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import { Outlet } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";
import DishMenu from "./components/DishMenu";
import Test from "./utils/Test";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const About=lazy(()=>import("./components/About"));

const AppLayout=()=>{
    return (
        <Provider store={appStore}>
            <div className="app">

                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<Suspense fallback={<ShimmerUI/>}><About/></Suspense>
            },
            {
                path:"Contact",
                element:<Contact/>
            },
            {
                path:"res/:resId",
                element:<RestroMenu/>

            },
            {
                path:"dish/:dishId/:dishname",
                element:<DishMenu/>
            },
            {
                path:"test",
                element:<Test/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
])


const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
// const heading=React.createElement("h1",{id:"heading"},"Nmaste React");
// const Title=(

//         <h2>Nmaste React</h2>
//     )
// const n=100;

// const Heading=()=>{
//     return( 
//         <div>
//             {Title}
//             <h1>Namste React Functional Component is here{n}</h1>
//             {/* <Title/> */}
            
//             {
//                 console.log("hello")
//             }
//         </div>
        
//     )
// }
// const Heading=()=><h1>Namste React Hello Functional Component</h1>


// const heading=(<h1 className="hello">
//     Namste React By Akshay Saini
//     </h1>)































/* <div id="Parents">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>

</div> */

// const parent=React.createElement("div",{id:"parents"},
//             [
//             React.createElement("div",{id:"child1"},
//                 [
//                  React.createElement("h1",{},"This is Namaste React 🚀"),
//                  React.createElement("h2",{},"I'm h2 Tag")
//                 ]
//             ),
//             React.createElement("div",{id:"child2"},
//                 [
//                  React.createElement("h1",{},"I'm h1 Tag"),
//                  React.createElement("h2",{},"I'm h2 Tag")
//                 ]
//             )
//             ]

// )

// // const heading=React.createElement(
// //     "h1",
// //     {class:"Hello"},
// //     "Hello World from React"
// // );
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent); 