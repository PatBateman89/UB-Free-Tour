import React from 'react'

const Header = (props) => (
  <div>
    <header className="header">
      <div className="header__logo-box">
        <img src="/img/ub.png" alt="Logo" className="header__logo"/>
      </div>

      <h1 className="heading-primary">
        <span className="heading-primary--main">UB Free Tour</span>
        <span className="heading-primary--sub">one foot forward</span>
        <div className="button--holder">
          <span className="space"></span>
          <a href="#" className="btn btn--white btn--animated" onClick={props.click}>Discover Our Tours</a>
          <span className="space"></span>
        </div>
      </h1>
    </header>
  </div>
)

export default Header
