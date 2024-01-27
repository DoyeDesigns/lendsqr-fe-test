import "./css/login.min.css";


export const metadata = {
  title: "login",
};

import Image from "next/image";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <main id="main">
      <div className="image-container">
        <div className="logo-container">
          <Image
            src="/images/logo.png"
            className="login-logo"
            width={173.76}
            height={36}
            alt="logo"
          />
        </div>
        <Image
          src="/images/pablo-sign-in 1.jpg"
          className="illustration"
          width={600}
          height={337.57}
          alt="illustration"
        />
      </div>
      <LoginForm />
    </main>
  )
}