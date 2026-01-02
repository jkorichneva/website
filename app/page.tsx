import Image from "next/image";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import wombat from "../public/wombat-main.png";
import {SocialIcon} from "react-social-icons";

export default function Home() {
    return (
        <>
            <div className="flex">
                <Image
                    src={wombat}
                    width={500}
                    height={700}
                    alt="Nice cartoon wombat sitting"
                    className="rounded-md py-2 sm:py-0"
                />
                <div className="flex flex-col flex-grow">
                    <h1 className="text-8xl"><span className="font-pacifico text-3xl">Hello, I'm</span><br/>Iana
                    </h1>
                    <p className="text-2xl pt-2.5">and I'm a frontend developer</p>
                    <ul className="flex w-80 justify-between pt-3.5">
                        <SocialIcon
                            url="https://instagram.com/jkoritschnewa"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.linkedin.com/in/iana-korichneva/"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://t.me/JanaKorich"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://github.com/jkorichneva"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://leetcode.com/u/jkorichneva/"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.strava.com/athletes/188011902"
                            bgColor="#2E2A26"
                            fgColor="white"
                            style={{ height: 35, width: 35 }}
                        />
                    </ul>
                </div>
            </div>
            <div className="bg-beige border-8 border-beige flex">
                <h2 className="text-3xl">About me</h2>
            </div>
        </>
    );
}
