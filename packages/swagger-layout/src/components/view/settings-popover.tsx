import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// TODO: zustand persist store.
// TODO: fix popover layout size.
const SettingsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Settings />
      </PopoverTrigger>
      <PopoverContent className='space-y-4'>
        <div className="flex items-center space-x-2">
          <Switch id="persist-auth" />
          <Label htmlFor="persist-auth">Persist Authentication</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="auth-on-endpoint" />
          <Label htmlFor="auth-on-endpoint">Enable auth on the endpoint</Label>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
