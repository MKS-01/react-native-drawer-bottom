import type { ReactNode } from 'react';

export interface DrawerProps {
  // onMeasureHeight: (height: number) => void;
  children: ReactNode;
  backgroundColor: string;
  animationDelay: number;
  borderRadius: number;
  topInset?: number;
  bottomInset?: number;
}


