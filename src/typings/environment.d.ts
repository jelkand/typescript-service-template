declare namespace NodeJS {
  interface ProcessEnv {
    TYPEORM_DATABASE: string
    TYPEORM_USERNAME: string
    TYPEORM_PASSWORD: string
    TYPEORM_HOST: string
    TYPEORM_PORT: string
    NODE_ENV: 'development' | 'production'
  }
}
