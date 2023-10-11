'use server';

export const testServerAction = async () => {
  return process.env.NODE_ENV;
}
