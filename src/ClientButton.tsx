'use client';
import { testServerAction } from "./server-action";

export const ClientButton = () => <button onClick={() => testServerAction().then(console.log)}>Test Server Action</button> 
