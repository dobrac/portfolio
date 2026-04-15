import Resume from './resume';

export const dynamic = 'force-dynamic';

export default async function Page({searchParams}: {
  searchParams: Promise<{
    email?: string
    phone?: string
  }>
}) {
  const {email, phone} = await searchParams

  return (
    <Resume email={email} phone={phone}/>
  )
}
