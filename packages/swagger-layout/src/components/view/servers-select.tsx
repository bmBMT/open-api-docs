import type { OpenAPIV3 } from "openapi-types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

interface IServersSelect {
  servers: OpenAPIV3.ServerObject[];
  selected: string;
  onServerChange: (server: string) => void;
}

const ServersSelect = ({ servers, onServerChange, selected }: IServersSelect) => {
  if (!servers.length) return;
  return (
    <div className="space-y-1">
      <Label className="text-sm">Server</Label>
      <Select value={selected} onValueChange={onServerChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {servers.map((server, index) => (
            <SelectItem key={index} value={server.url}>
              {server.url} - {server.description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ServersSelect;
