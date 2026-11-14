import type { Element } from 'hast'
import { defineHastPlugin } from 'satteri'

const COPY_SCRIPT = `(() => {
  if (window.__copyCodeReady) {return}
  window.__copyCodeReady = true

  document.addEventListener('click', async (event) => {
    const target = event.target
    if (!(target instanceof Element)) {return}

    const button = target.closest('[data-copy-code]')
    if (!(button instanceof HTMLButtonElement)) {return}

    const pre = button.parentElement?.querySelector('pre')
    if (!pre) {return}

    const code = pre.getAttribute('__rawString__') ?? pre.querySelector('code')?.textContent ?? ''
    await navigator.clipboard.writeText(code)

    button.dataset.copied = ''
    window.setTimeout(() => {
      delete button.dataset.copied
    }, 2000)
  })
})()`

function createIcon(className: string, children: Element[]): Element {
    return {
        children,
        properties: {
            'aria-hidden': 'true',
            className: [className],
            fill: 'none',
            height: '14',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            viewBox: '0 0 24 24',
            width: '14'
        },
        tagName: 'svg',
        type: 'element'
    }
}

function createButton(): Element {
    return {
        children: [
            createIcon('copy-icon', [
                {
                    children: [],
                    properties: {
                        height: '14',
                        rx: '2',
                        ry: '2',
                        width: '14',
                        x: '8',
                        y: '8'
                    },
                    tagName: 'rect',
                    type: 'element'
                },
                {
                    children: [],
                    properties: {
                        d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'
                    },
                    tagName: 'path',
                    type: 'element'
                }
            ]),
            createIcon('check-icon', [
                {
                    children: [],
                    properties: { d: 'm5 12 5 5L20 7' },
                    tagName: 'path',
                    type: 'element'
                }
            ])
        ],
        properties: {
            'aria-label': 'Copy code',
            className: ['copy-code-button'],
            'data-copy-code': '',
            type: 'button'
        },
        tagName: 'button',
        type: 'element'
    }
}

export const copyCodePlugin = defineHastPlugin({
    after(root, ctx) {
        if (ctx.data.__copyCodeInjected !== true) {
            return
        }

        ctx.appendChild(root, {
            children: [{ type: 'text', value: COPY_SCRIPT }],
            properties: {},
            tagName: 'script',
            type: 'element'
        })
    },
    element: {
        filter: ['pre'],
        visit(node, ctx) {
            const hasCode = node.children.some(
                (child) => child.type === 'element' && child.tagName === 'code'
            )
            if (!hasCode) {
                return
            }

            ctx.wrapNode(node, {
                children: [createButton()],
                properties: { className: ['code-wrapper', 'not-prose'] },
                tagName: 'div',
                type: 'element'
            })
            ctx.data.__copyCodeInjected = true
        }
    },
    name: 'copy-code'
})
