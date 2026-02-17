import React from 'react';

// Building blocks progressSteps components
import {
  IndexView as ProgressStepsIndexView,
  LinearSteps as LinearStepsView,
  WithNumbersOnly as WithNumbersOnlyView,
  VerticalStepper as VerticalStepperView,
} from 'blocks/progressSteps';

const routes = [
  {
    path: '/blocks/progress-steps',
    renderer: (params = {}): React.JSX.Element => (
      <ProgressStepsIndexView {...params} />
    ),
  },
  {
    path: '/blocks/progress-steps/linear-steps',
    renderer: (params = {}): React.JSX.Element => <LinearStepsView {...params} />,
  },
  {
    path: '/blocks/progress-steps/with-numbers-only',
    renderer: (params = {}): React.JSX.Element => <WithNumbersOnlyView {...params} />,
  },
  {
    path: '/blocks/progress-steps/vertical-stepper',
    renderer: (params = {}): React.JSX.Element => <VerticalStepperView {...params} />,
  },
];

export default routes;
