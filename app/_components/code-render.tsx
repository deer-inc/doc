import shiki from 'shiki';
import path from 'path';
import fs from 'fs';

type Props = {
  path?: string;
  code?: string;
  lang?: string;
};

export default async function CodeRender({ path, code, lang }: Props) {
  const highligher = await shiki.getHighlighter({
    theme: 'dark-plus',
  });
  let baseCode = code || '';

  if (path) {
    baseCode = getContentFromPath(path);
  }

  const codeString = highligher.codeToHtml(baseCode, { lang });

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: codeString }} />
    </div>
  );
}

const getContentFromPath = (filePath: string) => {
  const fullPath = path.join(filePath);
  return fs.readFileSync(fullPath, 'utf8');
};
