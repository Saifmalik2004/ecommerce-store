import { Instagram, Linkedin } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto py-10  text-center flex justify-center items-center  ">
        {/* LinkedIn Icon with Link */}
        <Link href="https://www.linkedin.com/in/saif-malik-901635307">
          
            <Linkedin className="inline-block text-black h-6 w-6 mx-2 opacity-70 hover:opacity-100" />
         
        </Link>
        <Link href="https://www.instagram.com/its_lucifer_.morningstar">
        <Instagram className="inline-block text-black h-6 w-6 mx-2 opacity-70 hover:opacity-100"/>
        </Link>
<div className="flex place-items-baseline pt-2">
  
<p className="text-xs text-black pl-2  ">
          &copy; 2024 Hekstore, Inc, All right reserved.
        </p>
</div>
      </div>
    </footer>
  );
}

export default Footer;
