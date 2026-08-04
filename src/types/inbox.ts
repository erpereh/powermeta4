export type InboxItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  kind: "activity" | "tip" | "system";
};
