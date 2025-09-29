import {ShootingStars} from "@/components/starsshooting";
import {StarsBackground} from "@/components/stars_bg";
import Image from "next/image";
import localFont from "next/font/local";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import EventTimer from "@/components/timer";
import FAQSection from "@/components/FAQ";




const magnetoBold = localFont({
    src: '../public/fonts/MAGNETOB.woff',
    display: 'swap',
    variable: '--font-magneto-bold'
})

export default function Home() {

    return (
      <div className="bg-black">
          <ShootingStars className="absolute inset-0" />
          <StarsBackground className="absolute inset-0" />

          <div className="h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id={"home"}>
              <div className="relative z-10 flex flex-col items-center gap-1 flex-shrink-0">
                  <Image
                      src="/logo.png"
                      alt="logo"
                      width={300}
                      height={300}
                      className="relative z-20 h-auto py-5 pb-5"
                  />
                  <Image
                      src="/Heading.png"
                      alt="heading"
                      width={800}
                      height={800}
                      className="relative z-20 h-auto"
                  />
              </div>


              <Image
                  src="/USAR.png"
                  width={2000}
                  height={500}
                  className="absolute z-10 pt-28"
                  alt="USAR"
              />
          </div>

          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-20 pb-4" id="about-us">
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              {/* aarush apne code idhar daaldiyo */}
              <div className="relative z-10 flex flex-col items-center w-full">
                  <h1 className={magnetoBold.className} ><span className="text-gray-200 text-7xl ">About Us</span> </h1>

                  <div className="my-8 max-w-4xl w-11/12 overflow-hidden">
                      <Image
                          src="/acts-team.png"
                          alt="ACTS Team Photo"
                          width={1200}
                          height={700}
                          className="w-full h-auto"
                      />
                  </div>

                  <p className="max-w-4xl w-11/12 text-gray-300 tracking-wide leading-loose text-base md:text-lg text-justify ">
                      <span className="text-purple-400 font-bold">ACTS</span> is a Technical club at Guru Gobind Singh Indraprastha University (East Delhi Campus)
                      that Promotes a Collaborative environment for learning and Innovation. Elysian, the annual
                      cultural-tech fest of GGSIPU EDC, celebrates innovation, creativity, and collaboration.
                      From hands-on workshops to cultural showcases, it has something for everyone.
                      This year's highlight is <span className="text-purple-400 font-bold">VibeClash</span>, a thrilling 24-hour hackathon.
                  </p>
                  {/* ye thoda maine text highlight type use kiya      ^^^^^      because normal text was looking a bit boring
                                               CAN BE REMOVED IF NOT NEEDED*/}

              </div>



          </div>
          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id="event_timer">
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              {/* deepak tu apne codde idhar daalega */}
              <EventTimer/>




          </div>
          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id="registration">
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              {/* reddhima apne code idhar daal dena */}
              <h1 className={magnetoBold.className} ><span className="text-gray-200 text-7xl ">Registration</span> </h1><div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-12 pt-14">
              {/* LEFT: Info */}
              <div className="flex-1 max-w-md text-white space-y-4">
                  <Image
                      src="/qr.png"
                      alt="logo"
                      width={500}
                      height={500}
                      className="relative z-20 h-auto py-5 pb-5"
                  />

              </div>

              {/* RIGHT*/}
              <div className="flex-1 max-w-md w-full">
                  <Image
                      src="/emo.png"
                      alt="ACTS Team Photo"
                      width={1500}
                      height={700}
                      className="relative z-20 h-auto py-5 pb-5"
                  />
              </div>
          </div>



          </div>
          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id="sponsors">
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              <h1 className={magnetoBold.className} ><span className="text-gray-200 text-7xl ">Sponsors</span> </h1>

          </div>
          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id={"faq"}>
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              <h1 className={magnetoBold.className} ><span className="text-gray-200 text-7xl ">Frequently Asked Questions</span> </h1>
              <FAQSection/>

          </div>
          <div className="h-screen overflow-clip  bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4" id={"contact-us"}>
              <ShootingStars className="absolute inset-0" />
              <StarsBackground className="absolute inset-0" />
              {/*           */}
              <section className="min-h-screen bg-black px-4 md:px-12 py-12 flex flex-col items-center">
                  {/* Title */}
                  <h1 className={magnetoBold.className} ><span className="text-gray-200 text-7xl ">Contact Us</span> </h1>


                  {/* Container */}
                  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-12 pt-14">
                      {/* LEFT: Info */}
                      <div className="flex-1 max-w-md text-white space-y-6">
                          <p className="text-base md:text-lg leading-relaxed">
                              Have Questions or Want to Get Involved?
                              <br />
                              Reach Out to Us and we'll get Back to You.
                          </p>

                          <div className="space-y-4 text-sm md:text-base">
                              <p className="flex items-center space-x-3">
                                  <FaEnvelope className="text-red-500 text-lg md:text-xl" />
                                  <span>Email : acts-edc@gmail.com</span>
                              </p>
                              <p className="flex items-center space-x-3">
                                  <FaPhone className="text-green-500 text-lg md:text-xl" />
                                  <span>Contact Us : +91 8888888888</span>
                              </p>
                              <p className="flex items-center space-x-3">
                                  <FaMapMarkerAlt className="text-pink-500 text-lg md:text-xl" />
                                  <span>Location : USAR, GGSIPU - EDC</span>
                              </p>
                          </div>
                      </div>

                      {/* RIGHT: Form */}
                      <div className="flex-1 max-w-md w-full">
                          <form className="bg-white border-2 border-gray-300 rounded-xl shadow-lg p-6 space-y-4">
                              <input
                                  type="text"
                                  placeholder="Name"
                                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                              />
                              <input
                                  type="email"
                                  placeholder="Email"
                                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                              />
                              <textarea
                                  placeholder="Message"
                                  rows={4}
                                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                              />
                              <div className="flex justify-end">
                                  <button
                                      type="submit"
                                      className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
                                  >
                                      Send
                                  </button>
                              </div>
                          </form>

                      </div>
                  </div>
              </section>
              <Image
                  src="/footer.png"
                  width={2000}
                  height={300}
                  className="absolute z-10 pt-28"
                  alt="USAR"
              />

          </div>

      </div>
  );
}
