type StatusCodesFirstChar = "1" | "2" | "3" | "4" | "5";

export const getOperationResponseStatusCodeVariant = (statusCode: string): string => {
  const statusCodeFirstChar = statusCode.charAt(0);
  const variants: Record<StatusCodesFirstChar, string> = {
    "1": "bg-[#9E9E9E] dark:bg-[#9E9E9E]/90",
    "2": "bg-[#4CAF50] dark:bg-[#4CAF50]/90",
    "3": "bg-[#FF9800] dark:bg-[#FF9800]/90",
    "4": "bg-[#F44336] dark:bg-[#F44336]/90",
    "5": "bg-[#9C27B0] dark:bg-[#9C27B0]/90",
  };

  return variants[statusCodeFirstChar as StatusCodesFirstChar] || "";
};
