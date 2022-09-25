// import React from "react";

// import { Component } from "react";

// class Navbar extends React.Component {
//     render() {
//         return(
//             <h2>Navbar</h2>
//         ) 
//     }
// }

// ******** Component ********

// import React, {Component} from "react";
// import Footer from "./Footer";

// class Navbar extends Component {
//     render() {
//         return(
//             <div>
//                 <h2>Navbar</h2>
//                 <p>navbar component</p>
//                 <Footer />
//             </div>
//         ) 
//     }
// }

// class Products extends Component {
//     render() {
//         return(
//             <div>
//                 <p>Products component</p>
//             </div>
//         ) 
//     }
// }

// export {Navbar, Products}

// ******** Props ********

import React, { Component } from "react";
class Navbar extends Component {
    render() {
        console.log(this.props.title.color);
        return (
            <div>
                <p>Hello {this.props.title.name} {this.props.title.color}</p>
                {/* <p>Hello {this.props.title}, rang: {this.props.color}, bg: {this.props.bg || 'none'}</p> */}
            </div>
        )
    }
}
export default Navbar