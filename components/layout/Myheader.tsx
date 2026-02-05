'use client'
import { useState } from 'react';
import Image from "next/image";
import logo2 from "../../public/photos/logo2.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import StarsIcon from '@mui/icons-material/Stars';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import { ContactIcon } from 'lucide-react';
import Link from 'next/link';
function Myheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const navLinks = [
    { id: 'home', href:'/#',label: 'Home', icon: <HomeIcon className="mr-2" />, path: '/' },
    { 
      id: 'lessons', 
      href:'/courses',
      label: 'courses', 
      icon: <SchoolIcon className="mr-2" />,
      children: [
        { id: 'online', label: 'online Lessons', icon: <StarsIcon className="mr-2 text-yellow-500" /> },
        { id: 'recorded', label: 'Recorded Lessons', icon: <VideoLibraryIcon className="mr-2 text-blue-500" /> }
      ]
    },
    { id: 'payment', href:'/payment',label: 'Payment', icon: <PaidIcon className="mr-2" />, path: '/payment' },
    { id: 'about', href:'/aboutUs', label: 'about us', icon: <InfoIcon className="mr-2" />, path: '/about' },
    { id: 'contact', href:'/contact', label: 'Contact', icon: <ContactIcon />, path: '/contact' }
  ];

  const socialLinks = [
    { id: 'facebook', label: 'Facebook', icon: <FacebookIcon />, color: 'text-blue-600', bgColor: 'hover:bg-blue-50', url: 'https://facebook.com' },
    { id: 'twitter', label: 'Twitter', icon: <TwitterIcon />, color: 'text-sky-500', bgColor: 'hover:bg-sky-50', url: 'https://twitter.com' },
    { id: 'instagram', label: 'Instagram', icon: <InstagramIcon />, color: 'text-pink-600', bgColor: 'hover:bg-pink-50', url: 'https://instagram.com' },
    { id: 'linkedin', label: 'LinkedIn', icon: <LinkedInIcon />, color: 'text-blue-700', bgColor: 'hover:bg-blue-50', url: 'https://linkedin.com' },
    { id: 'youtube', label: 'YouTube', icon: <YouTubeIcon />, color: 'text-red-600', bgColor: 'hover:bg-red-50', url: 'https://youtube.com' },
    { id: 'email', label: 'Email', icon: <EmailIcon />, color: 'text-gray-600', bgColor: 'hover:bg-gray-50', url: 'mailto:contact@example.com' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement your search logic here
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
    setShowSocialMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Social Media Bar */}
      <div className="bg-gradient-to-r from-[#248d86] to-[#348d88] text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-sm hidden md:block">
            📞 Contact: +1 (555) 123-4567 | ✉️ info@zacademy.com
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Social Media Links - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.slice(0, 4).map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Social Media Dropdown - Mobile */}
            <div className="relative md:hidden">
              <button
                onClick={() => setShowSocialMenu(!showSocialMenu)}
                className="flex items-center p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Social media links"
              >
                <ShareIcon className="text-white" />
              </button>
              
              {showSocialMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-20">
                  {socialLinks.map((social) => (
                    <button
                      key={social.id}
                      onClick={() => handleSocialClick(social.url)}
                      className={`flex items-center w-full px-4 py-3 ${social.color} ${social.bgColor} transition-colors`}
                    >
                      <span className="mr-3">{social.icon}</span>
                      {social.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src={logo2} 
              alt="Z Academy Logo" 
              width={240} 
              height={40}
              className="w-32 md:w-40"
              priority
            />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lessons, topics, or resources..."
                  className="w-full px-4 py-2 pl-10 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent"
                />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1.5 p-1.5 bg-[#348d88] text-white rounded-full hover:bg-[#2a716d] transition-colors"
                  aria-label="Search"
                >
                  <SearchIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeNav === link.id 
                      ? 'bg-[#348d88] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#348d88]'
                  }`}
                >
                  {link.icon}
                {link.label !== 'courses' && <Link href={link.href}>{link.label}</Link>}
{link.label === 'courses' && link.label}
                </button>
                
                {/* Dropdown for Lessons */}
                {link.children && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    {link.children.map((child) => (
                      <Link
                        key={child.id}
                        href={`${link.href}/${child.id}`}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#9edbe4] hover:text-[#348d88] transition-colors"
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-[#348d88] hover:bg-[#9edbe4] hover:text-whiterounded-lg transition-colors">
              <LoginIcon className="mr-2" />
              Login
            </button>
            <button className="flex items-center px-4 py-2 bg-[#348d88] text-white rounded-lg hover:from-[#1fbdb2] hover:bg-[#2a716d] transition-all shadow-md hover:shadow-lg">
              <PersonAddIcon className="mr-2" />
              Sign Up
            </button>
          </div>

          {/* Mobile Search and Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Expanded Mobile Search */}
        {isSearchExpanded && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lessons, topics, or resources..."
                  className="w-full px-4 py-3 pl-12 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent"
                  autoFocus
                />
                <SearchIcon className="absolute left-4 top-3.5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 bg-[#348d88] text-white rounded-lg hover:bg-[#2a716d] transition-colors"
                  aria-label="Search"
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                      activeNav === link.id 
                        ? 'bg-[lab(53_-31.36_-5.19)] text-white'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center">
                      {link.icon}
                      {link.label}
                    </div>
                    {link.children && <span>▼</span>}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {link.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <a
                          key={child.id}
                          href="#"
                          className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                        >
                          {child.icon}
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Social Media in Mobile Menu */}
              <div className="pt-4 border-t">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">FOLLOW US</h3>
                <div className="grid grid-cols-3 gap-2 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-3 rounded-lg ${social.bgColor} transition-colors`}
                    >
                      <span className={social.color}>{social.icon}</span>
                      <span className="text-xs mt-1 text-gray-600">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <button className="flex items-center justify-center px-4 py-3 text-[#348d88] hover:bg-[#9edbe4] hover:text-white rounded-lg">
                  <LoginIcon className="mr-2" />
                  Login
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-[#348d88] text-white rounded-lg hover:bg-[#2a716d] transition-colors">
                  <PersonAddIcon className="mr-2" />
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active Indicator */}
      <div className="h-1 bg-[lab(53_-31.36_-5.19)]"></div>
    </nav>
  );
}

export default Myheader;