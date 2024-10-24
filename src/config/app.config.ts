import { Environment, validate } from './config.validation';

const AppConfig = () => {
  const validatedResult = validate(process.env);

  return {
    env: validatedResult.NODE_ENV || Environment.Development,
    port: validatedResult.PORT,
  };
};

export type ApplicationConfig = ReturnType<typeof AppConfig>;

export default AppConfig;
