import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_AUTH_SCHEMA, type IDefaultAuthSchema } from "@/schemas/auth/default-auth.schema";
import useAuthStore from "@/stores/auth.store";
import type { IAuthProps } from "@/types/auth-component-props.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { OpenAPIV3 } from "openapi-types";
import { useForm } from "react-hook-form";

const ApiKeySecurityForm = ({ name, schema }: IAuthProps<OpenAPIV3.ApiKeySecurityScheme>) => {
  const storageItem = useAuthStore(state => state.storage[name]);
  const setAuthValue = useAuthStore(state => state.setStorageItem);
  const clearAuthValue = useAuthStore(state => state.clearStorageItem);
  const isAuthorized = !!storageItem;

  const form = useForm<IDefaultAuthSchema>({
    defaultValues: {
      value: "",
    },
    resolver: zodResolver(DEFAULT_AUTH_SCHEMA),
  });

  const onSubmit = (data: IDefaultAuthSchema) => {
    setAuthValue(name, {
      value: data.value,
      schema,
    });
  };

  const onReset = () => {
    form.reset();
    clearAuthValue(name);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} onReset={onReset} autoComplete="off" className="space-y-3">
        <Label className="text-sm">Name: {schema.name}</Label>
        <Label className="text-sm">In: {schema.in}</Label>
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input
                  disabled={isAuthorized}
                  type={isAuthorized ? "password" : "text"}
                  {...field}
                  value={isAuthorized ? "0".repeat(15) : field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="sm"
          className="w-full"
          type={isAuthorized ? "reset" : "submit"}
          variant={isAuthorized ? "secondary" : "default"}
        >
          {isAuthorized ? "Logout" : "Authorize"}
        </Button>
      </form>
    </Form>
  );
};

export default ApiKeySecurityForm;
