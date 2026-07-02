import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/button';

interface ExitThisPageProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  redirectUrl?: string;
  text?: string;
  activatedText?: string;
  timedOutText?: string;
  pressTwoMoreTimesText?: string;
  pressOneMoreTimeText?: string;
}

const REQUIRED_PRESSES = 3;
const TIMEOUT_MS = 5000;

const indicatorStyles = [
  'p-govuk-2 pb-0 pointer-events-none text-center',
];

const dotStyles = [
  'inline-block box-border rounded-full',
  'w-govuk-exit-page-dot h-govuk-exit-page-dot',
  'mx-govuk-exit-page-dot-gap',
  'border-2 border-solid border-current',
];

const ExitThisPage = ({
  className,
  redirectUrl = 'https://www.bbc.co.uk/weather',
  text = 'Exit this page',
  activatedText = 'Loading.',
  timedOutText = 'Exit this page expired.',
  pressTwoMoreTimesText = 'Shift, press 2 more times to exit.',
  pressOneMoreTimeText = 'Shift, press 1 more time to exit.',
  ref,
  ...props
}: ExitThisPageProps) => {
  const [keypressCount, setKeypressCount] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const [activated, setActivated] = useState(false);

  const countRef = useRef(0);
  const lastKeyModifiedRef = useRef(false);
  const keypressTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const exitPage = () => {
    setAnnouncement('');
    setActivated(true);
    globalThis.location.assign(redirectUrl);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    exitPage();
  };

  useEffect(() => {
    const clearKeypressTimer = () => {
      if (keypressTimeoutRef.current !== null) {
        globalThis.clearTimeout(keypressTimeoutRef.current);
        keypressTimeoutRef.current = null;
      }
    };

    const resetKeypressTimer = () => {
      clearKeypressTimer();
      countRef.current = 0;
      setKeypressCount(0);
      setAnnouncement(timedOutText);
      if (messageTimeoutRef.current !== null) {
        globalThis.clearTimeout(messageTimeoutRef.current);
      }
      messageTimeoutRef.current = globalThis.setTimeout(() => {
        setAnnouncement('');
      }, TIMEOUT_MS);
    };

    const setKeypressTimer = () => {
      clearKeypressTimer();
      keypressTimeoutRef.current = globalThis.setTimeout(
        resetKeypressTimer,
        TIMEOUT_MS,
      );
    };

    const handleKeyup = (event: KeyboardEvent) => {
      if (event.key === 'Shift' && !lastKeyModifiedRef.current) {
        countRef.current += 1;
        setKeypressCount(countRef.current);

        if (messageTimeoutRef.current !== null) {
          globalThis.clearTimeout(messageTimeoutRef.current);
          messageTimeoutRef.current = null;
        }

        if (countRef.current >= REQUIRED_PRESSES) {
          countRef.current = 0;
          clearKeypressTimer();
          exitPage();
        } else {
          setAnnouncement(
            countRef.current === 1
              ? pressTwoMoreTimesText
              : pressOneMoreTimeText,
          );
          setKeypressTimer();
        }
      } else if (keypressTimeoutRef.current !== null) {
        resetKeypressTimer();
      }

      lastKeyModifiedRef.current = event.shiftKey;
    };

    document.addEventListener('keyup', handleKeyup, true);
    return () => {
      document.removeEventListener('keyup', handleKeyup, true);
      clearKeypressTimer();
      if (messageTimeoutRef.current !== null) {
        globalThis.clearTimeout(messageTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    redirectUrl,
    timedOutText,
    pressTwoMoreTimesText,
    pressOneMoreTimeText,
  ]);

  return (
    <div
      ref={ref}
      className={cn(
        'block sm:inline-block',
        'sticky top-0 left-0 z-govuk-exit-page w-full',
        'mb-govuk-8',
        'sm:right-0 sm:left-auto sm:w-auto sm:float-right',
        'print:hidden',
        className,
      )}
      {...props}
    >
      <a
        href={redirectUrl}
        rel='nofollow noreferrer'
        onClick={handleClick}
        className={cn(
          buttonVariants({ variant: 'warning' }),
          'mb-0 max-sm:w-full',
        )}
      >
        <span className='sr-only'>Emergency</span> {text}
        <span
          aria-hidden='true'
          className={cn(indicatorStyles, keypressCount > 0 ? 'block' : 'hidden')}
        >
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={cn(
                dotStyles,
                index < keypressCount && 'border-govuk-exit-page-dot',
              )}
            />
          ))}
        </span>
      </a>
      <output className='sr-only'>
        {announcement}
      </output>
      {activated && (
        <div
          role='alert'
          className='fixed inset-0 z-govuk-exit-page-overlay bg-govuk-canvas text-govuk-canvas-text'
        >
          {activatedText}
        </div>
      )}
    </div>
  );
};

export { ExitThisPage, type ExitThisPageProps };
