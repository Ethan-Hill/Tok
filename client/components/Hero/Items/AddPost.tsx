export default function AddPost(): JSX.Element {
  return (
    <div className="flex items-center justify-center p-2 transition-all rounded-lg cursor-pointer hover:shadow-lg hover:bg-LightNavy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 30"
      >
        <g clipPath="url(#clip0)">
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M15-11.25V15m0 0v26.25M15 15h23.75M15 15H-8.75"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h30v30H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
