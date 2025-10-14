
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AirVent, ChevronDown, FileText, GraduationCap, LayoutDashboard, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();
  return (
    <>
      <header className='fixed top-0 w-full border-b bg-background/90 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/80' >

        <nav className='container mx-auto flex h-16 items-center justify-between px-4 mt-4 '>
          <Link href='/'>
            <Image
              src="/logo.png"
              alt="Logo"
              width={180} // you can keep this for layout
              height={40} // adjust height proportional to width
              className='object-contain '
            />

          </Link>
          <div className='flex items-center space-x-2'>
            <SignedIn>
              <Link href={'/dashboard'}>
                <Button>
                  <LayoutDashboard className=' h-4 w-4' />
                  <span className='hidden md:block'>
                    Dashboard
                  </span>
                </Button></Link>
              <DropdownMenu >
                <DropdownMenuTrigger asChild>
                  <Button>
                    <StarIcon className='h-4 w-4' />
                    <span className='hidden md:block'>Growth Tools</span>
                    <ChevronDown className='h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={'/chatbot'} className='flex items-center gap-2'>
                      <AirVent className='h-4 w-4' />
                      <span>AI Chatbot</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={'/resume'} className='flex items-center gap-2'>
                      <FileText className='h-4 w-4' />
                      <span>Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={'/interview'} className='flex items-center gap-2'>
                      <GraduationCap className='h-4 w-4' />
                      <span>Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverCard: 'shadow-xl border',
                    userPreviewMainIdentifier: 'font-semibold',
                    avatarBox: 'w-10 h-10',
                  },
                }}
                afterSignOutUrl="/"
              />

            </SignedIn>
          </div>




        </nav>


        <div className=' flex w-full bg-white h-[3px] animate-pulse'>
        </div>

      </header >

    </>
  )
}

export default Header