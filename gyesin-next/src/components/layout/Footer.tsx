'use client';
import { Container, Text, Group, Anchor, Divider } from '@mantine/core';

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-xs bg-[#0b1221]">
            <Container size="xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 mb-8 text-left max-w-5xl mx-auto">
                    <div><span className="font-bold text-gray-400">상호:</span> (주)계약의신</div>
                    <div><span className="font-bold text-gray-400">대표자:</span> 홍길동</div>
                    <div className="md:col-span-2"><span className="font-bold text-gray-400">소재지:</span> 서울특별시 강남구 테헤란로 123, 4층</div>
                    <div><span className="font-bold text-gray-400">사업자등록번호:</span> 123-45-67890</div>
                    <div><span className="font-bold text-gray-400">통신판매업신고번호:</span> 제2023-서울강남-0000호</div>
                    <div><span className="font-bold text-gray-400">개인정보관리책임자:</span> 관리자</div>
                    <div><span className="font-bold text-gray-400">연락처:</span> 02-1234-5678</div>
                    <div><span className="font-bold text-gray-400">이메일:</span> contact@gyesin.com</div>
                    <div><span className="font-bold text-gray-400">호스팅제공자:</span> AWS Amazon</div>
                </div>
                <Text size="xs" c="dimmed">
                    &copy; 2026 계약의 신. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}
