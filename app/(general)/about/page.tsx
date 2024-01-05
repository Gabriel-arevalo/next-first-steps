import type { Metadata } from "next"

export const metadata: Metadata ={
  title: 'SEO title',
  description: 'SEO description',

}

export default function AboutPage(){
  return(
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola mundo</span>
      <span className="text-7xl">About Page</span>
    </main>
  )
}