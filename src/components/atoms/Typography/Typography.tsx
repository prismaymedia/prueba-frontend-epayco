import React from 'react';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({ text, tag: Tag, className }) => (
  <Tag className={className}>{text}</Tag>
);

export default Typography;
