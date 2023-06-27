interface Props {
  className?: string;
}

const FolderIcon: React.FC<Props> = ({ className }) => {
  return (
    <span className="w-10 text-center">
      <svg
        className={className}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="folder-blank-solid 17">
          <path
            id="Vector"
            d="M16 4.5V13.5C16 14.3281 15.3281 15 14.5 15H1.5C0.671875 15 0 14.3281 0 13.5V2.5C0 1.67188 0.671875 1 1.5 1H6.5L8.5 3H14.5C15.3281 3 16 3.67188 16 4.5Z"
            fill="#113132"
          />
        </g>
      </svg>
    </span>
  );
};

export default FolderIcon;
