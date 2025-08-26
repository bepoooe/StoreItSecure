import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Mobile Header with Brand Assets */}
      <section 
        className="flex items-center justify-center p-4 py-6 sm:py-8 lg:hidden shadow-lg"
        style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' }}
      >
        <div className="flex max-w-[400px] flex-col items-center space-y-4 text-center animate-in fade-in duration-700">
          <Image
            src="/assets/icons/logo-full-storeit-secure-white.svg"
            alt="logo"
            width={280}
            height={120}
            className="h-auto w-[220px] sm:w-[280px] animate-in slide-in-from-top duration-500"
          />
          
          <div className="space-y-2 text-white animate-in slide-in-from-bottom duration-500 delay-150">
            <h1 className="h4 sm:h3 font-bold">Secure and Store your files in One-Click.</h1>
            <p className="caption sm:body-2 opacity-90">
              Your Trusted Document Vault
            </p>
          </div>
          
          <div className="animate-in zoom-in duration-500 delay-300">
            <Image
              src="/assets/images/files-2.png"
              alt="Files"
              width={180}
              height={180}
              className="transition-all hover:rotate-2 hover:scale-105 w-[140px] sm:w-[180px]"
            />
          </div>
        </div>
      </section>

      {/* Desktop Left Section */}
      <section 
        className="hidden w-1/2 items-center justify-center p-6 lg:flex lg:p-10 xl:w-2/5"
        style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' }}
      >
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-8 lg:space-y-12">
          <Image
            src="/assets/icons/logo-full-storeit-secure-white.svg"
            alt="logo"
            width={350}
            height={150}
            className="h-auto"
          />

          <div className="space-y-4 lg:space-y-5 text-white">
            <h1 className="h2 lg:h1">Secure and Store your files in One-Click.</h1>
            <p className="body-2 lg:body-1">
              Your Trusted Document Vault
            </p>
          </div>
          <Image
            src="/assets/images/files-2.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="flex flex-1 flex-col items-center bg-white p-3 py-4 sm:p-4 sm:py-6 lg:justify-center lg:p-10 lg:py-0">
        <div className="w-full max-w-[520px] sm:max-w-[580px]">
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
