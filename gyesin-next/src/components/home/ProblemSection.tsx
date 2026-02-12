'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';


const problems = [
  {
    image: "/icons/icon-space.jpg",
    title: "공간의 제약 해결",
    q: "집에서 사무실처럼 효율적으로 일을 할 수가 없어요",
    a: "\"계약의 신\"은 설치형 프로그램 기반이 아니라, 웹기반으로 어느 장소에서도 업무가 가능해요"
  },
  {
    image: "/icons/icon-caller.jpg",
    title: "스마트 발신자 표시",
    q: "핸드폰으로 고객이 전화오면, 내 핸드폰에 저장된 고객이 아니면 누구인지 알수가 없어요",
    a: "\"계약의 신\"은 고객으로부터 전화 수신시에 사무실 PC 및 스마트폰 화면에 저장된 모든 DB고객들이 누구인지 알려줘서 고객응대가 참 효과적입니다."
  },
  {
    image: "/icons/icon-mobile.jpg",
    title: "실시간 모바일 업무",
    q: "이동중에 고객에게 유선상으로 매물의뢰 및 상담시에 기억했다가 사무실에 와서 정리를 해야 해서 놓칠때가 많아요",
    a: "\"계약의 신\"은 전용 APP을 통해, 고객과 통화중에 매물의뢰 및 상담 내용을 실시간으로 스마트폰에 입력할 수 있어 꼼꼼하고 정확한 업무가 가능합니다."
  },
  {
    image: "/icons/icon-property.jpg",
    title: "모든 부동산 관리",
    q: "아파트만으로는 경쟁이 심해서, 오피스텔, 다세대, 다가구, 구분상가, 단독주택, 건물 등 전부 관리할 수 있는 프로그램이 있었으면 좋겠어요",
    a: "\"계약의 신\"은 현업 공인중개사들의 다년간 축적된 경험과 실무진을 통해 모든 중개아이템을 입력 및 관리할 수 있는 종합 플랫폼입니다."
  },
  {
    image: "/icons/icon-schedule.jpg",
    title: "AI 자동 일정관리",
    q: "매물의 만기관리, 일정관리, 해야할 일 등 누락되는 경우가 많아서 저도 모르게 타 부동산에서 계약 되는 경우가 많아 속상해요",
    a: "\"계약의 신\"은 AI 자동화 알고리즘을 통해, 만기3개월전, 다가오는 일정 및 해야 할 일들을 놓치지 않고 사용자에게 알아서 챙겨줍니다."
  },
  {
    image: "/icons/icon-sms.jpg",
    title: "간편한 문자 발송",
    q: "관리하는 고객들에게 단체문자를 발송시 타사 서비스에 접속해서 엑셀업로드 후 문자전송을 하는데 불편해요",
    a: "\"계약의 신\"은 타사 접속없이 자체 플랫폼을 통해, 원하는 고객에게 선별적으로 얼마든지 보낼 수 있습니다."
  }
];

const MagneticCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !contentRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    // Magnetic effect on the card container
    gsap.to(cardRef.current, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.3,
      ease: "power2.out"
    });

    // Parallax effect on content (stronger movement)
    gsap.to(contentRef.current, {
      x: x * 0.05,
      y: y * 0.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !contentRef.current) return;
    
    gsap.to([cardRef.current, contentRef.current], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div 
      className={`relative h-full transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <div ref={cardRef} className="h-full relative z-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
        hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] 
        transition-colors duration-300 overflow-hidden group">
            <div ref={contentRef} className="p-6 md:p-8 h-full flex flex-col relative z-20">
                {children}
            </div>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    </div>
  );
};

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.problem-card-item');
    
    gsap.fromTo(cards, 
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="problem" className="relative py-16 md:py-24 min-h-screen flex flex-col items-center justify-center bg-[#050A14] overflow-hidden">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image 
          src="/problem-bg.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050A14] via-transparent to-[#050A14]"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 problem-header">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            유창한 언변과 중개실무만으로<br/>
            <span className="text-gray-400">매출의 한계</span>를 느끼시나요?
          </h2>
          <div className="inline-block relative group cursor-default">
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-neon-cyan to-neon-purple font-bold tracking-wide pb-1">
              &quot;계약의 신&quot;은 그 한계를 깨뜨려 드립니다.
            </p>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-neon-cyan to-neon-purple transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            return (
              <div 
                key={index} 
                className="problem-card-item h-full transform"
              >
                <MagneticCard className="h-full">
                  <div className="mb-6 flex items-start justify-between">
                     <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-white/10 group-hover:scale-110 group-hover:ring-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        width={64} 
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-right">
                       
                    </div>
                  </div>
                  
                  <div className="grow flex flex-col justify-between">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">{item.title}</h3>
                        <div className="flex gap-3 items-start p-3 rounded-lg bg-red-500/5 border border-red-500/10 group-hover:bg-red-500/10 transition-colors">
                            <span className="text-red-400 font-bold shrink-0 text-sm mt-0.5">Q.</span>
                            <p className="text-gray-300 text-sm leading-relaxed font-medium">{item.q}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-auto border-t border-white/10 group-hover:border-neon-cyan/20 transition-colors">
                        <div className="flex gap-3 items-start">
                            <span className="text-neon-cyan font-bold shrink-0 text-sm mt-0.5">A.</span>
                            <p className="text-gray-100 text-sm leading-relaxed font-semibold group-hover:text-white transition-colors">{item.a}</p>
                        </div>
                      </div>
                  </div>
                </MagneticCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
