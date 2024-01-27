import Image from "next/image";
import Link from "next/link";
import "./css/navbar.min.css";

export default function NavBar() {
  return (
    <div id="navbar">
      <div>
        <Image
          src="/images/logo.png"
          id="logo"
          width={173.76}
          height={36}
          alt="logo"
        />

        <form>
          <input type="search" placeholder="Search for anything" />
          <button>
            <Image
              src="/svgs/search.svg"
              width={13.97}
              height={14}
              alt="search icon"
            />
          </button>
        </form>
      </div>

      <div>
        <Link href="#" className="doc-link">
          Docs
        </Link>

        <Image
          src="/images/notification-bell.png"
          className="notification-bell"
          width={26}
          height={26}
          alt="notifications"
        />

        <span>
          <Image
            src="/images/profile-pic.png"
            className="profile-pic"
            width={48}
            height={48}
            alt="profile picture"
          />
        </span>

        <button>
          Adeniji
          <Image
            src="/svgs/dropdown-fill.svg"
            className="dropdown"
            alt="dropdown-fill"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
