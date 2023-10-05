import { Helmet } from "react-helmet-async";
import Banner from "../banner/banner";
import Categories from "../categories/Categories";
import FreturedJobs from "../featured/FreturedJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home </title>
            </Helmet>
          
                

           
        <Banner></Banner>
        <Categories></Categories>
        <FreturedJobs></FreturedJobs>
    
           
         
            
        </div>
    );
};

export default Home;