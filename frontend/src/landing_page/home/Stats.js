import React from 'react';

function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className="p-3 mb-2" >Trust with confidence</h1>
                    <h2 className='fs-4 p-1'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className='fs-4 p-1'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like..</p>
                    <h2 className='fs-4 p-1'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 p-1'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src='media\images\ecosystem.png'
                    alt="Ecosystem" style={{width:"120%"}} />
                    <div className='text-center'>
                        <a href='' className="mx-3">Explore our products </a>
                        <a href=''>Try kite</a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Stats;