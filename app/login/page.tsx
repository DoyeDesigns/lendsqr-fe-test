import './css/login.min.css'

import Image from 'next/image'
import LoginFom from './features/login form/login-form'

export default function LoginPage() {
    return (
        <div id='main'>
            <div id='image-container'>
                <div className='logo-container'><Image src='/images/logo.png' id='logo' width={173.76} height={36} alt='logo'/></div>
                <Image src='/images/pablo-sign-in 1.jpg' className='illustration' width={600} height={337.57} alt='illustration'  />
            </div>
            <div id='login-form-container'>
                <LoginFom />
            </div>
        </div>
    )
}