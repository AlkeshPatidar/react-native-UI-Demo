import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg viewBox="0 0 37 37" xmlns="http://www.w3.org/2000/svg"><path d="M15.6583 19.7583L21.35 23.075M21.3417 13.925L15.6583 17.2417M26 12.6667C26 14.0474 24.8807 15.1667 23.5 15.1667C22.1193 15.1667 21 14.0474 21 12.6667C21 11.2859 22.1193 10.1667 23.5 10.1667C24.8807 10.1667 26 11.2859 26 12.6667ZM16 18.5C16 19.8807 14.8807 21 13.5 21C12.1193 21 11 19.8807 11 18.5C11 17.1193 12.1193 16 13.5 16C14.8807 16 16 17.1193 16 18.5ZM26 24.3333C26 25.714 24.8807 26.8333 23.5 26.8333C22.1193 26.8333 21 25.714 21 24.3333C21 22.9526 22.1193 21.8333 23.5 21.8333C24.8807 21.8333 26 22.9526 26 24.3333Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;

type Props = {
  size?: number;
  style?: object;
};

export function ShareIcon({ size = 24, style }: Props) {
  return <SvgXml xml={xml} width={size} height={size} style={style} />;
}
