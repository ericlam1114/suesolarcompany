export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-22'

  
  export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET || "qsbs",
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
    )
    
    export const projectId = assertValue(
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5kcimur0",
      'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
      )
    

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
