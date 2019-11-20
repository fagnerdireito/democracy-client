import * as React from 'react';
import { Svg, SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const SvgNetwork = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Defs>
      <Path
        d="M287 1017c4.745 3.904 11.115 7 20 7 8.882 0 20.45-3.3 35-13l170-107 169 107c14.562 9.7 26.096 13 35 13 8.885 0 15.255-3.096 20-7 8.859-7.284 17.106-22.877 5-55L549 469c-11.123-28.675-28.287-33-37-33-9.713 0-26.877 4.336-38 33L282 962c-12.106 32.123-3.859 47.716 5 55zm420-41c1.565 3.811 2.454 6.713 3 9-2.14-.99-4.804-2.424-8-4l-155-99 99-63 61 157zM509 484c1.011-3.21 2.071-5.384 3-7 .94 1.627 2.011 3.79 3 7l117 300-120 76-120-76 117-300zM317 976l61-157 99 63-155 99c-3.196 1.553-5.871 3.01-8 4 .535-2.321 1.435-5.2 3-9zm482-265c-7.575-7.678-7.529-19.42-1-27 65.297-71.314 100.846-162.94 101-260-.154-103.384-40.39-200.505-113-274C712.464 77.392 615.342 37.171 512 37c-103.33.171-200.453 40.392-274 113-72.61 73.518-112.846 170.64-113 274 .154 97.06 35.703 188.674 101 260a19.884 19.884 0 01-1 27c-6.934 6.84-18.734 6.863-26-1-71.605-78.063-111-179.03-111-286 0-113.282 44.106-219.756 124-300C292.27 44.09 398.736 0 512 0c113.264 0 219.74 44.09 300 124 79.894 80.221 124 186.695 124 300 0 106.97-39.395 207.937-111 286-7.266 7.863-19.066 7.84-26 1zM656 568c-7.297-7.649-7.206-19.38-1-27 27.177-33.082 41.779-73.784 42-117-.221-48.884-19.379-95.105-54-130-34.97-34.675-81.268-53.848-131-54-48.743.152-95.02 19.314-130 54-34.621 34.884-53.79 81.116-54 130 .21 43.216 14.823 83.906 42 117 6.217 7.62 6.297 19.34-1 27-7.225 6.859-19.093 6.905-26-1-33.549-39.807-52-89.85-52-143 0-58.818 23.03-114.392 65-156 41.698-42.003 97.337-65 156-65 59.663 0 115.302 23.008 157 65 41.97 41.63 65 97.182 65 156 0 53.138-18.44 103.193-52 143-6.896 7.916-18.764 7.859-26 1z"
        id="network_svg__path-1"
      />
    </Defs>
    <G
      id="network_svg__Symbols"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd">
      <G id="network_svg__network">
        <Mask id="network_svg__mask-2" fill="#fff">
          <Use xlinkHref="#network_svg__path-1" />
        </Mask>
        <Use
          id="network_svg__Shape"
          fill={props.color}
          fillRule="nonzero"
          xlinkHref="#network_svg__path-1"
        />
      </G>
    </G>
  </Svg>
);

export default SvgNetwork;
