'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from '@mantine/core'; // Using Mantine Menu for dropdown
import { IconChevronDown } from '@tabler/icons-react';
import { FaYoutube, FaInstagram, FaFacebook, FaBlogger } from 'react-icons/fa';
import { Menu as MenuIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1221]/90 backdrop-blur-md border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo Group */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3" onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}>
              <img src="/logo-symbol.png" alt="계약의 신 심볼" className="h-14 w-auto" />
              <div className="flex flex-col justify-center gap-[1px]">
                  <img src="/logo-text.png" alt="계약의 신 텍스트" className="h-[35px] md:h-[39px] w-auto brightness-0 invert" />
                   <img src="/logo-erp.png" alt="ERP" className="w-0 min-w-full h-auto brightness-0 invert opacity-100" />
              </div>
            </Link>
            
            {/* Social Icons (Next to Logo) */}

          </div>

          {/* Right Side Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors"><FaYoutube size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#ff5722] transition-colors"><FaBlogger size={18} /></a>
            </div>
            <Link href="/" className="group relative text-sm font-bold text-gray-100 transition-colors hover:text-white" onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}>
              HOME
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* CUSTOMER Dropdown */}
            <Menu trigger="hover" openDelay={0} closeDelay={200} shadow="md" width={200} position="bottom-end" offset={18}>
              <Menu.Target>
                <button className="group relative flex items-center gap-1 text-sm font-bold text-gray-100 transition-colors hover:text-white cursor-pointer bg-transparent border-none">
                  CUSTOMER <IconChevronDown style={{ width: '12px', height: '12px' }} />
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
                </button>
              </Menu.Target>
              <Menu.Dropdown className="bg-[#111827] border-[#374151]">
                <Menu.Item component={Link} href="/customer/notice" className="text-gray-200 font-medium hover:bg-[#1f2937] hover:text-neon-cyan transition-colors">
                  공지사항
                </Menu.Item>
                <Menu.Item component={Link} href="/customer/faq" className="text-gray-200 font-medium hover:bg-[#1f2937] hover:text-neon-cyan transition-colors">
                  자주 묻는 질문
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Link href="/consultation" className="group relative text-sm font-bold text-gray-100 transition-colors hover:text-white">
              상담문의
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button (Burger) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-neon-cyan bg-transparent border-none cursor-pointer">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b1221] border-b border-[#1f2937] p-4 flex flex-col gap-4">
          <div className="flex gap-4 justify-center py-2 border-b border-[#1f2937]">
            <FaYoutube className="text-gray-400" />
            <FaInstagram className="text-gray-400" />
            <FaFacebook className="text-gray-400" />
            <FaBlogger className="text-gray-400" />
          </div>
          <Link href="/" className="text-gray-300 hover:text-neon-cyan block text-center py-2">HOME</Link>
          <Link href="/consultation" className="text-gray-300 hover:text-neon-cyan block text-center py-2">상담문의</Link>
          <div className="text-gray-300 font-bold text-center mt-2 border-t border-gray-800 pt-2">CUSTOMER</div>
          <Link href="/customer/notice" className="text-gray-400 hover:text-neon-cyan block text-center py-1 text-sm">공지사항</Link>
          <Link href="/customer/faq" className="text-gray-400 hover:text-neon-cyan block text-center py-1 text-sm">자주 묻는 질문</Link>
        </div>
      )}
    </nav>
  );
}
