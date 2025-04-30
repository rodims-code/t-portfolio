import { Mail } from "lucide-react"

import img from "../assets/img.jpg"


const Home = () => {

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour, <br /> je suis <span className="text-accent">RODIM'S-CODE</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                Je suis un développeur web passionné par la création d'applications web modernes et réactives. <br /> 
                J'aime relever des défis et apprendre de nouvelles technologies pour améliorer mes compétences.
            </p>
            <a href="" className="btn btn-accent md:w-fit">
                <Mail className="w-5 h-5"/>
                contactez-moi
            </a>
        </div>

        <div className="md:ml-60">
            <img src={img} alt="image" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
            style={{
                borderRadius: "63% 37% 37% 63% / 62% 47% 53% 38% ",
            }} />
        </div>
    </div>
  )
}

export default Home