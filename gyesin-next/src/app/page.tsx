'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { FaYoutube, FaInstagram, FaFacebook, FaBlogger } from 'react-icons/fa';
import InteractiveBackground from '@/components/InteractiveBackground';
import ProblemSection from '@/components/home/ProblemSection';
import CTASection from '@/components/home/CTASection';

import {
  MonitorSmartphone,
  Zap,
  Database,
  CheckCircle2,
  Menu as MenuIcon,
  ArrowRight,
} from 'lucide-react';

// GSAP 플러그인 등록
// gsap.registerPlugin(ScrollTrigger); // Moved to useGSAP hook

const heroImages = [
  '/hero-slide-1.png',
  '/hero-slide-2.png',
  '/hero-slide-3.png'
];

export default function ContractGodLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP 애니메이션 설정
  useGSAP(() => {
    // GSAP 플러그인 등록 (클라이언트 사이드에서만 안전하게 실행)
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section: 텍스트 순차 등장 및 배경 파티클 효과
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-text',
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    )
      .fromTo('.hero-image',
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: 'power2.out'
        }, '-=0.5');

    // 2. Problem Section: 카드 순차 등장 (ScrollTrigger)
    gsap.fromTo('.problem-card',
      { y: 100, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: '#problem',
          start: 'top 80%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }
    );

    // 3. Solution Section: 좌측에서 슬라이드 및 요소 페이드인
    const solutionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#solution',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    solutionTl.fromTo('.solution-content',
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 1 }
    )
      .fromTo('.solution-feature',
        { x: 50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, stagger: 0.2 }, '-=0.5');

    // 4. CTA Section: 인터뷰 내용 팝업 효과
    gsap.fromTo('.testimonial-bubble',
      { scale: 0.8, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 75%',
        },
        scale: 1,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)'
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-blue text-white overflow-hidden font-sans selection:bg-neon-cyan selection:text-deep-blue">
      <InteractiveBackground />

      {/* 네비게이션 */}
      <nav className={`fixed top-0 w-full z-50 bg-[#0b1221]/90 backdrop-blur-md border-b transition-colors duration-300 ${
        hoveredNav === 'home' ? 'border-neon-purple' :
        hoveredNav === 'customer' ? 'border-neon-cyan' :
        hoveredNav === 'consultation' ? 'border-neon-green' :
        'border-[#1f2937]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo Group */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3" onClick={(e) => {
                  if (window.location.pathname === '/') {
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

              <Link 
                href="/" 
                className="group relative text-sm font-bold text-gray-100 transition-colors hover:text-white" 
                onMouseEnter={() => setHoveredNav('home')}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}>
                HOME
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* CUSTOMER Dropdown */}
              <Menu trigger="hover" openDelay={0} closeDelay={200} shadow="md" width={200} position="bottom-end" offset={18}>
                <Menu.Target>
                  <button 
                    className="group relative flex items-center gap-1 text-sm font-bold text-gray-100 transition-colors hover:text-white"
                    onMouseEnter={() => setHoveredNav('customer')}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
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

              <Link 
                href="/consultation" 
                className="group relative text-sm font-bold text-gray-100 transition-colors hover:text-white"
                onMouseEnter={() => setHoveredNav('consultation')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                상담문의
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button (Burger) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-neon-cyan">
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

      {/* 1. Hero Section: Chaos to Order */}
      <section id="hero" className="relative h-auto md:min-h-screen flex flex-col items-center pt-[108px] pb-4 md:pb-0 overflow-hidden">
        {/* 배경 그라디언트 효과 (네온 분위기) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-75"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <h2 className="hero-text invisible text-neon-cyan font-bold tracking-wider mb-4 uppercase"></h2>
          <h1 className="hero-text invisible text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto flex flex-col items-center break-keep">
            <span>국내 유일 반응형 부동산중개 플랫폼</span>
            <span className="text-neon-purple inline-flex items-center gap-1 mt-2">
              &quot;
              <span className="relative inline-block h-[1.2em] w-auto">
                 <img src="/gyesin-text-black.png" className="opacity-0 w-auto h-full" alt="계약의 신" />
                 <span className="absolute inset-0 bg-neon-purple" style={{ maskImage: 'url(/gyesin-text-black.png)', WebkitMaskImage: 'url(/gyesin-text-black.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></span>
               </span>
              &quot;
            </span>
          </h1>
          <div className="hero-text mb-10 w-full max-w-4xl mx-auto overflow-hidden flex select-none mask-image-gradient">
            {/* Infinite Marquee Loop - Increased duplication to prevent gaps */}
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="animate-marquee-scroll whitespace-nowrap shrink-0 w-max px-4 flex items-center text-lg md:text-3xl text-gray-300 font-medium"
              >
               공인중개사를 위한 <span className="text-neon-cyan font-bold mx-2">AI 업무비서!</span>&nbsp;&nbsp;&nbsp;&nbsp;중개업무의 혁신을 이루다!
              </div>
            ))}
          </div>

          <div className="hero-text invisible flex justify-center gap-4 mb-[38px]">
            <Link href="https://gyesin.com/reg_info" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-transparent border border-neon-cyan text-neon-cyan font-bold rounded-lg overflow-hidden transition-all hover:bg-neon-cyan hover:text-deep-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] inline-block text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                가입하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* 태블릿/모바일 인터페이스 이미지 (Source 4 반영) */}
          {/* 태블릿/모바일 인터페이스 이미지 (Source 4 반영) */}
          <div className="hero-image invisible relative mx-auto w-full max-w-4xl rounded-2xl" style={{ aspectRatio: '1024/574' }}>
            <div className="grid grid-cols-1 grid-rows-1 w-full h-full">
               {heroImages.map((src, index) => (
                  <div 
                    key={index}
                    className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                        src={src}
                        alt={`계약의 신 스크린샷 ${index + 1}`}
                        className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                ))}
            </div>
          </div>

        </div>

        {/* 스크롤 힌트 */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section: 문제 제기 (Updated) */}
      <ProblemSection />

      {/* 3. Solution Section: 해결책 */}
      <section id="solution" className="py-12 md:py-24 relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <div className="solution-content invisible">
              <h2 className="text-neon-cyan font-bold tracking-widest mb-2 uppercase text-sm">All-in-One Platform</h2>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-snug break-keep">
                꼼꼼하고 똑똑한<br />
                <span className="text-neon-purple">업무 자동화</span>의 실현
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed break-keep">
                반응형 웹과 APP 구현으로 언제 어디서나 대량의 DB를 관리하세요.
                매일 해야 할 일을 AI가 자동으로 할당해 드립니다.
              </p>

              <ul className="space-y-4">
                {[
                  "반응형 웹, APP구현으로 언제 어디서나 대량의 DB관리 및 고객 응대",
                  "중개사가 매일 해야할 일들을 계약의 신이 자동 할당",
                  "방문, 계약, 잔금, 매물, 고객, 만기 관리가 유기적으로 연동",
                  "꼼꼼하고 똑똑한 업무자동화 실현"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 break-keep">
                    <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                {/* 기능 시각화 카드 (Stagger Animation 대상) */}
                {[
                  { title: "AI 업무 할당", desc: "매일 해야할 업무 자동 배정", icon: Zap, color: "text-yellow-400" },
                  { title: "고객/매물 관리", desc: "유기적으로 연동되는 알고리즘", icon: Database, color: "text-neon-cyan" },
                  { title: "직원 관리", desc: "업무실적 및 비공개 업무 기능", icon: MonitorSmartphone, color: "text-neon-purple" },
                  { title: "완벽한 연동", desc: "모든 업무 프로세스의 유기적 통합", icon: CheckCircle2, color: "text-neon-green" }
                ].map((feature, idx) => (
                  <div key={idx} className="solution-feature invisible p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-all cursor-default">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-white/5 ${feature.color}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg break-keep">{feature.title}</h4>
                        <p className="text-sm text-gray-400 break-keep">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA Section: 행동 유도 */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-xs bg-[#0b1221] break-keep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center gap-8 text-sm">
            <a href="https://home.gyesin.com/term.php" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">이용약관</a>
            <a href="https://home.gyesin.com/privacy.php" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors font-bold">개인정보처리방침</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 mb-8 text-left max-w-5xl mx-auto">
            <div><span className="font-bold text-gray-400">상호:</span> 계약의 신</div>
            <div><span className="font-bold text-gray-400">대표자:</span> 이재원</div>
            <div className="md:col-span-2"><span className="font-bold text-gray-400">소재지:</span> 서울특별시 성동구 왕십리로 24나길 20, 2층 2304호(도선동, 창성빌딩)</div>
            <div><span className="font-bold text-gray-400">사업자등록번호:</span> 669-12-02474</div>
            <div><span className="font-bold text-gray-400">통신판매업신고번호:</span> 2023-서울성동-1113</div>
            <div><span className="font-bold text-gray-400">개인정보관리책임자:</span> 이재원</div>
            <div><span className="font-bold text-gray-400">연락처:</span> 0507-1371-1571</div>
            <div><span className="font-bold text-gray-400">이메일:</span> acanbe@gyesin.com</div>
            <div><span className="font-bold text-gray-400">호스팅제공자:</span> 계약의 신</div>
          </div>
          <p className="text-gray-600">
            &copy; 2026 계약의 신. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}