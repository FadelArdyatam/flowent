import localFont from "next/font/local"

export const aeonikLight = localFont({ 
  src: '../../public/fonts/aeonikprotrial-light.otf', 
  display: 'swap',
  variable: '--aeonik-light'
})

export const aeonikRegular = localFont({
  src: '../../public/fonts/aeonikprotrial-regular.otf',
  display: 'swap',
  variable: '--aeonik-regular'
})

export const recklessNeueRegular = localFont({
  src: '../../public/fonts/RecklessNeue-Regular.ttf',
  display: 'swap',
  variable: '--reckless-neue-regular'
})

export const recklessNeueItalic = localFont({
  src: '../../public/fonts/RecklessNeue-BookItalic.ttf',
  display: 'swap',
  variable: '--reckless-neue-italic'
})