import React from 'react';
import './index.css';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';


// function for map method 
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

  
// ternary operator   
const favseries="netflix ";



const App =()=>(
  <>
    <h1 className='heading_style '>List of top 5 Netflix series </h1>

    {/* map function in diffent ways */}

    {/* {Sdata.map(ncard)} */}
    {/* {Sdata.map(function ncard(val)  *
{/* using map function */}

    {/* {Sdata.map((val)=> { 
      console.log(val)

      return (
        <Card
        key={val.id}
        imgsrg={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
      );
    })} */}
    
             
     

  
    { favseries==="netflix " ? <Netflix/> : <Amazon/>}






  </>
)

export default App;