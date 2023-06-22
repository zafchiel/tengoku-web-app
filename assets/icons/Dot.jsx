export default function Dot({ color = "#fff" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={24}
      width={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="12" r="2" fill={color}></circle>
      </g>
    </svg>
  )
}
