import { expect, test } from 'vitest';
import { cn } from '@/lib/utils';

test('className spacing overrides win over govuk spacing tokens', () => {
  expect(cn('mb-govuk-3', 'mb-0')).toBe('mb-0');
  expect(cn('px-govuk-3', 'px-govuk-6')).toBe('px-govuk-6');
});

test('govuk border widths survive a colour from the same side', () => {
  expect(cn('border-t-govuk-wide border-t-govuk-brand')).toBe(
    'border-t-govuk-wide border-t-govuk-brand',
  );
});

test('govuk font sizes survive a text colour', () => {
  expect(cn('text-govuk-body', 'text-white')).toBe('text-govuk-body text-white');
});
