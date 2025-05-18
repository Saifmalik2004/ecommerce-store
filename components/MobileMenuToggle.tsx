// components/MobileMenuToggle.tsx
'use client';

import { Menu } from 'lucide-react';

export default function MobileMenuToggle() {
  const toggleMenu = () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  };

  return (
    <button className="p-2" onClick={toggleMenu}>
      <Menu size={24} />
    </button>
  );
}