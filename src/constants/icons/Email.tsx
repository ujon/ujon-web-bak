import type {Icon} from "ujon-constants";

function Email({size = '24', color = 'black', className}: Icon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            className={className}
        >
            <path d="M12 13.183L19 8.75934V17H5V8.75934L12 13.183Z"/>
            <path d="M5.95982 7H18.0402L12 10.817L5.95982 7Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V24H24V0ZM21 6.3125V5H3V6.3125V19H21V6.3125Z"/>
        </svg>
    )
}

export default Email;