import React from 'react';

export const reformatLinks = (text: string): React.ReactNode => {
  const match = text.match(/(\[)((id|club)\d+)\|(@\w+)(])/g);

  let textResult = text;

  match?.forEach((value) => {
    const match = value.match(/((club|id)[0-9]+)|(@\w+)/g) || [];

    textResult = textResult.replaceAll(
      value,
      `<a target="_blank" rel="noopener noreferrer" style="color: #0303ea" href="https://vk.com/${match[0]}">${match[1]}</a>`,
    );
  });

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: textResult,
      }}
    />
  );
};
