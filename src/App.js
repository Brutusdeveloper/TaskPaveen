import logo from './logo.svg';
import './App.css';
import React,{Fragment} from "react";
import Header from "./components/Header";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   <Fragment>
     <Header/>
     <div style={{height: "100%",width: "70px",position: "fixed",backgroundColor:"#083d5f"}}>
       <div style={{padding:"5px",marginLeft:"-10px"}}>
      <a className="sidebar" href="#"><i class="fas fa-columns fa-xs"></i></a>
      <a className="sidebar" href="#"><i class="fas fa-layer-group fa-xs"></i></a>
      <a className="sidebar" href="#"><i class="fas fa-file-alt fa-xs"></i></a>
      <a className="sidebar" href="#"><i class="fas fa-user-friends fa-xs"></i></a>
      </div>
     </div >
     <div style={{height:"100%",width: "100%",marginLeft:"4%",position: "fixed",backgroundColor:"rgb(234 235 236)"}}>
      <p style={{fontSize:"15px",fontWeight:"bold",padding:"20px",marginTop:"-1%"}}>Manage Accreditation</p>
      <div style={{height: "8%",width: "90%",marginTop:"-20px",position:"absolute",left:"20px",borderRadius:"10px",backgroundColor:"#ffff", color:"#b3afaf"}}>
        <div style={{display:"flex",padding:"20px",marginTop:"-15px"}}>
         <a className="navbar" style={{textDecoration:"none"}} href="#">Library</a>
         <a className="navbar" style={{textDecoration:"none"}} href="#">Chapter</a>
         <a className="navbar" style={{textDecoration:"none"}} href="#">Standard</a>
         <a className="navbar" style={{textDecoration:"none"}} href="#">Sub standard</a>
         <a className="navbar" style={{textDecoration:"none"}} href="#">Activity</a>
        </div>
      </div>
      <br/> <br/>
      <div class="container">
  <div class="row">
    <div class="col-sm-4" style={{marginLeft:"-11%"}}>
    <div style={{height:"700px",width:"280px",marginLeft:"1.5%",marginTop:"5%",borderRadius:"5px",backgroundColor:"white",borderColor:"3px solid red"}}>
        <div style={{display:"flex",borderBottom:"5px solid #EAEBEC"}}>
        <p style={{padding:"10px",marginTop:"10px",fontWeight:"600"}}>List of Activity</p><br/>
        <button style={{marginTop:"15px",padding:"5px",height:"30px",fontWeight:"600", width:"100px",backgroundColor:"red",color:"white"}}>+ Add New</button>
        <i style={{marginTop:"15px",marginLeft:"20px",padding:"10px"}} class="fas fa-ellipsis-v"></i></div>
        <div style={{width:"250px",height:"100px",marginLeft:"13px",marginTop:"10px",borderRadius:"10px",border:"3px solid #EAEBEC",backgroundColor:"white"}}>
        <p style={{padding:"5px"}}>Activity Type</p>
          <p style={{textAlign:"right",marginTop:"-45px",paddingRight:"20px"}}>code</p>
          <p style={{padding:"5px"}}>Category</p>
        </div>
        <div style={{width:"250px",height:"100px",marginLeft:"13px",marginTop:"10px",borderRadius:"10px",border:"3px solid #EAEBEC",backgroundColor:"white"}}>
        <p style={{padding:"5px"}}>Activity Type</p>
          <p style={{textAlign:"right",marginTop:"-45px",paddingRight:"20px"}}>code</p>
          <p style={{padding:"5px"}}>Category</p>
        </div>
        <div style={{width:"250px",height:"100px",marginLeft:"13px",marginTop:"10px",borderRadius:"10px",border:"3px solid #EAEBEC",backgroundColor:"white"}}>
        <p style={{padding:"5px"}}>Activity Type</p>
          <p style={{textAlign:"right",marginTop:"-45px",paddingRight:"20px"}}>code</p>
          <p style={{padding:"5px"}}>Category</p>
        </div>        
      </div>
    </div>
    <div class="col-sm-8">
    <div style={{height:"100%",width:"1000px",marginLeft:"-10%",marginTop:"2.5%",borderRadius:"5px",backgroundColor:"white",borderColor:"3px solid red"}}>
        <div style={{display:"flex",borderBottom:"5px solid #EAEBEC"}}>
          <div className="vl"></div>
        <p style={{padding:"10px",marginTop:"10px",fontWeight:"600"}}>List of Activity</p><br/>
        </div>
        <table class="table">
  <thead style={{textAlign:"center"}}>
    <tr>
      <th scope="col">Code</th>
      <th scope="col">Description</th>
      <th scope="col">Type of Activity</th>
      <th scope="col">Frequency of Response</th>
      <th scope="col">Action to Change</th>
    </tr>
  </thead>
  <tbody style={{textAlign:"center"}}>
    <tr>
      <th scope="row">scratch</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><i aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} class="fas fa-ellipsis-h"></i>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Show Properties</MenuItem>
      </Menu>
      </td>
    </tr>
    <tr>
      <th scope="row">scuff</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><i class="fas fa-ellipsis-h"></i></td>
    </tr>
    <tr>
      <th scope="row">Dent</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><i aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} class="fas fa-ellipsis-h"></i></td>
    </tr>
  </tbody>
</table>
      
      </div>
    </div>
  </div>
</div>

      </div>
   </Fragment>
  );
}

export default App;
