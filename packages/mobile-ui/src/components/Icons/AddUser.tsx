import * as React from 'react';
import { Svg, SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const SvgAddUser = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Defs>
      <Path
        d="M439 54c-131.244 0-238 106.901-238 238.26 0 131.37 106.756 238.26 238 238.26s238-106.89 238-238.26S570.244 54 439 54zm0 439.48c-110.823 0-201-90.275-201-201.22 0-110.956 90.177-201.22 201-201.22s201 90.264 201 201.22c0 110.945-90.177 201.22-201 201.22zm0 122.133c-360.13 0-439 179.382-439 248.271C0 930.365 54.571 970 107 970h664c52.417 0 107-39.635 107-106.116-.011-68.89-78.858-248.27-439-248.27zM771 932.96H107c-33.717 0-70-24.142-70-69.076 0-54.674 73.852-211.23 402-211.23s402 156.556 402 211.23c-.011 44.934-36.295 69.076-70 69.076zm235-536.586c9.738.04 18 8.31 18 18.02 0 10.71-8.25 18.992-18 19.02H896v110.12c-.04 9.738-8.301 18.02-19 18.02-9.71 0-17.972-8.27-18-18.02v-110.12H749c-9.738-.028-18-8.31-18-19.02 0-9.71 8.25-17.98 18-18.02h110v-110.12c.028-9.75 8.278-18.02 18-18.02 10.699 0 18.96 8.27 19 18.02v110.12h110z"
        id="add-user_svg__path-1"
      />
    </Defs>
    <G
      id="add-user_svg__Symbols"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd">
      <G id="add-user_svg__add-user">
        <Mask id="add-user_svg__mask-2" fill="#fff">
          <Use xlinkHref="#add-user_svg__path-1" />
        </Mask>
        <Use
          id="add-user_svg__Mask"
          fill={props.color}
          fillRule="nonzero"
          xlinkHref="#add-user_svg__path-1"
        />
      </G>
    </G>
  </Svg>
);

export default SvgAddUser;
