import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Saad Mujawar. All rights reserved. <br className="sm:hidden" />
        Designed for performance & scalability.
      </p>
    </footer>
  );
}
