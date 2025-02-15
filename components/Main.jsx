import React from 'react';

export default function Main(props) {
  const { children } = props;
  return (
    // this line prevents the footer from taking 100% of the page's width
    // <main className="flex-1 flex flex-col p-4 sm:p-8">{children}</main>
    <main className="w-full">{children}</main>
  );
}
