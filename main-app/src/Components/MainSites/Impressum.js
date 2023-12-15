import React from "react";




const Impressum = () => {

    return (
        <div className={"text-white text-center"}>

            <div className={"grid grid-cols-4 gap-10 p-10"}>
                <img src={"../../Images/Logos/Infos.jpg"} alt="imp-image-1" className="rounded-xl w-1/4 shadow-black shadow-2xl opacity-80" style={{width: "100%", height: "100%",border: "0.5px solid black"}} />
                <img src={"../../Images/Logos/Infos.jpg"} alt="imp-image-2" className="rounded-xl w-1/4 shadow-black shadow-2xl opacity-80" style={{width: "100%", height: "100%",border: "0.5px solid black"}} />
                <img src={"../../Images/Logos/Infos.jpg"} alt="imp-image-3" className="rounded-xl w-1/4 shadow-black shadow-2xl opacity-80" style={{width: "100%", height: "100%",border: "0.5px solid black"}} />
                <img src={"../../Images/Logos/Infos.jpg"} alt="imp-image-4" className="rounded-xl w-1/4 shadow-black shadow-2xl opacity-80" style={{width: "100%", height: "100%",border: "0.5px solid black"}} />
            </div>

            <strong>This Website is under construction!</strong>
            <br/>
            <strong>Use at your own risk...</strong>
            <br/>
            <h1 className={"text-3xl my-10"}>Impressum</h1>
            <br/>
            <p>Moritz Gehrig</p>
            <br/>
            <p>8610 Uster</p>
            <br/>
            <p>Schweiz</p>
            <br/>
            <p className={"my-10"}>Kontakt: support@aka-riemann.ch</p>
            <br/>
            <p>(German / English)</p>



        </div>
    )
}

export default Impressum