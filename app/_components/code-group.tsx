import path from 'path';
import shiki from 'shiki';
import fs from 'fs';
import CodeTabBlock from '@/app/_components/code-tab-block';
import { shikiConfig } from '@/doc.config';

export default async function CodeGroup({
  items,
}: {
  items: {
    filePath?: string;
    code?: string;
    lang?: string;
    title?: string;
  }[];
}) {
  const generateItems = items.map(async (item) => {
    if (item.filePath) {
      const code = getContentFromPath(item.filePath);
      const lang = item.filePath.split('.').pop() || '';

      return {
        filePath: item.filePath,
        code: await getPrettyCode(code, lang),
        title: item.title,
        baseCode: code,
        lang,
      };
    } else {
      return {
        ...item,
        baseCode: item.code || '',
        code: await getPrettyCode(item.code!, item.lang),
      };
    }
  });

  const computedItems = await Promise.all(generateItems);

  return <CodeTabBlock items={computedItems} />;
}

const getContentFromPath = (filePath: string) => {
  const fullPath = path.join(filePath);
  return fs.readFileSync(fullPath, 'utf8');
};

async function getPrettyCode(code: string, lang?: string) {
  const highlighter = await shiki.getHighlighter({
    themes: [shikiConfig.darkTheme, shikiConfig.lightTheme],
    langs: shikiConfig.langs as any,
  });
  const darkTokens = highlighter.codeToThemedTokens(
    code,
    lang,
    shikiConfig.darkTheme
  );
  const dark = shiki.renderToHtml(darkTokens, {
    bg: '_',
  });

  const lightTokens = highlighter.codeToThemedTokens(
    code,
    lang,
    shikiConfig.lightTheme
  );
  const light = shiki.renderToHtml(lightTokens, {
    bg: '_',
  });

  return {
    light,
    dark,
  };
}
