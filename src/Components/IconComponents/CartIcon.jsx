import React from "react";

function CartIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z"
        fill="#626060"
      />
    </svg>
  );
}

export default CartIcon;
