import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { codeImport } from 'remark-code-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export const Post = defineDocumentType(() => ({
  name: 'Post',
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
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [rehypeSlug, rehypePrettyCode, rehypeAutolinkHeadings],
  },
});