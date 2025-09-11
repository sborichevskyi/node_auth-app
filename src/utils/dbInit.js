import { client } from './db.js';

export const dbInit = async () => {
  await client.authenticate();
  console.log('✅ Database connected');
  await client.sync();
  console.log('✅ Tables synced');
};
