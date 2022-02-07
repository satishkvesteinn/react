import { Link } from "react-router-dom";


import Cards from "./cards";
import CardData from "../components/cardData";

function Service() {



    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row gy-4">
                            {
                                CardData.map((val, ind) =>{
                                    return <Cards key={ind} cardImg = {val.cardImg}
                                    tittle={val.tittle} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;