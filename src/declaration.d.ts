declare module '*.module.css'
declare module '*.svg'
declare module '*.webp' {
  const path: string
  export default path
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
    }
  }
}
