import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LockOpen } from "lucide-react";
import AuthenticationForms from "./authentication-forms";

const AuthenticationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <div className="flex space-x-2 items-center">
            <Label className="cursor-pointer">Authorize</Label>
            <LockOpen />
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
