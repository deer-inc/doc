import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import { codeImport } from 'remark-code-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { getHighlighter } from 'shiki';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    links: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}));

const shikiOptions: Partial<Options> = {
  theme: {
    darkCode: 'min-dark',
    lightCode: 'min-light',
  },
  keepBackground: false,

  onVisitHighlightedLine(node) {
    node.properties.className.push('bg-muted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['bg-muted'];
  },

  getHighlighter: (options: any) =>
    getHighlighter({
      ...options,
      langs: ['tsx', 'mdx', 'md', 'json', 'xml', 'css'],
    }),
};

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, shikiOptions],
      rehypeAutolinkHeadings,
    ],
  },
});
