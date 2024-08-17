import type {Icon} from "ujon-constants";

function Logo({size = '24', color = 'black'}: Icon) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 8V16H12V14H14V8H16Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99552 15.9994L8.0006 8.00001L12 8.00001L12 10L9.99933 10L9.99552 16.0006L7.99552 15.9994Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 13H6V18H18V13H20V20H4V13Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4H20V11H18V6H6V11H4V4Z"
                fill={color}
            />
        </svg>
    );
}

export default Logo;
