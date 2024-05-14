import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
  weight: ['400'],
  subsets: ['cyrillic-ext'],
})

const yesevaFont = yesevaOne.className

export default yesevaFont
