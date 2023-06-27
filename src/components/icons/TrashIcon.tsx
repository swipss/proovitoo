interface Props {
  className?: string;
}

const TrashIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="14"
      height="16"
      className={className}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="trash-regular 1" clip-path="url(#clip0_502_382)">
        <path
          id="Vector"
          d="M13.25 2.5H10.9256L9.86312 0.726562C9.59062 0.277344 9.10312 0 8.575 0H5.425C4.8975 0 4.40938 0.277344 4.13594 0.726562L3.07437 2.5H0.721875C0.335938 2.5 0 2.83594 0 3.22187C0 3.60781 0.335938 4 0.721875 4H1L1.66281 14.5938C1.70969 15.3828 2.36656 16 3.15969 16H10.8409C11.6341 16 12.2909 15.3828 12.3378 14.5938L13 4H13.25C13.6656 4 14 3.66563 14 3.25C14 2.83437 13.6656 2.5 13.25 2.5ZM5.425 1.5H8.575L9.17656 2.5H4.825L5.425 1.5ZM10.8406 14.5H3.15937L2.50406 4H11.4978L10.8406 14.5Z"
          fill="#113132"
        />
      </g>
      <defs>
        <clipPath id="clip0_502_382">
          <rect width="14" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrashIcon;
