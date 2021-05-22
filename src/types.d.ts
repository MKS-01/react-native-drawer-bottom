import type { ReactNode } from 'react';

export interface DrawerProps {
  children: ReactNode;
  backgroundColor: string;
  animationDelay: number;
  borderRadius: number;
  topInset?: number;
  bottomInset?: number;


}
