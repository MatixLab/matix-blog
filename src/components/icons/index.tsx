import type { LucideIcon, LucideProps } from 'lucide-react'

export type Icon = LucideIcon

export const Bluesky = ({ ...props }: LucideProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
    >
        <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6.335 5.144C4.681 3.945 2 3.017 2 5.97c0 .59.35 4.953.556 5.661C3.269 14.094 5.686 14.381 8 14c-4.045.665-4.889 3.208-2.667 5.41C6.363 20.428 7.246 21 8 21c2 0 3.134-2.769 3.5-3.5q.5-1 .5-1.5q0 .5.5 1.5c.366.731 1.5 3.5 3.5 3.5c.754 0 1.637-.571 2.667-1.59C20.889 17.207 20.045 14.664 16 14c2.314.38 4.73.094 5.444-2.369c.206-.708.556-5.072.556-5.661c0-2.953-2.68-2.025-4.335-.826C15.372 6.806 12.905 10.192 12 12c-.905-1.808-3.372-5.194-5.665-6.856'
        />
    </svg>
)

export const GitHub = ({ ...props }: LucideProps) => (
    <svg
        className='size-4'
        width='44'
        height='44'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
    >
        <title>GitHub</title>
        <g
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
        >
            <path d='M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87' />
            <path d='M9 20.027c-3 .973-5.5 0-7-3' />
        </g>
    </svg>
)

export const Hamburger = ({ ...props }: LucideProps) => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 20 20'
        height='20px'
        width='20px'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            fillRule='evenodd'
            d='M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0px'
        />
    </svg>
)

export const X = ({ ...props }: LucideProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className='size-4'
        width='44'
        height='44'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
    >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
        <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
    </svg>
)

export const MapDot = ({ ...props }: LucideProps) => (
    <svg
        xmlns=''
        width='7'
        height='16'
        fill='none'
        strokeWidth='1.5'
        viewBox='0 0 7 16'
        {...props}
    >
        <path d='M3 6.5h1v6l-.5 1-.5-1v-6z' />
        <path d='M3.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1-3a.5.5 0 100-1 .5.5 0 000 1z' />
    </svg>
)

export const ThemeDot = ({ ...props }: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <path d='M12.06.61C5.66.61.46 5.71.46 12.11s5.1 11.5 11.6 11.5 11.5-5.1 11.5-11.5S18.46.61 12.06.61m0 21c-6.07 0-10.94-4.2-10.94-9.5s4.87-9.4 10.94-9.4S23 6.91 23 12.21s-4.88 9.4-10.94 9.4' />
    </svg>
)

export const Line = ({ ...props }: LucideProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 240 24'
        fill='none'
        stroke='currentColor'
        stroke-width='1.25'
        stroke-linecap='round'
        stroke-linejoin='round'
        aria-hidden='true'
        {...props}
    >
        <path d='M 18 12 C 40 12, 52 4, 74 12 S 96 20, 108 12' />
        <path d='M 14 12 c -2 -2, -2 2, 0 0 z' />
        <circle cx='120' cy='12' r='2.4' fill='currentColor' stroke='none' />
        <path d='M 116 12 L 108 12 M 124 12 L 132 12' />
        <circle cx='108' cy='12' r='1' fill='currentColor' stroke='none' />
        <circle cx='132' cy='12' r='1' fill='currentColor' stroke='none' />
        <path d='M 132 12 C 144 4, 166 20, 188 12 S 222 12, 222 12' />
        <path d='M 226 12 c 2 -2, 2 2, 0 0 z' />
    </svg>
)
