import {ReactNode} from "react";
import Head from "next/head";

export interface Props {
  children: ReactNode | ReactNode[]
  className?: string;
  title?: string;
}
const MAIN_TITLE = 'Atomic Design Pattern';

function Page({ title, children, className }: Props) {
  const headTitle = `${MAIN_TITLE}${title ? ` | ${title}`: ''}`
  return <div className={className}>
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content="Presentation about Atomic Design Pattern" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
        <link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css" />
    </Head>
    {children}
  </div>
}
export default Page
