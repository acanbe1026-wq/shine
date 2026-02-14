'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MessageCircle } from 'lucide-react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
  align: 'left' | 'right';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "엑셀, 구글워크시트, 타사 프로그램을 써봤는데, 이거 작품이네요",
    author: "강동구 고덕동 A 공인중개사 대표",
    role: "대표",
    image: "/agent_male_40s_suit.png",
    align: 'left',
  },
  {
    id: 2,
    text: "스마트폰 앱/PC로 어디서든 업무가 가능해서 너무 좋네요",
    author: "경기도 용인기흥구 P 소속공인중개사",
    role: "소속공인중개사",
    image: "/agent_female_30s_casual.png",
    align: 'left',
  },
  {
    id: 3,
    text: "걸려오는 전화 고객정보를 핸드폰에서 즉각 확인해서 고객과 통화하니 marketing에 너무 좋아요",
    author: "강남구 개포동 K공인중개사 대표",
    role: "대표",
    image: "/agent_male_30s_suit.png",
    align: 'left',
  },
  {
    id: 4,
    text: "우리 중개업소는 건물/아파트/오피스텔/상가/주택을 모두 취급하는데, 이 프로그램은 이 모든것들을 관리할 수 있어서 너무 좋네요",
    author: "인천광역시 남동구 간석동 S공인중개사 대표",
    role: "대표",
    image: "/agent_female_40s_suit.png",
    align: 'left',
  },
  {
    id: 5,
    text: "어떤 업무도 놓치지 않게, 아침에 출근하면, 해야할 일을 부여해주니 정말 똑똑한 AI비서네요",
    author: "대전광역시 유성구 S 중개보조원",
    role: "중개보조원",
    image: "/assistant_male_20s_casual.png",
    align: 'left',
  },
];

// ... existing imports



// ... existing interfaces

// ... existing code

// Inside component:
export default function CTASection() {
  // ... (GSAP code same as before)
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ... same GSAP logic
    const bubbles = gsap.utils.toArray<HTMLElement>('.chat-bubble-container');

    bubbles.forEach((bubble) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bubble,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        bubble,
        { y: 50, autoAlpha: 0, scale: 0.9 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: 'back.out(1.2)' }
      );
    });

  }, { scope: containerRef });

  return (
    <section id="cta" ref={containerRef} className="py-12 md:py-24 bg-linear-to-b from-[#0f172a] to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0b1221] opacity-95"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white break-keep">
            <span className="text-neon-cyan">계약의 신</span>을 생생한 후기로 만나보세요
          </h2>
          <p className="text-gray-400 break-keep">현직 공인중개사 분들의 실제 사용 후기입니다.</p>
        </div>

        <div className="flex flex-col space-y-8 mb-12 md:mb-24">
          {testimonials.map((item, index) => (
            <div key={item.id} className="chat-bubble-container flex items-start gap-4 invisible">
              <div className="shrink-0 flex flex-col items-center gap-2 mt-1">
                 <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neon-cyan/30 shadow-[0_0_10px_rgba(0,243,255,0.2)] relative bg-gray-800">
                    <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className="object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                 </div>
              </div>

              <div className="flex flex-col items-start max-w-[85%] md:max-w-[70%]">
                 <span className="text-xs text-gray-400 mb-1 ml-1 block">{item.role}</span>
                <div className="relative bg-[#2d3036] text-white p-4 rounded-r-2xl rounded-bl-2xl shadow-md border border-[#3e434d] overflow-hidden group">
                    <div className="relative overflow-hidden inline-block z-10">
                        <p className="text-sm md:text-base leading-relaxed relative z-10 whitespace-pre-wrap break-keep">
                            {item.text}
                        </p>
                    </div>

                    {/* Shimmer Effect - Overlay on top */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
                        <div 
                            className="absolute top-0 left-0 w-1/2 h-full -skew-x-12 animate-shimmer-periodic"
                            style={{ 
                                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 50%, transparent)',
                                animationDelay: `${index * 2}s` 
                            }}
                        ></div>
                    </div>
                </div>
                <span className="text-xs text-neon-cyan mt-2 ml-1 block font-medium">{item.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white break-keep">무료 상담 신청</h3>
              <p className="text-gray-400 break-keep">문의를 남겨주시면 &apos;계약의 신&apos; 전문 컨설턴트가 연락드립니다.</p>
            </div>

            <form className="space-y-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              {/* Form inputs same as before */}
              <input type="text" placeholder="성명" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" />
              <input type="text" placeholder="연락처" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" />
              <input type="email" placeholder="E-mail 주소" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" />
              <textarea placeholder="문의내용" rows={4} className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500"></textarea>

              <button className="w-full bg-linear-to-r from-neon-purple to-neon-cyan text-deep-blue font-bold text-lg py-4 rounded-lg hover:shadow-[0_0_20px_rgba(178,58,255,0.4)] transition-all transform hover:-translate-y-1">
                문의하기
              </button>
            </form>

            <div className="mt-8 text-center">
              <button 
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
                onClick={() => {
                  if (window.ChannelIO) {
                    window.ChannelIO('showMessenger');
                  }
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>채널톡으로 24시간 실시간 상담하기</span>
              </button>
            </div>
          </div>
      </div>
    </section>
  );
}
