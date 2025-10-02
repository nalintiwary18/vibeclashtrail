import {ShootingStars} from "@/components/starsshooting";
import {StarsBackground} from "@/components/stars_bg";
import Image from "next/image";
import localFont from "next/font/local";
import {Mail , MapPin} from "lucide-react"
import EventTimer from "@/components/timer";
import FAQSection from "@/components/FAQ";
import Link from "next/link";
import Sponsors from "@/components/sponsors";
import MentorSection from "@/components/mentors";

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

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-4 px-0" id={"home"}>

            <div className="relative z-10 flex flex-col items-center gap-0 sm:gap-4">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={300}
                        height={300}
                        className="relative z-20 w-28 py-5 sm:w-36 md:w-44 lg:w-56 h-auto mt-6 sm:mt-10"
                    />
                    <Image
                        src="/Heading.png"
                        alt="heading"
                        width={800}
                        height={800}
                        className="relative z-20 w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
                    />
                </div>
                <div className="relative z-20 w-full px-0" style={{marginTop: '-8%', marginBottom: '0.5rem'}}>
                    <Image
                        src="/USAR.png"
                        width={2000}
                        height={500}
                        className="w-full h-auto relative z-10"
                        alt="USAR"
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center gap-2 sm:gap-2" style={{marginTop: '-8%'}}>
                    <Link target="_blank" href={"https://www.google.com"}>
                        <Image
                            src="/unstop.png"
                            alt="Register on Unstop"
                            width={130}
                            height={130}
                            className="w-16 sm:w-20 md:w-32 h-auto hover:scale-110 transition-transform"
                        />
                    </Link>
                </div>
            </div>

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full -mt-20 sm:-mt-28 md:-mt-32 lg:mt-0 pt-12 sm:pt-16 md:pt-20 pb-4 px-4" id="about-us">

            <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
                    <h1 className={magnetoBold.className}><span className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">About Us</span></h1>

                    <div className="my-6 sm:my-8 md:my-10 w-full max-w-4xl px-4">
                        <Image
                            src="/acts-team.png"
                            alt="ACTS Team Photo"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="max-w-4xl w-full px-4 text-gray-300 tracking-wide leading-relaxed text-sm sm:text-base md:text-lg text-justify">
                        <span className="text-purple-400 font-bold">ACTS</span> is a Technical club at Guru Gobind Singh Indraprastha University (East Delhi Campus)
                        that Promotes a Collaborative environment for learning and Innovation. Elysian, the annual
                        cultural-tech fest of GGSIPU EDC, celebrates innovation, creativity, and collaboration.
                        From hands-on workshops to cultural showcases, it has something for everyone.
                        This year&apos;s highlight is <span className="text-purple-400 font-bold">VibeClash</span>, a thrilling 24-hour hackathon.
                    </p>
                </div>
            </div>

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="event_timer">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <EventTimer/>
            </div>

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="registration">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Prize Pool</span></h1>
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-12 pt-8 sm:pt-14">
                    <div className="my-8 max-w-4xl w-11/12 overflow-hidden">
                        <Image
                            src="/emo.png"
                            alt="ACTS Team Photo"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sponsors</span></h1>
                <Sponsors/>
            </div>
            <div className="min-h-[90vh] bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Mentors</span></h1>
                <MentorSection/>
            </div>
            <div className="min-h-[90vh] bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Judges</span></h1>
                <h1 className="text-gray-200 text-4xl justify-center pt-52 items-center sm:text-5xl md:text-6xl lg:text-7xl">TBA</h1>
            </div>


            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id={"faq"}>
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Frequently Asked Questions</span></h1>
                <FAQSection/>
            </div>

            <div className="min-h-[90vh] overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-8 px-4" id={"contact-us"}>
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <section className="min-h-[90vh] bg-black py-12 flex flex-col items-center">
                    <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Contact Us</span></h1>

                    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center justify-center gap-12 pt-8 sm:pt-14">
                        <div className="flex-1 max-w text-white space-y-6 text-center px-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
                                Have Questions or Want to Get Involved?
                                <br />
                                Reach Out to Us and we&apos;ll get Back to You.
                            </p>

                            <div className="space-y-4 text-sm md:text-base flex flex-col items-center mb-10" style={{marginBottom: '8%'}}>
                                <p className="flex items-center space-x-3">
                                    <Mail className="text-lg md:text-xl" />
                                    <span>Email : acts-edc@gmail.com</span>
                                </p>
                                <p className="flex items-center space-x-3 pb-4 sm:pb-6 md:pb-8 lg:pb-16 lg:mb-10">
                                    <MapPin className="text-lg md:text-xl" />
                                    <span>Location : USAR, GGSIPU - EDC</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Image
                    src="/footer.png"
                    width={2000}
                    height={300}
                    className="absolute z-10 bottom-0 w-full mt-8 lg:mt-16"
                    alt="USAR"
                />
            </div>
        </div>
    );
}
