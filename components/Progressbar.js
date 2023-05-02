export default function Progressbar({ barWidth }) {
  return (
    <div
      className="bg-white fixed top-0 left-0 h-1 z-50"
      style={{ width: barWidth * 100 + "%" }}
    ></div>
  )
}
