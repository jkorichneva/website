import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <footer className="drop-shadow-md mt-auto bg-brown">
      <div className="mx-auto max-w-7xl py-6 px-2 sm:px-6 lg:px-8 min-w-full flex items-center justify-between">
        <div className="text-sm text-white">2023 © Jana Korichneva</div>
        <ul className="flex self-end w-60 justify-between">
          <SocialIcon
            url="https://twitter.com/MoriaShmoria"
            bgColor="#212A3E"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/jkoritschnewa"
            bgColor="#212A3E"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/iana-korichneva/"
            bgColor="#212A3E"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://t.me/Jkorichneva"
            bgColor="#212A3E"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/jkorichneva"
            bgColor="#212A3E"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
        </ul>
      </div>
    </footer>
  );
}
