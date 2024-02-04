declare module '*.module.css'

declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

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
