import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Rastgele Konumlandırılmış Nesneler */}
      <div className="absolute inset-0">
        {/* Her nesne için absolute positioning kullanarak rastgele konumlar */}
        
        {/* Turşu */}
        <div className="absolute left-[15%] top-[20%] transform -rotate-12 scale-90">
          <div className="relative w-32 h-48">
            <div className="absolute inset-0 bg-green-200 rounded-lg"> {/* Kavanoz */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-40 bg-green-100 rounded-lg"> {/* İç kısım */}
                <div className="absolute top-4 left-4 w-4 h-16 bg-green-600 rounded-full transform -rotate-12"></div>
                <div className="absolute top-8 right-4 w-4 h-16 bg-green-600 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-4 left-6 w-4 h-16 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Turşu</p>
        </div>

        {/* Cantık */}
        <div className="absolute right-[25%] top-[45%] transform rotate-45 scale-125">
          <div className="relative w-48 h-32">
            <div className="absolute inset-0 bg-yellow-600 rounded-lg transform rotate-45">
              <div className="absolute top-1/4 left-1/4 w-24 h-16 bg-red-700 rounded-md"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Cantık</p>
        </div>

        {/* Daktilo */}
        <div className="absolute left-[40%] top-[10%] transform -rotate-6 scale-75">
          <div className="relative w-48 h-40">
            <div className="absolute inset-0 bg-gray-800 rounded-lg">
              <div className="grid grid-cols-10 gap-1 p-2">
                {Array(30).fill(null).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-400 rounded-full"></div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-600"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Daktilo</p>
        </div>

        {/* Yastık */}
        <div className="absolute right-[10%] bottom-[30%] transform rotate-12 scale-110">
          <div className="relative w-40 h-32">
            <div className="absolute inset-0 bg-pink-200 rounded-2xl shadow-inner transform hover:scale-105 transition-transform">
              <div className="absolute inset-4 border-4 border-pink-300 rounded-xl"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Yastık</p>
        </div>

        {/* Kadayıf */}
        <div className="absolute left-[20%] bottom-[20%] transform -rotate-45 scale-90">
          <div className="relative w-40 h-32">
            <div className="absolute inset-0 bg-amber-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex flex-col gap-[2px]">
                {Array(20).fill(null).map((_, i) => (
                  <div key={i} className="h-[2px] bg-amber-800 opacity-50"></div>
                ))}
              </div>
              <div className="absolute inset-0 bg-amber-500 opacity-30"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Kadayıf</p>
        </div>

        {/* Börek */}
        <div className="absolute right-[35%] top-[60%] transform rotate-[30deg] scale-125">
          <div className="relative w-40 h-32">
            <div className="absolute inset-0 bg-yellow-100 rounded-lg border-2 border-yellow-600">
              <div className="absolute inset-2 flex flex-col gap-2">
                {Array(5).fill(null).map((_, i) => (
                  <div key={i} className="h-4 bg-yellow-200 rounded-full border border-yellow-300"></div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Börek</p>
        </div>

        {/* Lahmacun */}
        <div className="absolute left-[60%] bottom-[40%] transform -rotate-[15deg] scale-110">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-amber-200 rounded-full">
              <div className="absolute inset-2 bg-red-700 rounded-full opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-300 rounded-full"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Lahmacun</p>
        </div>

        {/* Bardak */}
        <div className="absolute right-[15%] top-[15%] transform rotate-[20deg] scale-90">
          <div className="relative w-24 h-32">
            <div className="absolute bottom-0 w-full h-24 bg-blue-200 rounded-b-lg"></div>
            <div className="absolute bottom-0 w-full h-12 bg-blue-400 rounded-b-lg opacity-50"></div>
            <div className="absolute top-0 w-full h-8 bg-blue-200 rounded-t-lg"></div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Bardak</p>
        </div>

        {/* Bileklik */}
        <div className="absolute left-[30%] top-[40%] transform rotate-[60deg] scale-125">
          <div className="relative w-32 h-32">
            <div className="absolute w-24 h-24 border-8 border-purple-400 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 flex items-center justify-around">
                {Array(6).fill(null).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-purple-600 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Bileklik</p>
        </div>

        {/* Satranç */}
        <div className="absolute right-[45%] bottom-[15%] transform rotate-[10deg] scale-75">
          <div className="relative w-40 h-40">
            <div className="grid grid-cols-8 gap-0">
              {Array(64).fill(null).map((_, i) => (
                <div key={i} className={`w-5 h-5 ${(Math.floor(i / 8) + i % 8) % 2 === 0 ? 'bg-white' : 'bg-black border border-white'}`}></div>
              ))}
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Satranç</p>
        </div>

        {/* Köpek */}
        <div className="absolute left-[5%] top-[50%] transform -rotate-[25deg] scale-110">
          <div className="relative w-40 h-40">
            <div className="absolute w-24 h-24 bg-brown-400 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -top-4 left-2 w-8 h-12 bg-brown-400 rounded-t-full transform -rotate-12"></div>
              <div className="absolute -top-4 right-2 w-8 h-12 bg-brown-400 rounded-t-full transform rotate-12"></div>
              <div className="absolute bottom-2 w-8 h-4 bg-black rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Köpek</p>
        </div>

        {/* Telefon */}
        <div className="absolute right-[5%] bottom-[50%] transform rotate-[40deg] scale-90">
          <div className="relative w-24 h-48">
            <div className="absolute inset-0 bg-gray-900 rounded-3xl border-4 border-gray-800">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-28 bg-blue-400 rounded-lg"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Telefon</p>
        </div>

        {/* Raptiye */}
        <div className="absolute left-[45%] bottom-[30%] transform rotate-[120deg] scale-125">
          <div className="relative w-24 h-24">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-400"></div>
            </div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Raptiye</p>
        </div>

        {/* Çiçekler */}
        <div className="absolute left-[70%] top-[70%] transform -rotate-[15deg] scale-90">
          <div className="flex justify-around gap-4">
            {/* Sümbül */}
            <div className="relative w-20 h-40">
              <div className="absolute bottom-0 w-2 h-32 bg-green-600"></div>
              <div className="absolute top-0 w-12 h-20 flex flex-col items-center">
                {Array(8).fill(null).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-purple-500 rounded-full transform -translate-y-1"></div>
                ))}
              </div>
              <p className="text-center mt-2 text-sm text-white">Sümbül</p>
            </div>
            {/* Menekşe */}
            <div className="relative w-20 h-40">
              <div className="absolute bottom-0 w-2 h-24 bg-green-600"></div>
              <div className="absolute top-8 flex">
                {Array(5).fill(null).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-violet-600 rounded-full transform rotate-45"></div>
                ))}
              </div>
              <p className="text-center mt-2 text-sm text-white">Menekşe</p>
            </div>
            {/* Zambak */}
            <div className="relative w-20 h-40">
              <div className="absolute bottom-0 w-2 h-32 bg-green-600"></div>
              <div className="absolute top-0 w-16 h-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array(6).fill(null).map((_, i) => (
                    <div key={i} className="absolute w-4 h-12 bg-white border border-pink-200 rounded-full transform rotate-[60deg]"></div>
                  ))}
                </div>
              </div>
              <p className="text-center mt-2 text-sm text-white">Zambak</p>
            </div>
          </div>
        </div>

        {/* Kış */}
        <div className="absolute left-[50%] top-[25%] transform rotate-[5deg] scale-100">
          <div className="relative w-48 h-48 bg-blue-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              {Array(20).fill(null).map((_, i) => (
                <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-[snowfall_5s_linear_infinite]" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `snowfall ${3 + Math.random() * 2}s linear infinite`
                }}></div>
              ))}
            </div>
            <div className="absolute bottom-0 w-full h-12 bg-white"></div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Kış</p>
        </div>

        {/* Boğa */}
        <div className="absolute right-[70%] bottom-[60%] transform rotate-[15deg] scale-110">
          <div className="relative w-48 h-48">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gray-800 rounded-t-full">
              <div className="absolute -left-8 top-0 w-8 h-2 bg-gray-800 transform rotate-45"></div>
              <div className="absolute -right-8 top-0 w-8 h-2 bg-gray-800 transform -rotate-45"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-gray-800 rounded-lg"></div>
          </div>
          <p className="text-center mt-2 font-bold text-white">Boğa</p>
        </div>

      </div>
    </div>
  );
}
