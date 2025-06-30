import {Lusitana} from 'next/font/google'


export const lusitana = Lusitana({
  subsets: ['latin'],  // Correct key is 'subsets' as an array
  weight: ['400', '700']        // Weight should be string or array, not inside 'subsets'
});