import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BASIC_AUTH_SCHEMA, type IBasicAuthSchema } from "@/schemas/auth/basic-auth.schema";
import useAuthStore from "@/stores/auth.store";
import type { IAuthProps } from "@/types/auth-component-props.type";
import type { HttpBasicAuthValue, StoredHttpAuth } from "@/types/saved-auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { OpenAPIV3 } from "openapi-types";
import { useForm } from "react-hook-form";

const BasicSchemaSecurityForm = ({ name, schema }: IAuthProps<OpenAPIV3.HttpSecurityScheme>) => {
  const storageItem = useAuthStore(state => state.storage[name]) as StoredHttpAuth<HttpBasicAuthValue> | undefined;
  const setAuthValue = useAuthStore(state => state.setStorageItem);
  const clearAuthValue = useAuthStore(state => state.clearStorageItem);
  const isAuthorized = !!storageItem;

  const form = useForm<IBasicAuthSchema>({
    defaultValues: {
      username: storageItem?.value.username || "",
      password: "",
    },
    resolver: zodResolver(BASIC_AUTH_SCHEMA),
  });

  const onSubmit = (value: IBasicAuthSchema) => {
    setAuthValue(name, {
      value,
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input disabled={isAuthorized} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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

export default BasicSchemaSecurityForm;
