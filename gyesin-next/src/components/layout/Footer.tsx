'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-xs bg-[#0b1221] break-keep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex justify-center gap-8 text-sm">
                    <Link href="/policy/terms" className="hover:text-neon-cyan transition-colors">이용약관</Link>
                    <Link href="/policy/privacy" className="hover:text-neon-cyan transition-colors font-bold">개인정보처리방침</Link>
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
    );
}
