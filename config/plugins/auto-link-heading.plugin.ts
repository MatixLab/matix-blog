import type { Element } from 'hast'
import { defineHastPlugin } from 'satteri'

const hashIcon: Element = {
    children: [
        {
            children: [],
            properties: { x1: '4', x2: '20', y1: '9', y2: '9' },
            tagName: 'line',
            type: 'element'
        },
        {
            children: [],
            properties: { x1: '4', x2: '20', y1: '15', y2: '15' },
            tagName: 'line',
            type: 'element'
        },
        {
            children: [],
            properties: { x1: '10', x2: '8', y1: '3', y2: '21' },
            tagName: 'line',
            type: 'element'
        },
        {
            children: [],
            properties: { x1: '16', x2: '14', y1: '3', y2: '21' },
            tagName: 'line',
            type: 'element'
        }
    ],
    properties: {
        className: ['lucide', 'lucide-hash'],
        fill: 'none',
        height: '12',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        viewBox: '0 0 24 24',
        width: '12',
        xmlns: 'http://www.w3.org/2000/svg'
    },
    tagName: 'svg',
    type: 'element'
}

export const autolinkHeadingsPlugin = defineHastPlugin({
    element: {
        filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        visit(node, ctx) {
            const id = node.properties?.id
            if (typeof id !== 'string' || id.length === 0) {
                return
            }
            const anchor: Element = {
                children: [
                    {
                        children: [hashIcon],
                        properties: { className: ['icon', 'icon-link'] },
                        tagName: 'span',
                        type: 'element'
                    }
                ],
                properties: {
                    'aria-label': 'Link to section',
                    className: ['subheading-anchor group'],
                    href: `#${id}`
                },
                tagName: 'a',
                type: 'element'
            }
            ctx.prependChild(node, anchor)
        }
    },
    name: 'autolink-headings'
})
