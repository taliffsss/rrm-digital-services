// Helper function to get step number based on step id
export const getStepNumber = (stepId: string): number => {
  const stepMap: Record<string, number> = {
    discover: 1,
    design: 2,
    develop: 3,
    deliver: 4,
  };
  return stepMap[stepId] || 1;
};
