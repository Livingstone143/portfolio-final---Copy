import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillCodepenCircle} from 'react-icons/ai';
import code from "../public/code.png";
import design from "../public/design.png";
import cons  from "../public/consulting.png";
import me from '../public/me3.png';
export default function Home() {
  return (
    <main className="bg-white px-10">
    <section className=" min-h-screen ">
       
       <nav className="py-10 mb-12 flex justify-between">
       <h1 className="text-2xl font-burtons font-extrabold ">Param</h1>
        <ul className="flex justify-between">
          <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
          <li><a className="text-white  bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl p-2 ml-4 " href="#">Resume</a></li>
        </ul>
       </nav>
       <div className="text-center p-8 py-8">
        <h2 className="text-5xl py-2 text-teal-700 font-medium">Param Jyothi</h2>
        <h3 className="text-2xl py-2">Developer and designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>I am Passionate web developer with an open mindset and a flair for innovation. Ready to bring your ideas to life. Open for collaboration on exciting projects.</p>
       </div>
       <div className=" text-5xl flex justify-center gap=16 py-2 text-gray-600 "> 
       <AiFillLinkedin/>
       <AiFillInstagram/>
       <AiFillTwitterCircle/>
      <AiFillCodepenCircle/> </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
    </section>

    <section>
      <div>
        <h3 className='text-3xl py-1'>Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-gray-500"> agencies </span>
              consulted for <span className="text-gray-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use
            </p>
      </div>
       <div className='flex'>
        <div className="text-center items-center  shadow-xl p-10 rounded-xl my-10 hover:shadow-2xl ">
        <Image src={design}  />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 hover:shadow-2xl ">
              <Image src={code}   />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:shadow-2xl  ">
              <Image src={cons}   />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            </div>
    </section>
    </main>
  )
}
