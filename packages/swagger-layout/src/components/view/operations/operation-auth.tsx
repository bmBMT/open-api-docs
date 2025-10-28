import useAuthStore from "@/stores/auth.store";
import { Lock, LockOpen } from "lucide-react";
import type { OpenAPIV3 } from "openapi-types";

interface IOperationAuth {
  security: OpenAPIV3.SecurityRequirementObject[];
}

const OperationAuth = ({ security }: IOperationAuth) => {
  const setAuthSheetState = useAuthStore(state => state.setAuthSheetState);
  const authStorage = useAuthStore(state => state.storage);
  const securityNames = security.map(obj => Object.keys(obj)).flat();
  const isSomeAuthorized = securityNames.some(securityName => authStorage[securityName]);
  const Icon = isSomeAuthorized ? Lock : LockOpen;

  const openAuthSheet = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    setAuthSheetState(true);
  };

  return <Icon onClick={openAuthSheet} size={20} />;
};

export default OperationAuth;
