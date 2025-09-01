import Image from "next/image";
import PastEventsCarousel from "./components/PastEventsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen relative lowercase">
      
      {/* Navigation Bar - Treasure Map Style */}
      <nav className="fixed top-0 right-0 z-50 flex justify-end items-center px-8 py-4">
        <div className="flex gap-6 text-amber-900 font-bold text-xl bg-amber-50 bg-opacity-90 px-8 py-4 rounded-lg shadow-xl border-2 border-amber-800 transform -rotate-1 backdrop-blur-sm">
          <a href="#chart-course" className="hover:text-red-700 transition-colors flex items-center gap-2 font-serif">
            <span>🗺️</span> Chart Course
          </a>
          <a href="#about-guild" className="hover:text-red-700 transition-colors flex items-center gap-2 font-serif">
            <span>📜</span> The Guild
          </a>
          <a href="#past-expeditions" className="hover:text-red-700 transition-colors flex items-center gap-2 font-serif">
            <span>⚓</span> Past Expeditions
          </a>
          <a href="#faq" className="hover:text-red-700 transition-colors flex items-center gap-2 font-serif">
            <span>🧭</span> FAQ
          </a>
        </div>
      </nav>

      {/* --- Single Scroll Section --- */}
      <section id="main-scroll" className="relative z-10 flex items-center justify-center px-4 sm:px-8 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Scroll Container */}
          <div className="relative pt-10">
            
            <Image 
              src="/flag-orpheus-top.png"
              alt="Orpheus Flag"
              width={150}
              height={150}
              className="absolute top-0 left-0 z-20 hidden md:block"
            />
            
            
            {/* Scroll Parchment */}
            <div className="relative wavy-parchment-container px-4 sm:px-8 md:px-16 pb-8 pt-0 sm:pb-16">
              
              {/* --- Combined Content --- */}
              <div className="text-amber-900 font-serif space-y-16 text-center pt-12">

                {/* --- Hero Logo Section (No Border) --- */}
                <div className="relative">
                  {/* Logo and Text */}
                  <div className="text-center">
          <Image
                      src="/odysseyLogo.png"
                      alt="Odyssey Logo"
                      width={2000}
                      height={1000}
                      className="mx-auto drop-shadow-xl sepia contrast-110 max-w-full h-auto"
                      priority
                    />
                    <div className="mt-8 text-blue-900 text-xl sm:text-2xl md:text-3xl font-bold tracking-wider font-serif">
                      ⚓ october 2nd, 2025 ⚓
                    </div>
                    <div className="mt-4 text-blue-800 text-base sm:text-lg md:text-xl italic font-serif border-t-2 border-amber-700 pt-4 max-w-lg mx-auto">
                      by hack club&apos;s athena initiative
                    </div>
                    <div className="mt-2 text-cyan-700 text-sm font-serif">
                      ~ Mark well these coordinates of the greatest treasure ~
                    </div>
                  </div>

                  {/* Floating Map Annotations */}
                  <div className="absolute top-8 -left-24 transform -rotate-12 text-amber-800 font-serif italic text-sm bg-amber-50 px-2 py-1 border border-amber-600 rounded opacity-80 hidden md:block">
                    &quot;Beware the Kraken!&quot;
                  </div>
                  
                  <div className="absolute bottom-0 -right-24 transform rotate-6 text-amber-800 font-serif italic text-sm bg-amber-50 px-2 py-1 border border-amber-600 rounded opacity-80 hidden md:block">
                    &quot;X marks ye spot&quot;
                  </div>
                </div>

                <hr className="border-t-4 border-dashed border-amber-800 opacity-50 my-12" />

                {/* --- Chart Your Course Content --- */}
                <div id="chart-course">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-amber-900">
                    🗺️ chart your course
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed break-words">
                    Ready to embark on an odyssey like no other? Register now and become part of our legendary crew. 
                    Your journey of discovery awaits across the vast seas of Los Angeles.
                  </p>
                  <div className="bg-white bg-opacity-80 rounded-lg p-4 sm:p-8 border-2 border-amber-600 mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-blue-800">Registration Details</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2">📅 When:</h4>
                        <p className="text-sm sm:text-base">applications close september 31st, 2025</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2">📍 Where:</h4>
                        <p className="text-sm sm:text-base">SnapChat HQ in Los Angeles, California</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2">💰 Cost:</h4>
                        <p className="text-sm sm:text-base">free! lunch is provided.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2">👥 Who:</h4>
                        <p className="text-sm sm:text-base"> all girls / non binary teenagers!</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-red-800 transition-colors shadow-lg transform hover:scale-105">
                    ⚓ Register Now
                  </button>
                </div>

                <hr className="border-t-4 border-dashed border-amber-800 opacity-50 my-12" />

                {/* --- The Guild Behind the Map --- */}
                <div id="about-guild">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-amber-900 text-center">
                    📜 The Guild Behind the Map
                  </h2>
                  <div className="bg-white bg-opacity-80 rounded-lg p-4 sm:p-8 border-2 border-amber-600 mb-6 text-left space-y-6 max-w-4xl mx-auto">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-blue-800 font-serif">What is Hack Club?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        Hack Club is a 501(c)3 nonprofit, supporting the largest network of highly technical teen hackers from around the world. <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-red-700">Learn more about us here.</a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-blue-800 font-serif">What is Athena?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        Athena is Hack Club’s initiative to support girls learning to code. Working with local youth organizations, high school Hack Club leaders run one-day coding events that help girls and gender minorities write their first lines of code. They might build their first ever website, video game, application and even code a robot arm to draw!
                      </p>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed mt-4">
                        Built for beginners learning to code, girls are supported by experienced Hack Clubbers. By the end of the day, every single participant builds something with code. In 2023, Athena events were run in 6 cities, and in 2024 there were more than 10 cities.
                      </p>
                      <blockquote className="mt-4 border-l-4 border-amber-700 pl-4 italic text-amber-800 text-sm sm:text-base">
                        &quot;There were two amazing aspects to this event: 1) Girls are being taught by other girls, and I believe that when girls see it, they can be it. 2) Most of the time our girls are learning foundational coding, but in this experience, we saw the girls taking an opportunity to incorporate their creative voice within their projects.”
                      </blockquote>
                    </div>
                  </div>
                </div>

                <hr className="border-t-4 border-dashed border-amber-800 opacity-50 my-12" />

                {/* --- Past Expeditions Content --- */}
                <div id="past-expeditions">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                    ⚓ past expeditions
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed break-words">
                    Behold the legendary voyages of those who came before. Each expedition a story of courage, 
                    discovery, and adventure.
                  </p>
                  <PastEventsCarousel />
                </div>

                <hr className="border-t-4 border-dashed border-amber-800 opacity-50 my-12" />

                {/* --- Navigator's Guide Content --- */}
                <div id="faq" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-900 text-center">
                    🧭 navigator&apos;s guide
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-12 leading-relaxed text-center break-words">
                    Words of wisdom from the captain&apos;s log &amp; everything you need to know before attending.
                  </p>
                  
                  <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="transition-transform duration-300 transform hover:translate-x-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-800 font-serif">What&apos;s a Hackathon?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        Odyssey is a social coding event run by Hack Club&apos;s Athena intiative. You&apos;ll spend the day learning, coding, and creating with support from mentors, workshops, and plenty of food and swag. No experience? No problem!
                      </p>
                    </div>
                    <div className="transition-transform duration-300 transform hover:translate-x-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-800 font-serif">Who can attend?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        Odyssey is open to all local girls / non binary teenagers in Los Angeles excited to learn and build, no matter their experience level.
                      </p>
                    </div>
                    <div className="transition-transform duration-300 transform hover:translate-x-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-800 font-serif">What if I&apos;ve never coded before?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        Come join us! We have beginner-friendly workshops, mentors, and plenty of support to help you get started.
                      </p>
                    </div>
                    <div className="transition-transform duration-300 transform hover:translate-x-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-800 font-serif">What should I bring?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        A laptop, its charger, and your excitement to learn! Food, drinks, and swag will be provided.
                      </p>
                    </div>
                    <div className="transition-transform duration-300 transform hover:translate-x-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-green-800 font-serif">Have another question?</h3>
                      <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                        You can email us any time at <a href="mailto:elia@hackclub.com" className="font-bold underline hover:text-blue-800">elia@hackclub.com</a>.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Torn Paper Edges */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-amber-100 opacity-60" style={{
        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 90% 80%, 85% 100%, 80% 60%, 75% 100%, 70% 70%, 65% 100%, 60% 80%, 55% 100%, 50% 90%, 45% 100%, 40% 75%, 35% 100%, 30% 85%, 25% 100%, 20% 70%, 15% 100%, 10% 80%, 5% 100%, 0% 85%)'
      }}></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-transparent to-amber-100 opacity-60" style={{
        clipPath: 'polygon(0 100%, 5% 0%, 10% 80%, 15% 0%, 20% 70%, 25% 0%, 30% 85%, 35% 0%, 40% 75%, 45% 0%, 50% 90%, 55% 0%, 60% 80%, 65% 0%, 70% 70%, 75% 0%, 80% 60%, 85% 0%, 90% 80%, 95% 0%, 100% 100%)'
      }}></div>

      {/* SVG Filter for Wavy Parchment Effect */}
      <svg className="absolute w-0 h-0">
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
}