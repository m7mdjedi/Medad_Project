'use client'
import Image from "next/image";
import logo2 from "../../public/photos/logo2.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function MyFooter() {
  return (
    <footer className=" text-white py-8 px-4 md:px-8"  style={{ backgroundColor: '#248D86' }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Logo and Social Media Section */}
          <div className="flex flex-row md:flex-col items-center lg:items-start">
            <div className="mb-6">
              <Image 
                src={logo2} 
                alt="logo" 
                width={200} 
                height={200} 
                className="w-40 md:w-48 lg:w-56"
              />
            </div>
            <div className="flex gap-4 md:gap-6">
              <a href="#" aria-label="Facebook" className=" text-white brightness-125 hover:opacity-80 transition-opacity">
                <FacebookRoundedIcon 
                  className="text-3xl md:text-4xl" 
                 
                />
              </a>
              <a href="#" aria-label="WhatsApp" className=" filter drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:opacity-80 transition-opacity">
                <WhatsAppIcon  
                  className="text-3xl md:text-4xl"  
                  style={{ color: '#25D366' }} 
                />
              </a>
              <a href="#" aria-label="YouTube" className="text-white filter drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
                <YouTubeIcon 
                  className="text-3xl md:text-4xl" 
                  style={{ color: '#FF0000' }} 
                />
              </a>
              
              <a href="#" aria-label="Instagram" className=" filter drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:opacity-80 transition-opacity">
                <InstagramIcon 
                  className="text-3xl md:text-4xl" 
                  style={{ color: '#E1306C' }} 
                />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <section className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 inline-block  text-[#fecf42]" >
              How to Communicate
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-[#fecf42] transition-colors">
                <span className="text-gray-400">📧</span>
                <a href="mailto:Z_Academy_@Syria.edu" className="break-all">
                  Z_Academy_@Syria.edu
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#fecf42] transition-colors">
                <span className="text-gray-400">📞</span>
                <a href="tel:0934423558">0934423558</a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#fecf42] " >
                <span className="text-gray-400">🌐</span>
                  <a href="tel:0934423558">Social Media</a>
              </li>
            </ul>
          </section>

          {/* Quick Links Section */}
          <section className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2  inline-block text-[#fecf42]" >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#fecf42] transition-colors block py-1">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#fecf42] transition-colors block py-1">
                 about us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#fecf42] transition-colors block py-1">
                  courses
                </a>
              </li>
            </ul>
          </section>

        </div>

        {/* Copyright/Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Z-Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;