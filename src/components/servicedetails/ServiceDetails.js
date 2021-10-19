import React from 'react';
import { Card} from 'react-bootstrap';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
import Specialist from '../specialist/Specialist';



const ServiceDetails = () => {

    const {serviceId}=useParams();
    const [services]= useService();

    const service= services.find(service=>service.id=== parseInt(serviceId));
    // console.log(service);
    
    return (

        <Card style={{backgroundColor:'#f1f1f1'}} className=" container my-5">
            <Card.Img variant="top" src={service?.picture} width="100%" height="200" />
            <Card.Body>
            <Card.Title className="text-danger fs-3">{service?.title}</Card.Title>
           
            <Card.Text> <i className="fas fa-phone-square-alt fa-lg text-success"></i>  <span className="text-success">{service?.call_for_appoinment}</span> </Card.Text>
            
            <Card.Text> Potential Cost: {service?.potential_cost} </Card.Text>

            <Card.Text> Potential Cost: {service?.details} </Card.Text>

            
            <div style={{backgroundColor:"whitesmoke"}} className="row d-flex flex-lg-row flex-column justify-content-lg-around">

            { 
                service?.specialist.map(specialist=><Specialist specialist={specialist} key={Math.random()}></Specialist>)
            }



            </div>
            


            
           
            </Card.Body>
        </Card>
        
        
    );
};

export default ServiceDetails;