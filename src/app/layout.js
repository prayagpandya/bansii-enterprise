'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Roboto } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useRef, useSyncExternalStore } from 'react';
import { ToastContainer } from 'react-toastify';

import Lenis from '@studio-freight/lenis';
import MobileMenu from '@/components/compnent/navbar/mobileNavbar';
import Navbar from '@/components/compnent/navbar/Navbar';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});
const emptySubscribe = () => () => {};

function FacebookSdk() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  return (
    <>
      <div id='fb-root'></div>
      <Script
        id='facebook-jssdk'
        src='https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0'
        strategy='afterInteractive'
        crossOrigin='anonymous'
      />
    </>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      syncTouch: true,
      syncTouchLerp: 0.02,
      // touchInertiaMultiplier: 1,
      gestureOrientation: 'vertical',
      // touchMultiplier: 1.2,
      lerp: 0.06,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
    });

    // Request animation frame for Lenis
    let rafId;
    const onRaf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(onRaf);
    };

    rafId = requestAnimationFrame(onRaf);

    // Configure ScrollTrigger to use Lenis for smooth scrolling
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { offset: 0, duration: 2 });
        }
        return lenis.targetScroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? 'transform' : 'fixed',
    });

    // Update Lenis on scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Refresh ScrollTrigger after each page change
    ScrollTrigger.addEventListener('refresh', ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.removeEventListener('refresh', ScrollTrigger.update);
    };
  }, [pathname]);

  return (
    <html lang='en' className={roboto.variable}>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0&display=swap'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
        />
      </head>
      <body className={roboto.className}>
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <MobileMenu />
          <div id='smooth-content' data-scroll-section>
            {children}
          </div>
          <FacebookSdk />
          <ToastContainer className={'bg-transparent'} />
        </main>
      </body>
    </html>
  );
}
