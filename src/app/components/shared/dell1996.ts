import type { CSSProperties } from 'react';

export const RIBBON_TINTS = {
  sage:       '#b3bd95',
  salmon:     '#d77a7a',
  peach:      '#e6915d',
  lime:       '#c0d4a7',
  sky:        '#9ab6c8',
  steel:      '#a5b8c0',
  periwinkle: '#8c9ae0',
  olive:      '#8e8a25',
} as const;

export type RibbonTint = keyof typeof RIBBON_TINTS;

export const TINT_CYCLE: RibbonTint[] = ['sage', 'salmon', 'peach', 'lime', 'sky', 'steel', 'periwinkle'];

export const ctaBlockRed: CSSProperties = {
  backgroundColor: '#e91d2a',
  color: '#ffffff',
  border: '1px solid #000000',
  borderRadius: 0,
  padding: '16px',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '14px',
  lineHeight: 1.4,
};

export const ribbonTitleStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #0f172a',
  padding: '6px 12px',
  fontWeight: 'bold',
  fontSize: '14px',
};

export const hardBorderCard: CSSProperties = {
  border: '1px solid #000000',
  borderRadius: 0,
  boxShadow: 'none',
  backgroundColor: '#ffffff',
};

export const sectionEyebrow = (bg: string): CSSProperties => ({
  backgroundColor: bg,
  color: '#0f172a',
  fontWeight: 'bold',
  fontSize: '30px',
  padding: '24px 16px',
  borderRadius: 0,
});

export const buttonPrimary: CSSProperties = {
  backgroundColor: '#e91d2a',
  color: '#ffffff',
  border: '1px solid #000000',
  borderRadius: 0,
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  padding: '6px 16px',
  cursor: 'pointer',
  lineHeight: 1,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

export const buttonSecondary: CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '1px solid #000000',
  borderRadius: 0,
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  padding: '6px 16px',
  cursor: 'pointer',
  lineHeight: 1,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

export const yellowSticker: CSSProperties = {
  backgroundColor: '#fcc20f',
  color: '#000000',
  border: '1px solid #000000',
  borderRadius: 0,
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  padding: '4px 8px',
  cursor: 'pointer',
  lineHeight: 1,
};

export const textInputStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '1px solid #000000',
  borderRadius: 0,
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '14px',
  padding: '4px 6px',
  width: '100%',
};

export const imageFrame: CSSProperties = {
  border: '1px solid #000000',
  borderRadius: 0,
  boxShadow: 'none',
  display: 'block',
  objectFit: 'cover' as const,
};
