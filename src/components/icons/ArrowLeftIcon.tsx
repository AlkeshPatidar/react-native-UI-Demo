import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Alt Arrow Left">
<path id="Vector" d="M20 6.66667L12 16L20 25.3333" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g></svg>`;

type Props = {
  size?: number;
  style?: object;
};

export function ArrowLeftIcon({ size = 24, style }: Props) {
  return <SvgXml xml={xml} width={size} height={size} style={style} />;
}
