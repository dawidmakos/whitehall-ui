'use client';

import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

interface ExitThisPageProps extends React.ComponentProps<'div'> {
  redirectUrl?: string;
  text?: string;
  activatedText?: string;
  timedOutText?: string;
  pressTwoMoreTimesText?: string;
  pressOneMoreTimeText?: string;
}

const REQUIRED_PRESSES = 3;
const TIMEOUT_MS = 5000;
const HIDE_CONTENT_CLASS = 'govuk-exit-this-page-hide-content';

const ExitThisPage = ({
  className,
  redirectUrl = 'https://www.bbc.co.uk/weather',
  text = 'Exit this page',
  activatedText = 'Loading.',
  timedOutText = 'Exit this page expired.',
  pressTwoMoreTimesText = 'Shift, press 2 more times to exit.',
  pressOneMoreTimeText = 'Shift, press 1 more time to exit.',
  ...props
}: ExitThisPageProps) => {
  const [keypressCount, setKeypressCount] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const [activated, setActivated] = useState(false);

  const countRef = useRef(0);
  const lastKeyModifiedRef = useRef(false);
  const keypressTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const messageTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const exitPage = () => {
    setAnnouncement('');
    setActivated(true);
    document.body.classList.add(HIDE_CONTENT_CLASS);
    globalThis.location.assign(redirectUrl);
  };

  const clearKeypressTimer = () => {
    globalThis.clearTimeout(keypressTimeoutRef.current);
    keypressTimeoutRef.current = undefined;
  };

  const resetKeypressTimer = () => {
    clearKeypressTimer();
    countRef.current = 0;
    setKeypressCount(0);
    setAnnouncement(timedOutText);
    globalThis.clearTimeout(messageTimeoutRef.current);
    messageTimeoutRef.current = globalThis.setTimeout(() => {
      setAnnouncement('');
    }, TIMEOUT_MS);
  };

  const onKeyup = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Shift' && !lastKeyModifiedRef.current) {
      countRef.current += 1;
      setKeypressCount(countRef.current);
      globalThis.clearTimeout(messageTimeoutRef.current);

      if (countRef.current >= REQUIRED_PRESSES) {
        countRef.current = 0;
        clearKeypressTimer();
        exitPage();
      } else {
        setAnnouncement(
          countRef.current === 1 ? pressTwoMoreTimesText : pressOneMoreTimeText,
        );
        clearKeypressTimer();
        keypressTimeoutRef.current = globalThis.setTimeout(
          resetKeypressTimer,
          TIMEOUT_MS,
        );
      }
    } else if (keypressTimeoutRef.current !== undefined) {
      resetKeypressTimer();
    }

    lastKeyModifiedRef.current = event.shiftKey;
  });

  useEffect(() => {
    const keypressTimeout = keypressTimeoutRef;
    const messageTimeout = messageTimeoutRef;
    const handleKeyup = (event: KeyboardEvent) => onKeyup(event);
    const handlePageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      document.body.classList.remove(HIDE_CONTENT_CLASS);
      globalThis.clearTimeout(keypressTimeout.current);
      globalThis.clearTimeout(messageTimeout.current);
      keypressTimeout.current = undefined;
      countRef.current = 0;
      setKeypressCount(0);
      setAnnouncement('');
      setActivated(false);
    };

    document.addEventListener('keyup', handleKeyup, true);
    globalThis.addEventListener('pageshow', handlePageShow);
    return () => {
      document.removeEventListener('keyup', handleKeyup, true);
      globalThis.removeEventListener('pageshow', handlePageShow);
      globalThis.clearTimeout(keypressTimeout.current);
      globalThis.clearTimeout(messageTimeout.current);
    };
  }, []);

  return (
    <div
      data-exit-this-page
      className={cn(
        'block sm:inline-block',
        'sticky top-0 left-0 z-govuk-exit-page w-full',
        'mb-govuk-6 sm:mb-govuk-8',
        'sm:right-0 sm:left-auto sm:w-auto sm:float-right',
        'print:hidden',
        className,
      )}
      {...props}
    >
      <a
        href={redirectUrl}
        role='button'
        draggable={false}
        rel='nofollow noreferrer'
        onClick={(event) => {
          event.preventDefault();
          exitPage();
        }}
        onKeyDown={(event) => {
          if (event.key !== ' ') return;
          event.preventDefault();
          event.currentTarget.click();
        }}
        className={cn(
          buttonVariants({ variant: 'warning' }),
          'mb-0 max-sm:w-full',
        )}
      >
        <span className='sr-only'>Emergency</span> {text}
        <span
          aria-hidden='true'
          className={cn(
            'p-govuk-2 pb-0 leading-0 pointer-events-none text-center',
            keypressCount > 0 ? 'block' : 'hidden',
          )}
        >
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={cn(
                'inline-block box-border rounded-full',
                'w-govuk-exit-page-dot h-govuk-exit-page-dot',
                'mx-govuk-exit-page-dot-gap',
                'border-2 border-solid border-current',
                index < keypressCount && 'border-govuk-exit-page-dot',
              )}
            />
          ))}
        </span>
      </a>
      <output className='sr-only'>{announcement}</output>
      {activated &&
        createPortal(
          <div
            role='alert'
            data-exit-overlay
            className='fixed inset-0 z-govuk-exit-page-overlay bg-govuk-canvas text-govuk-canvas-text'
          >
            {activatedText}
          </div>,
          document.body,
        )}
    </div>
  );
};

export { ExitThisPage, type ExitThisPageProps };
