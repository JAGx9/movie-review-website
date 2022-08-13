import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                {/* Column 1 */}
                <div className='col'>
                    <h4> COMPANY NAME</h4>
                    <ul className='list'>
                        <li><a href='#'>PLACE HOLDER</a></li>
                        <li><a href='#'>PLACE HOLDER</a></li>

                    </ul>
                </div>
                {/* Column 2 */}
                <div className='col'>
                    <h4> STUFF</h4>
                    <ul className='list'>
                        <li><a href="#">PLACE HOLDER</a></li>
                        <li><a href="#">PLACE HOLDER</a></li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div className='col'>
                    <h4> SOCIAL MEDIA</h4>
                    <ul className='list'>
                        <li><a href='#'>PLACE HOLDER</a></li>
                        <li><a href="#">PLACE HOLDER</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer