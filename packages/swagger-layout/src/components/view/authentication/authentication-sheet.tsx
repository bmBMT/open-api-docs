import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, LockOpen } from "lucide-react";
import AuthenticationForms from "./authentication-forms";
import useAuthStore from "@/stores/auth.store";

const AuthenticationSheet = () => {
  const authStorage = useAuthStore(state => state.storage);
  const isSheetOpened = useAuthStore(state => state.isSheetOpened);
  const setAuthSheetState = useAuthStore(state => state.setAuthSheetState);
  const isSomeAuthorized = Object.keys(authStorage).length > 0;
  const Icon = isSomeAuthorized ? Lock : LockOpen;

  return (
    <Sheet open={isSheetOpened} onOpenChange={setAuthSheetState}>
      <SheetTrigger asChild>
        <Button>
          <div className="flex space-x-2 items-center">
            <Label className="cursor-pointer">Authorize</Label>
            <Icon />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Available authorizations</SheetTitle>
          <SheetDescription>
            Select any method to sign in or attach credentials — selections will be applied to subsequent API requests.
          </SheetDescription>
        </SheetHeader>
        <AuthenticationForms />
      </SheetContent>
    </Sheet>
  );
};

export default AuthenticationSheet;
