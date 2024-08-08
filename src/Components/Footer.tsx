import InstaIcon from "@/assets/icons/insta.svg";
import XSocial from "@/assets/icons/x-social.svg";
import PinterestIcon from "@/assets/icons/pinterest.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";

const socials = [
    {
        name: "Instagram",
        icon: <InstaIcon/>,
        url: "https://www.instagram.com/"
    },
    {
        name: "Facebook",
        icon: <XSocial/>,
        url: "https://www.facebook.com/"
    },
    {
        name: "Pinterest",
        icon: <PinterestIcon/>,
        url: "https://www.pintrest.com/"
    },
    {
        name: "LinkedIn",
        icon: <LinkedInIcon/>,
        url: "https://www.linkedin.com/"
    },
    {
        name: "TikTok",
        icon: <TikTokIcon/>,
        url: "https://www.tiktok.com/"
    },
    {
        name: "YouTube",
        icon: <YouTubeIcon/>,
        url: "https://www.youtube.com/"
    }
]


export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="py-5 bg-black text-white/60 border-t border-white/20 ">
            <div className="container">
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
                    <div className="text-center">
                        &copy; {year} Your Company, Inc. All rights reserved.
                    </div>
                    <ul className="flex justify-center gap-2.5">
                        {socials.map((social, index) => (
                            <li key={index} className="inline-block px-2">
                                <a href={social.url} target="_blank" rel="noreferrer">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}