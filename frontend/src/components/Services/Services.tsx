import './Services.css'

interface ServicesProps {
  service: string;
  img: string;
  description: string;
}

const Services = ({service, img, description}: ServicesProps) => {
  return (
    <div className="service-container">
        <div className="left">
            <img src={img} alt="" className="image"/>
        </div>
        <div className="right">
            <h2 className="service">{service}</h2>
            <h4 className="description">{description}</h4>
        </div>
        <button className='check'>Check</button>
    </div>
  )
}

export default Services