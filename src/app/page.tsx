import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Göz Container */}
      <div className="relative w-32 h-16 bg-white border-2 border-black rounded-full overflow-hidden hover:h-1 transition-all duration-200">
        {/* İris */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full">
          {/* Göz Bebeği */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full animate-[look_4s_infinite]">
            {/* Işık Yansıması */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      {/* Sanat Tablosu */}
      <div className="relative w-64 h-96 bg-[#2C231E] border-8 border-[#4A3728] rounded-sm shadow-lg overflow-hidden">
        {/* Tablo İçeriği - Mona Lisa Style */}
        <div className="absolute inset-0">
          {/* Arka plan - Dağlık manzara */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#718F75] via-[#4A5D4E] to-[#2C3A2F]">
            {/* Dağlar */}
            <div className="absolute bottom-1/2 left-0 w-full h-24 bg-[#2C3A2F] transform skew-y-6"></div>
            <div className="absolute bottom-1/3 right-0 w-1/2 h-32 bg-[#4A5D4E] transform -skew-y-3"></div>
          </div>
          
          {/* Portre */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-40 bg-[#D4C4A8] rounded-t-full">
            {/* Yüz detayları */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-28 bg-[#C4B498] rounded-b-full"></div>
            {/* Saç */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-32 bg-[#3C2A1A] rounded-t-full"></div>
            {/* Gülümseme */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-12 h-4 border-b-2 border-[#3C2A1A] rounded-b-full"></div>
          </div>
          
          {/* Kıyafet */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#2C231E] rounded-t-lg"></div>
        </div>
      </div>
    </div>
  );
}
