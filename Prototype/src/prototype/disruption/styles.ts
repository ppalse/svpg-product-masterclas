/** Trainline-branded button classes for the practicum screens. */
const buttonBase =
  'flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-mint'

export const buttonStyles = {
  primary: `${buttonBase} bg-tl-mint text-white hover:brightness-95`,
  secondary: `${buttonBase} border border-tl-mint bg-white text-tl-mint hover:bg-tl-light-mint`,
}
