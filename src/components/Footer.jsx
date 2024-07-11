import React from 'react'

const Footer = () => {
  return (<>
<footer>
  <div className="bg- text-light py-4 py-md-5 py-xl-8 border-top border-dark-subtle">
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-md-0 align-items-md-center">
        <div className="col-xs-12 col-md-7 order-1 order-md-0">
          <div className="copyright text-center text-md-start">
            &copy; 2024. All Rights Reserved.
          </div>
        </div>

        <div className="col-xs-12 col-md-5 order-0 order-md-1">
          <div className="social-media-wrapper">
            <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
              <li className="me-3">
                <a href="https://www.linkedin.com/in/arvind-singh-26as" className="link-light link-opacity-75-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.324 0 .72 0h14.56c.396 0 .72.513.72 1.146v13.708c0 .633-.324 1.146-.72 1.146H.72A.72.72 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.38-.552 1.38-1.241-.015-.703-.543-1.24-1.365-1.24C3.365 2.701 2.82 3.238 2.82 3.94c0 .69.528 1.241 1.323 1.241h.002zm4.908 8.212V9.359c0-.214.015-.427.079-.578.174-.426.572-.868 1.239-.868.874 0 1.222.656 1.222 1.618v4.462h2.401V9.21c0-2.207-1.179-3.232-2.749-3.232-1.274 0-1.845.702-2.164 1.192v.025h-.016a5.05 5.05 0 0 1-.079-.025V6.17h-2.4c.03.428 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </li>
              <li className="me-3">
                <a href="https://x.com/Arvind_0026" className="link-light link-opacity-75-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </li>
              <li className="me-3">
                <a href="https://github.com/Arvind-26" className="link-light link-opacity-75-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.292 6.533 5.47 7.594.4.074.547-.174.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.923-.89-1.168-.89-1.168-.728-.498.055-.488.055-.488.805.057 1.229.827 1.229.827.715 1.224 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.952 0-.873.312-1.588.823-2.148-.083-.203-.357-1.02.078-2.126 0 0 .672-.215 2.2.82a7.66 7.66 0 0 1 2.004-.269c.68.003 1.362.092 2.004.269 1.527-1.034 2.198-.82 2.198-.82.437 1.106.163 1.923.08 2.126.512.56.82 1.275.82 2.148 0 3.07-1.87 3.748-3.654 3.947.288.25.543.738.543 1.488 0 1.074-.01 1.94-.01 2.203 0 .213.146.463.55.384C13.709 14.533 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </li>
              <li className="">
                <a href="mailto:arvind1.test@example.com" className="link-light link-opacity-75-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.803 2.882L15 11.383V5.383zM1 5.383v6l4.803-2.882L1 5.383zM15 12.617l-4.803-2.882L15 6.617v6zm-13-6v6l4.803-2.882L2 6.617z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

     </>
  )
}

export default Footer
