/// <reference types="vite/client" />

interface ImportMetaEnv {
}

// This is for Intellisense on the import.meta object, so that we
// can use import.meta.env
interface ImportMeta {
  readonly env: ImportMetaEnv
}