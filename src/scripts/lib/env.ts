import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";
 
export const env = createEnv({
  server: {
    CMS_SEED_ADMIN_EMAIL: z.email(),
    CMS_SEED_ADMIN_PASSWORD: z.string().min(1),
  },
  client: {
    
  },
  runtimeEnv: {
   CMS_SEED_ADMIN_EMAIL: process.env.ADMIN_EMAIL,
   CMS_SEED_ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
});