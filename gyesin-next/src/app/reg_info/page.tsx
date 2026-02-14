'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Check } from 'lucide-react';

export default function RegistrationInfoPage() {
  const [isOpenPostcode, setIsOpenPostcode] = useState(false);
  const [address, setAddress] = useState('');

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    setAddress(fullAddress);
    setIsOpenPostcode(false);
  };

  const handlePostcodeOpen = () => {
    setIsOpenPostcode(true);
  };

  const closePostcode = () => {
    setIsOpenPostcode(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex justify-start">
            {/* 로고 이미지가 없다면 텍스트로 대체하거나 기존 로고 경로 사용 */}
            <div className="relative w-40 h-10">
                 {/* 만약 public/img/text_logo.png가 없다면 public/logo-text.png를 사용하거나 대체 */}
                 <img src="/logo-text.png" alt="계약의 신" className="object-contain h-full w-auto filter invert brightness-0" />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">회원정보 입력</h2>

          <form id="f_agent_info" className="space-y-6">
            {/* 부동산 명 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="agent_name" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 부동산 명
              </label>
              <div>
                <input type="text" id="agent_name" name="agent_name" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 대표자 명 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="agent_ceo" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 대표자 명
              </label>
              <div>
                <input type="text" id="agent_ceo" name="agent_ceo" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 사업자번호 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
              <label className="flex items-center gap-1 font-medium text-gray-700 pt-2 md:pt-0 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 사업자번호
                <button type="button" id="btn_overlap_busino" className="ml-2 px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex items-center gap-1 shrink-0">
                  중복확인
                </button>
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                <input type="text" id="agent_busino_1" name="agent_busino_1" maxLength={3} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="agent_busino_2" name="agent_busino_2" maxLength={2} className="w-16 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="agent_busino_3" name="agent_busino_3" maxLength={5} className="w-24 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <input type="hidden" id="agent_busino_chk" value="N" />
              </div>
            </div>

            {/* 등록번호 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 등록번호
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                <input type="text" id="agent_bubin_1" name="agent_bubin_1" maxLength={5} className="w-24 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="agent_bubin_2" name="agent_bubin_2" maxLength={4} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="agent_bubin_3" name="agent_bubin_3" maxLength={5} className="w-24 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 소재지 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
              <label className="flex items-center gap-1 font-medium text-gray-700 pt-2 md:pt-0 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 소재지
                <button type="button" onClick={handlePostcodeOpen} className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors shrink-0">
                  검색
                </button>
              </label>
              <div className="w-full">
                <input type="text" id="address" name="agent_address" value={address} readOnly className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer" onClick={handlePostcodeOpen} placeholder="주소 검색 버튼을 클릭하세요" />
                <p className="text-xs text-gray-500 mt-1">* 행정동 주소</p>
              </div>
            </div>

            {/* 아이디 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start md:items-center">
              <label htmlFor="admin_id" className="flex items-center gap-1 font-medium text-gray-700 pt-2 md:pt-0 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 아이디
                <button type="button" id="btn_overlap_check" className="ml-2 px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors shrink-0">
                  중복확인
                </button>
              </label>
              <div>
                <input type="text" id="admin_id" name="admin_id" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <input type="hidden" id="admin_id_chk" value="N" />
              </div>
            </div>

            {/* 비밀번호 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="passwd" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 비밀번호
              </label>
              <div>
                <input type="password" id="passwd" name="passwd" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="passwd_confirm" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 비밀번호 확인
              </label>
              <div>
                <input type="password" id="passwd_confirm" name="passwd_confirm" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 이메일 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="email" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 이메일
              </label>
              <div>
                <input type="text" id="email" name="email" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 대표 휴대폰 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="mobile_1" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 대표 휴대폰
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                <select id="mobile_1" name="mobile_1" className="w-24 border border-gray-300 rounded px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                  <option value="">선택</option>
                  <option value='010'>010</option>
                  <option value='011'>011</option>
                  <option value='016'>016</option>
                  <option value='017'>017</option>
                  <option value='018'>018</option>
                  <option value='019'>019</option>
                </select>
                <span className="text-gray-400">-</span>
                <input type="text" id="mobile_2" name="mobile_2" maxLength={4} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="mobile_3" name="mobile_3" maxLength={4} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 대표 전화번호 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="telephone_1" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 대표 전화번호
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                <select id="telephone_1" name="telephone_1" className="w-24 border border-gray-300 rounded px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                  <option value="">선택</option>
                  <option value='02'>02</option>
                  <option value='031'>031</option>
                  <option value='032'>032</option>
                  <option value='033'>033</option>
                  <option value='041'>041</option>
                  <option value='042'>042</option>
                  <option value='043'>043</option>
                  <option value='051'>051</option>
                  <option value='052'>052</option>
                  <option value='053'>053</option>
                  <option value='054'>054</option>
                  <option value='055'>055</option>
                  <option value='061'>061</option>
                  <option value='062'>062</option>
                  <option value='063'>063</option>
                  <option value='064'>064</option>
                  <option value='070'>070</option>
                  <option value='080'>080</option>
                </select>
                <span className="text-gray-400">-</span>
                <input type="text" id="telephone_2" name="telephone_2" maxLength={4} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                <span className="text-gray-400">-</span>
                <input type="text" id="telephone_3" name="telephone_3" maxLength={4} className="w-20 border border-gray-300 rounded px-3 py-2 text-center text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 중개사무소 IP */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="agent_host" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap">
                <Check className="w-4 h-4 text-blue-500" /> 중개사무소 IP
              </label>
              <div>
                <input type="text" id="agent_host" name="agent_host" defaultValue="1.231.94.94" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* 영업담당자 코드 */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-center">
              <label htmlFor="seller" className="flex items-center gap-1 font-medium text-gray-700 whitespace-nowrap pl-5">
                영업담당자 코드
              </label>
              <div>
                <input type="text" id="seller" name="seller" className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>
          
            <div className="pt-8 border-t border-gray-200 flex justify-center">
              <button type="button" id="btn_agent_submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-md transition-colors w-full md:w-auto text-lg">
                등록 하기
              </button>
              <Link href="/" className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded shadow-md transition-colors w-full md:w-auto text-lg text-center flex items-center justify-center ml-0 md:ml-4 mt-2 md:mt-0">
                HOME
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        <div className="copyright">Copyright © <strong>계약의 신</strong>. All Rights Reserved.</div>
      </footer>

      {/* Postcode Modal */}
      {isOpenPostcode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden relative">
             <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-bold text-lg">주소 검색</h3>
                <button onClick={closePostcode} className="text-gray-500 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
             </div>
             <div className="h-[400px]">
                <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: '100%' }} />
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
