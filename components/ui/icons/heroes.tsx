import React from 'react'

export const HeroesIcon = ({classNames}: {classNames?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-labelledby="title desc" className={classNames}>


  <g style={{fill: 'currentColor'}} filter="url(#soft-emboss)">
    <circle cx="256" cy="102" r="36" />

    <ellipse cx="256" cy="210" rx="46" ry="58" />
    <path d="M236 144h40c10 0 18 8 18 18v8c0 10-8 18-18 18h-40c-10 0-18-8-18-18v-8c0-10 8-18 18-18z" />

    <path d="M212 208 l-44 -28 a10 10 0 0 1 12 -16 l38 24z" />
    <path d="M300 208 l44 -28 a10 10 0 0 0 -12 -16 l-38 24z" />

    <path d="M214 232 l-52 34 a10 10 0 0 0 12 16 l46 -30z" />
    <path d="M298 232 l52 34 a10 10 0 0 1 -12 16 l-46 -30z" />

    <path d="M92 226
             C140 190, 190 180, 226 192
             C184 206, 150 226, 124 256
             C156 246, 188 242, 214 246
             C170 266, 132 292, 112 324
             C150 302, 198 286, 226 288
             C182 314, 144 348, 120 384
             C170 348, 216 320, 236 316
             C210 332, 170 370, 150 398
             C210 358, 250 334, 256 332
             L256 300
             C214 300, 154 298, 92 226 z" />
    <path d="M420 226
             C372 190, 322 180, 286 192
             C328 206, 362 226, 388 256
             C356 246, 324 242, 298 246
             C342 266, 380 292, 400 324
             C362 302, 314 286, 286 288
             C330 314, 368 348, 392 384
             C342 348, 296 320, 276 316
             C302 332, 342 370, 362 398
             C302 358, 262 334, 256 332
             L256 300
             C298 300, 358 298, 420 226 z" />

    <g transform="translate(256,360)">
      <path d="M0 -60
               c34 0 62 24 62 54
               c0 30-28 54-62 54
               c-34 0-62-24-62-54
               c0-30 28-54 62-54z" />
      <rect x="-14" y="12" width="28" height="92" rx="6" ry="6" />
      <rect x="-68" y="24" width="136" height="28" rx="8" ry="8" />
    </g>

    <rect x="188" y="466" width="136" height="12" rx="6" />
  </g>
</svg>
  )
}
