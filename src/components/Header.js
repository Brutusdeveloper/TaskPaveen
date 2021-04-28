import React,{Fragment} from "react"

function App() {
  return (
   <Fragment>
      <div style={{position:"absolute",right:"16px",marginTop:"0%"}}>
        <div style={{display:"flex"}}>
        <div style={{padding:"30px", borderRight: "2px solid #15AABF",marginRight:"20px"}}>
          <i class="fa fa-search" style={{paddingRight:"30px",color:"#15AABF"}} aria-hidden="true"></i>
          <i class="fa fa-bell" style={{color:"#15AABF"}}></i>
        </div>
        <div style={{display:"block",marginRight:"20px"}}>
        <p style={{textAlign:"Right",color:"#15AABF"}}>Welcome !</p>
        <p style={{marginTop:"-20px"}}>vijaybrutus@gmail.com</p></div>
        <img style={{clipPath:"circle()",width:"50px"}} src="ico/two.jpg" />
      </div>
    </div>
    </Fragment>
  );
}

export default App;
