import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function ncard(val){
//     console.log(val)
//   return(

//    <Card

//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.links}
//         />
//   );

// }
// call kela return kara lagnar 
ReactDOM.render(
  <App/>,document.getElementById("root")
);



/// explanation 
// we have a card compenents jiske aandar heading aur images wala componets hai aur iss card compenent ko bhi me app wale componete me render kar raha hu aur app ko finally index ke anadar render kiya 