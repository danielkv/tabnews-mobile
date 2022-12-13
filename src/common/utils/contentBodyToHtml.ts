import MarkdownIt from 'markdown-it'

import { theme } from '@common/theme'

const markdownItInstance = MarkdownIt({ html: true })

export function contentBodyToHtml(body: string | null): string {
    const html = `<head>
			<style>
				body {color: ${theme.colors.gray[500]}; }
				img { max-width: 100% !important; }
			</style>
		  </head>
		<body>
			${markdownItInstance.render(body ?? '')}
		</body>`

    return html
}
