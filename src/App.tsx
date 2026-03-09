import { Zap } from 'lucide-react';

export default function App() {
  const whatsappMessage = `Hallo VAMELA-Team! 👋

Ich habe gerade gebucht und freue mich auf den Start.

*Meine Digistore24 E-Mail:* 
[Bitte hier eintragen]

*Grobe Infos zu meiner neuen Website (Branche, Ziele, Wünsche):*
[Bitte hier eintragen]

Liebe Grüße!`;
  const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background (Layer 0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
      />

      {/* Thank You Page Content (Layer 10) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 h-full py-4 md:py-8">
        
        {/* Header-Bereich */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold text-gray-800 shadow-sm mb-3 md:mb-5">
            <span>🎉</span> Zahlung erfolgreich
          </div>
          
          <h1 className="font-['Barlow'] font-bold text-3xl md:text-5xl text-gray-900 tracking-tight mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            Willkommen bei VAMELA.
          </h1>
          
          <h2 className="font-['Instrument_Serif'] italic text-xl md:text-3xl text-gray-800 mb-2 md:mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            Dein digitaler Premium-Auftritt startet jetzt.
          </h2>
          
          <p className="font-['Barlow'] text-gray-800 text-xs md:text-base max-w-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-medium leading-tight md:leading-normal">
            Glückwunsch zu dieser Entscheidung. Wir freuen uns riesig auf die Zusammenarbeit. Lass uns direkt mit deinem Projekt loslegen.
          </p>
        </div>

        {/* Die Haupt-Karte (Glassmorphism-Container) */}
        <div className="w-full bg-white/85 backdrop-blur-[10px] rounded-[20px] md:rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 p-5 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* Linke Spalte (Die nächsten Schritte) */}
            <div className="flex flex-col">
              <h3 className="font-['Barlow'] font-bold text-lg md:text-2xl text-gray-900 mb-4 md:mb-6">
                So geht es jetzt weiter:
              </h3>
              
              <div className="flex flex-col gap-3 md:gap-6">
                {/* Step 1 */}
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm md:text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-lg mb-0.5 md:mb-1">Kickoff-Call vereinbaren:</h4>
                    <p className="text-gray-700 leading-tight md:leading-relaxed text-[11px] md:text-sm">
                      Wir besprechen deine genaue Vision, deine Ziele und reservieren deine Wunschdomain.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm md:text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-lg mb-0.5 md:mb-1">Premium-Design:</h4>
                    <p className="text-gray-700 leading-tight md:leading-relaxed text-[11px] md:text-sm">
                      Wir lehnen uns rein und kreieren deinen exklusiven, hochkonvertierenden Auftritt.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm md:text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-lg mb-0.5 md:mb-1">Go-Live & VIP-Support:</h4>
                    <p className="text-gray-700 leading-tight md:leading-relaxed text-[11px] md:text-sm">
                      Deine Seite geht online und du genießt ab sofort unseren unbegrenzten Support auf Zuruf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechte Spalte (Call-to-Action / WhatsApp) */}
            <div className="flex flex-col justify-center">
              <h3 className="font-['Barlow'] font-bold text-lg md:text-2xl text-gray-900 mb-2 md:mb-3 text-center md:text-left">
                Dein direkter Draht zu uns
              </h3>
              <p className="text-gray-600 text-[11px] md:text-sm mb-4 md:mb-6 text-center md:text-left leading-tight md:leading-relaxed">
                Klicke jetzt auf den Button unten, um mir direkt per WhatsApp zu schreiben. Sag einfach kurz 'Hallo' und wir starten dein Onboarding!
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold text-sm md:text-lg py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#25D366]/30"
              >
                Jetzt Kickoff via WhatsApp starten 💬
              </a>
              
              <div className="flex items-center justify-center gap-1.5 mt-3 md:mt-4 text-gray-500 text-[10px] md:text-xs text-center">
                <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 fill-gray-400 text-gray-400" />
                <span>Ich antworte in der Regel innerhalb weniger Minuten.</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Footer-Bereich */}
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-gray-300 text-[10px] md:text-sm drop-shadow-md">
            Die Abbuchung erfolgt durch Digistore24.
          </p>
        </div>

      </div>
    </div>
  );
}
