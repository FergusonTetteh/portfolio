const PersonalDetails = () => {
  return (
    <>
      <div className="outer-box">
        <div className="top h-4/6  m-3">
          <div className="top-left-box h-28 max-w-xs w-96 m-5">
            Front-End React <br />
            Developer 👋 <br />
            <div className="description">
              Hi, I am Ferguson Tetteh. A passionate frontend developer based in
              based in Accra,Ghana📍
            </div>
            <ul className="logos mt-3">
              <li>
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
                  alt=""
                  className="linkedin w-5 m-1.5"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                  className="github w-5 m-1.5"
                />
              </li>
            </ul>
          </div>
          <div className="top-right-box h-5/6 w-1/2 m-5"></div>
        </div>
        <div className="bottom-box h-10 w-5/6 m-5 mt-6 ">
          <ul>
            <li className="mt-2 ml-4">
              <span className=" mr-16  ">Tech stack:</span>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt=""
                className="tech-stack h-6 w-6 m-2"
              />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
                alt=""
                className="tech-stack h-6 w-4 m-2"
              />
            </li>
            <li>
              <img
                src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
                alt=""
                className="tech-stack h-6 w-6 m-2"
              />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
                className="tech-stack h-6 w-6 m-2"
              />
            </li>
            <li>
              <img
                src="data:image/png;base64,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"
                alt=""
                className="tech-stack h-6 w-6 m-2"
              />
            </li>
            <li>
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/fa/d1/f1/fad1f1cc-e086-c872-7359-12699a8d3403/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
                alt=""
                className="tech-stack h-6 w-8 m-2"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
