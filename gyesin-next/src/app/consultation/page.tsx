'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';

export default function ConsultationPage() {
  const router = useRouter();
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // 연락처 자동 하이픈 삽입
    if (name === 'contact') {
      const str = value.replace(/[^0-9]/g, '');
      let res = '';
      if(str.length < 4) {
          res = str;
      } else if(str.length < 7) {
          res = str.substr(0, 3) + '-' + str.substr(3);
      } else if(str.length < 11) {
          res = str.substr(0, 3) + '-' + str.substr(3, 3) + '-' + str.substr(6);
      } else {
          res = str.substr(0, 3) + '-' + str.substr(3, 4) + '-' + str.substr(7);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: res
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // 개인정보 동의 확인
    if (!isPrivacyChecked) {
      alert('개인정보활용방침에 동의하셔야 합니다.');
      return;
    }

    // 입력값 검증
    if (!formData.name || !formData.contact || !formData.message) {
      alert('성명, 연락처, 문의내용은 필수 입력 사항입니다.');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_contact: formData.contact,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_2zev0on',
      'template_4gmlkn7',
      templateParams,
      'xmWI7YDOAKazvh19n'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('접수 완료');
        setFormData({
          name: '',
          contact: '',
          email: '',
          message: ''
        });
      },
      (err) => {
        console.log('FAILED...', err);
        alert('전송에 실패했습니다. 다시 시도해주세요.');
      }
    );
  };

  return (
    <>
    <div className="min-h-screen bg-linear-to-b from-[#0f172a] to-black py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-xl">
                <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white break-keep">상담문의</h3>
                <p className="text-gray-400 break-keep">문의를 남겨주시면 &apos;계약의 신&apos; 전문 컨설턴트가 연락드립니다.</p>
                </div>

                <form className="space-y-4 max-w-lg mx-auto" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="성명 *" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" 
                        required
                    />
                    </div>
                    <div className="relative">
                    <input 
                        type="text" 
                        name="contact"
                        placeholder="연락처 *" 
                        value={formData.contact}
                        onChange={handleChange}
                        maxLength={13}
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" 
                        required
                    />
                    </div>
                </div>
                <input 
                    type="email" 
                    name="email"
                    placeholder="E-mail 주소" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500" 
                    required
                />
                <textarea 
                    name="message"
                    placeholder="문의내용 *" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500"
                    required
                ></textarea>

                {/* 개인정보 동의 섹션 */}
                <div className="text-left space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="text-white">개인정보활용방침에 동의하시겠습니까?</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">네</span>
                        <input 
                        type="checkbox" 
                        checked={isPrivacyChecked}
                        onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                        className="w-5 h-5 accent-neon-cyan cursor-pointer"
                        />
                    </div>
                    </label>
                    
                    <div className="bg-black/30 p-4 rounded-lg border border-white/10 text-xs text-gray-400 space-y-1">
                    <p>- 수집하는 개인정보 항목 : 성함, 연락처, 이메일</p>
                    <p>- 수집 및 이용 목적 : 마케팅 광고 상담</p>
                    <p>- 보유 및 이용기간 : 신청 후 3년간 보관 후 삭제</p>
                    <p className="mt-2 text-gray-500">* 수집하는 개인정보는 그 목적에 맞게 사용되며 그 외의 용도로 사용되지 않습니다. 
                        <br/>미동의시 서비스 신청이 어렵습니다.</p>
                    </div>
                </div>

                <div className="flex gap-4 flex-col md:flex-row">
                    <button type="submit" className="flex-1 bg-linear-to-r from-neon-purple to-neon-cyan text-deep-blue font-bold text-lg py-4 rounded-lg hover:shadow-[0_0_20px_rgba(178,58,255,0.4)] transition-all transform hover:-translate-y-1">
                    문의하기
                    </button>
                    <a href="https://gyesin.com/reg_info" target="_blank" rel="noopener noreferrer" className="flex-1 bg-transparent border border-neon-cyan text-neon-cyan font-bold text-lg py-4 rounded-lg hover:bg-neon-cyan hover:text-deep-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all transform hover:-translate-y-1 block text-center">
                    가입하기
                    </a>
                </div>
                </form>

                <div className="mt-8 text-center bg-[#111827] bg-opacity-80 p-4 rounded-lg">
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
    </div>
    </>
  );
}
