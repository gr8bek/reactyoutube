import "./Youtube.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import FoodAndDrinkImage from "../../Assets/Images/food&drink.svg";
import Flower from '../../Assets/Images/FlowerVideo.png'

function Youtube() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
    .then((res) => res.json())
    .then((data) => setUsers(data.splice(1, 3)));
  }, []);
  return (
    <>
    <div className="row p-4">
    <div className="col-8">
    <div className="iframe-wrapper ">
    <img src={Flower} alt="Flower" width={1200} height={700} />
    <h4 className="youtube-heading">
    Dude You Re Getting A Telescope
    </h4>
    <div className="youtube-interaction-part d-flex align-items-center justify-content-between">
    <p className="youtube-paragraph mb-0">123k views</p>
    <div className="likes d-flex align-items-center justify-content-between">
    <button className="like-btn p-2 ps-3 pe-3 border-0 bg-secondary text-light d-flex align-items-center">
    <svg
    className="me-1"
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    opacity="0.398462"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M0 11.7329C0 12.4323 0.596816 12.998 1.33303 12.998C1.33303 12.998 8.04913 13.0025 9.00292 12.998C11.0812 13.0194 12.3926 12.4547 12.9582 10.9982C13.11 10.6258 13.9501 7.41689 13.9574 7.38101C14.1966 6.31709 13.4012 5.38783 12.2412 5.38783L9.83527 5.38768C9.64957 5.38767 9.5284 5.24849 9.5647 5.07611C9.5647 5.07611 9.74339 4.23206 9.78223 4.02284C9.92755 3.23995 10.0069 2.62439 9.99953 2.2066C10.012 1.54647 9.63906 0.992714 9.04973 0.55583C8.73233 0.320535 8.24694 0.101358 8.24694 0.101358C7.74148 -0.141148 7.13599 0.0682933 6.90137 0.550712C6.90137 0.550712 4.98706 4.51167 4.82791 4.81413C4.66876 5.11658 4.25203 5.38803 3.88249 5.38803H1.33303C0.597467 5.38803 0 5.95447 0 6.65321V11.7329ZM9.01732 11.7298C10.4976 11.745 11.231 11.4606 11.6047 10.7784H11.3349C10.9656 10.7784 10.6663 10.497 10.6663 10.1443C10.6663 9.79404 10.9618 9.51011 11.3349 9.51011H12.0027C12.0577 9.30901 12.1167 9.09296 12.1758 8.87595H11.6682C11.2989 8.87595 10.9996 8.59446 10.9996 8.24178C10.9996 7.89154 11.2951 7.60761 11.6682 7.60761H12.5203C12.5978 7.32142 12.6492 7.1312 12.6517 7.12138C12.715 6.84298 12.5544 6.65617 12.2411 6.65617L9.83518 6.65602C8.81064 6.65595 8.05528 5.78677 8.25766 4.82571C8.26457 4.79306 8.45663 3.87033 8.46926 3.80229C8.60705 3.05999 8.67174 2.52963 8.66643 2.22779L8.66646 2.18372C8.67005 1.99438 8.54896 1.79258 8.23018 1.55626C8.19435 1.5297 7.95995 1.39474 7.95995 1.39474L6.03797 5.34669C5.68177 6.07909 4.84873 6.60806 3.99985 6.65323V11.7323C6.11497 11.7318 8.75851 11.7309 9.01732 11.7298ZM2.66657 6.65636H1.33303L1.33328 11.7329L2.66657 11.7326V6.65636Z"
    fill="white"
    />
    </svg>
    123k
    </button>
    <button className="like-btn p-2 ps-3 pe-3 border-0 bg-secondary text-light d-flex align-items-center ms-2">
    <svg
    className="me-1"
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    opacity="0.398462"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M0 1.26715C0 0.567738 0.596816 0.00196838 1.33303 0.00196838C1.33303 0.00196838 8.04913 -0.0024662 9.00292 0.00197601C11.0812 -0.019372 12.3926 0.545282 12.9582 2.00179C13.11 2.37423 13.9501 5.58311 13.9574 5.61899C14.1966 6.68291 13.4012 7.61217 12.2412 7.61217L9.83527 7.61232C9.64957 7.61233 9.5284 7.75151 9.5647 7.92389C9.5647 7.92389 9.74339 8.76794 9.78223 8.97716C9.92755 9.76005 10.0069 10.3756 9.99953 10.7934C10.012 11.4535 9.63906 12.0073 9.04973 12.4442C8.73233 12.6795 8.24694 12.8986 8.24694 12.8986C7.74148 13.1411 7.13599 12.9317 6.90137 12.4493C6.90137 12.4493 4.98706 8.48833 4.82791 8.18587C4.66876 7.88342 4.25203 7.61197 3.88249 7.61197H1.33303C0.597467 7.61197 0 7.04553 0 6.34679V1.26715ZM9.01732 1.27024C10.4976 1.25503 11.231 1.53944 11.6047 2.22155H11.3349C10.9656 2.22155 10.6663 2.50304 10.6663 2.85572C10.6663 3.20596 10.9618 3.48989 11.3349 3.48989H12.0027C12.0577 3.69099 12.1167 3.90704 12.1758 4.12405H11.6682C11.2989 4.12405 10.9996 4.40554 10.9996 4.75822C10.9996 5.10846 11.2951 5.39239 11.6682 5.39239H12.5203C12.5978 5.67858 12.6492 5.8688 12.6517 5.87862C12.715 6.15702 12.5544 6.34383 12.2411 6.34383L9.83518 6.34398C8.81064 6.34405 8.05528 7.21323 8.25766 8.17429C8.26457 8.20694 8.45663 9.12967 8.46926 9.19771C8.60705 9.94001 8.67174 10.4704 8.66643 10.7722L8.66646 10.8163C8.67005 11.0056 8.54896 11.2074 8.23018 11.4437C8.19435 11.4703 7.95995 11.6053 7.95995 11.6053L6.03797 7.65331C5.68177 6.92091 4.84873 6.39194 3.99985 6.34677V1.26772C6.11497 1.26825 8.75851 1.26912 9.01732 1.27024ZM2.66657 6.34364H1.33303L1.33328 1.26715L2.66657 1.26741V6.34364Z"
    fill="white"
    />
    </svg>
    000k
    </button>
    <button className="like-btn p-2 ps-3 pe-3 border-0 bg-secondary text-light d-flex align-items-center ms-2">
    <svg
    className="me-1"
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    opacity="0.398462"
    d="M8.55556 0L14 5.6L8.55556 11.2V7.92C4.66667 7.92 1.94444 9.2 0 12C0.777778 8 3.11111 4 8.55556 3.2V0Z"
    fill="white"
    />
    </svg>
    Share
    </button>
    <button className="like-btn p-2 ps-3 pe-3 border-0 bg-dark text-light d-flex align-items-center ms-2">
    <svg
    width="28"
    height="6"
    viewBox="0 0 28 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6ZM14 6C15.6569 6 17 4.65685 17 3C17 1.34315 15.6569 0 14 0C12.3431 0 11 1.34315 11 3C11 4.65685 12.3431 6 14 6ZM28 3C28 4.65685 26.6569 6 25 6C23.3431 6 22 4.65685 22 3C22 1.34315 23.3431 0 25 0C26.6569 0 28 1.34315 28 3Z"
    fill="white"
    />
    </svg>
    </button>
    </div>
    </div>
    </div>
    <hr className="text-light mt-2" />
    <div className="food-and-drink">
    <div className="d-flex justify-content-between align-items-center">
    <div className="left-option d-flex align-items-center">
    <img
    className="img-responsive me-2"
    src={FoodAndDrinkImage}
    alt="FoodAndDrink"
    width="50"
    height="50"
    />
    <div className="food-and-drink-words">
    <Link
    className="user-name m-0 text-decoration-none"
    to="/channel"
    >
    Food & Drink
    </Link>
    <p className="food-and-drink-p mb-0">
    Published on 14 Jun 2019
    </p>
    </div>
    </div>
    <div className="d-flex">
    <button className="btn subscribe-btn">Subscribe 2.3m</button>
    </div>
    </div>
    <p className="food-and-drink-total-info mb-0 mt-3 ps-5">
    A successful marketing plan relies heavily on the pulling-power of
    advertising copy. Writing result-oriented ad copy is difficult, as
    it must appeal to, entice, and convince consumers to take action.
    There is no magic formula to write perfect ad copy; it is based on
    a number of factors, including ad placement, demographic, even the
    consumer’s mood when they see your ad.
    </p>
    <Link
    className="showMore text-decoration-none ms-5 mt-3f d-block"
    to="/channel"
    >
    Show more
    </Link>
    </div>
    </div>
    
    <div className="col-4">
    {users.length > 0 && (
      <>
      <ul className="list-unstyled d-flex flex-column w-100">
      <div className="d-flex justify-content-between align-items-center">
      <Link className="next-heading text-decoration-none" to="/">
      Next
      </Link>
      <Link className="autoplay text-decoration-none" to="/youtube">
      <svg
      className="me-2"
      width="44"
      height="28"
      viewBox="0 0 44 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect
      opacity="0.1"
      width="44"
      height="28"
      rx="14"
      fill="white"
      />
      <g filter="url(#filter0_dd_0_1579)">
      <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 26C36.6274 26 42 20.6274 42 14C42 7.37258 36.6274 2 30 2C23.3726 2 18 7.37258 18 14C18 20.6274 23.3726 26 30 26Z"
      fill="white"
      />
      <path
      d="M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z"
      stroke="url(#paint0_linear_0_1579)"
      strokeWidth="0.6"
      />
      <path
      d="M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z"
      stroke="url(#paint1_linear_0_1579)"
      strokeWidth="0.6"
      />
      </g>
      <defs>
      <filter
      id="filter0_dd_0_1579"
      x="17"
      y="1"
      width="26"
      height="27"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
      >
      <feFlood
      floodOpacity="0"
      result="BackgroundImageFix"
      />
      <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
      />
      <feOffset dy="1" />
      <feGaussianBlur stdDeviation="0.5" />
      <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.237602 0"
      />
      <feBlend
      mode="normal"
      in2="BackgroundImageFix"
      result="effect1_dropShadow_0_1579"
      />
      <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
      />
      <feOffset />
      <feGaussianBlur stdDeviation="0.5" />
      <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      />
      <feBlend
      mode="normal"
      in2="effect1_dropShadow_0_1579"
      result="effect2_dropShadow_0_1579"
      />
      <feBlend
      mode="normal"
      in="SourceGraphic"
      in2="effect2_dropShadow_0_1579"
      result="shape"
      />
      </filter>
      <linearGradient
      id="paint0_linear_0_1579"
      x1="18.1174"
      y1="2"
      x2="18.1174"
      y2="25.7651"
      gradientUnits="userSpaceOnUse"
      >
      <stop stopOpacity="0.01" />
      <stop offset="0.8" stopOpacity="0.02" />
      <stop offset="1" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient
      id="paint1_linear_0_1579"
      x1="18"
      y1="2"
      x2="18"
      y2="26"
      gradientUnits="userSpaceOnUse"
      >
      <stop stopColor="white" stopOpacity="0.12" />
      <stop
      offset="0.2"
      stopColor="white"
      stopOpacity="0.06"
      />
      <stop
      offset="1"
      stopColor="white"
      stopOpacity="0.01"
      />
      </linearGradient>
      </defs>
      </svg>
      Autoplay
      </Link>
      </div>
      {users.map((user) => (
        <li key={user.id} className="video-lists mb-4 ms-5">
        <Link
        className="text-decoration-none d-block video-name-youtube"
        to="/youtube"
        >
        <img
        className="img-responsive rounded-3 d-block"
        src={user.thumbnailUrl}
        alt="random"
        width="250"
        height="200"
        />
        {user.title.split(" ").slice(0, 2).join(" ")}
        </Link>
        <div className="d-flex">
        <div className="video-infos-youtube d-flex">
        <p className="video-info-youtube m-0">
        80k views · 3 days ago
        </p>
        </div>
        <div className="video-infos-youtube">
        <p className="video-info-youtube m-0 ms-2">
        Dollie Blair
        </p>
        </div>
        </div>
        </li>
        ))}
        </ul>
        </>
        )}
        </div>
        </div>
        </>
        );
      }
      
      export default Youtube;
      