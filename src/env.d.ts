/// <reference types="unplugin-info/client" />

declare module '~build/package' {
    export const dependencies: Record<string, string>
    export const devDependencies: Record<string, string>
}
