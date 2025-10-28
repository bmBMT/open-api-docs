import useAuthStore from "@/stores/auth.store";
import { Lock, LockOpen } from "lucide-react";
import type { OpenAPIV3 } from "openapi-types";

interface IOperationAuth {
  security: OpenAPIV3.SecurityRequirementObject[];
}

const OperationAuth = ({ security }: IOperationAuth) => {
  const securityNames = security.map(obj => Object.keys(obj)).flat();
  const authStorage = useAuthStore(state => state.storage);

  const isSomeAuthorized = securityNames.some(securityName => authStorage[securityName]);

  return isSomeAuthorized ? <Lock size={20} /> : <LockOpen size={20} />;
};

export default OperationAuth;
