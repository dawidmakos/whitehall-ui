import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { BackLink } from '@/ui/back-link';
import { Button } from '@/ui/button';
import {
  DateInput,
  DateInputInput,
  DateInputItem,
  DateInputLabel,
} from '@/ui/date-input';
import { ErrorMessage } from '@/ui/error-message';
import { ErrorSummary, type ErrorSummaryItem } from '@/ui/error-summary';
import { Fieldset, FieldsetHeading, FieldsetLegend } from '@/ui/fieldset';
import {
  Footer,
  FooterContainer,
  FooterContentLicence,
  FooterLink,
  FooterMeta,
  FooterMetaItem,
} from '@/ui/footer';
import {
  Header,
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderServiceName,
} from '@/ui/header';
import { Hint } from '@/ui/hint';
import { InsetText } from '@/ui/inset-text';
import { Label } from '@/ui/label';
import { Link } from '@/ui/link';
import { Panel, PanelBody, PanelTitle } from '@/ui/panel';
import {
  PhaseBanner,
  PhaseBannerContent,
  PhaseBannerTag,
  PhaseBannerText,
} from '@/ui/phase-banner';
import { Radios, RadiosHint, RadiosItem } from '@/ui/radios';
import { SkipLink } from '@/ui/skip-link';
import {
  SummaryList,
  SummaryListActions,
  SummaryListKey,
  SummaryListRow,
  SummaryListValue,
} from '@/ui/summary-list';
import { Tag } from '@/ui/tag';
import {
  TaskList,
  TaskListHint,
  TaskListItem,
  TaskListLink,
  TaskListNameAndHint,
  TaskListStatus,
} from '@/ui/task-list';
import { TextInput } from '@/ui/text-input';

type TaskId = 'name' | 'dateOfBirth' | 'licence';
type PageId = 'start' | 'tasks' | TaskId | 'check' | 'confirmation';

interface Answers {
  name: string;
  day: string;
  month: string;
  year: string;
  licence: string;
}

const emptyAnswers: Answers = {
  name: '',
  day: '',
  month: '',
  year: '',
  licence: '',
};

const licenceLabels: Record<string, string> = {
  'trout-2-rod': 'Trout and coarse, up to 2 rods',
  'trout-3-rod': 'Trout and coarse, up to 3 rods',
  'salmon-sea-trout': 'Salmon and sea trout',
};

const referenceNumber = 'HDJ2123F';

const isNameComplete = (answers: Answers) => answers.name.trim() !== '';

const isDateOfBirthComplete = (answers: Answers) =>
  answers.day !== '' && answers.month !== '' && answers.year !== '';

const isLicenceComplete = (answers: Answers) => answers.licence !== '';

const validateName = (answers: Answers): ErrorSummaryItem[] =>
  isNameComplete(answers) ? [] : [{ text: 'Enter your full name', href: '#name' }];

const validateDateOfBirth = (answers: Answers): ErrorSummaryItem[] => {
  const { day, month, year } = answers;

  if (day === '' && month === '' && year === '') {
    return [{ text: 'Enter your date of birth', href: '#dob-day' }];
  }

  if (isDateOfBirthComplete(answers)) {
    const isRealDate =
      /^\d{1,2}$/.test(day) && /^\d{1,2}$/.test(month) && /^\d{4}$/.test(year);

    return isRealDate
      ? []
      : [{ text: 'Date of birth must be a real date', href: '#dob-day' }];
  }

  return [
    {
      text: 'Date of birth must include a day, month and year',
      href: '#dob-day',
    },
  ];
};

const validateLicence = (answers: Answers): ErrorSummaryItem[] =>
  isLicenceComplete(answers)
    ? []
    : [{ text: 'Select the type of licence you want', href: '#licence' }];

const validators: Record<TaskId, (answers: Answers) => ErrorSummaryItem[]> = {
  name: validateName,
  dateOfBirth: validateDateOfBirth,
  licence: validateLicence,
};

const errorFor = (errors: ErrorSummaryItem[], href: string) =>
  errors.find((error) => error.href === href)?.text;

interface ErrorSummaryPanelProps {
  errors: ErrorSummaryItem[];
}

const ErrorSummaryPanel = ({ errors }: ErrorSummaryPanelProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errors.length > 0) ref.current?.focus();
  }, [errors]);

  if (errors.length === 0) return null;

  return <ErrorSummary ref={ref} errorList={errors} />;
};

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => (
  <div className='flex min-h-screen flex-col font-govuk text-govuk-black'>
    <SkipLink href='#main-content'>Skip to main content</SkipLink>

    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='#'>GOV.UK</HeaderLink>
        </HeaderLogo>
        <HeaderServiceName href='#'>
          Apply for a fishing licence
        </HeaderServiceName>
      </HeaderContainer>
    </Header>

    <div className='grow'>
      <div className='mx-auto max-w-240 px-govuk-3'>
        <PhaseBanner>
          <PhaseBannerContent>
            <PhaseBannerTag>
              <Tag>Alpha</Tag>
            </PhaseBannerTag>
            <PhaseBannerText>
              This is a new service. Your <Link href='#'>feedback</Link> will
              help us improve it.
            </PhaseBannerText>
          </PhaseBannerContent>
        </PhaseBanner>

        <main id='main-content' className='py-govuk-7'>
          <div className='md:w-2/3'>{children}</div>
        </main>
      </div>
    </div>

    <Footer>
      <FooterContainer>
        <FooterMeta>
          <FooterMetaItem grow>
            <FooterContentLicence>
              All content is available under the
              <FooterLink
                href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
                rel='license'
              >
                Open Government Licence v3.0
              </FooterLink>
              , except where otherwise stated
            </FooterContentLicence>
          </FooterMetaItem>
          <FooterMetaItem>
            <FooterLink href='#'>© Crown copyright</FooterLink>
          </FooterMetaItem>
        </FooterMeta>
      </FooterContainer>
    </Footer>
  </div>
);

interface StartPageProps {
  onStart: () => void;
}

const StartPage = ({ onStart }: StartPageProps) => (
  <>
    <h1 className='mt-0 mb-govuk-6 text-govuk-heading-xl font-bold'>
      Apply for a fishing licence
    </h1>
    <p className='mb-govuk-4 text-govuk-body'>
      Use this service to apply for a rod fishing licence for England and Wales.
      A licence covers you for fishing with up to 3 rods.
    </p>
    <p className='mb-govuk-4 text-govuk-body'>
      It takes around 5 minutes to apply. You will need your date of birth and
      to know which type of licence you want.
    </p>

    <InsetText>
      You must be 13 or over to buy a fishing licence. Licences for people aged
      13 to 16 are free.
    </InsetText>

    <Button variant='start' onClick={onStart}>
      Start now
    </Button>
  </>
);

interface TaskListPageProps {
  answers: Answers;
  onOpenTask: (task: TaskId) => void;
  onCheckAnswers: () => void;
}

const TaskListPage = ({
  answers,
  onOpenTask,
  onCheckAnswers,
}: TaskListPageProps) => {
  const tasks = [
    {
      id: 'name' as const,
      name: 'Personal details',
      hint: 'Your name as it appears on your passport or driving licence.',
      complete: isNameComplete(answers),
    },
    {
      id: 'dateOfBirth' as const,
      name: 'Date of birth',
      hint: 'We use this to work out which licences you are eligible for.',
      complete: isDateOfBirthComplete(answers),
    },
    {
      id: 'licence' as const,
      name: 'Licence type',
      hint: 'Choose how many rods you want to fish with.',
      complete: isLicenceComplete(answers),
    },
  ];

  const completedCount = tasks.filter((task) => task.complete).length;
  const allComplete = completedCount === tasks.length;

  return (
    <>
      <h1 className='mt-0 mb-govuk-6 text-govuk-heading-xl font-bold'>
        Apply for a fishing licence
      </h1>

      <h2 className='mt-0 mb-govuk-2 text-govuk-heading-m font-bold'>
        {allComplete ? 'Application ready to submit' : 'Application incomplete'}
      </h2>
      <p className='mb-govuk-4 text-govuk-body'>
        You have completed {completedCount} of {tasks.length} sections.
      </p>

      <TaskList>
        {tasks.map((task) => (
          <TaskListItem key={task.id} hasLink>
            <TaskListNameAndHint>
              <TaskListLink
                href={`#${task.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpenTask(task.id);
                }}
              >
                {task.name}
              </TaskListLink>
              <TaskListHint>{task.hint}</TaskListHint>
            </TaskListNameAndHint>
            <TaskListStatus>
              {task.complete ? (
                'Completed'
              ) : (
                <Tag colour='blue'>Incomplete</Tag>
              )}
            </TaskListStatus>
          </TaskListItem>
        ))}

        <TaskListItem hasLink={allComplete}>
          <TaskListNameAndHint>
            {allComplete ? (
              <TaskListLink
                href='#check'
                onClick={(event) => {
                  event.preventDefault();
                  onCheckAnswers();
                }}
              >
                Check your answers and submit
              </TaskListLink>
            ) : (
              'Check your answers and submit'
            )}
            <TaskListHint>
              You can review everything before you send your application.
            </TaskListHint>
          </TaskListNameAndHint>
          <TaskListStatus cannotStartYet={!allComplete}>
            {allComplete ? <Tag colour='blue'>Ready</Tag> : 'Cannot start yet'}
          </TaskListStatus>
        </TaskListItem>
      </TaskList>
    </>
  );
};

interface QuestionPageProps {
  answers: Answers;
  errors: ErrorSummaryItem[];
  onChange: (patch: Partial<Answers>) => void;
  onBack: () => void;
  onContinue: () => void;
}

const NamePage = ({
  answers,
  errors,
  onChange,
  onBack,
  onContinue,
}: QuestionPageProps) => {
  const nameError = errorFor(errors, '#name');

  return (
    <>
      <BackLink
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
      >
        Back
      </BackLink>

      <ErrorSummaryPanel errors={errors} />

      <h1 className='mt-govuk-6 mb-govuk-3'>
        <Label htmlFor='name' size='xl' className='mb-0'>
          What is your full name?
        </Label>
      </h1>
      <Hint id='name-hint'>
        As it appears on your passport or driving licence.
      </Hint>

      {nameError && <ErrorMessage>{nameError}</ErrorMessage>}

      <TextInput
        id='name'
        name='name'
        autoComplete='name'
        width={20}
        error={Boolean(nameError)}
        aria-describedby='name-hint'
        value={answers.name}
        onChange={(event) => onChange({ name: event.target.value })}
      />

      <div className='mt-govuk-6'>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </>
  );
};

const DateOfBirthPage = ({
  answers,
  errors,
  onChange,
  onBack,
  onContinue,
}: QuestionPageProps) => {
  const dateError = errorFor(errors, '#dob-day');

  return (
    <>
      <BackLink
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
      >
        Back
      </BackLink>

      <ErrorSummaryPanel errors={errors} />

      <Fieldset
        className='mt-govuk-6'
        aria-describedby='dob-hint'
        role='group'
      >
        <FieldsetLegend size='xl'>
          <FieldsetHeading as='h1'>What is your date of birth?</FieldsetHeading>
        </FieldsetLegend>

        <Hint id='dob-hint'>For example, 27 3 1985.</Hint>

        {dateError && <ErrorMessage>{dateError}</ErrorMessage>}

        <DateInput>
          <DateInputItem>
            <DateInputLabel htmlFor='dob-day'>Day</DateInputLabel>
            <DateInputInput
              id='dob-day'
              name='dob-day'
              className='max-w-govuk-input-width-2'
              error={Boolean(dateError)}
              value={answers.day}
              onChange={(event) => onChange({ day: event.target.value })}
            />
          </DateInputItem>
          <DateInputItem>
            <DateInputLabel htmlFor='dob-month'>Month</DateInputLabel>
            <DateInputInput
              id='dob-month'
              name='dob-month'
              className='max-w-govuk-input-width-2'
              error={Boolean(dateError)}
              value={answers.month}
              onChange={(event) => onChange({ month: event.target.value })}
            />
          </DateInputItem>
          <DateInputItem>
            <DateInputLabel htmlFor='dob-year'>Year</DateInputLabel>
            <DateInputInput
              id='dob-year'
              name='dob-year'
              className='max-w-govuk-input-width-4'
              error={Boolean(dateError)}
              value={answers.year}
              onChange={(event) => onChange({ year: event.target.value })}
            />
          </DateInputItem>
        </DateInput>
      </Fieldset>

      <div className='mt-govuk-6'>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </>
  );
};

const LicencePage = ({
  answers,
  errors,
  onChange,
  onBack,
  onContinue,
}: QuestionPageProps) => {
  const licenceError = errorFor(errors, '#licence');

  return (
    <>
      <BackLink
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
      >
        Back
      </BackLink>

      <ErrorSummaryPanel errors={errors} />

      <Fieldset className='mt-govuk-6' aria-describedby='licence-hint'>
        <FieldsetLegend size='xl'>
          <FieldsetHeading as='h1'>
            Which type of licence do you want?
          </FieldsetHeading>
        </FieldsetLegend>

        <Hint id='licence-hint'>
          You can only hold one licence at a time.
        </Hint>

        {licenceError && <ErrorMessage>{licenceError}</ErrorMessage>}

        <Radios
          id='licence'
          name='licence'
          value={answers.licence}
          onValueChange={(value) => onChange({ licence: String(value) })}
        >
          <RadiosItem value='trout-2-rod'>
            Trout and coarse, up to 2 rods
          </RadiosItem>
          <RadiosHint>Costs £30 for a full year.</RadiosHint>
          <RadiosItem value='trout-3-rod'>
            Trout and coarse, up to 3 rods
          </RadiosItem>
          <RadiosHint>Costs £45 for a full year.</RadiosHint>
          <RadiosItem value='salmon-sea-trout'>Salmon and sea trout</RadiosItem>
          <RadiosHint>Costs £82 for a full year.</RadiosHint>
        </Radios>
      </Fieldset>

      <div className='mt-govuk-6'>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </>
  );
};

interface CheckAnswersPageProps {
  answers: Answers;
  onBack: () => void;
  onChangeAnswer: (task: TaskId) => void;
  onSubmit: () => void;
}

const CheckAnswersPage = ({
  answers,
  onBack,
  onChangeAnswer,
  onSubmit,
}: CheckAnswersPageProps) => {
  const rows = [
    { task: 'name' as const, key: 'Full name', value: answers.name },
    {
      task: 'dateOfBirth' as const,
      key: 'Date of birth',
      value: `${answers.day} ${answers.month} ${answers.year}`,
    },
    {
      task: 'licence' as const,
      key: 'Licence type',
      value: licenceLabels[answers.licence],
    },
  ];

  return (
    <>
      <BackLink
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
      >
        Back
      </BackLink>

      <h1 className='mt-govuk-6 mb-govuk-6 text-govuk-heading-xl font-bold'>
        Check your answers before sending your application
      </h1>

      <SummaryList>
        {rows.map((row) => (
          <SummaryListRow key={row.task}>
            <SummaryListKey>{row.key}</SummaryListKey>
            <SummaryListValue>{row.value}</SummaryListValue>
            <SummaryListActions>
              <Link
                href='#'
                onClick={(event) => {
                  event.preventDefault();
                  onChangeAnswer(row.task);
                }}
              >
                Change<span className='sr-only'> {row.key.toLowerCase()}</span>
              </Link>
            </SummaryListActions>
          </SummaryListRow>
        ))}
      </SummaryList>

      <h2 className='mt-0 mb-govuk-3 text-govuk-heading-m font-bold'>
        Now send your application
      </h2>
      <p className='mb-govuk-6 text-govuk-body'>
        By submitting this application you are confirming that, to the best of
        your knowledge, the details you are providing are correct.
      </p>

      <Button onClick={onSubmit}>Accept and send</Button>
    </>
  );
};

interface ConfirmationPageProps {
  onStartAgain: () => void;
}

const ConfirmationPage = ({ onStartAgain }: ConfirmationPageProps) => (
  <>
    <Panel>
      <PanelTitle>Application complete</PanelTitle>
      <PanelBody>
        Your reference number
        <br />
        <strong>{referenceNumber}</strong>
      </PanelBody>
    </Panel>

    <p className='mb-govuk-4 text-govuk-body'>
      We have sent you a confirmation email.
    </p>

    <h2 className='mt-govuk-6 mb-govuk-3 text-govuk-heading-m font-bold'>
      What happens next
    </h2>
    <p className='mb-govuk-4 text-govuk-body'>
      We will post your licence to you within 10 working days. You can start
      fishing as soon as it arrives.
    </p>
    <p className='mb-govuk-6 text-govuk-body'>
      <Link
        href='#'
        onClick={(event) => {
          event.preventDefault();
          onStartAgain();
        }}
      >
        Make another application
      </Link>
    </p>
  </>
);

const ApplyForAFishingLicence = () => {
  const [page, setPage] = useState<PageId>('start');
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [errors, setErrors] = useState<ErrorSummaryItem[]>([]);

  const goTo = (next: PageId) => {
    setErrors([]);
    setPage(next);
  };

  const updateAnswers = (patch: Partial<Answers>) =>
    setAnswers((current) => ({ ...current, ...patch }));

  const submitTask = (task: TaskId) => {
    const found = validators[task](answers);
    setErrors(found);
    if (found.length === 0) setPage('tasks');
  };

  const questionProps = (task: TaskId): QuestionPageProps => ({
    answers,
    errors,
    onChange: updateAnswers,
    onBack: () => goTo('tasks'),
    onContinue: () => submitTask(task),
  });

  const pages: Record<PageId, React.ReactNode> = {
    start: <StartPage onStart={() => goTo('tasks')} />,
    tasks: (
      <TaskListPage
        answers={answers}
        onOpenTask={(task) => goTo(task)}
        onCheckAnswers={() => goTo('check')}
      />
    ),
    name: <NamePage {...questionProps('name')} />,
    dateOfBirth: <DateOfBirthPage {...questionProps('dateOfBirth')} />,
    licence: <LicencePage {...questionProps('licence')} />,
    check: (
      <CheckAnswersPage
        answers={answers}
        onBack={() => goTo('tasks')}
        onChangeAnswer={(task) => goTo(task)}
        onSubmit={() => goTo('confirmation')}
      />
    ),
    confirmation: (
      <ConfirmationPage
        onStartAgain={() => {
          setAnswers(emptyAnswers);
          goTo('start');
        }}
      />
    ),
  };

  return <ServiceLayout>{pages[page]}</ServiceLayout>;
};

const meta = {
  title: 'Examples/Apply for a fishing licence',
  component: ApplyForAFishingLicence,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete, working service journey assembled entirely from Whitehall-UI components — start page, task list, three question pages with validation, check your answers, and a confirmation panel. Submitting a question page while it is empty shows the GOV.UK error pattern: an error summary that takes focus and links to the offending field, an inline error message, and the field itself in its error state.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApplyForAFishingLicence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Service: Story = {};
