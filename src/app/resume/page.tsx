import Resume from './resume';


export default function Page({searchParams}: {
  searchParams: {
    email?: string
    phone?: string
  }
}) {
  const {email, phone} = searchParams

  return (
    <Resume email={email} phone={phone}/>
  )
}