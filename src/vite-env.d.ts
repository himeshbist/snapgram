/// <reference types="vite/client" />

// Add the interface below
interface ImportMetaEnv {
    readonly VITE_APPWRITE_PROJECT_ID: string;
    // You can add other custom env variables here as well
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}