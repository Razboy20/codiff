import { lazy, Suspense, type ComponentProps } from 'react';

let modulePromise:
  | Promise<{ default: typeof import('@nkzw/mdx-editor').MarkdownEditor }>
  | undefined;
export const preloadMarkdownEditor = () =>
  (modulePromise ??= import('@nkzw/mdx-editor').then(({ MarkdownEditor }) => ({
    default: MarkdownEditor,
  })));

const Editor = lazy(preloadMarkdownEditor);
export function MarkdownEditor(props: ComponentProps<typeof Editor>) {
  return (
    <Suspense fallback={<div className="codiff-readonly-markdown-loading">Loading…</div>}>
      <Editor {...props} />
    </Suspense>
  );
}
