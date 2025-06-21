import './Home.css'
import Header from '../../components/Header/Header'
import Services from '../../components/Services/Services'
import { services_list } from '../../assets/index'
const Home = () => {
  
  return (
    <div className='home'>
        <Header/>
        <div className='services'>
          <h1 className="title">Our Services</h1>
          <div className='list'>
            {
              services_list.map((service, index) => (
                <Services 
                key={index}
                service={service.service_name}
                img={service.img}
                description={service.service_description}
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Home