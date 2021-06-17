import Link from 'next/link';

interface SvgProps {
    x: string,
    y: string,
    href: string
}

export const HomeSvg = ({ x, y, href }:SvgProps) => (
    <Link href={href}>
        <a>
            <svg x={x} y={y} width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9844 1.57342C16.829 0.863704 17.8968 0.474609 19 0.474609C20.1032 0.474609 21.171 0.863704 22.0156 1.57342L36.0781 13.3984C36.6016 13.8383 37.0225 14.3873 37.3113 15.0071C37.6001 15.6268 37.7498 16.3022 37.75 16.9859V36.6265C37.75 37.4553 37.4208 38.2502 36.8347 38.8363C36.2487 39.4223 35.4538 39.7515 34.625 39.7515H26.0312C25.2024 39.7515 24.4076 39.4223 23.8215 38.8363C23.2355 38.2502 22.9062 37.4553 22.9062 36.6265V25.689H15.0938V36.6265C15.0938 37.4553 14.7645 38.2502 14.1785 38.8363C13.5924 39.4223 12.7976 39.7515 11.9688 39.7515H3.375C2.5462 39.7515 1.75134 39.4223 1.16529 38.8363C0.57924 38.2502 0.25 37.4553 0.25 36.6265V16.9844C0.250173 16.3006 0.399915 15.6252 0.688727 15.0055C0.977538 14.3858 1.39843 13.8367 1.92188 13.3969L15.9844 1.57186V1.57342ZM20.0062 3.96405C19.7246 3.72693 19.3682 3.5969 19 3.5969C18.6318 3.5969 18.2754 3.72693 17.9937 3.96405L3.93125 15.7922C3.75743 15.9385 3.61761 16.121 3.52154 16.3269C3.42547 16.5328 3.37546 16.7572 3.375 16.9844V36.625H11.9688V25.6875C11.9688 24.8587 12.298 24.0638 12.884 23.4778C13.4701 22.8917 14.2649 22.5625 15.0938 22.5625H22.9062C23.7351 22.5625 24.5299 22.8917 25.116 23.4778C25.702 24.0638 26.0312 24.8587 26.0312 25.6875V36.625H34.625V16.9844C34.625 16.7566 34.5752 16.5316 34.4791 16.3252C34.383 16.1187 34.243 15.9357 34.0687 15.789L20.0062 3.96405Z" fill="white"/>
                <rect x="0" y="0" width="38" height="40" fill="#0000"></rect>
            </svg>
        </a>
    </Link>
)

export const ClipsSvg = ({ x, y, href }:SvgProps) => (
    <Link href={href}>
        <a>
            <svg x={x} y={y} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5 14.5833C37.5 12.2854 35.6313 10.4167 33.3334 10.4167H8.33335C6.03544 10.4167 4.16669 12.2854 4.16669 14.5833V35.4167C4.16669 37.7146 6.03544 39.5833 8.33335 39.5833H33.3334C35.6313 39.5833 37.5 37.7146 37.5 35.4167V28.4729L45.8334 35.4167V14.5833L37.5 21.5271V14.5833ZM33.3375 35.4167H8.33335V14.5833H33.3334L33.3354 24.9979L33.3334 25L33.3354 25.0021L33.3375 35.4167Z" fill="white"/>
                <rect x="0" y="0" width="50" height="50" fill="#0000"></rect>
            </svg>
        </a>
    </Link>
)

export const MessagesSvg = ({ x, y, href }:SvgProps) => (
    <Link href={href}>
        <a>
            <svg x={x} y={y} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.5 9H8.16667C5.86875 9 4 10.8687 4 13.1667V38.1667C4 40.4646 5.86875 42.3333 8.16667 42.3333H14.4167V50.1812L27.4938 42.3333H41.5C43.7979 42.3333 45.6667 40.4646 45.6667 38.1667V13.1667C45.6667 10.8687 43.7979 9 41.5 9ZM41.5 38.1667H26.3396L18.5833 42.8187V38.1667H8.16667V13.1667H41.5V38.1667Z" fill="white"/>
                <rect x="0" y="0" width="50" height="50" fill="#0000"></rect>
            </svg>
        </a>
    </Link>
)

export const SoundboardSvg = ({ x, y, href }:SvgProps) => (
    <Link href={href}>
        <a>
            <svg x={x} y={y} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0834 9.79791C27.0834 5.92916 22.2709 4.14999 19.7522 7.08749L12.1667 15.9375C11.9712 16.1662 11.7283 16.3498 11.455 16.4756C11.1817 16.6015 10.8843 16.6667 10.5834 16.6667H10.4167C8.75914 16.6667 7.16943 17.3251 5.99733 18.4972C4.82523 19.6693 4.16675 21.2591 4.16675 22.9167V27.0833C4.16675 28.7409 4.82523 30.3306 5.99733 31.5027C7.16943 32.6748 8.75914 33.3333 10.4167 33.3333H10.5834C10.8843 33.3333 11.1817 33.3985 11.455 33.5244C11.7283 33.6502 11.9712 33.8338 12.1667 34.0625L19.7522 42.9125C22.2709 45.85 27.0834 44.0708 27.0834 40.2021V9.79791ZM15.3292 18.6521L22.9167 9.79583V40.2L15.3292 31.3458C14.7421 30.6618 14.014 30.113 13.1948 29.7368C12.3757 29.3607 11.4848 29.1662 10.5834 29.1667H10.4167C9.86421 29.1667 9.33431 28.9472 8.94361 28.5565C8.55291 28.1658 8.33341 27.6359 8.33341 27.0833V22.9167C8.33341 22.3641 8.55291 21.8342 8.94361 21.4435C9.33431 21.0528 9.86421 20.8333 10.4167 20.8333H10.5834C11.4851 20.8333 12.3762 20.6382 13.1954 20.2613C14.0146 19.8844 14.7425 19.3347 15.3292 18.65V18.6521ZM38.8251 8.90624C38.6279 8.71193 38.394 8.55886 38.137 8.45598C37.88 8.3531 37.605 8.30247 37.3282 8.30705C37.0514 8.31164 36.7783 8.37134 36.5249 8.48268C36.2714 8.59401 36.0427 8.75474 35.8521 8.95548C35.6614 9.15622 35.5127 9.39294 35.4146 9.6518C35.3165 9.91067 35.271 10.1865 35.2807 10.4632C35.2904 10.7398 35.3551 11.0118 35.4711 11.2631C35.5872 11.5145 35.7521 11.7402 35.9563 11.9271C43.5709 19.1604 43.5709 30.8396 35.9563 38.0729C35.5675 38.4561 35.3447 38.9765 35.3356 39.5223C35.3266 40.068 35.5321 40.5956 35.908 40.9914C36.2839 41.3872 36.8001 41.6197 37.3456 41.6388C37.8911 41.658 38.4224 41.4622 38.8251 41.0937C48.1688 32.2187 48.1688 17.7812 38.8251 8.90624ZM32.6855 14.7396C32.2849 14.3589 31.7495 14.1529 31.197 14.167C30.6446 14.181 30.1204 14.414 29.7397 14.8146C29.359 15.2152 29.153 15.7506 29.1671 16.303C29.1811 16.8555 29.4141 17.3797 29.8147 17.7604C34.0376 21.7708 34.0376 28.2292 29.8147 32.2396C29.4141 32.6203 29.1811 33.1445 29.1671 33.697C29.153 34.2494 29.359 34.7848 29.7397 35.1854C30.1204 35.586 30.6446 35.8189 31.197 35.833C31.7495 35.8471 32.2849 35.6411 32.6855 35.2604C38.6376 29.6062 38.6376 20.3937 32.6855 14.7396Z" fill="white"/>
                <rect x="0" y="0" width="50" height="50" fill="#0000"></rect>
            </svg>
        </a>
    </Link>
)

export const CreditsSvg = ({ x, y, href }:SvgProps) => (
    <Link href={href}>
        <a>
            <svg x={x} y={y} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 3.125C12.9199 3.125 3.125 12.9199 3.125 25C3.125 37.0801 12.9199 46.875 25 46.875C37.0801 46.875 46.875 37.0801 46.875 25C46.875 12.9199 37.0801 3.125 25 3.125ZM25 43.1641C14.9707 43.1641 6.83594 35.0293 6.83594 25C6.83594 14.9707 14.9707 6.83594 25 6.83594C35.0293 6.83594 43.1641 14.9707 43.1641 25C43.1641 35.0293 35.0293 43.1641 25 43.1641Z" fill="white"/>
                <path d="M22.6562 16.4062C22.6563 17.0279 22.9032 17.624 23.3427 18.0635C23.7823 18.5031 24.3784 18.75 25 18.75C25.6216 18.75 26.2177 18.5031 26.6573 18.0635C27.0968 17.624 27.3438 17.0279 27.3438 16.4062C27.3438 15.7846 27.0968 15.1885 26.6573 14.749C26.2177 14.3094 25.6216 14.0625 25 14.0625C24.3784 14.0625 23.7823 14.3094 23.3427 14.749C22.9032 15.1885 22.6563 15.7846 22.6562 16.4062ZM26.1719 21.875H23.8281C23.6133 21.875 23.4375 22.0508 23.4375 22.2656V35.5469C23.4375 35.7617 23.6133 35.9375 23.8281 35.9375H26.1719C26.3867 35.9375 26.5625 35.7617 26.5625 35.5469V22.2656C26.5625 22.0508 26.3867 21.875 26.1719 21.875Z" fill="white"/>
                <rect x="0" y="0" width="50" height="50" fill="#0000"></rect>
            </svg>
        </a>
    </Link>
)