
const DestinationsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 500 500" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M100 300L250 100L400 300" fill="#808080" stroke="currentColor" strokeWidth="20"/>
    <path d="M150 250L300 50L450 250" fill="#808080" stroke="currentColor" strokeWidth="20" transform="translate(-50, 50)"/>
    <path d="M50 350L200 150L350 350" fill="#808080" stroke="currentColor" strokeWidth="20" transform="translate(50, -50)"/>
    <path d="M50 400H450" stroke="#4CAF50" strokeWidth="20"/>
    <circle cx="150" cy="150" r="20" fill="#87CEEB"/>
    <circle cx="350" cy="150" r="20" fill="#87CEEB"/>
    <path d="M200 150L220 130M300 150L280 130" stroke="currentColor" strokeWidth="10"/>
  </svg>
);

export default DestinationsIcon;
