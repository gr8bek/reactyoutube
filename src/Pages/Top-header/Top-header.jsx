import "./Top-header.css";
import { Link } from "react-router-dom";

import userImage from "../../Assets/Images/Userpic.svg";
import Search from "../../Assets/Images/search.svg";

function TopHeader() {
  return (
    <div className="row ps-4 pt-3 pb-3 pb-0 pe-0 bg-dark">
      <div className="col-3 d-flex align-items-center justify-content-between pe-0">
        <button className="header-hamburger bg-dark border-0">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z"
              fill="white"
            />
          </svg>
        </button>
        <Link className="youtube-sentence pe-4" to="/">
          <svg
            width="37"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m11.615 24.822 7.517.136c.012 0 .036 0 .036.017 4.186.077 8.265-.165 12.439-.466 3.33-.23 4.12-2.612 4.533-5.454.514-3.431.628-6.904.359-10.36a166.79 166.79 0 0 1-.038-.493c-.25-3.306-.532-7.023-4.495-7.708-.844-.147-1.705-.277-2.56-.3-8.097-.26-16.266-.325-24.381.23C2.62.576 1.065 1.98.67 4.331a50.658 50.658 0 0 0-.459 12.88c.266 2.974.575 6.45 4.143 7.168 1.92.394 3.876.41 5.835.425.475.004.95.008 1.425.017Zm7.056-9.3-3.958 2.242V7.163c1.43.808 2.849 1.613 4.27 2.419 1.688.957 3.378 1.915 5.089 2.881a7174.704 7174.704 0 0 0-5.401 3.059Z"
              fill="red"
            />
          </svg>
          <svg
            width="75"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.724 22.747c.084-.316.17-.642.265-1.02.073.1.13.181.18.253.066.092.118.166.173.236 1.56 2.022 4.706 1.668 5.669-.667.293-.707.526-1.48.562-2.234a133 133 0 0 0 .078-7.406c-.024-.96-.222-1.946-.527-2.865-.472-1.48-1.806-2.158-3.367-1.858-.98.2-1.74.72-2.326 1.516a3.987 3.987 0 0 1-.119.144c-.057.067-.129.151-.228.274V.866h-3.432v22.376h2.942l.13-.495Zm.432-3.084v-8.184c0-.69.335-1.209.885-1.575.73-.477 1.471-.235 1.74.584.144.454.258.938.258 1.404a391.359 391.359 0 0 1-.144 7.505c-.006.266-.12.531-.233.785-.27.607-.807.86-1.471.707-.676-.153-1.035-.56-1.035-1.226ZM47.827 7.505h3.594v15.748h-2.805c-.092-.54-.184-1.094-.29-1.73l-.033-.198c-.124.18-.215.318-.297.441v.001l-.127.19c-.933 1.326-2.255 1.78-3.816 1.538-1.333-.212-2.134-1.226-2.314-2.889a13.854 13.854 0 0 1-.078-1.492c-.008-2.457-.005-4.92-.002-7.38V11.725l.002-3.678v-.554h3.636v.643l-.001 2.67c-.002 2.67-.005 5.337.013 8.008 0 .507.054 1.032.144 1.539.101.518.484.707.998.672.832-.065 1.406-.672 1.406-1.486V8.2c-.03-.23-.03-.442-.03-.695Zm-21.134-.012H23.08l-.006.424c0 3.827 0 7.671.012 11.498 0 .478.048.95.113 1.427.24 1.527 1.023 2.459 2.303 2.647 1.596.242 2.906-.253 3.839-1.603.102-.16.203-.313.383-.578l.166.969v.002l.169.974h2.792V7.516h-3.594v11.988c-.006.82-.502 1.38-1.321 1.491-.592.077-.94-.112-1.077-.696a7.276 7.276 0 0 1-.155-1.527c-.018-2.648-.016-5.3-.014-7.955l.002-2.658v-.666ZM21.227 15.9c-.01.425-.035.849-.06 1.273l-.018.319-.035.425c-.123 1.547-.28 3.525-1.472 4.587-.831.73-1.884.996-2.972 1.032a9.298 9.298 0 0 1-1.46-.053c-2.29-.343-3.354-1.339-3.737-3.821-.437-2.866-.472-5.779.048-8.644.538-2.966 2.392-4.015 5.274-3.82 2.692.188 3.894 1.927 4.21 4.404.174 1.42.258 2.86.222 4.298Zm-3.656-1.407c-.002.288-.004.577-.004.864 0 .934-.037 1.868-.073 2.8-.017.428-.034.854-.047 1.28 0 .343-.12.69-.257 1.009-.173.413-.484.643-.957.643-.484 0-.855-.236-.998-.667-.373-1.11-.333-2.306-.293-3.484.01-.317.021-.632.024-.944.011-1.58.024-3.166.024-4.746 0-.217.063-.439.126-.656l.011-.04c.191-.62.562-.937 1.088-.95.539-.011.97.307 1.113.974.125.578.203 1.167.227 1.75.026.721.02 1.445.016 2.167ZM6.453 11.158c.227-1.101.45-2.19.69-3.282.192-.884.394-1.769.596-2.654.233-1.02.466-2.042.684-3.065.102-.466.293-.578.742-.566.684.025 1.378.02 2.092.015.29-.001.583-.003.88-.003-.308 1.115-.61 2.18-.907 3.228l-.08.28a2808.951 2808.951 0 0 0-3.056 10.743 3.267 3.267 0 0 0-.113.872 479.48 479.48 0 0 0-.003 3.91c.001.652.003 1.304.003 1.957v.637H4.47a7.973 7.973 0 0 0-.015-.177c-.011-.118-.022-.236-.022-.354 0-.354-.009-.708-.018-1.063-.02-.755-.039-1.51.03-2.256.225-2.301-.394-4.44-1.012-6.578-.09-.311-.18-.622-.267-.934-.455-1.622-.912-3.246-1.37-4.87l-1.37-4.87c-.026-.086-.044-.176-.062-.271a4.208 4.208 0 0 0-.051-.237h3.582A1460.95 1460.95 0 0 0 6.2 12.393l.254-1.235Zm62.377 5.344h6.052c0-.73.006-1.441.012-2.142.007-.82.015-1.628.011-2.439a9.933 9.933 0 0 0-.293-1.958c-.34-1.368-1.124-2.411-2.595-2.665a10.71 10.71 0 0 0-2.78-.1c-1.693.165-2.788 1.15-3.29 2.754-.126.389-.24.772-.305 1.173-.37 2.406-.305 4.829-.126 7.229.066.973.371 1.945.694 2.877.347.997 1.119 1.645 2.153 1.946 1.4.407 2.805.407 4.174-.124 1.74-.666 2.775-2.824 2.201-4.505-.694-.029-1.393-.066-2.102-.105h-.002l-.904-.048-.006.103c-.015.28-.026.5-.048.705a6.58 6.58 0 0 1-.114.766c-.167.779-.585 1.132-1.303 1.12-.688-.005-1.124-.341-1.214-1.126-.09-.814-.129-1.634-.167-2.479-.015-.324-.03-.65-.048-.982Zm2.613-2.07c0-.299 0-.594.002-.886.002-.862.004-1.696-.014-2.533 0-.265-.102-.543-.203-.796-.204-.495-.628-.63-1.137-.63-.508 0-.83.253-.956.707-.313 1.112-.287 2.245-.26 3.384.006.255.012.51.014.766.915-.011 1.747-.011 2.554-.011Zm-39.374-9.94h3.558l.006 18.738h3.523V4.474h3.534V1.65H32.069v2.842Z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>
      <div className="col-6 ps-0">
        <form className="form ms-0">
          <label className="header-label">
            <input
              className="header-input p-2 border-0"
              type="text"
              placeholder="Search"
            />
            <img
              className="label-search"
              src={Search}
              alt="Search"
              width="19"
              height="19"
            />
          </label>
        </form>
      </div>

      <div className="col-3 d-flex justify-content-between align-items-center pe-0">
        <button className="left-btns border-0 bg-dark">
          <svg
            width="27"
            height="20"
            viewBox="0 0 27 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="left-btns border-0 bg-dark">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="left-btns header-notification border-0 bg-dark">
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z"
              fill="white"
            />
          </svg>
        </button>
        <Link className="left-btns  border-0 bg-dark" to="/">
          <img src={userImage} alt="user" width="40" height="40" />
        </Link>
      </div>
    </div>
  );
}

export default TopHeader;