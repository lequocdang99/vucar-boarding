import React from 'react';

export default function Content({ content }: { content: string }) {
  return <div>{content.replace(/([.?!])\s*/g, '$1|').split('|')[0]}</div>;
}
