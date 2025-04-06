import React from 'react'

function AboutmeDesc() {
  return (
         <div className='text-content'>
          <p> Hi everyone! I’m Ameen Abdulrasheed (yes, the surname has its own charm 😉). Split between Lagos and Ilorin ,Nigeria , I’m here to build meaningful connections as life’s "playtime" evolves into deeper chapters.</p>
          <p>
  I turn data into stories and solutions as a Data Scientist &amp; Engineer (in view). By day, I code in Python/SQL, analyze trends, and engineer software (Flask, React, JS). By night? I’m probably geeking out over anime, tweaking my{" "}
  <a
    href="https://py-blog-two.vercel.app"
    style={{
      backgroundColor: "#0d6efd",
      color: "white",
      padding: "2px 6px",
      borderRadius: "6px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 6px rgba(13, 110, 253, 0.4)",
      display: "inline-block",
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 4px 12px rgba(13, 110, 253, 0.6)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 2px 6px rgba(13, 110, 253, 0.4)";
    }}
  >
    blog
  </a>
  , or taking midnight strolls under a cozy weather
</p>
     
    // <p>I turn data into stories and solutions as a Data Scientist & Engineer (in view). By day, I code in Python/SQL, analyze trends, and engineer software (Flask, React, JS). By night? I’m probably geeking out over anime, tweaking my <a href='https://py-blog-two.vercel.app'>blog</a>, or taking midnight strolls under a cozy weather</p>
          </div>

  )
}

export default AboutmeDesc
