import * as React from 'react';
import { Svg, SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const SvgShield = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Defs>
      <Path
        d="M950 143c-81.772 20.513-157.173 21.321-223 3-63.345-18.036-119.552-53.973-167-107-13.526-14.85-30.502-23-48-23-17.545 0-34.498 8.15-48 23-49.236 54.985-107.786 91.548-174 109-64.085 16.264-137.131 14.796-216-5-22.405-5.201-44.512.217-58 15C4.946 168.658-.539 184.093 0 201c6.072 176.116 41.685 329.115 106 455 79.5 156.176 203.45 272.545 368 346 10.556 4.462 23.959 7 38 7 14.017 0 27.431-2.538 38-7 166.63-74.343 291.581-192.727 371-352 62.429-124.654 97.018-275.628 103-449 .548-16.884-4.947-32.33-16-43-13.546-14.783-35.653-20.213-58-15zm-61 490c-75.819 151.855-194.873 264.515-354 335-11.253 5.252-34.827 5.252-46 0-157.146-69.631-275.233-180.38-351-329C76.159 517.909 41.873 370.043 36 200c-.228-7.792 1.605-13.7 5-18 4.698-4.1 10.902-5.044 15-5a37.19 37.19 0 019 1c84.909 20.97 164.032 22.392 234 4 73.229-18.645 137.838-58.847 192-119 12.986-14.571 28.968-14.583 42 0 52.226 58.001 114.206 97.509 184 117 72.197 20.438 153.938 19.743 242-2 2.717-.645 5.779-1.055 9-1 4.087-.055 10.28.9 15 5 3.395 4.29 5.228 10.197 5 18-5.794 167.402-39.123 313.333-99 433zM750 312c-7.809-6.31-19.199-4.934-25 3L470 640c-2.063 2.511-4.146 3.808-6 4-1.525-.238-4.051-1.523-6-4L343 491c-5.62-8.318-16.975-9.808-25-4-7.848 6.351-9.35 17.725-3 26l114 149c9.034 11.392 21.562 17.932 35 18-.182 0-.125 0 0 0 13.04 0 25.556-6.392 34-18l255-325c6.316-7.595 4.927-18.98-3-25z"
        id="shield_svg__a"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Mask id="shield_svg__b" fill="#fff">
        <Use xlinkHref="#shield_svg__a" />
      </Mask>
      <Use fill={props.color} fillRule="nonzero" xlinkHref="#shield_svg__a" />
    </G>
  </Svg>
);

export default SvgShield;
