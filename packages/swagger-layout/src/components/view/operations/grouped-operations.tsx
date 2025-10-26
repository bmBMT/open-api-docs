import useSwaggerStore from "@/stores/swagger.store";
import { groupOperationsByMethod } from "@bmbmt-swagger/common";

const GroupedOperations = () => {
  const swaggerDocument = useSwaggerStore(state => state.schema?.document);
  const groupedOperations = groupOperationsByMethod(swaggerDocument!.paths);

  console.log(groupedOperations);

  return <></>;
};

export default GroupedOperations;
