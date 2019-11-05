import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Threesix from './threesix';

class Section extends Component {
    constructor(){
        super();
        this.state ={users:[],lat:'',longi:''}
        this.dsa={data:''}
    }
    
    componentDidMount() {
        fetch(`/users/all`)
        .then(res => {
            
            return res.json()
         })
        .then(users => { 
            
            this.setState({ users })
         });
       
      
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.clicke==true&&nextProps.name==="")
        {
            
                var lat;
                var longi;
                setTimeout(()=> {
               if (navigator.geolocation) {
                   
                  navigator.geolocation.getCurrentPosition(function(position) {
                    lat = position.coords.latitude;
                    longi = position.coords.longitude;
                    abc();
                  },function(error) {
                    if (error.code == error.PERMISSION_DENIED)
                    alert("Turn On Your Location For Better Results");
                   
                      bcd();
                  })}
                  
                },0);
                const bcd = () => {
                    fetch(`/users/all`)
                    .then(res => {
                        
                        return res.json()
                     })
                    .then(users => { 
                        
                        this.setState({ users })
                     });
                }
                 const abc = () => {
                     fetch(`/users/nearby?lat=${lat}&longi=${longi}`)
                    .then(res => {
                        return res.json()
                     })
                    .then(users => { 
                        this.setState({ users:users,lat:lat,longi:longi})
                     });
                  }
            
        }
        var uri;
        
        if(nextProps.name){
uri=`/users?search=${nextProps.name}`;
        }
        else{
            uri=`/users/nearby?lat=${this.state.lat}&longi=${this.state.longi}`;
        }
           fetch(uri)
             .then(res => {
                 
                 return res.json()
              })
             .then(users => { 
                 
                 if(users!=null)
                 this.setState({ users:users });
                 else
                 this.setState({users:[]});
              });
          
          
        }
          
            
    render() {
        return (
            <div>
               
                {this.state.users.map(user =>
              
                  <section id="description">
        <div className="container">
            <div className="row">
                <div className="col-md-3"><br/><br/>
                    <img className="img-fluid" src={`${window.location.protocol}//image.${window.location.hostname}/${user.imagekey}/kitchen/kitchen1.jpeg`} alt=""  />
                </div>
                <div className="col-md-4"><br/><br/>
                    <div className="sub-heading">
                        <h3>{user.name}</h3>
                        <h5>{user.cost} $/hr</h5>
                        <h6>Rating : {user.rating}</h6>
                        Cuisine: {user.cusine_type}
                        <br/>Equipment: {user.equipment_info}
                        <br/>Address: {user.address}
                                                          <br/><br/>
                        <Link to={`/products/${user.id}`}><Button variant="success">Available-Book Now</Button></Link>
                    </div>
                </div>
                <div className="col-md-5">
                <h5><i className="fa fa-bookmark" aria-hidden="true"></i> Save for later</h5>
             
               <Threesix path={`${window.location.protocol}//image.${window.location.hostname}/${user.imagekey}/threesixty/threesixty.jpeg`}/>
               <h5>{Math.floor(user.distance)} miles from you</h5>
                </div>
            </div>
        </div><br/><br/><br/><br/><br/>
        <hr className="style-six"></hr>
    </section>
                )}
    </div>
           
        )
       
    }
}
export default Section;