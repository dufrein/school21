export interface InputWordProps {
  item: string;
  index: number;
  dropId: string;
  handleWordDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}
