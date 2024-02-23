import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0x7f965fA45d6D0a34C141120f4Ceccd39a455a6a4',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/2024-a-base-odyssey.png`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'Linked Minting Frame',
  description: 'LFG',
  openGraph: {
    title: 'Linked Minting Frame',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Linked Minting Frame</h1>
      <p>TODO: Click here to learn how to make this!</p>
    </>
  );
}
