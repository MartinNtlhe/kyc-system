export const onboardingClientCollectData = {
  id: 'kyc',
  states: {
    final: { type: 'final' },
    welcome: { on: { USER_NEXT_STEP: 'document_selection' } },
    document_photo: {
      on: { USER_NEXT_STEP: 'document_review', USER_PREV_STEP: 'document_selection' },
    },
    document_review: {
      on: { USER_NEXT_STEP: 'document_photo_two', USER_PREV_STEP: 'document_photo' },
    },
    document_photo_two: {
      on: { USER_NEXT_STEP: 'document_review_two', USER_PREV_STEP: 'document_review' },
    },
    document_selection: { on: { USER_NEXT_STEP: 'document_photo', USER_PREV_STEP: 'welcome' } },
    document_review_two: { on: { USER_NEXT_STEP: 'final', USER_PREV_STEP: 'document_photo_two' } },
  },
  context: { documents: [] },
  initial: 'welcome',
  predictableActionArguments: true,
};

export const manualReview = {
  id: 'Manual Review',
  states: {
    review: {
      on: {
        reject: { target: 'rejected' },
        approve: { target: 'approved' },
        resubmit: { target: 'review' },
      },
    },
    approved: { type: 'final' },
    rejected: { type: 'final' },
  },
  initial: 'review',
};
