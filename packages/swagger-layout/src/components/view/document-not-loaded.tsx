import { BookMarked } from "lucide-react";
import { Label } from "../ui/label";

const DocumentNotLoaded = () => {
  return (
    <div className="absolute w-full h-full">
      <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center absolute space-y-5">
        <BookMarked size="40%" />
        <Label className="text-3xl whitespace-nowrap">Schema Not Loaded</Label>
      </div>
    </div>
  );
};

export default DocumentNotLoaded;
