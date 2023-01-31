import React from "react";

// const igSite = "https://www.instagram.com/_.wiinie._/"
// const fbSite = "https://www.facebook.com/thy.nguyenngoc.336"

const igSite = "https://www.instagram.com/_q.uynz/"
const fbSite = "https://www.facebook.com/profile.php?id=100070464692618"
function Footer() {
  return (
    <div className="text-center text-slate-500 py-5 opacity-70">
      <div className="flex items-center justify-center pb-5">
        <a href={igSite} className="text-blue hover:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a href={fbSite} className="ml-5 text-blue hover:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
      </div>
      Bootstraped by vite, 2022
    </div>
  );
}

export default Footer;
