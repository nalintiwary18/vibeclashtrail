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

            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-4 sm:pt-8 pb-4 px-4" id={"home"}>
                <div className="relative z-10 flex flex-col items-center gap-1 flex-shrink-0">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={300}
                        height={300}
                        className="relative z-20 w-40 sm:w-52 md:w-64 lg:w-72 h-auto py-5 pb-5"
                    />
                    <Image
                        src="/Heading.png"
                        alt="heading"
                        width={800}
                        height={800}
                        className="relative z-20 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl h-auto"
                    />
                </div>
                <Image
                    src="/USAR.png"
                    width={2000}
                    height={500}
                    className="absolute z-20 pt-28"
                    alt="USAR"
                />
                <Link target="_blank" href={"https://www.google.com"} className="absolute z-20 pt-[38rem]">
                    <Image
                        src="/unstop.png"
                        alt="heading"
                        width={130}
                        height={130}
                    />
                </Link>
            </div>

            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-12 sm:pt-16 md:pt-20 pb-4 px-4" id="about-us">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">About Us</span></h1>

                    <div className="my-8 max-w-4xl w-11/12 overflow-hidden">
                        <Image
                            src="/acts-team.png"
                            alt="ACTS Team Photo"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="max-w-4xl w-11/12 text-gray-300 tracking-wide leading-loose text-sm sm:text-base md:text-lg text-justify">
                        <span className="text-purple-400 font-bold">ACTS</span> is a Technical club at Guru Gobind Singh Indraprastha University (East Delhi Campus)
                        that Promotes a Collaborative environment for learning and Innovation. Elysian, the annual
                        cultural-tech fest of GGSIPU EDC, celebrates innovation, creativity, and collaboration.
                        From hands-on workshops to cultural showcases, it has something for everyone.
                        This year&apos;s highlight is <span className="text-purple-400 font-bold">VibeClash</span>, a thrilling 24-hour hackathon.
                    </p>
                </div>
            </div>

            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="event_timer">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <EventTimer/>
            </div>

            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="registration">
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

            <div className="h-min overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sponsors</span></h1>
                <Sponsors/>
            </div>
            <div className="h-screen bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Mentors</span></h1>
                <MentorSection/>
            </div>
            <div className="h-screen bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id="sponsors">
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Judges</span></h1>
                <h1 className="text-gray-200 text-4xl justify-center pt-52 items-center sm:text-5xl md:text-6xl lg:text-7xl">TBA</h1>
            </div>


            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id={"faq"}>
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <h1 className={magnetoBold.className}><span className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Frequently Asked Questions</span></h1>
                <FAQSection/>
            </div>

            <div className="min-h-screen overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-8 pb-4 px-4" id={"contact-us"}>
                <ShootingStars className="absolute inset-0" />
                <StarsBackground className="absolute inset-0" />
                <section className="min-h-screen bg-black py-12 flex flex-col items-center">
                    <h1 className={magnetoBold.className}><span className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Contact Us</span></h1>

                    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center justify-center gap-12 pt-8 sm:pt-14">
                        <div className="flex-1 max-w text-white space-y-6 text-center px-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
                                Have Questions or Want to Get Involved?
                                <br />
                                Reach Out to Us and we&apos;ll get Back to You.
                            </p>

                            <div className="space-y-4 text-sm md:text-base flex flex-col items-center">
                                <p className="flex items-center space-x-3">
                                    <Mail className="text-lg md:text-xl" />
                                    <span>Email : acts-edc@gmail.com</span>
                                </p>
                                <p className="flex items-center space-x-3">
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
                    className="absolute z-10 bottom-0 w-full"
                    alt="USAR"
                />
            </div>
        </div>
    );
}