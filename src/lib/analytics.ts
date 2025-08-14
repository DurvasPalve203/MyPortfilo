// src/lib/analytics.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const initGA = () => {
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-N6Q2JVGJCW";
  script1.async = true;
  script1.id = "ga-script";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N6Q2JVGJCW');
  `;
  document.head.appendChild(script2);
};

export const trackPageView = (url: string) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};
