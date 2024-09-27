import type {MDXComponents} from 'mdx/types'
import Image, {ImageProps} from 'next/image'
import {TypographyH1} from "./components/ui/typography/typography-h1";
import {TypographyLead} from "./components/ui/typography/typography-lead";
import {TypographyP} from "./components/ui/typography/typography-p";
import {TypographyH2} from "./components/ui/typography/typography-h2";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => <TypographyH1 {...props}>{props.children}</TypographyH1>,
    h2: (props) => <TypographyH2 {...props}>{props.children}</TypographyH2>,
    p: (props) => <TypographyP {...props}>{props.children}</TypographyP>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{width: '100%', height: 'auto'}}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}