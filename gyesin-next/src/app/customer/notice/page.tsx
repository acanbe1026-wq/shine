'use client';

import { Container, Table } from '@mantine/core';
import { useSearchParams, useRouter } from 'next/navigation'; // Correct import for App Router
import { Suspense } from 'react';

const notices = [
  { 
    id: 9, 
    title: '~계약의 신 앱 출시~', 
    date: '2025.09.25', 
    views: 97, 
    content: "안녕하세요 계약의 신 입니다.\n계약의 신이 안드로이드 버전 \"계약의 신\" 앱을 출시했습니다.\n현재 플레이 스토어에서 다운 받으실 수 있으며, 앱 버전에는 추가적인 기능이 추가되었습니다.\n① 전화 업무 중 문자 메세지 보내기 기능 (설정해둔 사무실 위치 안내 , 문구 등 )\n② 자택 또는 사무실 외에서도 폰으로 쉽게 업무 가능\n③ 전화 중 매물 등록 가능\n추가적인 안내는 문의주시면 친절히 응대해드리겠습니다.\n저희 계약의 신은 고객님들의 피드백을 적극수용하고 있으니 추가적인 문의는 카카오 채널로 문의주시면 감사하겠습니다."
  },
  { 
    id: 6, 
    title: '계약의 신 유투브 채널 개설완료', 
    date: '2023.07.02', 
    views: 450, 
    content: "안녕하세요\n\"계약의 신\"입니다. 유투브채널이 개설되었으니, 많은 참여 부탁드립니다.\n감사합니다."
  },
  { 
    id: 5, 
    title: '계약의 신 카카오 비즈니스 채널개설 완료', 
    date: '2023.07.02', 
    views: 189, 
    content: "안녕하세요\n\"계약의 신\" 입니다.\n카카오톡 채널에서 \"계약의 신\" 조회한 후 채널추가 하시면, \"계약의 신\"과 소통에 참여 할 수 있습니다.\n많은 분의 참여를 부탁드립니다.\n감사합니다."
  },
  { 
    id: 4, 
    title: '계약의 신 오픈하였습니다.', 
    date: '2023.06.27', 
    views: 490, 
    content: "안녕하세요\n공인중개사ERP 토탈서비스 플랫폼 \"계약의 신\"입니다.\n전국에 계신 공인중개사분들의 일손을 줄어드리고, 매출을 극대화 시키기에 최적화된 플랫폼입니다.\n또한, 국내 유일 웹기반 반응형 플랫폼이며, 공인중개사 실무진들이 기획부터 완성까지 꼭 필요한 기능들만 엄선하여 구축을 하였습니다.\n앞으로 열심히 진화하는 국내 최고 부동산 플랫폼을 추구하는 \"계약의 신\"이 되겠습니다.\n감사합니다."
  },
];

function NoticeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const seq = searchParams.get('seq');

  const showDetail = mode === 'read' && seq;
  const currentNotice = showDetail ? notices.find(n => n.id === Number(seq)) : null;

  if (showDetail && currentNotice) {
    // Detail View
    return (
      <Container size="lg" className="py-16">
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden shadow-xl p-8 text-white animate-fade-in-up">
          <div className="border-b border-gray-700 pb-4 mb-6">
            <h2 className="text-2xl font-bold mb-2">{currentNotice.title}</h2>
            <div className="flex gap-4 text-gray-400 text-sm">
              <span>{currentNotice.date}</span>
              <span>조회수: {currentNotice.views}</span>
            </div>
          </div>
          <div className="whitespace-pre-wrap leading-relaxed text-gray-300 min-h-[200px] mb-12 text-base">
            {currentNotice.content}
          </div>
          <div className="flex justify-center border-t border-gray-700 pt-8">
            <button 
              onClick={() => router.push('/customer/notice')}
              className="px-8 py-3 bg-[#1f2937] hover:bg-[#374151] hover:text-neon-cyan text-gray-300 rounded-lg transition-all border border-gray-600 font-bold"
            >
              목록
            </button>
          </div>
        </div>
      </Container>
    );
  }

  // List View
  const rows = notices.map((element, index) => (
    <Table.Tr 
      key={element.id} 
      className="hover:bg-white/5 transition-colors cursor-pointer group"
      onClick={() => router.push(`/customer/notice?mode=read&seq=${element.id}`)}
    >
      <Table.Td className="text-gray-400 text-center w-16 group-hover:text-white transition-colors">{notices.length - index}</Table.Td>
      <Table.Td className="text-gray-200 font-medium group-hover:text-neon-cyan transition-colors text-base">{element.title}</Table.Td>
      <Table.Td className="text-gray-400 text-center w-32 group-hover:text-white transition-colors">{element.date}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" className="py-16">
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
           <Table verticalSpacing="md" horizontalSpacing="md" className="text-gray-300">
              <Table.Thead className="bg-[#1f2937]">
                  <Table.Tr>
                  <Table.Th className="text-center text-gray-400 text-sm w-16">No.</Table.Th>
                  <Table.Th className="text-gray-400 text-sm">제목</Table.Th>
                  <Table.Th className="text-center text-gray-400 text-sm w-32">작성일</Table.Th>
                  </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
           </Table>
           
           {/* Pagination (Placeholder) */}
           <div className="flex justify-center py-6 border-t border-[#1f2937]">
              <div className="flex gap-2">
                  <button className="px-3 py-1 rounded bg-[#1f2937] text-gray-400 hover:text-white transition-colors">&lt;</button>
                  <button className="px-3 py-1 rounded bg-neon-cyan text-deep-blue font-bold shadow-[0_0_10px_rgba(0,243,255,0.4)]">1</button>
                  <button className="px-3 py-1 rounded bg-[#1f2937] text-gray-400 hover:text-white transition-colors">&gt;</button>
              </div>
           </div>
      </div>
    </Container>
  );
}

export default function NoticePage() {
  return (
    <>
      {/* Sub Banner */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-[#0b1221] to-[#1f2937] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 animate-fade-in-up">
            <p className="text-neon-cyan text-sm md:text-base font-bold tracking-widest mb-2 uppercase">Notice</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">공지사항</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
                계약의 신의 새로운 소식과 업데이트를 확인하세요.
            </p>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]"></div>
      </div>

      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-gray-500">Loading...</div>}>
        <NoticeContent />
      </Suspense>
    </>
  );
}
