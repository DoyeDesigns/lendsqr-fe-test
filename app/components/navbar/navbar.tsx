import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <div id="navbar">
            <Image src='/images/logo.png' id='login-logo' width={173.76} height={36} alt='logo'/>

            <form>
                <input type="search" />
                <button>
                    <Image src='/svgs/dropdown-fill.svg' width={14} height={14} alt="search icon" />
                </button>
            </form>

            <div>
                <Link href='#'>Docs</Link>

                <Image src='/svgs/notification-bell.svg' width={26} height={26} alt="notifications" />

                <span className="profile-pic">
                    <Image src='/images/profile-pic.png' width={48} height={60} alt="profile picture"/>
                </span>

                <button>
                    Adeniji
                    <Image src='' alt=''/>
                </button>
            </div>
        </div>
    )
}