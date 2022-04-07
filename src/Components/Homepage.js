import React from 'react'
import './Homepage.css'
import "@fontsource/solway";
export default function Homepage({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/user/login')
    }
  return ( 
  <div className='img'>
      <div id='hi'>
      </div>
    <div className='container maint-cnt'>
    <div className="header-nav">
    <p class="line-1 anim-typewriter">Travel Yaari</p>

        <p class="line-1 anim-typewriter">The best bus for the best people!!!!</p>
        </div>

                <a href="/login" onClick={e => enterSite(e)} className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="lightslategrey" />
                                <stop offset="100%" stopColor="dimgrey" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Get Started!</span>
                </a>
            </div>

    </div>
    
 
    )
}
