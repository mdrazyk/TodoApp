import React from 'react'
import './Logo.css'
const Logo = () => <div className="Logo-area">
                        <div>
                            <img src="favicon.ico" className="Logo right large"/>
                        </div>
                        <div className="second">
                            <img src="favicon.ico" className="Logo left medium"/>
                        </div>
                        <div className="third">
                            <img src="favicon.ico" className="Logo right small"/>                            
                        </div>
                    </div>

export default Logo