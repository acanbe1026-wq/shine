'use client';

import Link from 'next/link';

export default function RegistrationInfoPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Iframe Container */}
      <div className="flex-1 w-full relative">
        <iframe 
          src="https://gyesin.com/reg_info" 
          className="absolute inset-0 w-full h-full border-0"
          title="회원가입"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10">
        <div className="max-w-4xl mx-auto flex justify-center">
            <Link 
              href="/" 
              className="w-full md:w-auto px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded shadow-md transition-colors text-lg text-center flex items-center justify-center"
            >
              HOME
            </Link>
        </div>
      </div>
    </div>
  );
}
