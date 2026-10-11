export default function Stars() {
  return (
    <div
      aria-hidden="true"
      className="sky-stars absolute inset-x-0 top-0 h-[42%] overflow-hidden"
    >
      <div data-parallax="stars" className="absolute inset-x-0 -inset-y-28">
        <div className="sky-stars-still absolute inset-0" />
        <div className="sky-stars-twinkle absolute inset-0" />
      </div>
    </div>
  )
}
