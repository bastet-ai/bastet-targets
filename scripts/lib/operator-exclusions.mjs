// Operator-reviewed publication exclusions. Readmission requires an explicit
// source change; anonymous public visibility never overrides this decision.
export const OPERATOR_EXCLUSIONS = Object.freeze({
  basecamp: 'Operator retired: automated scanning conflicts with program rules.',
  sheer_bbp: 'Operator retired: automated tools and scripted testing are prohibited.',
  ferrero: 'Operator retired: requests avoiding automated tools and offers no monetary bounty.',
});

export function isOperatorExcluded(handle) {
  return Object.hasOwn(OPERATOR_EXCLUSIONS, handle);
}
