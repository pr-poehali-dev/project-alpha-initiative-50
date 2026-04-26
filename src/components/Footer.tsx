export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Бригада</h3>
                <a
                  href="#projects"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Объекты
                </a>
                <a
                  href="#mission"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Связь
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Монтаж</h3>
                <a
                  href="#news"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Опоры ВЛ
                </a>
                <a
                  href="#learn"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Технологии
                </a>
                <a
                  href="#publications"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Портфолио
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div>
                <h1 className="text-[10vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 text-white font-black tracking-tight uppercase">
                  НАМ ПОХУЙ
                </h1>
                <h1 className="text-[10vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] text-neutral-400 font-black tracking-tight uppercase">
                  ГДЕ И КОГДА
                </h1>
                <p className="text-neutral-500 text-xs sm:text-sm mt-3 uppercase tracking-widest">ВЛ-43 · Бригада И.Т.</p>
              </div>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ВЛ-43</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}