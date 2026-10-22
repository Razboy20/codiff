import { MarkdownEditor } from '@nkzw/mdx-editor';
import { imagePlugin } from '@nkzw/mdx-editor/core';
import { useMemo, type ComponentProps } from 'react';

export default function SourceDescriptionEditor({
  onUploadAsset,
  ...props
}: ComponentProps<typeof MarkdownEditor> & {
  onUploadAsset?: (file: File) => Promise<string> | string;
}) {
  const plugins = useMemo(
    () =>
      onUploadAsset
        ? [imagePlugin({ imageUploadHandler: (file) => Promise.resolve(onUploadAsset(file)) })]
        : undefined,
    [onUploadAsset],
  );
  return <MarkdownEditor {...props} additionalPlugins={plugins} />;
}
