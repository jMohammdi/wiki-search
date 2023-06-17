import Container from '@/components/layout/Container'
import Providers from '@/components/providers/Provider'
export default function Home() {
  return (
    <main className='bg-white overflow-hidden'>
      <Providers>
        <Container />
      </Providers>
    </main>
  )
}
