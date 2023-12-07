import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <div className='main-header'>
                <div className='container'>
                    <nav className='flex items-center flex-wrap nav-bar'>
                        <Link href='/'>
                            <div className='inline-flex items-center p-2 mr-4 '>
                                <h1>
                                    <img src='./logo.png' alt='logo'/>
                                </h1>
                            </div>
                        </Link>
                        <button
                            className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none toggle-btn'
                            onClick={handleClick}
                        >
                            <svg
                                className='w-6 h-6 toggle'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                        {/* <div
                            className={`${active ? '' : 'hidden'
                                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                        >
                            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                                <Link href='/'>
                                    <div className='menu-items lg:inline-flex lg:w-auto w-full items-center justify-center '>
                                        About Us
                                    </div>
                                </Link>
                                <Link href='/'>
                                    <div className='menu-items lg:inline-flex lg:w-auto w-full items-center justify-center '>
                                        Operations
                                    </div>
                                </Link>
                                <Link href='/'>
                                    <div className='menu-items lg:inline-flex lg:w-auto w-full items-center justify-center '>
                                        Investors
                                    </div>
                                </Link>
                                <Link href='/'>
                                    <div className='menu-items lg:inline-flex lg:w-auto w-full items-center justify-center '>
                                        Parner With Us
                                    </div>
                                </Link>
                            </div>
                        </div> */}
                    </nav>
                </div>
            </div>
        </>
    );
};
