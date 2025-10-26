import { BEARER_AUTH_SCHEMA, type IBearerAuthSchema } from "@/schemas/auth/bearer-auth.schema";
import { OpenAPIV3 } from "openapi-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { IAuthProps } from "@/types/auth-component-props.type";
import useAuthStore from "@/stores/auth.store";

const BearerSchemaSecurityForm = ({ name, schema }: IAuthProps<OpenAPIV3.HttpSecurityScheme>) => {
  const storageItem = useAuthStore(state => state.storage[name]);
  const setAuthValue = useAuthStore(state => state.setStorageItem);
  const clearAuthValue = useAuthStore(state => state.clearStorageItem);
  const isAuthorized = !!storageItem;

  const form = useForm<IBearerAuthSchema>({
    defaultValues: {
      value: "",
    },
    resolver: zodResolver(BEARER_AUTH_SCHEMA),
  });

  const onSubmit = (data: IBearerAuthSchema) => {
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

export default BearerSchemaSecurityForm;
