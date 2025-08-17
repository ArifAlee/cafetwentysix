import cafeLogo from '../assets/cafe-logo-shadow.png'

export default function Header() {
    return (
        <header className='flex justify-center'>
            <img src={cafeLogo} alt="CafeTwentySix Logo" className='justify-content: center w-40 h-35 '/>
        </header>
    )
}