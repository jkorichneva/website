import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <footer className="px-4 py-6 sm:px-6 lg:px-8 drop-shadow-md mt-auto flex items-center bg-brown justify-between">
      <div className="text-sm text-white">2023 © Jana Korichneva</div>
      <ul className="flex self-end w-60 justify-between">
        <SocialIcon
          url="https://twitter.com/MoriaShmoria"
          bgColor="#393646"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://instagram.com/jkorichneva848"
          bgColor="#393646"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/iana-korichneva/"
          bgColor="#393646"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://t.me/Jkorichneva"
          bgColor="#393646"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/jkorichneva"
          bgColor="#393646"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
      </ul>
    </footer>
  );
}
