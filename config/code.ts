import type { Properties, Result } from 'hastscript'
import type { Code, Paragraph, PhrasingContent } from 'mdast'
import type { Plugin, Transformer } from 'unified'
import type { Node, Parent } from 'unist'

import { h as _h } from 'hastscript'
import { visit } from 'unist-util-visit'

function h(el: string, attrs: Properties = {}, children: unknown[] = []): Paragraph {
  const { properties, tagName } = _h(el, attrs)
  return {
    data: { hProperties: properties, hName: tagName },
    children: children as PhrasingContent[],
    type: 'paragraph',
  }
}

function getLanguageName(lang: string): string {
  const languages: {
    [key: string]: undefined | string
  } = {
    tsx: 'React / TypeScript',
    jsx: 'React / JavaScript',
    js: 'JavaScript',
    javascript: 'JavaScript',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    svelte: 'Svelte',
    md: 'Markdown',
    html: 'HTML',
    bash: 'Bash',
    json: 'JSON',
    css: 'CSS',
    sh: 'Bash',
    vue: 'Vue',
    python: 'Python',
    ruby: 'Ruby',
    go: 'Go',
    php: 'PHP',
    react: 'React',
  }

  return languages[lang] ?? lang
}

function parseMetaBlock(meta: string) {
  if (!meta)
    return { title: null, meta: '', icon: null }
  const titleMatch = meta.match(/title="([^"]*)"/)
  const title = titleMatch?.[1] ?? null
  meta = meta.replace(titleMatch?.[0] ?? '', '')
  return { title, meta }
}

export function singleLineCodeBlock() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'code') {
        if (!node.properties || Object.keys(node?.properties).length === 0) {
          node.properties = {}
          node.tagName = 'inline-code'
        }
      }
    })
  }
}

export const codeBlock: Plugin<[]> = (): Transformer => (tree: Node) => {
  visit(tree, 'code', (node: Code, index: number, parent: Parent) => {
    const { lang, meta = '' } = node as Code
    const { title } = parseMetaBlock(meta as string)
    const html = h(
      'div',
      {
        class:
          `copy-code-wrapper${
            title ? ' has-title' : ''
          }${lang ? ` code-language-${lang}` : ''}`,
      },
      [
        h('custom-code-renderer', {
          lang,
          langName: getLanguageName(lang ?? ''),
          code: node?.value,
          title,
        }),
        node as unknown as Result,
      ],
    )

    parent.children[index] = html
  })
}
