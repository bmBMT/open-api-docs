import { Label } from "@/components/ui/label";
import { ShieldX } from "lucide-react";

const AuthenticationNotSupported = () => {
  return (
    <div className="flex space-x-2">
      <ShieldX />
      <Label className="text-sm">The current method is not supported</Label>
    </div>
  );
};

export default AuthenticationNotSupported;
