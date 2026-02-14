'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form'; // Assuming react-hook-form might be useful, but keeping it simple for now with standard HTML/React
import { ArrowLeft, Check, User, Phone, Mail, Lock, Building, MapPin } from 'lucide-react';

export default function RegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form submission handler (Mock)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050A18] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#111827] border border-[#1f2937] rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-neon-green" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 break-keep">가입 신청이 완료되었습니다!</h2>
          <p className="text-gray-400 mb-8 break-keep">
            담당자가 확인 후 입력하신 연락처로<br/>빠르게 안내해 드리겠습니다.
          </p>
          <Link href="/" className="inline-block w-full py-3 bg-neon-cyan/10 text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/20 transition-colors">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050A18] pt-[100px] pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> 메인으로
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 break-keep">
            <span className="text-neon-cyan">계약의 신</span> 회원가입
          </h1>
          <p className="text-gray-400 break-keep">
            서비스 이용을 위해 필수 정보를 입력해 주세요.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1f2937] rounded-2xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                <User className="w-5 h-5 text-neon-purple" /> 기본 정보
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">이름 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-[#0b1221] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">연락처 <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-[#0b1221] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">이메일 (아이디) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-[#0b1221] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    placeholder="example@gyesin.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">비밀번호 <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="password" 
                      id="password" 
                      required 
                      className="w-full bg-[#0b1221] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-1">비밀번호 확인 <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      required 
                      className="w-full bg-[#0b1221] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Office Info */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                <Building className="w-5 h-5 text-neon-green" /> 중개사무소 정보
              </h3>
              
              <div>
                <label htmlFor="officeName" className="block text-sm font-medium text-gray-400 mb-1">사무소 명칭</label>
                <input 
                  type="text" 
                  id="officeName" 
                  className="w-full bg-[#0b1221] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="예: 계약의신 공인중개사사무소"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-1">직책</label>
                  <select 
                    id="role" 
                    className="w-full bg-[#0b1221] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all appearance-none"
                  >
                    <option value="">선택해주세요</option>
                    <option value="representative">대표 공인중개사</option>
                    <option value="licensed">소속 공인중개사</option>
                    <option value="assistant">중개보조원</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-400 mb-1">주 활동 지역</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      id="region" 
                      className="w-full bg-[#0b1221] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                      placeholder="예: 서울 강남구"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="pt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 items-center">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    required
                    className="h-5 w-5 rounded border-gray-700 bg-[#0b1221] text-neon-cyan focus:ring-offset-gray-900"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="agree" className="font-medium text-gray-300">
                    <span className="text-neon-cyan hover:underline cursor-pointer">이용약관</span> 및 <span className="text-neon-cyan hover:underline cursor-pointer">개인정보처리방침</span>에 동의합니다.
                  </label>
                  <p className="text-gray-500">회원가입 시 서비스 이용 약관에 동의하는 것으로 간주합니다.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-lg font-bold text-[#050A18] transition-all transform hover:-translate-y-1
                  ${isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-linear-to-r from-neon-purple to-neon-cyan hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  }`}
              >
                {isSubmitting ? '처리 중...' : '가입하기'}
              </button>
            </div>

          </form>
        </div>
        
        {/* Helper Links */}
        <div className="mt-8 text-center text-sm text-gray-500">
          이미 계정이 있으신가요? <Link href="/login" className="text-neon-cyan hover:underline">로그인하기</Link>
        </div>
      </div>
    </div>
  );
}
